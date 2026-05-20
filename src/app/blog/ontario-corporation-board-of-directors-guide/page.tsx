import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ontario Corporation Board of Directors: Duties and Liability 2025 | Adapt Business Solutions',
  description: 'Everything Ontario small business owners need to know about corporate directors — who must be one, legal duties, personal liability risks, and resignation procedures.',
  keywords: 'Ontario corporation board of directors, corporate director duties Ontario, director liability Ontario, OBCA director requirements',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/ontario-corporation-board-of-directors-guide' },
  openGraph: {
    title: 'Ontario Corporation Board of Directors: Rules, Duties, and Liability',
    description: 'Everything Ontario small business owners need to know about corporate directors — who must be one, legal duties, personal liability risks, and resignation procedures.',
    url: 'https://adaptbusinesssolutions.com/blog/ontario-corporation-board-of-directors-guide',
    type: 'article',
    publishedTime: '2026-05-20',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ontario Corporation Board of Directors: Rules, Duties, and Liability',
  description: 'Everything Ontario small business owners need to know about corporate directors — who must be one, legal duties, personal liability risks, and resignation procedures.',
  datePublished: '2026-05-20',
  dateModified: '2026-05-20',
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
    '@id': 'https://adaptbusinesssolutions.com/blog/ontario-corporation-board-of-directors-guide',
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Corporate Compliance</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Ontario Corporation Board of Directors: Rules, Duties, and Liability
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-20 &middot; 8 min read &middot; By Adapt Business Solutions CPA</p>
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
                When you incorporate in Ontario, you become both a shareholder and a director. Most small business owners treat these roles as the same thing — but legally they are very different. Directors have specific duties, obligations, and personal liability exposures under the Ontario Business Corporations Act (OBCA). Understanding what being a director actually means can protect you from significant personal financial risk.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Who Must Be a Director in an Ontario Corporation?</h2>
              <p className="text-gray-700 leading-relaxed">Every Ontario corporation must have at least one director. The directors are responsible for managing or supervising the management of the business and affairs of the corporation. For most small businesses, the owner is the sole director.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Under the OBCA, at least 25% of directors of an Ontario corporation must be resident Canadians. If there is only one director, that director must be a resident Canadian.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Minimum one director required for Ontario corporations
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must be at least 18 years old and not be bankrupt
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cannot be a person found by a court to be incapable
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  25% of directors must be resident Canadians (if one director, must be Canadian)
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Important for non-resident owners: If you are not a Canadian resident and want to incorporate in Ontario, you must have at least one Canadian resident co-director, or consider federally incorporating (CBCA allows 25% residency for the board as a whole).</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Fiduciary Duty: Acting in the Corporation&apos;s Best Interest</h2>
              <p className="text-gray-700 leading-relaxed">Directors owe a fiduciary duty to the corporation — they must act honestly and in good faith with a view to the best interests of the corporation. This means prioritizing the corporation&apos;s interests over your personal interests when making board decisions.</p>
              <p className="text-gray-700 leading-relaxed mt-3">For small owner-managed businesses, this rarely causes problems. But it becomes critical in situations like taking a business opportunity for yourself instead of the corporation, dealing with a competing business, or making decisions that benefit you personally at the corporation&apos;s expense.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must act honestly and in good faith toward the corporation
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cannot take corporate opportunities for personal benefit
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Must disclose any conflict of interest to the board
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Cannot compete with the corporation without disclosure and consent
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Duty of Care: Standard of Decision-Making</h2>
              <p className="text-gray-700 leading-relaxed">In addition to the fiduciary duty, directors owe a duty of care to the corporation. They must exercise the care, diligence, and skill that a reasonably prudent person would exercise in comparable circumstances.</p>
              <p className="text-gray-700 leading-relaxed mt-3">This does not require perfection — directors are allowed to make business decisions that turn out badly. The &quot;business judgment rule&quot; protects directors who make informed decisions in good faith, even if the outcome is poor.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Attend and participate in board meetings
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Review financial statements and be aware of the corporation&apos;s financial health
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Seek professional advice when facing complex legal or financial decisions
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Document decisions with proper corporate minutes
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Personal Liability: The Most Important Part</h2>
              <p className="text-gray-700 leading-relaxed">The most significant practical concern for directors of small Ontario corporations is personal liability. Despite the general rule that a corporation shields its owners from liability, directors can be held personally responsible for specific corporate obligations.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Payroll source deductions: directors are personally liable if the corporation fails to remit CPP, EI, and income tax withholdings to the CRA
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  HST/GST: directors can be personally assessed for unremitted net HST
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Wages: Ontario directors are liable for up to 6 months of unpaid employee wages
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Environmental liability: directors can be personally liable for environmental violations
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Securities violations: directors can face personal liability under securities law
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">The most common liability trap: CRA payroll and HST liability is the most common way small business directors end up with personal assessments. If your corporation falls behind on remittances, the CRA can — and routinely does — hold directors personally liable for the full amount plus penalties and interest.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Due Diligence Defence</h2>
              <p className="text-gray-700 leading-relaxed">Directors can protect themselves from liability for payroll and HST failures by demonstrating that they exercised due diligence to prevent the failure. This requires showing active steps to ensure compliance — not just passive ignorance.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Monitoring the corporation&apos;s financial position and cash flow
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Implementing proper systems for payroll and HST remittance
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Taking action when you first learn remittances are being missed
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Retaining a CPA or bookkeeper to manage compliance obligations
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Resigning does not immediately eliminate liability. You can still be assessed for obligations that arose while you were a director. Resignation starts a two-year clock on CRA&apos;s ability to assess you for most director liability — but existing liability for periods you served remains.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Being a director of your own corporation is not just a formality — it comes with real legal duties and significant personal liability risks if corporate obligations are ignored. The best protection is maintaining proper books, filing and remitting on time, and working with a CPA who keeps you informed of your corporation&apos;s compliance status year-round.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Protect Yourself as a Corporate Director</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We help Ontario business owners stay compliant and avoid director liability through year-round bookkeeping, payroll, and tax filing services.
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
