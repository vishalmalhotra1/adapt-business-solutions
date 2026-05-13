import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ontario Small Business Deduction 2025: Rates &amp; Eligibility | Adapt Business Solutions',
  description: 'The small business deduction reduces corporate tax to 12.2% in Ontario on the first $500,000. Learn eligibility rules, the passive income grind-down, and planning strategies for CCPCs.',
  keywords: 'Ontario small business deduction 2025, CCPC tax rate Ontario, small business deduction eligibility, passive income grind down SBD',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-small-business-deduction-2025' },
  openGraph: {
    title: 'Ontario Small Business Deduction 2025: Rates, Eligibility, and Planning Strategies',
    description: 'The small business deduction reduces corporate tax to 12.2% in Ontario on the first $500,000. Learn eligibility rules, the passive income grind-down, and planning strategies for CCPCs.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-small-business-deduction-2025',
    type: 'article',
    publishedTime: '2026-05-13',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ontario Small Business Deduction 2025: Rates, Eligibility, and Planning Strategies',
  description: 'The small business deduction reduces corporate tax to 12.2% in Ontario on the first $500,000. Learn eligibility rules, the passive income grind-down, and planning strategies for CCPCs.',
  datePublished: '2026-05-13',
  dateModified: '2026-05-13',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/ontario-small-business-deduction-2025',
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Tax Planning</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Ontario Small Business Deduction 2025: Rates, Eligibility, and Planning Strategies
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-13 &middot; 8 min read &middot; By Adapt Business Solutions CPA</p>
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
                The small business deduction (SBD) is the single most important tax benefit available to Canadian-Controlled Private Corporations (CCPCs) in Ontario. It reduces the corporate tax rate on active business income from the general corporate rate down to a significantly lower small business rate — creating powerful tax deferral opportunities for business owners.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The 2025 Small Business Tax Rates in Ontario</h2>
              <p className="text-gray-700 leading-relaxed">In Ontario, a CCPC claiming the full small business deduction pays a combined federal and provincial corporate tax rate of approximately 12.2% on active business income up to the $500,000 business limit.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Above the $500,000 business limit, income is taxed at the general corporate rate of approximately 26.5% combined. This creates a significant incentive to manage corporate income carefully.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Small business rate (Ontario): ~12.2% combined (9% federal + 3.2% Ontario)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  General corporate rate (Ontario): ~26.5% combined
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Tax deferral advantage vs top personal rate (53.5%): up to 41.3%
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  $500,000 business limit applies per associated group of corporations
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Key insight: If your corporation earns $200,000 in active income and you only need $80,000 personally, the $120,000 left in the corporation is taxed at only 12.2% vs your personal marginal rate. This deferred tax can be invested and compounded inside the corporation.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Is a CCPC and Do You Qualify?</h2>
              <p className="text-gray-700 leading-relaxed">A Canadian-Controlled Private Corporation (CCPC) is a private corporation that is resident in Canada and NOT controlled by non-residents or public corporations.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Most small business corporations owned by Canadian residents qualify automatically. The key requirements are: incorporated in Canada, not listed on a stock exchange, and controlled by Canadian residents.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must be a private corporation (not publicly traded)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must be Canadian-controlled (majority of votes held by Canadian residents)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must be resident in Canada
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cannot be controlled by a non-resident or public corporation
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Passive Income Grind-Down Rule</h2>
              <p className="text-gray-700 leading-relaxed">Since 2019, CCPCs with significant investment income face a reduction in their $500,000 business limit — called the passive income grind-down. This was introduced to discourage using corporations as investment vehicles.</p>
              <p className="text-gray-700 leading-relaxed mt-3">For every $1 of adjusted aggregate investment income (AAII) over $50,000, the business limit is reduced by $5. The limit is fully eliminated at $150,000 of passive income.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Business limit reduced $5 for every $1 of passive income over $50,000
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Full $500,000 business limit available if passive income is under $50,000
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Business limit fully eliminated at $150,000 of annual passive income
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Passive income includes: interest, rental income, taxable capital gains, dividends
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Planning tip: If your corporation earns $60,000 in passive income, your business limit is reduced by $50,000 (($60,000 - $50,000) × 5). Keeping passive income below $50,000 preserves your full small business deduction.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Associated Corporations Rule</h2>
              <p className="text-gray-700 leading-relaxed">If you own or control multiple corporations that are &quot;associated&quot; under the Income Tax Act, they must share one $500,000 business limit between them rather than each getting their own.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Two corporations are associated if one controls the other
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Also associated if the same person or group controls both
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Family members (spouse, minor children) are considered the same person for association rules
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Each associated group files an agreement allocating the shared $500,000 limit
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Warning: Creating multiple corporations to multiply the small business deduction is specifically targeted by the associated corporation rules. Consult a CPA before structuring multiple entities.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The small business deduction is the foundation of tax planning for Ontario incorporated businesses. Understanding the rates, the passive income grind-down, and the associated corporation rules allows you to structure your affairs to maximize the benefit. Most Ontario business owners should be aiming to keep active corporate income under $500,000 and passive investment income under $50,000 annually.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Maximize Your Small Business Deduction</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Our CPA team helps Ontario corporations structure their income and investments to preserve the full small business rate. Book a free consultation.
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
