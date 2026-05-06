import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annual Filing Requirements for Ontario Corporations | Adapt Accounting',
  description: 'Complete list of annual filing obligations for Ontario corporations — T2 corporate tax return, annual return to ServiceOntario, HST, payroll, and minute book requirements.',
  keywords: 'annual return Ontario corporation, Ontario corporation annual filing requirements, T2 filing deadline Ontario, annual return ServiceOntario cost, corporation compliance Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/annual-filing-requirements-ontario-corporation' },
  openGraph: {
    title: 'Annual Filing Requirements for Ontario Corporations',
    description: 'Complete annual compliance checklist for Ontario corporations — T2, annual return, HST, payroll, and more.',
    url: 'https://adaptbusinesssolutions.com/blog/annual-filing-requirements-ontario-corporation',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Annual Filing Requirements for Ontario Corporations',
  description: 'Annual compliance checklist for Ontario corporations — T2, annual return, HST, and minute book requirements.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/annual-filing-requirements-ontario-corporation' },
}

const filings = [
  {
    title: 'T2 Corporate Income Tax Return (CRA)',
    deadline: '6 months after fiscal year-end',
    cost: 'CPA fees: $800–$2,500+',
    detail: 'Every corporation must file a T2, even if no income was earned (a nil return is still required). Tax owing is due 3 months after year-end (2 months for large corporations).',
    penalty: '5% of unpaid tax + 1%/month to 12 months for late filing',
  },
  {
    title: 'Ontario Annual Return (ServiceOntario)',
    deadline: '6 months after fiscal year-end',
    cost: '$12 filing fee',
    detail: 'Ontario Business Corporations Act requires every Ontario corporation to file an annual return with ServiceOntario confirming basic corporate information (directors, registered address, etc.).',
    penalty: 'Can lead to corporation being dissolved after sustained non-filing',
  },
  {
    title: 'HST/GST Return (CRA)',
    deadline: 'Annually, quarterly, or monthly depending on revenue and election',
    cost: 'CPA preparation fees vary',
    detail: 'Corporations registered for HST must file returns on schedule. Most small businesses file annually; those with over $1.5M in revenue must file monthly. HST owing must be remitted on time.',
    penalty: '1%–50% of net tax owing depending on circumstances',
  },
  {
    title: 'T4 Summary (if employees or salary paid to shareholders)',
    deadline: 'Last day of February following the calendar year',
    cost: 'Included in payroll processing',
    detail: 'If your corporation pays salaries (including to you as a shareholder-employee), T4 slips and a T4 Summary must be filed. T4s must be issued to recipients by the same deadline.',
    penalty: '$25/day late, min $100 to max $7,500 per return',
  },
  {
    title: 'T5 Dividend Slips (if dividends paid)',
    deadline: 'Last day of February following the calendar year',
    cost: 'Included in T2 preparation typically',
    detail: 'If your corporation pays dividends to shareholders, T5 slips must be issued to each shareholder and a T5 Summary filed with CRA.',
    penalty: '$25/day late, min $100 to max $7,500 per return',
  },
  {
    title: 'Minute Book Update (not a CRA filing)',
    deadline: 'Annually — no statutory deadline but best practice',
    cost: '$200–$500 if CPA-assisted',
    detail: 'Your corporate minute book must reflect annual meetings (at least one annual meeting of shareholders is required under the OBCA), director resolutions, and any changes to directors or officers.',
    penalty: 'No CRA penalty — but outdated minute books create problems on sale or audit',
  },
]

export default function AnnualFilingsPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-16 min-h-screen bg-white">
        <section className="hero-pattern text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold-hover text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Corporate Compliance</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">Annual Filing Requirements for Ontario Corporations</h1>
            <p className="text-navy-100 text-lg">Every Ontario corporation has annual obligations beyond the T2. Here&apos;s the complete compliance checklist with deadlines and penalties.</p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 6 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Incorporating is step one. Staying compliant is an ongoing responsibility. Many new corporation owners are surprised to learn that a T2 is not the only annual obligation — here&apos;s everything your corporation needs to do each year.
              </p>

              <div className="space-y-6 mb-10">
                {filings.map((filing, i) => (
                  <div key={filing.title} className="border border-gray-200">
                    <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
                      <h2 className="font-serif text-lg font-bold">{filing.title}</h2>
                      <span className="text-gold text-xs font-semibold">{i + 1}</span>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-xs text-gray-400 uppercase tracking-wide block mb-0.5">Deadline</span>
                          <span className="font-medium text-navy">{filing.deadline}</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 uppercase tracking-wide block mb-0.5">Cost</span>
                          <span className="font-medium text-navy">{filing.cost}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{filing.detail}</p>
                      <div className="bg-red-50 border border-red-100 px-4 py-2 text-xs text-red-700">
                        <strong>Penalty:</strong> {filing.penalty}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Choosing Your Fiscal Year-End</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike individuals (who always have a December 31 tax year-end), corporations can choose any fiscal year-end. Common choices:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'December 31 — aligns with personal tax year, simplifies salary/dividend planning',
                  'March 31 or June 30 — spreads CPA workload away from personal tax season (T1 season is Feb–April)',
                  'Anniversary of incorporation — some choose this for simplicity',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">We Handle All of This For You</h3>
                <p className="text-navy-100 text-sm mb-6">Our service packages include T2 preparation, T4/T5 filings, HST returns, and annual compliance — so you never miss a deadline.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/pricing" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                    View Service Packages <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 transition-colors">
                    Book Consultation
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}
