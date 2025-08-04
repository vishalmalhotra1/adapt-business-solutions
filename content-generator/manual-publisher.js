// Manual Article Publisher - Creates actual blog posts without AI
const fs = require('fs-extra');
const path = require('path');
const manualContent = require('./manual-content');

class ManualPublisher {
  constructor() {
    this.blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
  }

  createArticlePage(article) {
    const articleDir = path.join(this.blogDir, article.slug);
    const pageFile = path.join(articleDir, 'page.tsx');
    
    // Ensure directory exists
    fs.ensureDirSync(articleDir);
    
    const pageContent = `import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: '${article.title} | Adapt Business Solutions',
  description: 'Professional CPA advice for ${article.location} businesses. Expert tax planning and accounting services.',
  keywords: '${article.location} CPA, tax planning, small business accounting, ${article.category.toLowerCase()}',
}

export default function ArticlePage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <header className="bg-gray-50 py-16">
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
                <span>${article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>${new Date(article.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 text-sm">
                <strong>Professional Disclaimer:</strong> This article is provided for educational and informational purposes only and does not constitute professional accounting, tax, or legal advice. Readers should consult with a qualified Chartered Professional Accountant (CPA) before making any financial or tax-related decisions.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            ${this.formatContent(article.content)}
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <h3 className="text-green-800 font-semibold mb-2">Ready to Optimize Your ${article.location} Business?</h3>
            <p className="text-green-700 mb-4">
              Our experienced team of CPAs specializes in helping ${article.location} businesses minimize their tax burden while maximizing growth opportunities. We understand the unique challenges and provide personalized solutions.
            </p>
            <p className="text-green-700">
              <strong>Call (437) 772-9598</strong> today to schedule your complimentary consultation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}`
    
    fs.writeFileSync(pageFile, pageContent);
    console.log(`✅ Created: ${article.slug}`);
  }

  formatContent(content) {
    return content
      .replace(/# (.*)/g, '<div class="bg-white border border-gray-200 rounded-lg p-6 mb-8"><h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">$1</h2>')
      .replace(/## (.*)/g, '<h3 class="text-xl font-semibold text-gray-900 mb-3">$1</h3>')
      .replace(/### (.*)/g, '<h4 class="text-lg font-medium text-gray-900 mb-2">$1</h4>')
      .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
      .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
      .replace(/- (.*)/g, '<div class="bg-gray-50 rounded-lg p-3 mb-2"><p class="text-sm text-gray-700">• $1</p></div>')
      .replace(/\\n\\n/g, '</div><p class="mb-4">')
      .replace(/\\n/g, '</p><p class="mb-4">')
      + '</div>';
  }

  publishLocation(location) {
    console.log(`📝 Publishing content for ${location}...`);
    
    const taxArticle = manualContent.generateManualArticle(location, 'taxPlanning');
    const businessArticle = manualContent.generateManualArticle(location, 'smallBusiness');
    
    this.createArticlePage(taxArticle);
    this.createArticlePage(businessArticle);
    
    console.log(`✅ Published 2 articles for ${location}`);
  }

  publishAll() {
    const locations = ['Orangeville', 'Brampton', 'Mississauga', 'Niagara'];
    
    console.log('🚀 Publishing all manual content...\n');
    
    locations.forEach(location => {
      this.publishLocation(location);
    });
    
    console.log(`\n✅ Published ${locations.length * 2} articles total!`);
    console.log('🌐 Ready to push to Git and go live!');
  }
}

const publisher = new ManualPublisher();

// CLI commands
if (require.main === module) {
  const command = process.argv[2];
  const location = process.argv[3];
  
  switch (command) {
    case 'publish-all':
      publisher.publishAll();
      break;
    case 'publish-location':
      if (location) {
        publisher.publishLocation(location);
      } else {
        console.log('Please specify a location: Orangeville, Brampton, Mississauga, or Niagara');
      }
      break;
    default:
      console.log('📝 Manual Content Publisher');
      console.log('Available commands:');
      console.log('  node manual-publisher.js publish-all');
      console.log('  node manual-publisher.js publish-location Orangeville');
  }
}

module.exports = ManualPublisher;
