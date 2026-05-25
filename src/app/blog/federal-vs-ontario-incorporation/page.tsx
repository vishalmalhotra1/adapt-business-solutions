import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Federal vs Ontario Incorporation: Which Should You Choose? | Adapt Accounting',
  description: 'Federal (CBCA) vs Ontario (OBCA) incorporation compared, costs, name protection, compliance requirements, and which is right for your business in 2026.',
  keywords: 'federal vs Ontario incorporation, CBCA vs OBCA, federal incorporation Ontario, provincial incorporation Ontario, incorporate federally Canada, federal vs provincial corporation',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/federal-vs-ontario-incorporation' },
  openGraph: {
    title: 'Federal vs Ontario Incorporation: Which Should You Choose?',
    description: 'Clear comparison of federal (CBCA) and Ontario (OBCA) incorporation, costs, name protection, compliance, and how to decide.',
    url: 'https://adaptbusinesssolutions.com/blog/federal-vs-ontario-incorporation',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Federal vs Ontario Incorporation: Which Should You Choose?',
  description: 'Federal (CBCA) vs Ontario (OBCA) incorporation compared, costs, name protection, and compliance requirements.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/federal-vs-ontario-incorporation' },
}

export default function FederalVsOntarioPage() {
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Incorporation</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Federal vs Ontario Incorporation: Which Should You Choose?
            </h1>
            <p className="text-navy-100 text-lg">A clear breakdown of the real differences, costs, and which option is right for your Ontario business.</p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 6 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                When incorporating in Ontario, you face a fundamental choice: incorporate federally under the Canada Business Corporations Act (CBCA) or provincially under the Ontario Business Corporations Act (OBCA). Both create a valid corporation with the same CCPC tax treatment. The differences are mostly about where you operate and how much you want to pay.
              </p>

              <div className="overflow-x-auto mb-10">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-3 font-semibold">Factor</th>
                      <th className="text-left p-3 font-semibold">Federal (CBCA)</th>
                      <th className="text-left p-3 font-semibold">Ontario (OBCA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Filing Authority', 'Corporations Canada (federal)', 'ServiceOntario (provincial)'],
                      ['Government Filing Fee', '$200 (online)', '$300'],
                      ['Extra-Provincial Registration in ON', '$60 (required)', 'Not required, already in ON'],
                      ['Total Government Cost', '~$260', '$300'],
                      ['Name Protection Scope', 'All provinces & territories', 'Ontario only'],
                      ['Annual Return', 'Federal annual return required', 'Ontario annual return ($12/yr)'],
                      ['Director Residency Rules', 'At least 25% Canadian-resident directors', 'No director residency requirement'],
                      ['Best For', 'National businesses, multi-province ops', 'Ontario-only or local businesses'],
                    ].map(([factor, federal, ontario], i) => (
                      <tr key={factor} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 font-medium text-navy">{factor}</td>
                        <td className="p-3 text-gray-700">{federal}</td>
                        <td className="p-3 text-gray-700">{ontario}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Case for Ontario (Provincial) Incorporation</h2>
              <ul className="space-y-2 mb-8">
                {[
                  'You only operate in Ontario, no need to pay for cross-province name protection you won\'t use.',
                  'No Canadian director residency requirement, relevant if you have non-resident directors.',
                  'Simpler annual compliance, one set of filings with ServiceOntario.',
                  'Slightly higher government fee ($300 vs $260 for federal), but one less registration step.',
                  'Most Ontario small businesses are provincially incorporated.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Case for Federal Incorporation</h2>
              <ul className="space-y-2 mb-8">
                {[
                  'You plan to operate in multiple provinces, federal incorporation gives you the right to register in any province.',
                  'Your corporate name needs national protection, a federal name is protected across Canada.',
                  'You have non-Canadian clients or investors who may prefer the "Canada" designation in your name.',
                  'You plan to raise investment or want to position the corporation for eventual national scale.',
                  'Director residency rules allow non-residents, but this applies either way with provincial incorporation.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Tax Treatment Is Identical</h2>
              <div className="bg-gold-50 border-l-4 border-gold p-5 mb-8">
                <p className="text-sm text-gray-700"><strong>Important:</strong> Federal and Ontario provincial corporations have identical CCPC tax treatment. Both qualify for the small business deduction (9% federal + ~3% Ontario = ~12% combined rate on active income). The choice of federal vs provincial does not affect your tax rate or tax planning options in any way.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Verdict for Most Ontario Small Businesses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you operate primarily in Ontario, the provincial OBCA incorporation is the right choice. It&apos;s simpler, has fewer ongoing compliance requirements, and costs less in total filing fees.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Choose federal if you have genuine national expansion plans, need name protection across provinces, or have specific structural reasons to be under federal jurisdiction.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">We Help You Choose and Execute</h3>
                <p className="text-navy-100 text-sm mb-6">Our free consultation covers federal vs provincial, named vs numbered, and share structure, before you commit. Flat $299 + government fees.</p>
                <Link href="/services/incorporation" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                  View Incorporation Service <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
