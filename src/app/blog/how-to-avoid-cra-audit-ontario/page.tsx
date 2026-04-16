import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Avoid a CRA Audit: What Ontario Business Owners Need to Know | Adapt Business Solutions',
  description: 'CRA audits are avoidable. Learn the most common audit triggers — unreported income, excessive expenses, repeated losses — and the record-keeping practices that protect your Ontario business.',
  keywords: 'CRA audit Ontario, how to avoid CRA audit, CRA audit triggers Canada, record keeping CRA, business audit Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/how-to-avoid-cra-audit-ontario' },
  openGraph: {
    title: 'How to Avoid a CRA Audit: What Ontario Business Owners Need to Know',
    description: 'Common CRA audit triggers and record-keeping practices that protect your Ontario business.',
    url: 'https://adaptbusinesssolutions.com/blog/how-to-avoid-cra-audit-ontario',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Avoid a CRA Audit: What Ontario Business Owners Need to Know',
  description: 'Common CRA audit triggers and record-keeping practices that protect your Ontario business.',
  datePublished: '2025-08-05',
  dateModified: '2025-08-05',
  author: { '@type': 'Organization', name: 'Adapt Business Solutions', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Business Solutions', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/how-to-avoid-cra-audit-ontario' },
}

export default function CRAAuditPage() {
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
              How to Avoid a CRA Audit: What Ontario Business Owners Need to Know
            </h1>
            <p className="text-navy-100 text-lg">
              CRA audits are largely avoidable. Learn the most common audit triggers, what the CRA is actually looking for, and the record-keeping practices that keep your business protected.
            </p>
            <p className="text-navy-100 text-sm mt-4">Published August 5, 2025 · 9 min read · By Adapt Business Solutions CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute professional tax advice. Consult a qualified CPA for advice specific to your situation.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The Canada Revenue Agency audits a relatively small percentage of business tax returns each year — but the consequences of an audit can be significant, including back taxes, interest, and penalties. Understanding what triggers an audit and how to protect yourself is a fundamental part of running a business in Ontario.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Triggers a CRA Audit?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CRA uses a combination of computerized risk-scoring algorithms and manual review to select audit candidates. Understanding these triggers is the first step to avoiding them.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">1. Unreported or Under-Reported Income</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CRA cross-references information from multiple sources: T4 slips from employers, T5 slips from financial institutions, T4A slips from contractors, and HST return data. Significant discrepancies between what third parties report paying you and what you report earning are a major red flag.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For cash-heavy businesses (restaurants, trades, retail), the CRA uses ratio analysis — comparing your reported gross margin to industry averages. If your margins are significantly below the industry norm, it may suggest unreported cash income.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">2. Excessive or Inconsistent Expense Deductions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CRA compares your expense ratios to industry benchmarks. If your meals and entertainment expenses represent 20% of revenue when the industry average is 3%, that will attract attention. Similarly, claiming 100% business use of a vehicle or 50% of your home as a home office are common red flags without strong documentation.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">3. Repeated Business Losses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Claiming business losses year after year — especially losses that offset employment or investment income — is a well-known audit trigger. The CRA requires that a business activity have a genuine profit-seeking motive. Consistently losing money may lead them to reclassify your activity as a &quot;hobby&quot; and disallow the losses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your business is legitimately in a startup phase with expected early losses, document your business plan and the commercial reasons for the losses.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">4. HST/GST Issues</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The CRA actively audits HST compliance. Common issues include: not registering when required, claiming input tax credits on personal expenses, or significant differences between reported HST and income on your corporate tax return.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">5. Large Deductions That Vary Significantly Year to Year</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dramatic swings in specific expense categories from year to year can trigger a review. For example, $500 in advertising one year and $50,000 the next, without a corresponding increase in revenue, invites questions.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Record-Keeping That Protects You</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The best audit defense is excellent records. The CRA requires you to keep records for a minimum of 6 years from the end of the last tax year to which they relate.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">For Every Business Expense</h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Original receipt or invoice (not just a credit card statement)',
                  'Clear business purpose noted on the receipt',
                  'For meals: names of people present and business purpose',
                  'For travel: business purpose, destination, and dates',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">For Vehicle Use</h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Logbook documenting every business trip: date, destination, purpose, km driven',
                  'Logbook for the full year, not just a representative sample',
                  'Odometer readings at the start and end of the year',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">For Home Office</h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Floor plan or calculation showing square footage of home office vs. total home',
                  'Evidence the space is used exclusively for business (dedicated workspace)',
                  'All home expense receipts: utilities, insurance, property tax, maintenance',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What to Do If You Are Audited</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Even with excellent records, some businesses get audited — it is not always a sign that something is wrong. If you receive a letter from the CRA:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Do not ignore it — respond within the requested timeframe',
                  'Contact your CPA immediately — do not communicate with the CRA on your own',
                  'Gather all documentation requested before responding',
                  'Be cooperative but do not volunteer information beyond what is requested',
                  'Know that your CPA can represent you throughout the audit process',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Protect Your Business with Professional CPA Support</h3>
                <p className="text-navy-100 text-sm mb-6">
                  A CPA keeps your records audit-ready year-round and can represent you if the CRA comes calling. Prevention is far less expensive than an audit response.
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
