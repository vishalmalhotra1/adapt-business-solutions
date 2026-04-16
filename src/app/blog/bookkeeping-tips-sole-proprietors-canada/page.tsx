import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bookkeeping Tips for Sole Proprietors in Canada | Adapt Business Solutions',
  description: 'The most practical bookkeeping habits for self-employed Canadians. Separate accounts, track expenses, understand HST thresholds, and choose the right accounting software.',
  keywords: 'bookkeeping sole proprietor Canada, self-employed bookkeeping tips, HST threshold Canada, accounting software small business Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/bookkeeping-tips-sole-proprietors-canada' },
  openGraph: {
    title: 'Bookkeeping Tips for Sole Proprietors in Canada',
    description: 'Practical bookkeeping habits for self-employed Canadians — separate accounts, expense tracking, HST, and software.',
    url: 'https://adaptbusinesssolutions.com/blog/bookkeeping-tips-sole-proprietors-canada',
    type: 'article',
  },
}

export default function BookkeepingTipsSoleProprietorsPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold-hover text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Bookkeeping</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Bookkeeping Tips for Sole Proprietors in Canada
            </h1>
            <p className="text-navy-100 text-lg">
              The most practical bookkeeping habits for self-employed Canadians — from separating your accounts to understanding the HST threshold and choosing the right software.
            </p>
            <p className="text-navy-100 text-sm mt-4">Published August 5, 2025 · 7 min read · By Adapt Business Solutions CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> This article is for educational purposes only. Consult a qualified CPA for advice specific to your situation.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                As a sole proprietor in Canada, you are the business — which means bookkeeping responsibility falls entirely on you. Good bookkeeping is not just about staying CRA-compliant; it gives you the financial visibility to make smarter decisions, price your services correctly, and grow with confidence. These are the foundational habits every self-employed Canadian should adopt.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">1. Separate Your Personal and Business Finances</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is the single most important step you can take. Open a dedicated business chequing account and, if you accept credit cards, a business credit card. Use these exclusively for business transactions and never mix personal and business spending.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When your accounts are mixed, every single transaction needs to be categorized manually at year-end — a time-consuming, error-prone process that significantly increases your accounting costs. With separate accounts, your bookkeeping takes a fraction of the time.
              </p>
              <div className="bg-gold-50 border-l-4 border-gold p-4 mb-6">
                <p className="text-sm text-gray-700"><strong>Pro tip:</strong> Pay yourself a regular &quot;salary&quot; transfer from your business account to your personal account. This makes it much clearer what money belongs to the business versus your personal finances.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">2. Track Every Business Expense in Real Time</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The biggest bookkeeping mistake sole proprietors make is letting receipts and expenses pile up all year and then trying to reconstruct everything at tax time. This approach leads to missed deductions, CRA compliance risks, and significant stress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instead, adopt a real-time approach: photograph receipts the moment you receive them using your accounting software&apos;s mobile app, categorize transactions weekly (not annually), and reconcile your bank account monthly.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">3. Understand the HST Registration Threshold</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Canada, you are required to register for HST once your total worldwide taxable supplies exceed $30,000 in any single calendar quarter, or over four consecutive calendar quarters. This threshold applies to your gross revenue, not your profit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many sole proprietors wait too long to register, resulting in penalties and interest when the CRA catches up. If you are approaching $30,000 in annual revenue, register proactively.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once registered, you collect HST from clients and remit it to the CRA, but you can also claim input tax credits (ITCs) on HST you paid on business expenses — which can result in a net refund if your business has significant expenses.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">4. Maintain a Vehicle Logbook</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you use your personal vehicle for business, you can deduct the business-use percentage of your vehicle expenses. To prove this percentage, the CRA requires a logbook documenting every business trip: date, destination, purpose, and kilometres driven.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Apps like MileIQ or TripLog can automate this by tracking trips via GPS. This is one of the easiest ways to avoid a CRA audit adjustment — and one of the most commonly missed deductions when records are not kept.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">5. Choose the Right Accounting Software</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For most Canadian sole proprietors, one of these three options makes the most sense:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { name: 'QuickBooks Self-Employed', desc: 'Excellent for freelancers and consultants. Automatically separates business and personal transactions and calculates quarterly taxes.' },
                  { name: 'FreshBooks', desc: 'Best for service-based businesses that invoice clients. Strong invoicing, time-tracking, and expense management.' },
                  { name: 'Wave Accounting', desc: 'Free option for very small businesses. Handles invoicing, expense tracking, and basic financial reporting.' },
                ].map(item => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-navy">{item.name}:</strong>{' '}
                      <span className="text-gray-700">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">6. Set Aside Money for Taxes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a sole proprietor, taxes are not automatically withheld from your income. You are responsible for paying income tax and CPP contributions on your net business income at the end of the year — or quarterly through the CRA&apos;s instalment payment system if you owe more than $3,000 in taxes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A common guideline is to set aside 25–30% of every client payment into a separate savings account designated for taxes. This prevents the year-end shock of a large unexpected tax bill.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">7. Know Your Filing Deadlines</h2>
              <ul className="space-y-2 mb-6">
                {[
                  'T1 (personal) tax return: April 30 (or June 15 if you or your spouse have self-employment income, but any balance owing is still due April 30)',
                  'HST returns: Monthly, quarterly, or annual depending on your election and revenue level',
                  'Instalment payments: Quarterly (March 15, June 15, September 15, December 15)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Get Your Bookkeeping Off Your Plate</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Let a professional CPA handle your bookkeeping so you can focus on growing your business. Monthly packages starting at $100/month.
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
