import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CRA Business Account Setup After Incorporation Ontario 2025 | Adapt Business Solutions',
  description: 'Just incorporated in Ontario? Here is exactly how to set up your CRA My Business Account, register for HST and payroll, and get your corporate tax account ready.',
  keywords: 'CRA My Business Account setup Ontario, register corporation CRA, CRA business number registration Ontario, corporate tax account setup Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/cra-business-account-setup-after-incorporation-ontario' },
  openGraph: {
    title: 'CRA Business Account Setup After Incorporating in Ontario: Step-by-Step',
    description: 'Just incorporated in Ontario? Here is exactly how to set up your CRA My Business Account, register for HST and payroll, and get your corporate tax account ready.',
    url: 'https://adaptbusinesssolutions.com/blog/cra-business-account-setup-after-incorporation-ontario',
    type: 'article',
    publishedTime: '2026-05-08',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CRA Business Account Setup After Incorporating in Ontario: Step-by-Step',
  description: 'Just incorporated in Ontario? Here is exactly how to set up your CRA My Business Account, register for HST and payroll, and get your corporate tax account ready.',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/cra-business-account-setup-after-incorporation-ontario',
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Post-Incorporation</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              CRA Business Account Setup After Incorporating in Ontario: Step-by-Step
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-08 &middot; 7 min read &middot; By Adapt Business Solutions CPA</p>
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
                Many Ontario business owners incorporate their company and then stall on the next steps — registering with the CRA, setting up proper accounts, and getting compliant before doing any business. This guide walks through every CRA account you need after incorporation, in the right order, so you start on solid footing.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Step 1: Obtain Your Business Number</h2>
              <p className="text-gray-700 leading-relaxed">When you incorporate an Ontario corporation, the Ontario Business Registry automatically notifies the CRA, which assigns a Business Number (BN) to your corporation. Your BN is a 9-digit number that identifies your corporation with the federal government for all tax purposes.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  BN is automatically assigned after provincial incorporation — usually within 1–5 business days
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Format: 123456789 (9 digits)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Each program account adds a 2-letter code and 4-digit reference: e.g., 123456789 RC0001 (corporate tax)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  You need the BN to register for all other CRA program accounts
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Step 2: Register for a Corporate Tax Account (RC)</h2>
              <p className="text-gray-700 leading-relaxed">Your corporation&apos;s income tax account is an RC account. This is where your annual T2 corporate tax returns are filed. The account is typically created automatically when the CRA assigns your BN after incorporation.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Program account: 123456789 RC0001
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  T2 corporate income tax return due: 6 months after corporate fiscal year-end
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Corporate tax installments: due monthly for corporations owing more than $3,000 in tax
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Set up CRA My Business Account to view your RC account online
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Step 3: Register for HST (RT Account)</h2>
              <p className="text-gray-700 leading-relaxed">If your corporation will be making taxable supplies of goods or services, you must register for HST once revenues exceed $30,000 — or you can register voluntarily from day one (recommended for most businesses).</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Register online through CRA Business Registration Online (BRO)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Program account: 123456789 RT0001
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Effective date: typically the date of incorporation or the date you start generating revenue
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Choose your reporting period: annual (under $1.5M), quarterly, or monthly
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Voluntary registration tip: Register from day one if you will have startup expenses with HST. You can claim input tax credits on your first HST return for HST paid on incorporation fees, equipment, software, and other pre-revenue expenses.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Step 4: Register for a Payroll Account (RP) — If You Have Employees</h2>
              <p className="text-gray-700 leading-relaxed">If your corporation will be paying salaries — including to yourself as the incorporated owner — you need a payroll account before the first payroll is processed.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Program account: 123456789 RP0001
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Required before your first payroll
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Used to remit CPP, EI, and income tax withholdings to CRA
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Remittance frequency assigned by CRA based on your average monthly withholding
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Owner salary: Even if you are the only person in the corporation, taking a salary requires a payroll account. Many incorporated owners pay themselves dividends only (no payroll account needed) or a combination of salary and dividends.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Step 5: Set Up CRA My Business Account</h2>
              <p className="text-gray-700 leading-relaxed">CRA My Business Account is the online portal where you manage all your corporate tax accounts, file returns, view correspondence, and communicate with the CRA. Setting this up early is essential.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Register at canada.ca/my-cra-business-account
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Use your BN and a CRA security code (mailed to your registered address)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Link all program accounts (RC, RT, RP) under your My Business Account
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Set up direct deposit for HST refunds
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Review all CRA mail online — paper notices may still be sent to your registered address
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Authorize your CRA representative: If you work with a CPA, authorize them as your representative in My Business Account so they can file and communicate with CRA on your behalf. This is done through the &quot;Manage Authorized Representatives&quot; function.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Post-incorporation CRA setup takes a few hours but is foundational to your corporation&apos;s compliance. The most common mistakes are registering for HST too late (missing startup ITCs) and setting up payroll after the first payroll has already been processed. Do this setup before your first transaction — not after.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">We Handle Post-Incorporation Setup for You</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Our incorporation package includes full CRA account registration, HST setup, and My Business Account authorization. Get everything done in one engagement.
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
