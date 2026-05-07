import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ontario Employer Health Tax (EHT) 2025 Guide | Adapt Business Solutions',
  description: 'Ontario employers must pay the Employer Health Tax (EHT) on total Ontario remuneration. Learn the exemption threshold, progressive rates, and annual return filing requirements.',
  keywords: 'Ontario employer health tax, EHT Ontario 2025, employer health tax exemption Ontario, EHT remuneration calculation Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-employer-health-tax-small-business' },
  openGraph: {
    title: 'Ontario Employer Health Tax: Exemptions, Rates, and Filing for Small Business',
    description: 'Ontario employers must pay the Employer Health Tax (EHT) on total Ontario remuneration. Learn the exemption threshold, progressive rates, and annual return filing requirements.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-employer-health-tax-small-business',
    type: 'article',
    publishedTime: '2026-05-07',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ontario Employer Health Tax: Exemptions, Rates, and Filing for Small Business',
  description: 'Ontario employers must pay the Employer Health Tax (EHT) on total Ontario remuneration. Learn the exemption threshold, progressive rates, and annual return filing requirements.',
  datePublished: '2026-05-07',
  dateModified: '2026-05-07',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/ontario-employer-health-tax-small-business',
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
              Ontario Employer Health Tax: Exemptions, Rates, and Filing for Small Business
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-07 &middot; 6 min read &middot; By Adapt Business Solutions CPA</p>
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
                The Ontario Employer Health Tax (EHT) is a payroll tax paid by Ontario employers on total annual remuneration paid to employees. While it is separate from federal payroll deductions and remitted to the Ontario Ministry of Finance, it is a significant cost for growing businesses. Understanding the exemption rules can save small businesses thousands of dollars annually.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Is the EHT and Who Pays It?</h2>
              <p className="text-gray-700 leading-relaxed">The EHT is a provincial tax that Ontario employers pay based on the total remuneration they pay to employees who report to work at a permanent establishment in Ontario.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Remuneration for EHT purposes includes: salaries, wages, bonuses, commissions, taxable benefits, and most other employment income. It does NOT include dividends, contractor payments, or reimbursements of actual expenses.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Applies to all employers with a permanent establishment in Ontario
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Based on total Ontario remuneration paid in the calendar year
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Paid by the employer — not deducted from employees
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Filed annually on the EHT Annual Return (due March 15)
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The $1,000,000 Exemption for Small Businesses</h2>
              <p className="text-gray-700 leading-relaxed">Private sector employers with annual Ontario remuneration of $1,000,000 or less are fully exempt from EHT — they owe $0. This exemption was permanently increased from $490,000 to $1,000,000 in 2020.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Employers with remuneration between $1,000,000 and $5,000,000 get a partial exemption and pay at a reduced rate. Only employers with remuneration over $5,000,000 pay EHT on their full payroll.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Total Ontario remuneration ≤ $1,000,000: EHT = $0 (fully exempt)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Between $1,000,000 and $5,000,000: partial exemption applies
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Over $5,000,000: EHT on full remuneration, no exemption
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Associated employers share one $1,000,000 exemption between them
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Planning note: If you have multiple associated corporations that together exceed $1,000,000 in Ontario remuneration, the exemption must be shared among them. Proper allocation planning can minimize your total EHT obligation.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">EHT Tax Rates</h2>
              <p className="text-gray-700 leading-relaxed">EHT is calculated using a progressive rate structure that depends on the employer&apos;s total Ontario remuneration. The rates range from 0.98% to 1.95%.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Remuneration under $200,000: 0.98%
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Remuneration $200,000–$400,000: 1.101%
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Remuneration $400,000–$600,000: 1.223%
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Remuneration $600,000–$800,000: 1.344%
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Remuneration $800,000–$1,000,000: 1.465%
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Remuneration over $1,000,000: 1.95% (on the portion above the exempt amount)
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">EHT Instalments and Annual Return</h2>
              <p className="text-gray-700 leading-relaxed">Employers with annual EHT payable of more than $2,400 must make monthly EHT instalment payments. The annual EHT return is due by March 15 of the following year.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Monthly instalments: due by the 15th of each month
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Annual EHT return: due March 15 (for prior calendar year)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Balance owing: due with the annual return by March 15
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  File online through Ontario&apos;s ONe-Source portal
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Penalty for late EHT filing: 5% of the balance owing, plus 1% per month for up to 12 months. Always file on time even if you cannot pay — the filing penalty is separate from the payment interest.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The EHT exemption provides a significant benefit for Ontario small businesses under $1,000,000 in payroll. As your payroll grows toward and past this threshold, EHT becomes a meaningful cost to plan for. Understanding when you cross the threshold helps you budget accurately and structure associated corporations properly.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Need Help with EHT Compliance?</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We handle EHT filing and instalment planning for Ontario businesses. Get a quote for our payroll and compliance services.
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
