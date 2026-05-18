import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Business Expenses Tax Deductions Ontario 2025 | Adapt Business Solutions',
  description: 'Running an online business or using digital tools? Here are the software subscriptions, website costs, digital advertising, and tech purchases Ontario entrepreneurs can deduct.',
  keywords: 'digital business expense deductions Ontario, software subscription tax deduction Canada, website cost deduction CRA, online advertising deduction Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/digital-business-expenses-deductions-ontario' },
  openGraph: {
    title: 'Digital Business Expenses: What Ontario Entrepreneurs Can Deduct',
    description: 'Running an online business or using digital tools? Here are the software subscriptions, website costs, digital advertising, and tech purchases Ontario entrepreneurs can deduct.',
    url: 'https://adaptbusinesssolutions.com/blog/digital-business-expenses-deductions-ontario',
    type: 'article',
    publishedTime: '2026-05-18',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Digital Business Expenses: What Ontario Entrepreneurs Can Deduct',
  description: 'Running an online business or using digital tools? Here are the software subscriptions, website costs, digital advertising, and tech purchases Ontario entrepreneurs can deduct.',
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  author: {
    '@type': 'Organization',
    name: 'Adapt Business Solutions',
    url: 'https://adaptbusinesssolutions.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Adapt Business Solutions',
    url: 'https://adaptbusinesssolutions.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adaptbusinesssolutions.com/blog/digital-business-expenses-deductions-ontario',
  },
}

export default function BlogPostPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16 min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold-hover text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Tax Planning</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Digital Business Expenses: What Ontario Entrepreneurs Can Deduct
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-18 &middot; 7 min read &middot; By Adapt Business Solutions CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Professional Disclaimer:</strong> This article is for educational purposes only and does not constitute professional accounting, tax, or legal advice. Tax laws change frequently — verify current rules with a qualified CPA. Consult Adapt Business Solutions or another licensed CPA for advice specific to your situation.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Digital tools are the backbone of most modern Ontario businesses — yet many entrepreneurs underestimate how many of these costs are fully tax-deductible. From monthly software subscriptions to domain names and online advertising, the CRA treats legitimate digital business expenses the same as traditional business expenses: fully deductible when incurred to earn business income.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Software Subscriptions and SaaS Tools</h2>
              <p className="text-gray-700 leading-relaxed">Monthly and annual software subscriptions used for business purposes are fully deductible as business expenses in the year paid. This includes productivity tools, accounting software, design applications, and communication platforms.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Accounting software: QuickBooks, FreshBooks, Wave — 100% deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Productivity: Microsoft 365, Google Workspace, Slack, Zoom — deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Design and creative: Adobe Creative Cloud, Canva Pro — deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  CRM and sales tools: HubSpot, Salesforce, Shopify subscriptions — deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cloud storage: Dropbox, Google Drive business plans — deductible
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Personal use split: If you use software for both business and personal purposes (e.g., a phone plan), deduct only the business-use portion. Keep a record of how you determined the split.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Website and Domain Costs</h2>
              <p className="text-gray-700 leading-relaxed">Costs related to building and maintaining a business website are generally deductible. However, the treatment differs between annual operating costs (fully deductible) and capital costs (deducted over time via CCA).</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Domain name registration and renewal — fully deductible annually
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Web hosting fees — fully deductible annually
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Ongoing website maintenance and content updates — fully deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Initial website design/development: may be capital (CCA Class 12 at 100%) or fully deductible depending on whether it is an enduring asset
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  SSL certificates and security tools — fully deductible
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Website development cost tip: A basic website built for an annual fee (Squarespace, Wix, Shopify) is typically a fully deductible operating expense. A custom-developed website with significant capital value may need to be capitalized under Class 12 or Class 14.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Digital Advertising and Marketing</h2>
              <p className="text-gray-700 leading-relaxed">Digital advertising spend is one of the largest and most straightforward deductions for Ontario entrepreneurs. All amounts paid to digital advertising platforms for legitimate business advertising are fully deductible.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Google Ads, Bing Ads — 100% deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Facebook, Instagram, LinkedIn advertising — 100% deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Influencer marketing and sponsored content — deductible if for your business
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Email marketing platforms: Mailchimp, Klaviyo, Constant Contact — deductible
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  SEO tools: Ahrefs, SEMrush, Moz subscriptions — deductible
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Foreign advertising restriction: Advertising on foreign broadcasters (TV, radio) targeting Canadian audiences is only 50% deductible. This does not apply to digital platforms — Google and Facebook advertising is fully deductible regardless of where the platform company is located.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Computer Equipment and Hardware (CCA)</h2>
              <p className="text-gray-700 leading-relaxed">When you purchase computers, tablets, phones, monitors, and other hardware for business use, you generally cannot deduct the full cost immediately. Instead, you claim Capital Cost Allowance (CCA) over time.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Computer hardware and systems: Class 50 — 55% declining balance per year
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Computer software (separate from hardware): Class 12 — 100% in year of purchase
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Printers, scanners, office equipment: Class 8 — 20% declining balance
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cell phones: classified based on primary use (Class 8 or Class 10)
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Immediate expensing: Eligible depreciable property acquired after January 1, 2022 may qualify for 100% immediate expensing in the year of acquisition (up to $1.5M per year for CCPCs). Ask your CPA if your equipment purchases qualify.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Remote Work and Home Office Digital Costs</h2>
              <p className="text-gray-700 leading-relaxed">If you work from home and use internet, phone, or a dedicated home network for business, a portion of these costs is deductible.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Internet service: deduct the business-use percentage of your monthly bill
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cell phone: deduct the percentage of time used for business calls and tasks
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Video conferencing equipment (webcam, microphone, lighting): deductible as office equipment
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Dedicated business phone line: 100% deductible
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Documentation tip: For phone and internet, keep your monthly bills and note the percentage of business use (e.g., 70% business / 30% personal). Use call logs or data tracking apps to support a higher business-use percentage if challenged.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Digital business expenses are among the most underutilized deductions for Ontario entrepreneurs. Most software, advertising, and tech hardware costs are fully or substantially deductible — but only if you keep proper records. Use your accounting software to categorize these expenses consistently throughout the year so none are missed at tax time.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Not Sure What to Deduct?</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We review expense categorization for Ontario entrepreneurs to ensure you claim every legitimate deduction. Book a consultation today.
                </p>
                <Link href="/pricing" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </article>

      </div>
      <Footer />
    </>
  )
}
