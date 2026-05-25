import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'T1135 Foreign Property Explained: Robinhood, Coinbase, US Rentals | Adapt Accounting',
  description: 'T1135 Foreign Income Verification Statement guide for Canadians, who must file, what counts as foreign property, Robinhood and Coinbase reporting, US rental income, and penalties for non-filing.',
  keywords: 'T1135 foreign property Canada, T1135 Robinhood Canada, Coinbase Canada T1135, US rental property Canadian tax, T1135 filing CPA, US dividends Canadian tax, foreign income verification statement',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/t1135-foreign-property-explained' },
  openGraph: {
    title: 'T1135 Foreign Property Explained: Robinhood, Coinbase, US Rentals',
    description: 'Complete guide to T1135 for Canadians, who needs to file, what counts as foreign property, and how to report US brokerage accounts and rental income.',
    url: 'https://adaptbusinesssolutions.com/blog/t1135-foreign-property-explained',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'T1135 Foreign Property Explained: Robinhood, Coinbase, US Rentals',
  description: 'Complete guide to the T1135 Foreign Income Verification Statement for Canadian taxpayers.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/t1135-foreign-property-explained' },
}

export default function T1135Page() {
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Cross-Border Tax</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              T1135 Explained: Who Needs to File, What Counts, and What Happens If You Don&apos;t
            </h1>
            <p className="text-navy-100 text-lg">Canadians with Robinhood, Coinbase, US rental properties, or other foreign assets over $100K CAD must file T1135. Here&apos;s everything you need to know.</p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 8 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> Foreign tax reporting is complex and penalties for non-compliance are significant. This article is educational. Always consult a CPA familiar with cross-border tax for your specific situation.
            </p>
          </div>
        </div>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                If you hold foreign investments, a US brokerage account, cryptocurrency on a foreign exchange, or real estate outside Canada worth more than $100,000 CAD at any point during the year, you almost certainly need to file a T1135. Many Canadians don&apos;t realize this, and CRA&apos;s penalties for late or non-filing are steep.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">What Is the T1135?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The T1135, or Foreign Income Verification Statement, is an annual disclosure form required by the Income Tax Act (section 233.3). It requires Canadian residents to report specified foreign property with a total cost exceeding $100,000 CAD at any point in the taxation year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Note: this is a <strong>reporting requirement</strong>, not a new tax. You still report the income from foreign property on your T1 return. The T1135 is a separate disclosure of the property itself.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Who Must File T1135?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Canadian residents (individuals, corporations, and trusts) who at any point during the year held specified foreign property with a total <strong>cost exceeding $100,000 CAD</strong>.</p>
              <div className="bg-gold-50 border-l-4 border-gold p-5 mb-6">
                <p className="text-sm text-gray-700"><strong>The threshold is based on cost, not market value.</strong> If you invested $110,000 CAD in US stocks and they dropped to $80,000 by year-end, you still need to file because the original cost exceeded $100,000.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Counts as &ldquo;Specified Foreign Property&rdquo;?</h2>
              <ul className="space-y-2 mb-6">
                {[
                  'Funds held in foreign bank accounts (e.g., a US bank account)',
                  'Shares of foreign corporations (US stocks on Robinhood, Wealthsimple US stocks, etc.)',
                  'Debt owed by a non-resident (foreign bonds, foreign government debt)',
                  'Real property outside Canada (US rental properties, vacation homes)',
                  'Interests in foreign trusts',
                  'Cryptocurrency held on a foreign exchange (Coinbase, Kraken, Binance US)',
                  'Foreign pension plans (may have additional reporting on T1)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Common Situations: Robinhood, Coinbase, US Rentals</h2>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Robinhood and US Brokerage Accounts</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Robinhood, IBKR, Charles Schwab, TD Ameritrade, and other US brokerages are foreign accounts for Canadian tax purposes. If the total cost of your US-held securities at any point exceeded $100,000 CAD, you must file T1135. You also need to report US dividends on your T1 as foreign income (with foreign tax credit for the 15% US withholding).
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Coinbase and Foreign Crypto Exchanges</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cryptocurrency held on a foreign exchange (Coinbase, Kraken, Binance US) is considered foreign property for T1135 purposes. CRA has confirmed this position. If the adjusted cost base of your crypto on foreign exchanges exceeded $100,000 CAD, T1135 applies. Crypto on Canadian exchanges (Wealthsimple Crypto, Newton) is domestic property.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">US Rental Properties</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Canadians owning rental properties in the US face a multi-layered filing obligation: T1135 in Canada (if cost &gt; $100K), T1 foreign rental income reporting, potential US Form 1040-NR filing, and FIRPTA considerations on eventual sale. This is one of the most complex cross-border tax situations, professional advice is essential.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Penalties for Non-Filing</h2>
              <div className="bg-red-50 border border-red-200 p-6 mb-8">
                <h3 className="font-semibold text-red-800 mb-3">T1135 Penalties Are Serious</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Late filing: $25/day up to $2,500 per year</li>
                  <li>• Knowingly failing to file or gross negligence: $500/month up to 24 months ($12,000)</li>
                  <li>• Where property wasn&apos;t reported on T1: additional penalty of 5% of the cost of unreported property</li>
                  <li>• CRA has a voluntary disclosure program, but it requires coming forward before CRA contacts you</li>
                </ul>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">How We Help</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We prepare T1135 filings for Canadians with US brokerage accounts, foreign real estate, and cryptocurrency on foreign exchanges. We also handle the associated T1 foreign income reporting, foreign tax credits, and where necessary, US filing obligations.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Need Help with T1135 or Cross-Border Tax?</h3>
                <p className="text-navy-100 text-sm mb-6">We specialize in T1135, foreign income reporting, and cross-border tax situations for Canadians with US investments, rental properties, and crypto on foreign exchanges.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/services/tax-preparation" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                    Tax Services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 transition-colors">
                    Book Free Consultation
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
