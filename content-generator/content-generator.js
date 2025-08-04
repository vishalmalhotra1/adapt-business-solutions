// SEO Content Generator for CPA Services
// Automated daily article generation with CPA Ontario compliance

const fs = require('fs');
const path = require('path');

// Regional SEO keywords and topics
const REGIONAL_KEYWORDS = {
  orangeville: [
    'small business accounting Orangeville',
    'Dufferin County tax services',
    'Orangeville CPA services',
    'agricultural accounting Orangeville',
    'rural business tax planning'
  ],
  brampton: [
    'Brampton small business accountant',
    'Peel Region tax preparation',
    'multicultural business services Brampton',
    'immigrant entrepreneur accounting',
    'Brampton corporate tax services'
  ],
  mississauga: [
    'Mississauga corporate accounting',
    'business district CPA Mississauga',
    'international business accounting',
    'tech startup accounting Mississauga',
    'Square One area CPA services'
  ],
  niagara: [
    'Niagara Region wine industry accounting',
    'tourism business accounting Niagara',
    'St. Catharines CPA services',
    'hospitality industry tax planning',
    'Niagara Falls business accounting'
  ]
};

// High-traffic accounting topics
const POPULAR_TOPICS = [
  {
    topic: 'Tax Deductions',
    keywords: ['small business tax deductions', 'CRA deductions 2025', 'business expense claims'],
    searchVolume: 'High',
    difficulty: 'Medium'
  },
  {
    topic: 'CRA Compliance',
    keywords: ['CRA audit preparation', 'tax compliance checklist', 'avoid CRA penalties'],
    searchVolume: 'High',
    difficulty: 'Low'
  },
  {
    topic: 'Payroll Management',
    keywords: ['payroll tax Ontario', 'employee benefits tax', 'payroll compliance'],
    searchVolume: 'Medium',
    difficulty: 'Low'
  },
  {
    topic: 'Business Incorporation',
    keywords: ['incorporate business Ontario', 'corporate tax benefits', 'LLC vs Corporation'],
    searchVolume: 'Medium',
    difficulty: 'Medium'
  },
  {
    topic: 'Financial Planning',
    keywords: ['business financial planning', 'cash flow management', 'profit optimization'],
    searchVolume: 'Medium',
    difficulty: 'Medium'
  },
  {
    topic: 'GST/HST',
    keywords: ['GST registration Ontario', 'HST filing requirements', 'sales tax compliance'],
    searchVolume: 'High',
    difficulty: 'Low'
  },
  {
    topic: 'Year-End Planning',
    keywords: ['year end tax planning', 'corporate year end', 'tax optimization strategies'],
    searchVolume: 'High',
    difficulty: 'Medium'
  },
  {
    topic: 'Bookkeeping',
    keywords: ['QuickBooks setup', 'bookkeeping best practices', 'financial record keeping'],
    searchVolume: 'High',
    difficulty: 'Low'
  }
];

// CPA Ontario compliant disclaimer
const CPA_DISCLAIMER = `
**Professional Disclaimer:** This article is provided for educational and informational purposes only and does not constitute professional accounting, tax, or legal advice. The information contained herein is general in nature and may not apply to your specific situation. Tax laws and regulations are subject to change, and the application of laws may vary depending on the specific circumstances.

In accordance with CPA Ontario professional standards, readers should consult with a qualified Chartered Professional Accountant (CPA) before making any financial or tax-related decisions. The authors and Adapt Business Solutions do not assume any liability for actions taken based on the information provided in this article.

For personalized advice tailored to your specific business needs, please contact our certified CPAs at (437) 772-9598 or schedule a consultation through our website.
`;

// Article templates with SEO optimization
const ARTICLE_TEMPLATES = {
  taxDeductions: {
    title: (location, year) => `Top ${year} Tax Deductions for ${location} Small Businesses: CPA Guide`,
    structure: [
      'Introduction with local business context',
      'Most overlooked deductions',
      'Regional specific opportunities',
      'CRA compliance tips',
      'Record keeping requirements',
      'Professional consultation recommendation'
    ],
    targetKeywords: 3,
    wordCount: 1500
  },
  
  compliance: {
    title: (topic, location) => `${topic} Guide for ${location} Businesses: Avoid CRA Penalties`,
    structure: [
      'Current regulatory landscape',
      'Common compliance mistakes',
      'Step-by-step compliance checklist',
      'Local business examples',
      'Penalty avoidance strategies',
      'Professional support benefits'
    ],
    targetKeywords: 4,
    wordCount: 1200
  },
  
  seasonal: {
    title: (season, location) => `${season} Tax Planning Checklist for ${location} Business Owners`,
    structure: [
      'Seasonal business considerations',
      'Time-sensitive tax strategies',
      'Local industry focus',
      'Deadline reminders',
      'Action items by business type',
      'Professional planning services'
    ],
    targetKeywords: 3,
    wordCount: 1000
  }
};

// Content generation functions
function generateArticleIdea() {
  const locations = Object.keys(REGIONAL_KEYWORDS);
  const topics = POPULAR_TOPICS;
  const templates = Object.keys(ARTICLE_TEMPLATES);
  
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  
  return {
    location: randomLocation,
    topic: randomTopic,
    template: randomTemplate,
    keywords: REGIONAL_KEYWORDS[randomLocation].concat(randomTopic.keywords),
    publishTime: generateRandomPublishTime()
  };
}

function generateRandomPublishTime() {
  // Random time between 8 AM and 6 PM, Monday to Friday
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const hours = Array.from({length: 11}, (_, i) => i + 8); // 8 AM to 6 PM
  const minutes = [0, 15, 30, 45];
  
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const randomHour = hours[Math.floor(Math.random() * hours.length)];
  const randomMinute = minutes[Math.floor(Math.random() * minutes.length)];
  
  return {
    day: randomDay,
    hour: randomHour,
    minute: randomMinute,
    formatted: `${randomDay} at ${randomHour}:${randomMinute.toString().padStart(2, '0')}`
  };
}

// SEO-optimized article structure generator
function generateArticleOutline(idea) {
  const template = ARTICLE_TEMPLATES[idea.template];
  const locationName = idea.location.charAt(0).toUpperCase() + idea.location.slice(1);
  
  return {
    title: template.title(locationName, new Date().getFullYear()),
    slug: generateSlug(template.title(locationName, new Date().getFullYear())),
    metaDescription: generateMetaDescription(idea),
    keywords: idea.keywords.slice(0, template.targetKeywords),
    outline: template.structure,
    targetWordCount: template.wordCount,
    category: idea.topic.topic,
    location: locationName,
    publishSchedule: idea.publishTime
  };
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

function generateMetaDescription(idea) {
  const locationName = idea.location.charAt(0).toUpperCase() + idea.location.slice(1);
  const topicName = idea.topic.topic;
  
  return `Expert ${topicName.toLowerCase()} advice for ${locationName} businesses. Professional CPA insights, compliance tips, and tax strategies. Call (437) 772-9598 for consultation.`;
}

// Content creation prompt for AI
function generateContentPrompt(outline) {
  return `
Create a comprehensive, SEO-optimized article with the following specifications:

**Article Details:**
- Title: ${outline.title}
- Target Keywords: ${outline.keywords.join(', ')}
- Word Count: ${outline.targetWordCount} words
- Location Focus: ${outline.location}
- Category: ${outline.category}

**Article Structure:**
${outline.outline.map((section, index) => `${index + 1}. ${section}`).join('\n')}

**SEO Requirements:**
- Include primary keyword in title, first paragraph, and 2-3 times throughout
- Use secondary keywords naturally throughout content
- Include relevant local business examples from ${outline.location}
- Add actionable tips and practical advice
- Include current year (2025) tax law references
- Optimize for featured snippets with FAQ section

**Content Guidelines:**
- Write in professional but accessible tone
- Include specific examples relevant to ${outline.location} businesses
- Reference current CRA regulations and deadlines
- Provide actionable takeaways for business owners
- Include call-to-action for professional consultation
- Use short paragraphs for readability
- Include bullet points and numbered lists where appropriate

**Professional Standards:**
- Must comply with CPA Ontario professional guidelines
- Include educational disclaimer (not professional advice)
- Reference need for personalized professional consultation
- Maintain accuracy with current tax laws and regulations

**Local Focus:**
- Include ${outline.location}-specific business considerations
- Reference local industry trends where relevant
- Use examples from regional businesses (anonymized)
- Consider local economic factors and business environment

**CTA Integration:**
- Naturally integrate mentions of professional CPA services
- Include contact information: (437) 772-9598
- Reference consultation benefits without being overly promotional
- Focus on value and expertise

Please generate the complete article content following these specifications.
`;
}

// Daily content generation scheduler
function generateDailyContent() {
  const idea = generateArticleIdea();
  const outline = generateArticleOutline(idea);
  const prompt = generateContentPrompt(outline);
  
  const contentPlan = {
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
    ...outline,
    prompt: prompt,
    disclaimer: CPA_DISCLAIMER,
    status: 'generated',
    created: new Date().toISOString()
  };
  
  // Save to content pipeline
  saveContentPlan(contentPlan);
  
  return contentPlan;
}

function saveContentPlan(contentPlan) {
  const contentDir = path.join(__dirname, 'generated-content');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  
  const filename = `${contentPlan.date}-${contentPlan.slug}.json`;
  const filepath = path.join(contentDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(contentPlan, null, 2));
  
  console.log(`✅ Content plan generated: ${contentPlan.title}`);
  console.log(`📅 Scheduled for: ${contentPlan.publishSchedule.formatted}`);
  console.log(`📍 Location focus: ${contentPlan.location}`);
  console.log(`🎯 Keywords: ${contentPlan.keywords.join(', ')}`);
  console.log(`📁 Saved to: ${filepath}\n`);
}

// Weekly content calendar generator
function generateWeeklyCalendar() {
  console.log('🚀 Generating weekly content calendar...\n');
  
  const weeklyPlan = [];
  for (let i = 0; i < 7; i++) {
    const contentPlan = generateDailyContent();
    weeklyPlan.push(contentPlan);
  }
  
  // Save weekly summary
  const summaryPath = path.join(__dirname, 'generated-content', 'weekly-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify({
    week: new Date().toISOString().split('T')[0],
    articles: weeklyPlan,
    totalArticles: weeklyPlan.length,
    locations: [...new Set(weeklyPlan.map(p => p.location))],
    topics: [...new Set(weeklyPlan.map(p => p.category))],
    generated: new Date().toISOString()
  }, null, 2));
  
  console.log(`📊 Weekly summary saved with ${weeklyPlan.length} articles`);
  console.log(`🎯 Covering ${[...new Set(weeklyPlan.map(p => p.location))].join(', ')}`);
  console.log(`📚 Topics: ${[...new Set(weeklyPlan.map(p => p.category))].join(', ')}`);
  
  return weeklyPlan;
}

// Export functions for use
module.exports = {
  generateDailyContent,
  generateWeeklyCalendar,
  generateArticleIdea,
  generateArticleOutline,
  generateContentPrompt,
  REGIONAL_KEYWORDS,
  POPULAR_TOPICS,
  CPA_DISCLAIMER
};

// Run if called directly
if (require.main === module) {
  console.log('🎯 CPA Content Generator v1.0');
  console.log('Generating daily content with CPA Ontario compliance...\n');
  
  // Generate today's content
  generateDailyContent();
  
  console.log('\n✨ Content generation complete!');
  console.log('💡 To generate weekly calendar: node content-generator.js --weekly');
  
  if (process.argv.includes('--weekly')) {
    console.log('\n📅 Generating weekly calendar...');
    generateWeeklyCalendar();
  }
}
