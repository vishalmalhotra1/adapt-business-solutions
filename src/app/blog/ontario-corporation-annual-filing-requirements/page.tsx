import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ontario Corporation Annual Filing Requirements 2025 | Adapt Business Solutions',
  description: 'Every Ontario corporation has annual filing obligations — T2 corporate tax, Ontario annual return, HST, and minute book updates. Missing any one of them triggers penalties.',
  keywords: 'Ontario corporation annual filing requirements, T2 corporate tax return deadline, Ontario annual return corporation, OBCA annual filing obligations',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-corporation-annual-filing-requirements' },
  openGraph: {
    title: 'Annual Filing Requirements for Ontario Corporations: What You Must Do Every Year',
    description: 'Every Ontario corporation has annual filing obligations — T2 corporate tax, Ontario annual return, HST, and minute book updates. Missing any one of them triggers penalties.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-corporation-annual-filing-requirements',
    type: 'article',
    publishedTime: '2026-05-09',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Annual Filing Requirements for Ontario Corporations: What You Must Do Every Year',
  description: 'Every Ontario corporation has annual filing obligations — T2 corporate tax, Ontario annual return, HST, and minute book updates. Missing any one of them triggers penalties.',
  datePublished: '2026-05-09',
  dateModified: '2026-05-09',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/ontario-corporation-annual-filing-requirements',
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Corporate Compliance</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Annual Filing Requirements for Ontario Corporations: What You Must Do Every Year
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-09 &middot; 7 min read &middot; By Adapt Business Solutions CPA</p>
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
                When you incorporate in Ontario, you take on a set of recurring obligations that continue for the life of the corporation. These are not optional — they are legal requirements under the Ontario Business Corporations Act, the Income Tax Act, and the Excise Tax Act. This guide covers every major annual filing your Ontario corporation must complete and the consequences of missing them.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">1. T2 Corporate Income Tax Return</h2>
              <p className="text-gray-700 leading-relaxed">Every Ontario corporation must file a T2 corporate income tax return every year — even if the corporation had no income, no activity, or is dormant. There are no exceptions.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Due date: 6 months after the corporation&apos;s fiscal year-end
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Tax owing is due: 2 months after year-end (3 months for CCPCs with income under $500,000)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Penalty for late filing: 5% of unpaid tax + 1% per month (max 12 months)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Corporations with no activity: file a &quot;nil return&quot; — T2 with nil income
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Choosing your fiscal year-end: Unlike individuals (who have a December 31 year-end), corporations can choose any fiscal year-end at incorporation. Many owners choose a non-calendar year-end (e.g., March 31 or June 30) to allow year-end tax planning before the CRA personal filing deadline.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">2. Ontario Annual Return</h2>
              <p className="text-gray-700 leading-relaxed">Every Ontario corporation must file an Ontario Annual Return with the provincial government to confirm that the corporation is still active and to update its registered information. This is separate from the CRA T2 return.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Filed with: Ontario Business Registry (not CRA)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Due date: within 6 months of the corporation&apos;s fiscal year-end
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Filing fee: $12.50 for online filing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Required information: registered office address, director information, officer names
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Dissolution risk: Failure to file annual returns for two consecutive years triggers a notice from the province, and continued non-filing can result in the corporation being dissolved. A dissolved corporation loses its legal status — a costly problem if it holds assets or ongoing contracts.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">3. HST Returns</h2>
              <p className="text-gray-700 leading-relaxed">If your corporation is registered for HST, you must file HST returns on schedule — annually, quarterly, or monthly depending on your assigned filing frequency.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Annual filers: one return per year, due 3 months after fiscal year-end (June 15 if December 31 year-end)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Balance owing: due with the return
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Penalty: 1% per month compounding on late-filed returns with a balance owing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Even nil returns must be filed if you are registered
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">4. T4 Payroll Slips (If You Have Employees or Pay Salary)</h2>
              <p className="text-gray-700 leading-relaxed">If your corporation paid salary to anyone — including yourself as the incorporated owner — during the calendar year, T4 slips must be issued to each recipient and filed with the CRA.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  T4 filing deadline: last day of February of the following year
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must issue T4 to employee and file T4 Summary with CRA simultaneously
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Electronic filing required if filing 6 or more slips
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  T4A required for contractors paid $500+ in the year
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">5. T5 Dividend Slips (If You Pay Dividends)</h2>
              <p className="text-gray-700 leading-relaxed">If your corporation paid dividends to shareholders during the year, T5 investment income slips must be issued to each shareholder and filed with the CRA.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  T5 filing deadline: last day of February of the following year
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Required for dividends paid — even to the sole shareholder-owner
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Include gross dividend amount and grossed-up amount on T5
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  File T5 Summary with individual T5 slips
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Common oversight: Many small business owners pay themselves dividends informally throughout the year and forget to prepare T5 slips. CRA audits frequently uncover unreported dividends — which can be reclassified as shareholder benefits with adverse tax consequences.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">6. Minute Book Update</h2>
              <p className="text-gray-700 leading-relaxed">While not a government filing requirement, updating your minute book annually is a legal obligation under the OBCA. Your corporate records must be kept current at all times and available for inspection.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Annual meeting minutes: elect directors, appoint officers, approve financial statements
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Dividend declarations: board resolution required for each dividend payment
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Any significant corporate changes: new directors, officer changes, share transfers
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must be available for shareholder inspection on request
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ontario corporations carry more administrative overhead than sole proprietorships — but all of these obligations are manageable with the right systems. A CPA who handles your corporate year-end will typically file the T2, prepare your T4s and T5s, and update your minutes as part of an integrated annual package. The goal is to never miss a deadline.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Never Miss a Corporate Filing Deadline</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Adapt Business Solutions manages all annual corporate filings for Ontario corporations — T2, T4, T5, HST, minutes, and Ontario annual returns. Ask about our annual compliance package.
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
