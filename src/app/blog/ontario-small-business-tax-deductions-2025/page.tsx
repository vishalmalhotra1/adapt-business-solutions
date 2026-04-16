import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Small Business Tax Deductions in Ontario: The Complete 2025 Guide | Adapt Business Solutions',
  description: 'A comprehensive guide to every major tax deduction available to Ontario small business owners in 2025 — home office, vehicle, meals, equipment, professional fees, and more.',
  keywords: 'Ontario small business tax deductions 2025, home office deduction Canada, vehicle expense CRA, CCA deductions Ontario, HST input tax credits',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-small-business-tax-deductions-2025' },
  openGraph: {
    title: 'Small Business Tax Deductions in Ontario: The Complete 2025 Guide',
    description: 'Every major deduction available to Ontario small business owners — maximize your refund and stay CRA-compliant.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-small-business-tax-deductions-2025',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Small Business Tax Deductions in Ontario: The Complete 2025 Guide',
  description: 'A comprehensive guide to every major tax deduction available to Ontario small business owners in 2025.',
  datePublished: '2025-08-05',
  dateModified: '2025-08-05',
  author: { '@type': 'Organization', name: 'Adapt Business Solutions', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Business Solutions', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/ontario-small-business-tax-deductions-2025' },
}

export default function OntarioTaxDeductionsPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-16 min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold-hover text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Tax Planning</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Small Business Tax Deductions in Ontario: The Complete 2025 Guide
            </h1>
            <p className="text-navy-100 text-lg">
              A comprehensive walkthrough of every major deduction available to Ontario small business owners — from home office to vehicle expenses, meals, and professional fees.
            </p>
            <p className="text-navy-100 text-sm mt-4">Published August 5, 2025 · 10 min read · By Adapt Business Solutions CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute professional tax advice. Tax laws change frequently. Consult a qualified CPA for advice specific to your situation.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                As a small business owner in Ontario, understanding which expenses you can deduct from your taxable income is one of the most powerful tools you have to reduce your tax bill. The CRA allows businesses to deduct &quot;reasonable expenses incurred to earn business income&quot; — but the details matter significantly. This guide covers the major deduction categories for 2025.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">1. Home Office Deduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you use part of your home exclusively and regularly for business, you can deduct a portion of your home expenses. The deduction is calculated based on the percentage of your home&apos;s square footage used for business.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Eligible expenses include: rent or mortgage interest, property taxes, utilities (heat, electricity, water), home insurance, and maintenance costs. For a home office that is 15% of your home, you can deduct 15% of these expenses.
              </p>
              <div className="bg-gold-50 border-l-4 border-gold p-4 mb-6">
                <p className="text-sm text-gray-700"><strong>Important:</strong> The home office deduction cannot create or increase a business loss. Any excess can be carried forward to future years.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">2. Vehicle and Travel Expenses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vehicle expenses are one of the most significant deductions for many Ontario business owners — and one of the most commonly audited. You can deduct the business-use portion of your vehicle expenses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Eligible expenses include: fuel and oil, insurance, maintenance and repairs, license and registration, and capital cost allowance (CCA) on the vehicle&apos;s purchase price.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                To determine the business-use percentage, you must maintain a vehicle logbook recording the date, destination, purpose, and kilometres for every business trip throughout the year. The CRA takes logbook requirements seriously.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">3. Meals and Entertainment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CRA allows you to deduct 50% of meals and entertainment expenses when they are incurred for business purposes. This includes taking clients to meals, business lunches, and entertainment at sporting events or concerts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                To deduct these expenses, you should keep receipts and note the business purpose and the names of people present. The 50% limitation applies to all meal and entertainment expenses, with limited exceptions.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">4. Equipment and Capital Cost Allowance (CCA)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you purchase equipment for your business — computers, tools, machinery, furniture — you typically cannot deduct the full cost in the year of purchase. Instead, you claim CCA (depreciation) over the useful life of the asset according to CRA classes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Common CCA classes for Ontario small businesses include: Class 10 (30% declining balance) for vehicles, Class 8 (20%) for general equipment, and Class 50 (55%) for computers. The Immediate Expensing Incentive allows certain eligible businesses to deduct up to $1.5 million in eligible property in the year of acquisition.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">5. Professional Fees and Subscriptions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fees paid to accountants, lawyers, consultants, and other professionals for business purposes are fully deductible. This includes your accounting and bookkeeping fees, legal fees for business matters, and consulting fees.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Business-related subscriptions — industry publications, software subscriptions (QuickBooks, accounting tools), and professional memberships — are also deductible.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">6. Advertising and Marketing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Costs related to promoting your business are generally fully deductible. This includes website hosting and development, social media advertising, Google Ads, print advertising, business cards, and promotional materials.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Note: Advertising expenses for Canadian newspapers and broadcast media are fully deductible, while foreign advertising expenses targeting Canadian audiences have limitations.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">7. HST Input Tax Credits (ITCs)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your business is registered for HST, you can claim input tax credits (ITCs) to recover the HST you paid on business purchases. This effectively means you only pay HST on the value you add, not on your inputs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                ITCs are claimed on your HST return and can significantly reduce your overall HST remittance. Make sure you are keeping HST receipts for all business purchases and that your suppliers are providing proper invoices.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">8. Salaries, Wages, and Benefits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you employ staff, their wages, salaries, bonuses, and employee benefits are fully deductible as business expenses. This includes your employer contributions to CPP and EI. If you pay yourself as a sole proprietor, you cannot deduct a salary — your business profit is your income.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">9. Insurance Premiums</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Business insurance premiums are fully deductible, including: commercial general liability insurance, professional liability (errors and omissions) insurance, business interruption insurance, and health/dental benefits for employees.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Record-Keeping Best Practices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CRA requires you to keep records for a minimum of 6 years from the end of the tax year to which they relate. For all deductions, maintain: original receipts or invoices, bank statements, vehicle logbook, and documentation showing the business purpose of each expense.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cloud-based accounting software like QuickBooks or FreshBooks makes this significantly easier, allowing you to photograph receipts immediately and categorize expenses in real time.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Get Professional Tax Help for Your Ontario Business</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Every business situation is different. A CPA can identify deductions specific to your industry, ensure compliance, and help you structure your business to minimize taxes year over year.
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
