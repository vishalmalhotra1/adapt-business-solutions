import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'T4 Preparation Checklist Ontario Employers 2025 | Adapt Business Solutions',
  description: 'Complete T4 preparation checklist for Ontario small businesses. Key boxes, filing deadlines, electronic filing requirements, and common errors to avoid.',
  keywords: 'T4 preparation Ontario, T4 filing deadline Canada, T4 boxes guide employer, T4 summary CRA filing',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/t4-preparation-checklist-ontario-employers' },
  openGraph: {
    title: 'T4 Preparation Checklist: A Step-by-Step Guide for Ontario Employers',
    description: 'Complete T4 preparation checklist for Ontario small businesses. Key boxes, filing deadlines, electronic filing requirements, and common errors to avoid.',
    url: 'https://adaptbusinesssolutions.com/blog/t4-preparation-checklist-ontario-employers',
    type: 'article',
    publishedTime: '2026-05-17',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'T4 Preparation Checklist: A Step-by-Step Guide for Ontario Employers',
  description: 'Complete T4 preparation checklist for Ontario small businesses. Key boxes, filing deadlines, electronic filing requirements, and common errors to avoid.',
  datePublished: '2026-05-17',
  dateModified: '2026-05-17',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/t4-preparation-checklist-ontario-employers',
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Payroll</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              T4 Preparation Checklist: A Step-by-Step Guide for Ontario Employers
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-17 &middot; 7 min read &middot; By Adapt Business Solutions CPA</p>
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
                T4 season arrives every February, and for Ontario small business owners, it can feel like a scramble. T4 slips must be distributed to employees and filed with the CRA by the last day of February each year — and the penalties for late or incorrect T4s can be surprisingly large. This checklist walks you through the entire process.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Who Must File T4 Slips</h2>
              <p className="text-gray-700 leading-relaxed">You must file T4 slips for every person from whom you deducted income tax, CPP, or EI premiums during the year — or who earned more than $500 in employment income from you, even if no deductions were made.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  All regular employees, regardless of income amount if deductions were taken
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Employees earning more than $500 even with no deductions
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Employees who worked any part of the year, even if terminated
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Shareholders who received salary (not dividends — those go on T5 slips)
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Note: Dividends paid to shareholders are reported on T5 slips, not T4s. Bonuses, commissions, and tips are reported on T4s. Directors&apos; fees are on T4s if the director is also an officer; otherwise T4A.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key T4 Boxes You Must Complete</h2>
              <p className="text-gray-700 leading-relaxed">Most employers only need to complete a subset of the 80+ boxes on a T4. Here are the essential boxes for a typical Ontario employment situation.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 14 — Employment income: total gross pay including salary, wages, bonuses
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 16 — Employee&apos;s CPP contributions
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 18 — Employee&apos;s EI premiums
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 22 — Income tax deducted
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 26 — CPP/QPP pensionable earnings
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 24 — EI insurable earnings
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 29 — Employment code (if applicable)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 40 — Other taxable allowances and benefits (car allowances, gifts)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 50 — RPP or DPSP registration number (if employer has a plan)
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Taxable benefits trap: If you provide employees with any non-cash benefits — company vehicle, group insurance, club memberships, gifts over $500 — these must be reported in Box 40 as taxable income. This is a very common T4 error.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Filing Deadlines and Methods</h2>
              <p className="text-gray-700 leading-relaxed">The T4 filing deadline is the last day of February each year. For 2025 tax year, T4 slips must be filed with CRA and distributed to employees by February 28, 2026.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Deadline: last day of February (for the prior calendar year)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Electronic filing required if filing 6 or more slips (as of 2024)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Paper filing allowed only for 5 or fewer slips
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  File via CRA My Business Account, web forms, or payroll software XML upload
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Penalties for late T4 filing: $100 minimum, scaling up by number of slips and days late. 1–50 slips: $10/day up to $1,000. 51–500 slips: $15/day up to $1,500. Do not file late.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The T4 Summary: What It Is and How to File</h2>
              <p className="text-gray-700 leading-relaxed">In addition to individual T4 slips, you must file a T4 Summary that totals all the amounts from your individual slips. This allows the CRA to reconcile your remittances against the total deductions reported.</p>
              <p className="text-gray-700 leading-relaxed mt-3">The T4 Summary is filed at the same time as the individual slips through the same electronic or paper method.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Totals from all T4 slips are carried to the corresponding summary boxes
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 82 — total CPP deducted
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 84 — total EI premiums deducted
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 86 — total income tax deducted
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 88 — number of T4 slips filed
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Most Common T4 Errors and How to Avoid Them</h2>
              <p className="text-gray-700 leading-relaxed">These are the errors we most commonly correct when reviewing T4s prepared by Ontario small business owners.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Missing employee SIN (never file without it — triggers CRA penalty)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Incorrect employment income (missing bonuses, vacation payouts, taxable benefits)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Wrong CPP and EI amounts (must match actual payroll records exactly)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Forgetting to issue T4A for sub-contractors paid over $500
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Not filing T4s for terminated employees (still required)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Mismatch between T4 summary totals and individual slips
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">T4 amendment: if you file a T4 with errors, you can file an amended T4 slip marked &quot;AMENDED&quot; at the top. Do this as soon as you discover an error — penalties apply if employees file incorrect returns based on wrong T4 information.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                T4 preparation is a detail-intensive annual obligation that rewards careful year-round payroll record-keeping. The more accurate your payroll throughout the year, the faster and simpler T4 season becomes. Consider outsourcing payroll entirely to a CPA to eliminate T4 errors and late filings.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Let Us Handle Your T4 Filing</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Adapt Business Solutions prepares and files T4 slips for Ontario employers accurately and on time, every year. Get a quote for our payroll services.
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
