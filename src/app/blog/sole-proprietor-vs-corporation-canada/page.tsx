import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sole Proprietor vs Corporation Canada: Tax Math at $50K, $100K, $150K | Adapt Accounting',
  description: 'Real numbers comparing sole proprietorship vs incorporation tax burden in Canada at different income levels. See exactly when incorporating saves money, with actual tax calculations.',
  keywords: 'sole proprietor vs corporation Canada, should I incorporate Canada, incorporation tax savings Ontario, is incorporating worth it, corporation vs sole proprietor tax Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/sole-proprietor-vs-corporation-canada' },
  openGraph: {
    title: 'Sole Proprietor vs Corporation Canada: The Real Tax Math',
    description: 'Real numbers comparing sole proprietorship vs incorporation at $50K, $100K, and $150K net income. See when incorporating actually pays off.',
    url: 'https://adaptbusinesssolutions.com/blog/sole-proprietor-vs-corporation-canada',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sole Proprietor vs Corporation Canada: Tax Math at $50K, $100K, $150K',
  description: 'Real tax math comparing sole proprietorship and incorporation in Canada at different income levels.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/sole-proprietor-vs-corporation-canada' },
}

const incomeScenarios = [
  {
    income: '$50,000 Net Income',
    soleProp: { tax: '~$11,000', effectiveRate: '22%', notes: 'Federal + Ontario personal tax. No CPP on self-employment portion is separate.' },
    corp: { tax: '~$5,500 corp + tax on salary/dividend', effectiveRate: '11% (retained)', notes: 'Corp tax at ~11% on retained income. If you withdraw all $50K, personal tax applies, no savings.' },
    verdict: 'Likely not worth it',
    verdictColor: 'text-red-600',
    explanation: 'At $50K, if you need all the money to live on, there\'s no deferral benefit. The $1,500–$3,000/year in extra accounting costs (T2, bookkeeping) wipe out any advantage. Exception: if you have other T4 income and don\'t need the business income, a corporation can defer tax.',
  },
  {
    income: '$100,000 Net Income',
    soleProp: { tax: '~$31,000', effectiveRate: '31%', notes: 'Ontario top bracket kicks in. Self-employment CPP adds another ~$3,500.' },
    corp: { tax: '~$11,000 corp (retained $100K)', effectiveRate: '11%', notes: 'CCPC small business rate ~9-12%. Pay yourself $50K salary/dividends and leave $50K in corp.' },
    verdict: 'Strong case for incorporating',
    verdictColor: 'text-green-600',
    explanation: 'If you can leave ~$50K in the corporation, you defer ~$10,000 in personal tax annually. That $10K compounds inside the corp tax-free until withdrawn. Accounting costs of $2,500–$4,000/year are more than covered. The math works.',
  },
  {
    income: '$150,000 Net Income',
    soleProp: { tax: '~$54,000', effectiveRate: '36%', notes: 'Ontario surtax and 43.41% marginal rate on income above $100K. CPP maxed.' },
    corp: { tax: '~$16,500 corp (retained $150K)', effectiveRate: '11%', notes: 'Pay $80K salary (covers living), leave $70K in corp at ~11% corporate rate.' },
    verdict: 'Definitely incorporate',
    verdictColor: 'text-green-600',
    explanation: 'Annual tax deferral on $70K retained in corp: roughly $21,000 saved per year. Over 10 years, that\'s $200K+ of capital that stays working inside your corporation instead of going to CRA. Accounting costs are a rounding error at this income level.',
  },
]

export default function SolePropVsCorpPage() {
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Tax Strategy</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Sole Proprietor vs Corporation Canada: The Real Tax Math at $50K, $100K, and $150K
            </h1>
            <p className="text-navy-100 text-lg">
              Exact numbers, not generalizations. See when incorporating saves money in Canada, and when it doesn&apos;t.
            </p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 10 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> Tax rates and figures are approximate for 2025/2026 Ontario residents. Your situation depends on deductions, credits, other income, and personal withdrawal needs. Consult a CPA before making incorporation decisions.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                &ldquo;Should I incorporate?&rdquo; is the most common question we get from Ontario freelancers, consultants, and small business owners. The correct answer is almost always &ldquo;it depends on your income level and how much you need to withdraw.&rdquo; Here&apos;s the math for three real income scenarios.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Core Concept: Tax Deferral, Not Tax Elimination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Incorporating doesn&apos;t make income disappear. It creates a tax deferral: your corporation pays a lower rate on retained earnings now, and you pay personal tax when you eventually withdraw those earnings as salary or dividends. The benefit comes from the time value of money, the tax you don&apos;t pay today compounds inside your corporation.
              </p>
              <div className="bg-gold-50 border-l-4 border-gold p-5 mb-8">
                <p className="text-sm text-gray-700"><strong>Key insight:</strong> The incorporation benefit only materializes if you <em>don&apos;t need all the money to live on</em>. If you withdraw 100% of business profits personally, incorporation adds cost without adding savings.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-6">The Three Scenarios</h2>

              {incomeScenarios.map(scenario => (
                <div key={scenario.income} className="mb-10 border border-gray-200 overflow-hidden">
                  <div className="bg-navy text-white px-8 py-4">
                    <h3 className="font-serif text-xl font-bold">{scenario.income}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="p-6">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Sole Proprietor</div>
                      <div className="font-serif text-3xl font-bold text-navy mb-1">{scenario.soleProp.tax}</div>
                      <div className="text-sm text-gray-500 mb-3">Effective rate: {scenario.soleProp.effectiveRate}</div>
                      <p className="text-sm text-gray-600">{scenario.soleProp.notes}</p>
                    </div>
                    <div className="p-6 bg-gray-50">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Corporation (CCPC)</div>
                      <div className="font-serif text-3xl font-bold text-navy mb-1">{scenario.corp.tax}</div>
                      <div className="text-sm text-gray-500 mb-3">Retained rate: {scenario.corp.effectiveRate}</div>
                      <p className="text-sm text-gray-600">{scenario.corp.notes}</p>
                    </div>
                  </div>
                  <div className="px-8 py-5 border-t border-gray-100">
                    <div className={`font-semibold text-sm mb-2 ${scenario.verdictColor}`}>Verdict: {scenario.verdict}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{scenario.explanation}</p>
                  </div>
                </div>
              ))}

              <h2 className="font-serif text-2xl font-bold text-navy mt-12 mb-4">Other Reasons to Incorporate (Beyond Tax)</h2>
              <ul className="space-y-3 mb-8">
                {[
                  { title: 'Liability protection', desc: 'A corporation shields personal assets from business debts and lawsuits. A sole proprietor has no such shield.' },
                  { title: 'Credibility and contracts', desc: 'Many enterprise clients and government contracts require or prefer dealing with an incorporated entity.' },
                  { title: 'Income splitting (careful)', desc: 'With proper share structure, dividends can be paid to a spouse or adult children in lower tax brackets. TOSI rules (Tax on Split Income) limit this, talk to a CPA.' },
                  { title: 'Lifetime Capital Gains Exemption (LCGE)', desc: 'If you sell a qualifying small business corporation, you may shelter up to $1.25M in capital gains. This exemption is only available to incorporated businesses.' },
                  { title: 'Retirement and exit planning', desc: 'Retaining earnings inside a corporation and investing through a holding company builds a tax-sheltered investment portfolio.' },
                ].map(item => (
                  <li key={item.title} className="border-l-2 border-gold pl-4">
                    <div className="font-semibold text-navy text-sm">{item.title}</div>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Hidden Costs of a Corporation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Don&apos;t forget to subtract these from any projected savings:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-3 font-semibold">Annual Cost</th>
                      <th className="text-left p-3 font-semibold">Estimated Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['T2 corporate tax return (CPA)', '$800 – $2,500'],
                      ['Bookkeeping (if outsourced)', '$1,200 – $4,800/yr'],
                      ['Ontario Annual Return', '$12/yr'],
                      ['Minute book updates', '$200 – $500 as needed'],
                      ['Payroll setup (if paying salary)', '$300 – $600 one-time'],
                    ].map(([cost, range], i) => (
                      <tr key={cost} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 text-gray-700">{cost}</td>
                        <td className="p-3 text-navy font-medium">{range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                For most small business owners at $100K+ net income, the annual accounting costs of $2,000–$5,000 are easily covered by the tax deferral. At $50K income where you need to withdraw everything, those costs make incorporation a net loss.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Quick Decision Framework</h2>
              <div className="space-y-3 mb-8">
                {[
                  { q: 'Do you earn less than $80K net and need all of it?', a: 'Stay sole prop. The math doesn\'t work yet.' },
                  { q: 'Do you earn $80K–$100K and can leave some in the business?', a: 'Borderline. Run the numbers with a CPA for your situation.' },
                  { q: 'Do you earn $100K+ and only need part personally?', a: 'Strong candidate for incorporation. The tax deferral compounds significantly.' },
                  { q: 'Do you have significant liability exposure?', a: 'Incorporate regardless of income, the liability shield alone may be worth it.' },
                  { q: 'Are you planning to sell the business?', a: 'Incorporate now so you can qualify for the $1.25M Lifetime Capital Gains Exemption.' },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-gray-50 border border-gray-100 p-4">
                    <div className="font-semibold text-navy text-sm mb-1">{q}</div>
                    <div className="text-gray-600 text-sm">{a}</div>
                  </div>
                ))}
              </div>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Get Your Personal Incorporation Analysis</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Every situation is different. We&apos;ll model the actual tax impact for your income level, withdrawal needs, and business type, before you pay anything.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/services/incorporation" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                    View Incorporation Service <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
