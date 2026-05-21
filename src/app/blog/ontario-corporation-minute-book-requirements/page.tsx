import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ontario Corporation Minute Book Requirements 2025 | Adapt Business Solutions',
  description: 'Every Ontario corporation must maintain a minute book. Learn what goes in it, why it matters for CRA audits and financing, and what happens if yours is out of date.',
  keywords: 'Ontario corporation minute book, corporate records Ontario, OBCA minute book requirements, corporate minute book CPA Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-corporation-minute-book-requirements' },
  openGraph: {
    title: 'Ontario Corporation Minute Books: What They Are and Why You Need Them',
    description: 'Every Ontario corporation must maintain a minute book. Learn what goes in it, why it matters for CRA audits and financing, and what happens if yours is out of date.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-corporation-minute-book-requirements',
    type: 'article',
    publishedTime: '2026-05-21',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ontario Corporation Minute Books: What They Are and Why You Need Them',
  description: 'Every Ontario corporation must maintain a minute book. Learn what goes in it, why it matters for CRA audits and financing, and what happens if yours is out of date.',
  datePublished: '2026-05-21',
  dateModified: '2026-05-21',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/ontario-corporation-minute-book-requirements',
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
              Ontario Corporation Minute Books: What They Are and Why You Need Them
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-21 &middot; 7 min read &middot; By Adapt Business Solutions CPA</p>
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
                When you incorporate in Ontario, you create a legal entity with ongoing documentation obligations. The minute book is the official record of your corporation&apos;s existence — its history, ownership, decisions, and legal structure. Despite being a legal requirement under the Ontario Business Corporations Act, it is the most commonly neglected corporate obligation for small business owners.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Is a Corporate Minute Book?</h2>
              <p className="text-gray-700 leading-relaxed">A corporate minute book is the formal record-keeping binder (physical or digital) that contains all the official documents related to your corporation&apos;s governance and legal history. It is not an accounting record — it is a legal record.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Most Ontario corporations are organized by a lawyer at the time of incorporation, who prepares an initial minute book. After that, it is the responsibility of the directors to keep it current.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Articles of Incorporation (the document that creates the corporation)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  By-laws (the internal rules governing how the corporation operates)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Shareholder register (who owns how many shares)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Director register (who the directors are)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Officer register (who the officers are — president, secretary, etc.)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Minutes of shareholder and director meetings
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Share certificates issued to shareholders
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Goes in the Minutes?</h2>
              <p className="text-gray-700 leading-relaxed">Minutes are the written record of formal decisions made by the directors or shareholders of the corporation. Every significant decision should be documented — even in a small, single-owner corporation.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Annual election of directors and appointment of officers
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Approval of financial statements and annual T2 corporate tax return
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Declaration of dividends (required to make dividends legally valid)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Approval of salary or management fees to shareholders
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Authorization of significant contracts, loans, or banking arrangements
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Changes to share structure or shareholder agreements
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Dividend legality: A dividend that is not formally declared by a board resolution is legally problematic. If the CRA audits your corporation and finds dividends without supporting minute book entries, it can reclassify them as income with no dividend tax credit — costing you significantly more tax.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Why Your Minute Book Matters More Than You Think</h2>
              <p className="text-gray-700 leading-relaxed">An out-of-date minute book creates problems in several high-stakes situations where your corporation&apos;s legal status and history are scrutinized.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Bank financing: most lenders require a current minute book before approving corporate loans
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Business sale: buyers and their lawyers will review your entire minute book in due diligence
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  CRA audit: missing resolutions for dividends or salaries can result in reclassification
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Partner disputes: without documented decisions, disputes over who owns what become complicated
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Estate and succession planning: ownership transfers require a clean, current share register
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Business sale risk: We regularly see deal closings delayed — or prices reduced — because the seller&apos;s minute book is years out of date and needs to be reconstructed retroactively. This is expensive, time-consuming, and sometimes impossible to do perfectly.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">How Often Should You Update Your Minute Book?</h2>
              <p className="text-gray-700 leading-relaxed">At a minimum, your minute book should be updated annually as part of your corporate year-end process. Many Ontario CPAs and lawyers include minute book maintenance as part of their annual corporate package.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Annually: approve financial statements, re-elect directors, appoint officers
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  When dividends are declared: before each dividend payment
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  When share ownership changes: immediately upon transfer
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  When directors or officers change: within days of the change
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  When significant contracts are signed: authorization resolution
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Annual update process: Most Ontario CPAs prepare the corporate minutes as part of the annual T2 tax return engagement. If your accountant is not preparing minutes annually, your minute book is likely out of date.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The minute book is not just a legal formality — it is the foundation of your corporation&apos;s legal integrity. An up-to-date minute book protects your dividends from CRA reclassification, makes financing easier to obtain, and ensures a smooth process if you ever sell the business. Update it every year without fail.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Is Your Minute Book Up to Date?</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We prepare and maintain corporate minutes as part of our annual corporate package for Ontario businesses. Get in touch to have yours reviewed and updated.
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
