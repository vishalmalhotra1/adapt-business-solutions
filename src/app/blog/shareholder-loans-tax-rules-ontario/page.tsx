import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shareholder Loans Tax Rules Ontario 2025 | Adapt Business Solutions',
  description: 'Shareholder loans are one of the most common, and most misunderstood, tax issues for Ontario corporations. Learn the one-year rule, interest requirements, and how to avoid taxable benefits.',
  keywords: 'shareholder loans Ontario, shareholder loan one year rule CRA, corporate loan to shareholder taxable benefit, Section 80.4 Income Tax Act',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/shareholder-loans-tax-rules-ontario' },
  openGraph: {
    title: 'Shareholder Loans in Ontario: Tax Rules Every Business Owner Must Know',
    description: 'Shareholder loans are one of the most common, and most misunderstood, tax issues for Ontario corporations. Learn the one-year rule, interest requirements, and how to avoid taxable benefits.',
    url: 'https://adaptbusinesssolutions.com/blog/shareholder-loans-tax-rules-ontario',
    type: 'article',
    publishedTime: '2026-05-12',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shareholder Loans in Ontario: Tax Rules Every Business Owner Must Know',
  description: 'Shareholder loans are one of the most common, and most misunderstood, tax issues for Ontario corporations. Learn the one-year rule, interest requirements, and how to avoid taxable benefits.',
  datePublished: '2026-05-12',
  dateModified: '2026-05-12',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/shareholder-loans-tax-rules-ontario',
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Corporate Services</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Shareholder Loans in Ontario: Tax Rules Every Business Owner Must Know
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-12 &middot; 9 min read &middot; By Adapt Business Solutions CPA</p>
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
                Many Ontario business owners use shareholder loans to move money between themselves and their corporations, taking advances when needed and repaying later. While this is legitimate tax planning, the Income Tax Act contains strict rules that, if violated, can result in the entire loan amount being added to your personal taxable income.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Is a Shareholder Loan?</h2>
              <p className="text-gray-700 leading-relaxed">A shareholder loan occurs when a corporation lends money to a shareholder (or receives money from one). On the corporate books, money paid to you without a formal salary or dividend declaration is recorded as a shareholder loan.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Common shareholder loan situations include drawing money from the business before your year-end salary or dividend is declared, paying personal expenses through the corporate credit card, or lending corporate funds for personal use.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Corporate funds used for personal expenses = shareholder loan debit
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Personal funds deposited into corporate account = shareholder loan credit
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must be tracked separately from salary, dividends, and expense reimbursements
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The One-Year Rule: The Most Important Shareholder Loan Rule</h2>
              <p className="text-gray-700 leading-relaxed">Under Section 15(2) of the Income Tax Act, any amount owing to a corporation by a shareholder must be repaid within one year after the end of the corporation&apos;s tax year in which the loan was made.</p>
              <p className="text-gray-700 leading-relaxed mt-3">If the loan is not repaid within this window, the ENTIRE loan balance is included in your personal taxable income for the year the loan was made, on top of any other income you earned that year.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Example: Corporation year-end is December 31. Loan taken January 2024. Must be repaid by December 31, 2025.
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Partial repayments do not save you, the full outstanding balance is taxable if any remains
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Repaying with a new loan from the same corporation does not reset the clock
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Critical: The one-year rule is absolute. There are no extensions and no CRA discretion. If the loan is still outstanding after the deadline, it becomes income, even if you repay it the next day.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Deemed Interest Benefit Under Section 80.4</h2>
              <p className="text-gray-700 leading-relaxed">Even if you repay your shareholder loan on time, the CRA may assess a taxable benefit for interest-free or low-interest loans. Under Section 80.4, if your corporation charges you less than the CRA&apos;s prescribed interest rate on the loan, the difference is a taxable benefit added to your income.</p>
              <p className="text-gray-700 leading-relaxed mt-3">The prescribed interest rate fluctuates quarterly and has been between 4–6% in recent years. The benefit is calculated on the daily outstanding balance.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Charge yourself the CRA prescribed rate to eliminate the deemed benefit
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  The corporation must report this interest as income
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Low-cost loans for home purchases have special lower prescribed rates
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Tip: For short-term loans that will be repaid within the one-year window, the interest benefit is small and often acceptable. For larger or longer-term loans, charge the prescribed rate to avoid the benefit.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Exceptions to the Shareholder Loan Rules</h2>
              <p className="text-gray-700 leading-relaxed">Not all shareholder loans trigger Section 15(2) income inclusion. There are specific exceptions for loans made on regular commercial terms.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Home purchase loans: made to an employee-shareholder to purchase a home, with regular repayment terms
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Vehicle loans: to purchase a vehicle for employment use
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Loans to employees who are not significant shareholders (less than 10% ownership)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Loans that are part of ordinary business transactions (e.g., trade credit)
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Best Practices to Avoid Shareholder Loan Problems</h2>
              <p className="text-gray-700 leading-relaxed">The safest approach to managing shareholder loans is to minimize their use and always track them carefully in your bookkeeping.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Declare salary or dividends before year-end to clear debit balances
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Document all loan advances with a signed promissory note
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Track the loan balance monthly, never let it grow unnoticed
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Review shareholder loan status with your CPA before each year-end
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">CRA audit focus: Shareholder loans are one of the most common items reviewed in a corporate audit. A debit balance on your year-end balance sheet will attract scrutiny. Keep a clean, well-documented loan account.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Shareholder loans are a legitimate and useful tool for managing cash flow between you and your corporation, but only when managed properly. The one-year repayment rule and deemed interest benefit rules are non-negotiable. Review your shareholder loan balance at every corporate year-end with your CPA.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Is Your Shareholder Loan Balance Compliant?</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We review shareholder loan accounts as part of every corporate year-end. Book a consultation to make sure yours is in order.
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
