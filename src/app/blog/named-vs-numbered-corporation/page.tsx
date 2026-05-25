import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Named vs Numbered Corporation Ontario: Real Trade-offs | Adapt Accounting',
  description: 'Named corporation vs numbered corporation in Ontario, real differences, costs, and which one is right for your business. Includes NUANS, trade names, and how to change later.',
  keywords: 'named vs numbered corporation Ontario, numbered corporation Ontario, named corporation Canada, NUANS named corporation, trade name Ontario corporation, how to name a corporation Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/named-vs-numbered-corporation' },
  openGraph: {
    title: 'Named vs Numbered Corporation Ontario: Real Trade-offs',
    description: 'The actual differences between naming your Ontario corporation vs taking a number, costs, speed, branding, and how to switch later.',
    url: 'https://adaptbusinesssolutions.com/blog/named-vs-numbered-corporation',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Named vs Numbered Corporation Ontario: Real Trade-offs',
  description: 'Named corporation vs numbered corporation in Ontario, differences, costs, and which one is right.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/named-vs-numbered-corporation' },
}

export default function NamedVsNumberedPage() {
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
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">Named vs Numbered Corporation in Ontario: The Real Trade-offs</h1>
            <p className="text-navy-100 text-lg">Do you need a name for your corporation or should you just take a number? Here&apos;s what actually matters.</p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 5 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                One of the first decisions when incorporating in Ontario: do you want a named corporation like &ldquo;Smith Consulting Inc.&rdquo; or a numbered corporation like &ldquo;1234567 Ontario Inc.&rdquo;? Most people assume they need a name. Many don&apos;t.
              </p>

              <div className="overflow-x-auto mb-10">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-3 font-semibold">Factor</th>
                      <th className="text-left p-3 font-semibold">Named Corporation</th>
                      <th className="text-left p-3 font-semibold">Numbered Corporation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Example', '"Acme Consulting Inc."', '"1234567 Ontario Inc."'],
                      ['NUANS Required', 'Yes (~$14 + our fee)', 'No'],
                      ['Processing Time', 'Slightly longer', 'Faster'],
                      ['Brand Recognition', 'Yes (in the legal name)', 'No, use a registered trade name'],
                      ['Name Protection in Ontario', 'Yes', 'N/A (numbered)'],
                      ['Can Operate Under a Trade Name', 'Yes', 'Yes, most do'],
                      ['Can Change Name Later', 'Yes (articles amendment)', 'Yes (add a name)'],
                      ['Tax Treatment', 'Identical', 'Identical'],
                    ].map(([factor, named, numbered], i) => (
                      <tr key={factor} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 font-medium text-navy">{factor}</td>
                        <td className="p-3 text-gray-700">{named}</td>
                        <td className="p-3 text-gray-700">{numbered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Trade Name Strategy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Numbered corporations don&apos;t have to operate as &ldquo;1234567 Ontario Inc.&rdquo; on their business cards. You can register a business trade name (also called a business name or DBA, &ldquo;doing business as&rdquo;) under the numbered corporation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                So in practice: &ldquo;1234567 Ontario Inc. carrying on business as Acme Consulting.&rdquo; Your clients see &ldquo;Acme Consulting.&rdquo; Contracts and invoices can show the trade name. Your incorporation documentation shows the numbered corp.
              </p>
              <div className="bg-gold-50 border-l-4 border-gold p-5 mb-8">
                <p className="text-sm text-gray-700"><strong>Trade name registration in Ontario</strong> costs $60 and gives you the right to use the name in Ontario, without the $14 NUANS search or the name protection limitations of a numbered corp. Most service businesses choose this route.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">When Should You Choose a Named Corporation?</h2>
              <ul className="space-y-2 mb-8">
                {[
                  'Your profession requires a named corporation (e.g., physician PCs must include the doctor\'s surname)',
                  'You want name protection in the corporate registry so no one else can incorporate with your name',
                  'You plan to raise investment, named corporations look more established to investors',
                  'Your branding is inseparable from the legal entity name (less common)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Our Recommendation for Most Small Businesses</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Start with a numbered corporation for speed and simplicity, register a trade name if you need a doing-business-as name, and amend to a named corporation later if/when it matters. The amendment is straightforward and costs ~$150 in government fees.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The most important thing is getting the corporation set up so you can start accessing the small business tax rate. The naming decision is relatively minor in the long run.
              </p>

              <div className="bg-nav py-8 mt-10 bg-navy p-8">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Incorporate Today, Named or Numbered</h3>
                <p className="text-navy-100 text-sm mb-6">We advise on the right choice for your situation and handle the full incorporation for $299 + government fees.</p>
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
