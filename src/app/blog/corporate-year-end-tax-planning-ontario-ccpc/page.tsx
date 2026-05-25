import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Year-End Tax Planning Checklist Ontario 2025 | Adapt Business Solutions',
  description: 'Complete year-end tax planning checklist for Ontario CCPCs. Salary vs dividend decision, bonus planning, RRSP contributions, capital spending, and timing strategies.',
  keywords: 'corporate year end tax planning Ontario, CCPC year end checklist, salary vs dividend Ontario, bonus planning corporate tax Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/corporate-year-end-tax-planning-ontario-ccpc' },
  openGraph: {
    title: 'Corporate Year-End Tax Planning Checklist for Ontario CCPCs',
    description: 'Complete year-end tax planning checklist for Ontario CCPCs. Salary vs dividend decision, bonus planning, RRSP contributions, capital spending, and timing strategies.',
    url: 'https://adaptbusinesssolutions.com/blog/corporate-year-end-tax-planning-ontario-ccpc',
    type: 'article',
    publishedTime: '2026-05-10',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Corporate Year-End Tax Planning Checklist for Ontario CCPCs',
  description: 'Complete year-end tax planning checklist for Ontario CCPCs. Salary vs dividend decision, bonus planning, RRSP contributions, capital spending, and timing strategies.',
  datePublished: '2026-05-10',
  dateModified: '2026-05-10',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/corporate-year-end-tax-planning-ontario-ccpc',
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
              Corporate Year-End Tax Planning Checklist for Ontario CCPCs
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-10 &middot; 9 min read &middot; By Adapt Business Solutions CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Professional Disclaimer:</strong> This article is for educational purposes only and does not constitute professional accounting, tax, or legal advice. Tax laws change frequently, verify current rules with a qualified CPA. Consult Adapt Business Solutions or another licensed CPA for advice specific to your situation.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Corporate year-end tax planning is not just for big companies. Ontario CCPCs of all sizes can take meaningful steps in the final weeks of their fiscal year to reduce both corporate and personal tax. This checklist covers the high-impact decisions that should happen before your year-end, not after.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">1. Salary vs Dividend Decision</h2>
              <p className="text-gray-700 leading-relaxed">The most significant year-end decision for most incorporated Ontario business owners is how much salary versus dividends to pay themselves from the corporation. This affects both corporate tax (salary reduces corporate income) and personal tax (salary generates RRSP room; dividends do not).</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Salary: reduces corporate income, generates CPP obligations and RRSP room
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Dividends: no CPP, no RRSP room, taxed at lower dividend tax rates personally
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Integration principle: total tax should theoretically be similar, but differences exist in practice
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Optimal mix depends on personal income needs, RRSP room, and CPP goals
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Year-end salary bonus: you can declare a salary bonus before year-end to reduce corporate income, but it must be paid within 180 days of year-end to be deductible in the current year. Book the accrual and pay on time.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">2. Bonus Accrual Timing</h2>
              <p className="text-gray-700 leading-relaxed">Declaring a management bonus before year-end is one of the most effective ways to bring corporate income below the $500,000 small business threshold or to balance income between the corporation and yourself.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Bonus must be declared before year-end to be deductible that year
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must be paid within 180 days of corporate year-end (or it becomes non-deductible)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  The bonus is taxable to you personally in the year received, not when accrued
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Properly documented with a board resolution
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Timing strategy: If you want to defer personal tax, accrue the bonus in December but pay it in January or February of the following year (within the 180-day window). The corporation gets the deduction now; you include it in income next year.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">3. Capital Spending Before Year-End</h2>
              <p className="text-gray-700 leading-relaxed">Purchasing business equipment before your fiscal year-end allows you to claim CCA in that year. Even if the equipment is purchased on the last day of the fiscal year, the half-year rule allows 50% of the normal CCA rate.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Buy before year-end to start CCA claims this year
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Half-year rule: 50% of normal CCA rate in year of acquisition
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Immediate expensing eligible: 100% deductible in year acquired (up to $1.5M)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Consider computer upgrades, office equipment, vehicles before year-end
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">4. Review Passive Income vs the $50,000 Threshold</h2>
              <p className="text-gray-700 leading-relaxed">If your corporation holds investments that generate passive income, review whether you are approaching or above the $50,000 adjusted aggregate investment income (AAII) threshold that triggers the small business deduction grind-down.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Under $50,000 AAII: full $500,000 SBD business limit preserved
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Over $50,000 AAII: business limit reduced $5 per $1 over threshold
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Consider distributing excess passive income as dividends before year-end
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Realize capital losses to offset capital gains that push AAII over $50,000
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">5. Shareholder Loan Cleanup</h2>
              <p className="text-gray-700 leading-relaxed">Review your shareholder loan account balance before year-end. Any debit balance (money owed to the corporation by you) must be repaid within one year after the corporate year-end or it becomes personal income.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Calculate current shareholder loan balance
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  If debit balance exists, declare salary or dividend to offset it
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Document all advances and repayments properly
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Review with your accountant to ensure one-year rule is not triggered
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">6. Accelerate Deductible Expenses</h2>
              <p className="text-gray-700 leading-relaxed">If your corporate income is higher than desired, consider accelerating legitimate business expenses before year-end. Prepaying certain expenses and paying outstanding invoices before year-end brings deductions forward.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Pay outstanding supplier invoices before year-end
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Prepay annual software subscriptions and service contracts
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Incur advertising and marketing spend before year-end
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Make charitable donations from the corporation (deductible up to 75% of net income)
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Prepaid expense rule: you can deduct 12 months of prepaid expenses in the current year. So a 12-month subscription paid on December 31 is fully deductible in the current fiscal year.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Corporate year-end tax planning requires timely action, most strategies cannot be implemented retroactively after year-end. The earlier in your fiscal year you begin planning, the more options you have. Even businesses in their first year of operation can benefit from reviewing these items with a CPA before closing their books.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Year-End Coming Up? Let&apos;s Plan Now.</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We help Ontario CCPCs implement effective year-end tax strategies before it&apos;s too late. Book your year-end planning session today.
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
