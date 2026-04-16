import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CPA Blog | Tax Tips & Accounting Advice for Ontario Businesses | Adapt Business Solutions',
  description: 'Expert CPA insights, tax tips, and business accounting advice for Ontario small business owners. Latest guides on incorporation, tax deductions, bookkeeping, and CRA compliance.',
  keywords: 'CPA blog Ontario, tax tips small business, accounting advice Ontario, CRA audit guide, incorporation Ontario, bookkeeping tips Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog' },
}

const featuredPosts = [
  {
    id: 'ontario-small-business-tax-deductions-2025',
    title: 'Small Business Tax Deductions in Ontario: The Complete 2025 Guide',
    excerpt: 'A comprehensive walkthrough of every major deduction available to Ontario small business owners — from home office to vehicle expenses, meals, and professional fees. Maximize your refund and stay CRA-compliant.',
    category: 'Tax Planning',
    readTime: '10 min read',
    date: '2025-08-05',
    featured: true,
  },
  {
    id: 'how-to-incorporate-business-ontario',
    title: 'How to Incorporate a Business in Ontario: Step-by-Step',
    excerpt: 'Everything you need to know about incorporating in Ontario — federal vs. provincial, articles of incorporation, costs, timelines, and when it actually makes financial sense to incorporate.',
    category: 'Corporate Services',
    readTime: '8 min read',
    date: '2025-08-05',
    featured: false,
  },
  {
    id: 'bookkeeping-tips-sole-proprietors-canada',
    title: 'Bookkeeping Tips for Sole Proprietors in Canada',
    excerpt: 'The most practical bookkeeping habits for self-employed Canadians. Separate your accounts, track every expense, understand HST thresholds, and choose the right accounting software.',
    category: 'Bookkeeping',
    readTime: '7 min read',
    date: '2025-08-05',
    featured: false,
  },
  {
    id: 'how-to-avoid-cra-audit-ontario',
    title: 'How to Avoid a CRA Audit: What Ontario Business Owners Need to Know',
    excerpt: 'CRA audits are avoidable. Learn the most common audit triggers — unreported income, excessive expenses, repeated losses — and the record-keeping practices that keep your business protected.',
    category: 'Tax Planning',
    readTime: '9 min read',
    date: '2025-08-05',
    featured: false,
  },
]

const locationPosts = [
  {
    id: 'orangeville-tax-planning-checklist-for-2025-business-owners',
    title: 'Orangeville Tax Planning Checklist for 2025 Business Owners',
    excerpt: 'Essential tax planning deadlines and strategies for Orangeville businesses. Comprehensive CPA guidance for maximizing deductions and ensuring compliance.',
    category: 'Local Guides',
    readTime: '8 min read',
    date: '2025-08-04',
  },
  {
    id: 'brampton-tax-planning-checklist-for-2025-business-owners',
    title: 'Brampton Tax Planning Checklist for 2025',
    excerpt: 'Professional tax planning strategies for Brampton businesses. Expert CPA advice for compliance and maximizing tax savings in Canada\'s fastest-growing city.',
    category: 'Local Guides',
    readTime: '8 min read',
    date: '2025-08-04',
  },
  {
    id: 'mississauga-small-business-accounting-guide-for-2025',
    title: 'Mississauga Small Business Accounting Guide for 2025',
    excerpt: 'Comprehensive accounting essentials for Mississauga small businesses. Professional guidance for bookkeeping, compliance, and financial management.',
    category: 'Local Guides',
    readTime: '10 min read',
    date: '2025-08-04',
  },
  {
    id: 'niagara-tax-planning-checklist-for-2025-business-owners',
    title: 'Niagara Region Tax Planning Checklist for 2025',
    excerpt: 'Tax planning strategies tailored for Niagara Region businesses in hospitality, tourism, wine, and agriculture.',
    category: 'Local Guides',
    readTime: '8 min read',
    date: '2025-08-04',
  },
  {
    id: 'brampton-small-business-accounting-guide-for-2025',
    title: 'Brampton Small Business Accounting Guide for 2025',
    excerpt: 'A full-scope accounting guide for Brampton entrepreneurs covering bookkeeping, payroll, corporate tax, and HST.',
    category: 'Local Guides',
    readTime: '10 min read',
    date: '2025-08-04',
  },
  {
    id: 'mississauga-tax-planning-checklist-for-2025-business-owners',
    title: 'Mississauga Tax Planning Checklist for 2025',
    excerpt: 'Year-end tax planning checklist tailored for Mississauga corporations and SMEs operating in the GTA business district.',
    category: 'Local Guides',
    readTime: '8 min read',
    date: '2025-08-04',
  },
  {
    id: 'niagara-small-business-accounting-guide-for-2025',
    title: 'Niagara Small Business Accounting Guide for 2025',
    excerpt: 'Complete accounting guidance for Niagara businesses in the wine, tourism, and agriculture sectors.',
    category: 'Local Guides',
    readTime: '10 min read',
    date: '2025-08-04',
  },
  {
    id: 'orangeville-small-business-accounting-guide-for-2025',
    title: 'Orangeville Small Business Accounting Guide for 2025',
    excerpt: 'Comprehensive financial management guide for Orangeville entrepreneurs covering all aspects of small business accounting.',
    category: 'Local Guides',
    readTime: '10 min read',
    date: '2025-08-04',
  },
]

const featured = featuredPosts.find(p => p.featured)!
const recentGeneral = featuredPosts.filter(p => !p.featured)

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">

        {/* Hero */}
        <section className="hero-pattern text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Expert Insights
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              CPA Insights &amp; Tax Tips
            </h1>
            <p className="text-navy-100 text-lg max-w-2xl mx-auto">
              Practical accounting and tax advice for Ontario business owners — from a certified CPA.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-xs text-gray-500">
              <strong>Professional Disclaimer:</strong> Articles are for educational purposes only and do not constitute professional accounting, tax, or legal advice. Consult a qualified CPA for advice specific to your situation. Tax laws change frequently — content may not reflect the most current updates.
            </p>
          </div>
        </div>

        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-6">Featured Article</p>
            <div className="grid lg:grid-cols-2 gap-10 items-center border border-gray-100 shadow-sm p-8 lg:p-12">
              <div>
                <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">
                  {featured.category}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${featured.id}`}
                  className="inline-flex items-center bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 transition-colors group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-gold-50 p-8 border-l-4 border-gold">
                <h3 className="font-serif text-lg font-bold text-navy mb-3">What You Will Learn</h3>
                <ul className="space-y-2">
                  {[
                    'Home office deduction strategies',
                    'Vehicle and travel expense rules',
                    'Meals, entertainment, and client gifts',
                    'Equipment and CCA deductions',
                    'Professional fees and subscriptions',
                    'HST and GST input tax credits',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recent General Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">General Guides</p>
            <h2 className="font-serif text-2xl font-bold text-navy mb-10">Essential CPA Guides for Ontario Businesses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {recentGeneral.map(post => (
                <article key={post.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <span className="inline-block bg-gold-50 text-gold border border-gold text-xs font-bold px-2 py-0.5 mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="mt-4 inline-flex items-center text-gold hover:text-gold-hover font-semibold text-sm transition-colors"
                    >
                      Read More <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Location Guides */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Local Guides</p>
            <h2 className="font-serif text-2xl font-bold text-navy mb-10">City-Specific Accounting Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locationPosts.map(post => (
                <article key={post.id} className="border border-gray-100 hover:border-gold hover:shadow-md transition-all p-5">
                  <span className="inline-block bg-navy text-white text-xs font-medium px-2 py-0.5 mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-sm font-bold text-navy mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-gold hover:text-gold-hover font-semibold text-xs transition-colors inline-flex items-center"
                  >
                    Read <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">
              Want Personalized Tax Advice for Your Business?
            </h2>
            <p className="text-navy-100 mb-6">
              General articles are helpful — but nothing replaces a conversation with your own CPA.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
