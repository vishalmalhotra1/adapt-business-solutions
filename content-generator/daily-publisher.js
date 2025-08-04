#!/usr/bin/env node

// Daily Content Publisher with AI Integration
// Automatically publishes CPA content with random timing

const fs = require('fs-extra');
const path = require('path');
const cron = require('node-cron');
const { OpenAI } = require('openai');
require('dotenv').config();

const contentGenerator = require('./content-generator');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

class ContentPublisher {
  constructor() {
    this.contentDir = path.join(__dirname, 'generated-content');
    this.publishedDir = path.join(this.contentDir, 'published');
    this.articleDir = path.join(__dirname, '..', 'src', 'app', 'blog');
    
    this.ensureDirectories();
    this.setupScheduler();
  }

  ensureDirectories() {
    fs.ensureDirSync(this.contentDir);
    fs.ensureDirSync(this.publishedDir);
    fs.ensureDirSync(this.articleDir);
  }

  setupScheduler() {
    // Generate content daily at 6 AM
    cron.schedule('0 6 * * *', () => {
      this.generateDailyContent();
    });

    // Publish content at random times throughout the day
    cron.schedule('*/15 * * * *', () => {
      this.checkAndPublish();
    });

    console.log('📅 Content scheduler initialized');
    console.log('🕕 Daily generation: 6:00 AM');
    console.log('⏰ Publishing checks: Every 15 minutes');
  }

  async generateDailyContent() {
    try {
      console.log('🚀 Generating daily content...');
      
      const contentPlan = contentGenerator.generateDailyContent();
      const fullArticle = await this.generateFullArticle(contentPlan);
      
      await this.saveGeneratedArticle(contentPlan, fullArticle);
      
      console.log('✅ Daily content generated successfully');
      return contentPlan;
      
    } catch (error) {
      console.error('❌ Error generating daily content:', error);
      await this.sendErrorNotification(error);
    }
  }

  async generateFullArticle(contentPlan) {
    try {
      console.log(`📝 Generating full article: ${contentPlan.title}`);
      
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: `You are an expert CPA content writer specializing in Canadian tax law and Ontario business regulations. 
                   You write SEO-optimized, professional content that complies with CPA Ontario standards.
                   Always include proper disclaimers and maintain a helpful, authoritative tone.`
        }, {
          role: "user", 
          content: contentPlan.prompt
        }],
        max_tokens: 4000,
        temperature: 0.7
      });

      const articleContent = response.choices[0].message.content;
      
      // Add CPA disclaimer
      const fullContent = articleContent + '\n\n' + contentGenerator.CPA_DISCLAIMER;
      
      console.log('✅ Article content generated');
      return fullContent;
      
    } catch (error) {
      console.error('❌ Error generating article content:', error);
      throw error;
    }
  }

  async saveGeneratedArticle(contentPlan, articleContent) {
    const articleData = {
      ...contentPlan,
      content: articleContent,
      wordCount: articleContent.split(' ').length,
      generatedAt: new Date().toISOString(),
      status: 'ready_to_publish'
    };

    const filename = `${contentPlan.date}-${contentPlan.slug}.json`;
    const filepath = path.join(this.contentDir, filename);
    
    await fs.writeJSON(filepath, articleData, { spaces: 2 });
    
    console.log(`📁 Article saved: ${filename}`);
    return filepath;
  }

  async checkAndPublish() {
    try {
      const now = new Date();
      const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      // Only publish during business hours (8 AM - 6 PM, Mon-Fri)
      if (!this.isBusinessHours(currentDay, currentHour)) {
        return;
      }

      const readyArticles = await this.getReadyArticles();
      
      for (const article of readyArticles) {
        if (this.shouldPublishNow(article, currentDay, currentHour, currentMinute)) {
          await this.publishArticle(article);
        }
      }
      
    } catch (error) {
      console.error('❌ Error in publish check:', error);
    }
  }

  isBusinessHours(day, hour) {
    const businessDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return businessDays.includes(day) && hour >= 8 && hour <= 18;
  }

  async getReadyArticles() {
    const files = await fs.readdir(this.contentDir);
    const articleFiles = files.filter(file => 
      file.endsWith('.json') && 
      !file.includes('summary') &&
      !file.includes('published')
    );

    const articles = [];
    for (const file of articleFiles) {
      try {
        const article = await fs.readJSON(path.join(this.contentDir, file));
        if (article.status === 'ready_to_publish') {
          articles.push({ ...article, filename: file });
        }
      } catch (error) {
        console.error(`Error reading article ${file}:`, error);
      }
    }

    return articles;
  }

  shouldPublishNow(article, currentDay, currentHour, currentMinute) {
    const schedule = article.publishSchedule;
    
    return (
      schedule.day === currentDay &&
      schedule.hour === currentHour &&
      Math.abs(schedule.minute - currentMinute) < 15 // Within 15 minutes
    );
  }

  async publishArticle(article) {
    try {
      console.log(`📢 Publishing article: ${article.title}`);
      
      // Create the article page file
      await this.createArticlePage(article);
      
      // Update blog index
      await this.updateBlogIndex(article);
      
      // Mark as published
      await this.markAsPublished(article);
      
      // Send success notification
      await this.sendPublishNotification(article);
      
      console.log('✅ Article published successfully');
      
    } catch (error) {
      console.error('❌ Error publishing article:', error);
      await this.sendErrorNotification(error, article);
    }
  }

  async createArticlePage(article) {
    const articlePageContent = this.generateArticlePageCode(article);
    
    // Create directory for the article
    const articleSlugDir = path.join(this.articleDir, article.slug);
    await fs.ensureDir(articleSlugDir);
    
    // Write the page.tsx file
    const pageFilePath = path.join(articleSlugDir, 'page.tsx');
    await fs.writeFile(pageFilePath, articlePageContent);
    
    console.log(`📄 Article page created: ${pageFilePath}`);
  }

  generateArticlePageCode(article) {
    const publishDate = new Date(article.created).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });

    return `import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: '${article.title}',
  description: '${article.metaDescription}',
  keywords: '${article.keywords.join(', ')}',
  openGraph: {
    title: '${article.title}',
    description: '${article.metaDescription}',
    url: 'https://adaptbusinesssolutions.com/blog/${article.slug}',
    type: 'article',
    publishedTime: '${article.created}',
    authors: ['Adapt Business Solutions CPA Team'],
  }
}

export default function Article() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        {/* Article Header */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                ${article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ${article.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                <span>Adapt Business Solutions CPA Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>${publishDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              ${this.formatArticleContent(article.content)}
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Professional CPA Advice for Your ${article.location} Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our certified CPAs provide personalized accounting and tax services tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+14377729598"
                className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (437) 772-9598
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/blog"
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">More ${article.category} Articles</h4>
                <p className="text-gray-600">Browse our complete collection of ${article.category.toLowerCase()} insights and tips.</p>
              </Link>
              <Link
                href="/blog"
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">${article.location} Business Resources</h4>
                <p className="text-gray-600">Local business advice and insights specifically for ${article.location} companies.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}`;
  }

  formatArticleContent(content) {
    // Enhanced content formatting with proper card layouts and visual hierarchy
    let formattedContent = content;
    
    // Start with introduction box
    formattedContent = formattedContent.replace(
      /^([^#]*?)(?=\n#)/s,
      '<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8"><p class="text-xl text-gray-800 mb-0 leading-relaxed">$1</p></div>'
    );
    
    // Format main sections with cards
    formattedContent = formattedContent.replace(
      /# (.*?)\n((?:(?!#)[^\n]*\n?)*)/g,
      '<div class="bg-white border border-gray-200 rounded-lg p-6 mb-8"><h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">$1</h2><div class="space-y-4">$2</div></div>'
    );
    
    // Format subsections with left border accent
    formattedContent = formattedContent.replace(
      /## (.*?)\n((?:(?!#)[^\n]*\n?)*)/g,
      '<div class="border-l-4 border-primary-500 pl-6 mb-6"><h3 class="text-xl font-semibold text-gray-900 mb-3">$1</h3><p class="text-gray-700">$2</p></div>'
    );
    
    // Format smaller headings
    formattedContent = formattedContent.replace(/### (.*)/g, '<h4 class="text-lg font-medium text-gray-900 mt-4 mb-2">$1</h4>');
    
    // Format lists as cards
    formattedContent = formattedContent.replace(
      /- (.*?)(?=\n-|\n\n|\n#|$)/g,
      '<div class="bg-gray-50 rounded-lg p-3 mb-2"><p class="text-sm text-gray-700">• $1</p></div>'
    );
    
    // Format numbered lists
    formattedContent = formattedContent.replace(
      /(\d+)\. (.*?)(?=\n\d+\.|\n\n|\n#|$)/g,
      '<div class="flex items-start space-x-3 mb-3"><span class="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">$1</span><p class="text-sm text-gray-700">$2</p></div>'
    );
    
    // Format emphasis and strong text
    formattedContent = formattedContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
    formattedContent = formattedContent.replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>');
    
    // Format paragraphs
    formattedContent = formattedContent.replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">');
    
    // Wrap remaining content in paragraph tags
    if (!formattedContent.includes('<p>')) {
      formattedContent = `<p class="mb-4 text-gray-700 leading-relaxed">${formattedContent}</p>`;
    }
    
    // Add call-to-action boxes for important information
    formattedContent = formattedContent.replace(
      /Important:(.*?)(?=\n\n|\n#|$)/gi,
      '<div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6"><div class="flex items-start space-x-2"><span class="text-amber-600 text-xl">⚠️</span><div><h4 class="font-medium text-amber-800 mb-1">Important</h4><p class="text-amber-700 text-sm">$1</p></div></div></div>'
    );
    
    return formattedContent;
  }

  async updateBlogIndex(article) {
    // This would update the blog index page with the new article
    // For now, we'll just log that it should be updated
    console.log('📋 Blog index should be updated with new article');
  }

  async markAsPublished(article) {
    const publishedData = {
      ...article,
      status: 'published',
      publishedAt: new Date().toISOString()
    };

    const publishedFile = path.join(this.publishedDir, article.filename);
    await fs.writeJSON(publishedFile, publishedData, { spaces: 2 });

    // Remove from pending
    const originalFile = path.join(this.contentDir, article.filename);
    await fs.remove(originalFile);

    console.log('✅ Article marked as published');
  }

  async sendPublishNotification(article) {
    console.log(`📧 Article published: ${article.title}`);
    console.log(`🌐 URL: https://adaptbusinesssolutions.com/blog/${article.slug}`);
    console.log(`🎯 Keywords: ${article.keywords.join(', ')}`);
    console.log(`📍 Location: ${article.location}`);
  }

  async sendErrorNotification(error, article = null) {
    console.error('❌ Error notification:', error.message);
    if (article) {
      console.error(`📄 Article: ${article.title}`);
    }
  }

  // Automation control methods
  startAutomation() {
    console.log('🚀 Automated content system started!');
    console.log('⏰ Checking for articles to publish every 15 minutes...');
    console.log('📝 Generating new content daily at 6:00 AM...');
    
    // Check for articles to publish every 15 minutes
    setInterval(async () => {
      await this.checkAndPublish();
    }, 15 * 60 * 1000); // 15 minutes

    // Generate daily content at 6:00 AM
    const cron = require('node-cron');
    cron.schedule('0 6 * * 1-5', async () => {
      console.log('📅 Daily content generation triggered...');
      await this.generateDailyContent();
    });

    // Keep the process alive
    process.on('SIGINT', () => {
      console.log('\n🛑 Automation stopped by user');
      process.exit(0);
    });
  }

  stopAutomation() {
    console.log('🛑 Stopping automation...');
    process.exit(0);
  }

  // Manual methods for testing
  async publishNow() {
    console.log('🚀 Manual publish triggered...');
    await this.generateDailyContent();
    
    // Find the latest article and publish it immediately
    const readyArticles = await this.getReadyArticles();
    if (readyArticles.length > 0) {
      await this.publishArticle(readyArticles[0]);
    } else {
      console.log('⚠️ No articles ready to publish');
    }
  }

  async generateWeeklyCalendar() {
    console.log('📅 Generating weekly content calendar...');
    return contentGenerator.generateWeeklyCalendar();
  }
}

// Initialize the publisher
const publisher = new ContentPublisher();

// CLI commands
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'publish-now':
      publisher.publishNow();
      break;
    case 'generate-weekly':
      publisher.generateWeeklyCalendar();
      break;
    case 'generate-daily':
      publisher.generateDailyContent();
      break;
    case 'start-automation':
      console.log('🤖 Starting automated content publishing system...');
      console.log('📅 Will publish articles randomly between 9 AM - 5 PM, Mon-Fri');
      console.log('⏰ Running continuous automation...');
      console.log('💡 Press Ctrl+C to stop\n');
      publisher.startAutomation();
      break;
    default:
      console.log('🎯 CPA Content Publisher v1.0');
      console.log('Available commands:');
      console.log('  publish-now      - Generate and publish immediately');
      console.log('  generate-weekly  - Generate weekly content calendar');
      console.log('  generate-daily   - Generate today\'s content');
      console.log('  start-automation - Start continuous automated publishing');
      console.log('\n🤖 To start automation: node daily-publisher.js start-automation');
  }
}

module.exports = publisher;
