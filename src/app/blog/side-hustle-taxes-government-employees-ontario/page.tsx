import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Side Hustle Taxes for Government Employees in Ontario | Adapt Accounting',
  description: 'Can you run a side business as a government employee in Canada? Tax obligations, conflict of interest rules, incorporation considerations, and how to report self-employment income on your T1.',
  keywords: 'side hustle taxes government employees Ontario, can I run side business government employee Canada, government employee incorporation Canada, side hustle taxes Canada, self-employment government employee Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/side-hustle-taxes-government-employees-ontario' },
  openGraph: {
    title: 'Side Hustle Taxes for Government Employees in Ontario',
    description: 'Tax rules, conflict of interest obligations, and incorporation options for Ontario government employees with side businesses.',
    url: 'https://adaptbusinesssolutions.com/blog/side-hustle-taxes-government-employees-ontario',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Side Hustle Taxes for Government Employees in Ontario',
  description: 'Tax obligations, conflict of interest rules, and incorporation options for government employees with side businesses.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/side-hustle-taxes-government-employees-ontario' },
}

export default function SideHustleGovEmployeePage() {
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Tax Strategy</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Side Hustle Taxes for Government Employees in Ontario
            </h1>
            <p className="text-navy-100 text-lg">Tax obligations, conflict of interest rules, and whether incorporation makes sense when you have a government job and a growing side business.</p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 7 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> Conflict of interest rules vary by government employer, bargaining unit, and level of government. Always review your specific employment agreement, code of conduct, and consult HR before starting or expanding a side business. This article covers tax treatment — not legal employment obligations.
            </p>
          </div>
        </div>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Government employees across Canada are increasingly running side businesses — consulting, coaching, tutoring, e-commerce, ABA therapy, accounting, and dozens of other pursuits. The tax rules are clear. The conflict of interest rules are what trip people up. Here&apos;s how to navigate both.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">Can Government Employees Run a Side Business?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Generally, yes — with conditions. The key rules vary by employer:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    level: 'Federal Government (PS Act)',
                    rule: 'Public servants must disclose and obtain approval for outside activities that might create a real or apparent conflict of interest with their official duties. The bar is whether your side business could be seen to benefit from your position or interfere with your government duties.',
                  },
                  {
                    level: 'Ontario Provincial Government',
                    rule: 'The Public Service of Ontario Act requires disclosure of private interests that conflict with official duties. Employees submit a Confidential Disclosure Statement. Approval is not automatic — it depends on your role and the nature of the business.',
                  },
                  {
                    level: 'Municipalities and Agencies',
                    rule: 'Rules vary significantly. Some collective agreements prohibit secondary employment entirely; others require only disclosure. Read your specific CBA or employment agreement.',
                  },
                ].map(({ level, rule }) => (
                  <div key={level} className="border-l-4 border-gold pl-5">
                    <div className="font-semibold text-navy text-sm mb-1">{level}</div>
                    <p className="text-gray-600 text-sm">{rule}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 p-5 mb-8">
                <p className="text-sm font-semibold text-amber-800 mb-1">Bottom line before starting</p>
                <p className="text-sm text-amber-700">Read your code of conduct, disclose to HR, and get written approval where required. Failing to disclose can be grounds for disciplinary action regardless of how small the business is.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">How Is Side Business Income Taxed?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self-employment income from a side business is taxed just like any other income — it gets added to your T4 employment income and taxed at your marginal rate. There is no separate &ldquo;side hustle&rdquo; tax rate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For most government employees with good salaries, this means your side business income is taxed starting at your marginal rate — often 33–43% in Ontario for income between $100K–$150K, or up to 53.5% above $220K.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You report self-employment income on <strong>T2125 (Statement of Business or Professional Activities)</strong>, which is attached to your T1 personal return.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Deductions for Government Employee Side Businesses</h2>
              <ul className="space-y-2 mb-8">
                {[
                  { d: 'Home office expenses', note: 'If you work from home — proportional heat, hydro, internet, rent/mortgage interest.' },
                  { d: 'Vehicle expenses', note: 'If you use your car for business (track your km!) — gas, insurance, repairs, depreciation.' },
                  { d: 'Equipment and supplies', note: 'Computers, software, office supplies used for the business.' },
                  { d: 'Professional development', note: 'Courses, certifications, and training directly related to your business.' },
                  { d: 'Professional fees', note: 'Accounting, legal, and consulting fees for the business.' },
                  { d: 'Advertising and marketing', note: 'Website, ads, business cards, domain names.' },
                  { d: 'HST/GST collected', note: 'If your gross revenue exceeds $30,000, you must register for HST and remit to CRA.' },
                ].map(({ d, note }) => (
                  <li key={d} className="border-l-2 border-gold pl-4">
                    <div className="font-semibold text-navy text-sm">{d}</div>
                    <p className="text-gray-500 text-xs mt-0.5">{note}</p>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Should a Government Employee Incorporate?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The same math applies as for any business owner: incorporation makes sense when you can retain income inside the corporation that you don&apos;t need personally. For a government employee, this is an interesting situation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 p-5">
                  <h3 className="font-semibold text-green-800 mb-2 text-sm">Good candidate for incorporation if:</h3>
                  <ul className="space-y-1 text-xs text-green-700">
                    <li>• Side business earns $80K+ per year</li>
                    <li>• You don&apos;t need the side income to cover living expenses (government salary handles that)</li>
                    <li>• You want to build a separate investment/retirement vehicle</li>
                    <li>• Business has liability exposure</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-5">
                  <h3 className="font-semibold text-red-800 mb-2 text-sm">May not be worth incorporating if:</h3>
                  <ul className="space-y-1 text-xs text-red-700">
                    <li>• Side business earns under $50K and you need it all</li>
                    <li>• Your conflict of interest rules specifically prohibit directorship of a private corporation</li>
                    <li>• The compliance cost ($2K+ per year in T2 + bookkeeping) isn&apos;t justified by income</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gold-50 border-l-4 border-gold p-5 mb-8">
                <p className="text-sm text-gray-700"><strong>Important check:</strong> Some government conflict of interest regimes specifically address being a director or officer of a private corporation. Verify with your employer before incorporating — you may need approval to be a director even if the business itself is approved.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">HST Registration — Don&apos;t Forget This</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Once your side business gross revenue exceeds $30,000 in any rolling 12-month period, you must register for HST, charge it on your services, and remit to CRA. This applies even if you&apos;re also a T4 employee. Missing this is one of the most common compliance errors we see. The good news: you can claim Input Tax Credits on HST you pay for business expenses.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">We Understand the Government Employee Situation</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We have direct experience with the specific tax and compliance requirements for government employees running side businesses — including T2125, HST registration, and incorporation decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                    Book Free Consultation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/services/incorporation" className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 transition-colors">
                    Incorporation Service
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
