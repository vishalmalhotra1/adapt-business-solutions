import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ontario Incorporation Share Structure 2025: Which Is Right for You? | Adapt Business Solutions',
  description: 'The share structure you choose at incorporation affects income splitting, future investors, and business sales for decades. Here is how to get it right from day one.',
  keywords: 'Ontario incorporation share structure, multiple share classes Ontario corporation, income splitting shares Ontario, TOSI share structure',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-incorporation-share-structure-guide' },
  openGraph: {
    title: 'Ontario Incorporation: Choosing the Right Share Structure from Day One',
    description: 'The share structure you choose at incorporation affects income splitting, future investors, and business sales for decades. Here is how to get it right from day one.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-incorporation-share-structure-guide',
    type: 'article',
    publishedTime: '2026-05-07',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ontario Incorporation: Choosing the Right Share Structure from Day One',
  description: 'The share structure you choose at incorporation affects income splitting, future investors, and business sales for decades. Here is how to get it right from day one.',
  datePublished: '2026-05-07',
  dateModified: '2026-05-07',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/ontario-incorporation-share-structure-guide',
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Incorporation</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Ontario Incorporation: Choosing the Right Share Structure from Day One
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-07 &middot; 8 min read &middot; By Adapt Business Solutions CPA</p>
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
                Of all the decisions made at incorporation, the share structure is the most consequential and the most commonly under-thought. The share structure determines who owns the corporation, who receives dividends, how voting control works, and whether you can split income with family members or bring in investors later. Changing the share structure after incorporation is possible but expensive and complex — getting it right at the start costs nothing extra.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Basic Structure: One Class of Common Shares</h2>
              <p className="text-gray-700 leading-relaxed">The simplest possible share structure is one class of common shares with identical voting rights, dividend rights, and participation on wind-up. This is what most online incorporation services create by default.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Easy to understand and administer
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Every shareholder has identical rights
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Perfectly adequate for a solo business owner with no plans to expand ownership
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cannot easily be used for income splitting with family members
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">When one class works: If you are a solo owner, have no spouse or adult children you want to involve, and do not plan to bring in investors or sell shares in the near future, a single class is fine. Add complexity only when you need it.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Multiple Share Classes: Enabling Income Splitting</h2>
              <p className="text-gray-700 leading-relaxed">The most common reason Ontario incorporated owners want multiple share classes is income splitting — the ability to pay dividends to a spouse or adult children who are in lower tax brackets, reducing the family&apos;s overall tax burden.</p>
              <p className="text-gray-700 leading-relaxed mt-3">To enable this, your articles of incorporation should authorize multiple classes of shares — typically common shares (voting, participating) and one or more classes of non-voting or discretionary dividend shares.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Class A (voting, participating): held by the business owner
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Class B (non-voting, dividend discretion): can be issued to spouse or adult children
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Directors can choose to declare dividends on one class and not others
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Allows paying higher dividends to lower-income family members each year
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">TOSI rules warning: The Tax on Split Income (TOSI) rules enacted in 2018 significantly limit income splitting with family members under 25, or those not meaningfully engaged in the business. Before planning any income splitting strategy, confirm with a CPA that the dividends will not be subject to TOSI at the highest marginal rate.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Preferred Shares: For Investments and Estate Freezes</h2>
              <p className="text-gray-700 leading-relaxed">Preferred shares have a fixed redemption value and priority on dividends — they do not participate in future growth of the corporation. They are used primarily for estate freezes and investment structuring.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Estate freeze: owner exchanges growth shares for preferred shares at current value, letting future growth accrue to new shareholders
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Fixed dividend: can be structured to pay a fixed annual dividend rate
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Priority on wind-up: paid out before common shareholders if corporation is wound up
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Often used in family trust structures and holding company reorganizations
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Founder Shares: Planning for Future Investors</h2>
              <p className="text-gray-700 leading-relaxed">If you anticipate bringing in outside investors — whether angel investors, venture capital, or business partners — your initial share structure should be designed with this in mind from the start.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Issue shares to founders at a very low price per share at inception (before any value is created)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Later investors pay a higher price, reflecting the value you have built
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  A large authorized share count (e.g., unlimited or 10,000,000 shares) gives flexibility
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Anti-dilution provisions can be added to protect early investors
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Subscription price matters: Founders should subscribe for their shares at a nominal price (e.g., $0.001 or $1 per share). If the company grows significantly, later shares sold to investors at $1,000 per share creates a stark value difference — exactly the intent.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">How to Change Your Share Structure Later</h2>
              <p className="text-gray-700 leading-relaxed">If your business grows and your initial share structure no longer fits, you can amend your articles of incorporation to add or modify share classes. This is a formal corporate process requiring shareholder approval and articles of amendment filed with the province.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Requires shareholder resolution approving the amendment
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  New articles of amendment filed with Ontario Business Registry ($150 fee)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Share reorganizations may trigger tax consequences — CRA section 86 or 51 rollover rules
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  New shares must be issued under the amended articles
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Professional advice from a lawyer and CPA is required
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Cost of fixing a simple structure: Reorganizing a single-class corporation to add income-splitting share classes after the fact typically costs $3,000–$8,000 in legal and accounting fees. Getting a proper structure from day one costs nothing extra.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your share structure is the DNA of your corporation — it shapes every major decision about dividends, ownership, and value for the life of the business. Spend an extra hour with your CPA or lawyer designing a structure that anticipates your likely needs over the next 10 years. The cost is zero; the benefit can be significant.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Get Your Share Structure Right from Day One</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We design corporation share structures for Ontario business owners that support income splitting, future investors, and business sales. Book a consultation before you incorporate.
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
