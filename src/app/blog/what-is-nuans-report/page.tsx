import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Is a NUANS Report and Do You Need One? | Adapt Accounting Services',
  description: 'NUANS reports explained: what they are, how much they cost, how long they last, and whether you actually need one for your Ontario incorporation. Named vs numbered corporation explained.',
  keywords: 'what is a NUANS report, NUANS report cost, NUANS report Ontario, do I need NUANS report, named vs numbered corporation Ontario, NUANS search Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/what-is-nuans-report' },
  openGraph: {
    title: 'What Is a NUANS Report and Do You Need One?',
    description: 'NUANS reports explained simply — cost, validity window, when you need one, and when you can skip it entirely.',
    url: 'https://adaptbusinesssolutions.com/blog/what-is-nuans-report',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is a NUANS Report and Do You Need One?',
  description: 'NUANS reports explained: what they are, cost, validity, and whether you need one for Ontario incorporation.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/what-is-nuans-report' },
}

export default function NuansReportPage() {
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
              What Is a NUANS Report and Do You Need One?
            </h1>
            <p className="text-navy-100 text-lg">The plain-English explanation of NUANS reports — what they cost, how long they last, and when you can skip one entirely.</p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 5 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                If you&apos;ve started researching how to incorporate in Ontario, you&apos;ve almost certainly encountered the term &ldquo;NUANS report.&rdquo; It sounds technical, but the concept is simple. Here&apos;s what you need to know.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">What Is NUANS?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                NUANS stands for <strong>Newly Upgraded Automated Name Search</strong>. It&apos;s a database maintained by Innovation, Science and Economic Development Canada (ISED) that contains:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'All federal corporation names (Corporations Canada)',
                  'All provincial corporation names across Canada',
                  'Registered business names (in most provinces)',
                  'Existing trademarks registered in Canada',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                A NUANS report searches this database against your proposed corporate name and returns a list of similar existing names and trademarks. The purpose is to prevent two businesses from having confusingly similar names.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Do You Need a NUANS Report?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="font-semibold text-red-800 mb-3">You NEED a NUANS if:</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• You want a <strong>named corporation</strong> (e.g., &ldquo;Acme Consulting Inc.&rdquo;)</li>
                    <li>• You&apos;re incorporating <strong>federally</strong> under the CBCA</li>
                    <li>• You&apos;re incorporating <strong>provincially in Ontario</strong> with a chosen name</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-green-800 mb-3">You do NOT need a NUANS if:</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• You&apos;re using a <strong>numbered corporation</strong> (e.g., &ldquo;1234567 Ontario Inc.&rdquo;)</li>
                    <li>• The government assigns the number — no name conflict possible</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">How Much Does a NUANS Report Cost?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A NUANS report costs approximately <strong>$13.80 CAD</strong> for a standard 5-business-day validity window. Reports ordered through authorized NUANS searchers (which we are) are processed immediately.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The report is valid for <strong>90 days</strong>. Your Articles of Incorporation must be filed within that 90-day window, or you&apos;ll need a fresh report.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Named vs Numbered Corporation — Which Should You Choose?</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-3 font-semibold"></th>
                      <th className="text-left p-3 font-semibold">Named Corporation</th>
                      <th className="text-left p-3 font-semibold">Numbered Corporation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Example', 'Acme Consulting Inc.', '1234567 Ontario Inc.'],
                      ['NUANS Required', 'Yes (~$14)', 'No'],
                      ['Time to Incorporate', '5–15 business days', '5–10 business days'],
                      ['Brand Recognition', 'Yes', 'No (use a trade name)'],
                      ['Cost', 'Slightly higher', 'Slightly lower'],
                      ['Change Name Later', 'Yes (requires new NUANS)', 'Yes (can add a name)'],
                    ].map(([label, named, numbered], i) => (
                      <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 font-medium text-navy">{label}</td>
                        <td className="p-3 text-gray-700">{named}</td>
                        <td className="p-3 text-gray-700">{numbered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gold-50 border-l-4 border-gold p-5 mb-8">
                <p className="text-sm text-gray-700"><strong>Practical tip:</strong> Many business owners incorporate as a numbered company first (faster and cheaper), then operate under a registered business trade name. For example, &ldquo;1234567 Ontario Inc. carrying on business as Acme Consulting.&rdquo; You can always apply to amend your corporation name later.</p>
              </div>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Ready to Incorporate?</h3>
                <p className="text-navy-100 text-sm mb-6">We handle the NUANS search and entire incorporation process for $299 + government fees. Named or numbered, federal or provincial.</p>
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
