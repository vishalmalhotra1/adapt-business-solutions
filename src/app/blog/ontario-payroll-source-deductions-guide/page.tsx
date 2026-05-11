import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ontario Payroll Source Deductions Guide 2025 | Adapt Business Solutions',
  description: 'Complete guide to payroll source deductions for Ontario small businesses. CPP, EI, income tax remittances — deadlines, calculations, and CRA compliance tips.',
  keywords: 'payroll source deductions Ontario, CPP EI remittance CRA, T4 payroll Ontario, employer payroll obligations Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-payroll-source-deductions-guide' },
  openGraph: {
    title: 'Ontario Payroll Source Deductions: What Every Small Business Must Know',
    description: 'Complete guide to payroll source deductions for Ontario small businesses. CPP, EI, income tax remittances — deadlines, calculations, and CRA compliance tips.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-payroll-source-deductions-guide',
    type: 'article',
    publishedTime: '2026-05-11',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ontario Payroll Source Deductions: What Every Small Business Must Know',
  description: 'Complete guide to payroll source deductions for Ontario small businesses. CPP, EI, income tax remittances — deadlines, calculations, and CRA compliance tips.',
  datePublished: '2026-05-11',
  dateModified: '2026-05-11',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/ontario-payroll-source-deductions-guide',
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
              Ontario Payroll Source Deductions: What Every Small Business Must Know
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-11 &middot; 8 min read &middot; By Adapt Business Solutions CPA</p>
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
                If you have even one employee in Ontario, you are legally required to deduct and remit payroll source deductions to the Canada Revenue Agency. Missing a deadline — even by a single day — triggers automatic penalties starting at 3% and escalating to 10% or more. This guide covers everything you need to stay compliant.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Three Source Deductions Every Employer Must Withhold</h2>
              <p className="text-gray-700 leading-relaxed">There are three types of deductions you must withhold from every employee paycheque: Canada Pension Plan (CPP) contributions, Employment Insurance (EI) premiums, and federal/provincial income tax.</p>
              <p className="text-gray-700 leading-relaxed mt-3">For 2025, CPP contribution rates are 5.95% on pensionable earnings between $3,500 and $68,500. EI premium rates are 1.64% on insurable earnings up to $63,200. Income tax is calculated using CRA payroll deduction tables based on the employee&apos;s TD1 form.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  CPP 2025: employee rate 5.95%, employer matches 100%
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  EI 2025: employee rate 1.64%, employer pays 1.4× the employee amount
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Income tax: use CRA Payroll Deductions Online Calculator or T4032 tables
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Important: Employers must also contribute the employer portion of CPP and EI on top of withholding the employee portion. This means your actual payroll cost is higher than the gross salary on the offer letter.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Remittance Deadlines and Frequencies</h2>
              <p className="text-gray-700 leading-relaxed">The CRA assigns a remittance frequency based on your average monthly withholding amount from two calendar years ago. Most new and small businesses are classified as regular remitters.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Regular remitters: due by the 15th of the month following the pay period
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Quarterly remitters: available if average monthly withholding is under $3,000
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Accelerated remitters: twice monthly or weekly for larger payrolls
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Tip: New employers are automatically classified as regular remitters. You can apply for quarterly remitter status if your average monthly withholding is under $3,000 and you have a perfect compliance history.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Penalties for Late or Missing Remittances</h2>
              <p className="text-gray-700 leading-relaxed">The CRA applies automatic penalties when remittances are late. These are not negotiable and are applied on a per-occurrence basis, so even a small late payment costs you money.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  3% penalty if 1–3 days late
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  5% penalty if 4–5 days late
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  7% if 6–7 days late
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  10% if more than 7 days late or if a second failure occurs within 12 months
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Director&apos;s liability: If your corporation fails to remit source deductions, CRA can hold directors personally liable for the unremitted amounts plus interest and penalties. This personal liability survives even if the company goes bankrupt.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Record-Keeping Requirements for Payroll</h2>
              <p className="text-gray-700 leading-relaxed">The CRA requires you to keep all payroll records for a minimum of six years. This includes employee TD1 forms, pay stubs, payroll journals, remittance receipts, and T4 slips.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  TD1 Personal Tax Credits Return — collected from each employee at hire
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Record of Employment (ROE) — issued within 5 calendar days of an interruption
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  T4 slips — issued to employees and filed with CRA by the last day of February
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Year-End Payroll: T4 Filing Requirements</h2>
              <p className="text-gray-700 leading-relaxed">Every year, you must prepare a T4 slip for each employee who received remuneration during the year. T4 slips and the T4 Summary must be filed with the CRA by the last day of February of the following year.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Employees must receive their T4 by the same deadline. Late T4 filing penalties start at $100 minimum and increase based on the number of slips filed late.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 14: total employment income paid
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 16/17: CPP/QPP contributions deducted
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 18: EI premiums deducted
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Box 22: income tax deducted
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Staying on top of payroll source deductions is one of the highest-priority compliance obligations for Ontario small business owners. The penalties for non-compliance are automatic and can be significant. Using payroll software or outsourcing to a CPA eliminates this risk entirely.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Outsource Your Payroll to a CPA</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Let Adapt Business Solutions handle your payroll processing, remittances, and T4 filing — so you never miss a deadline.
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
