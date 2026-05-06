import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Corporations Ontario: PREC, Healthcare, Lawyers & More | Adapt Accounting',
  description: 'Complete guide to professional corporations in Ontario for realtors (PREC), doctors, dentists, lawyers, physiotherapists, pharmacists, and ABAs. Tax benefits, regulator rules, and how to set one up.',
  keywords: 'professional corporation Ontario, PREC Ontario realtor, doctor professional corporation Ontario, dentist incorporation Ontario, BCBA incorporation Canada, ABA professional corporation Ontario, lawyer professional corporation Ontario, physiotherapist professional corporation',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/professional-corporations-ontario' },
  openGraph: {
    title: 'Professional Corporations in Ontario — Realtors, Doctors, Lawyers & More',
    description: 'Regulator-by-regulator guide to professional corporations in Ontario. Tax benefits, restrictions, and how to incorporate as a regulated professional.',
    url: 'https://adaptbusinesssolutions.com/blog/professional-corporations-ontario',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Professional Corporations in Ontario: PREC, Healthcare, Lawyers & More',
  description: 'Guide to professional corporations in Ontario for regulated professionals — realtors, doctors, dentists, lawyers, and more.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/professional-corporations-ontario' },
}

const professions = [
  {
    title: 'Realtors — Personal Real Estate Corporation (PREC)',
    regulator: 'RECO (Real Estate Council of Ontario)',
    details: [
      'Ontario realtors can incorporate as a Personal Real Estate Corporation under the Trust in Real Estate Services Act (TRESA).',
      'Commission income flows through the PREC and is taxed at the 9–12% CCPC corporate rate instead of personal rates up to 53.5%.',
      'The PREC must be wholly owned (directly or indirectly) by the registrant realtor.',
      'The corporation can only carry on the business of trading in real estate through the registrant.',
      'You still need to operate through a brokerage — the PREC is the entity that receives your commission.',
    ],
    taxBenefit: 'A realtor earning $200K in commissions and retaining $100K in the PREC saves ~$30,000+ annually in deferred personal tax.',
    setup: 'We handle PREC incorporation with proper share structure, RECO-compliant articles, and CRA registration.',
  },
  {
    title: 'Physicians & Surgeons',
    regulator: 'CPSO (College of Physicians and Surgeons of Ontario)',
    details: [
      'Ontario physicians can incorporate under Ontario Regulation 39/02 of the Business Corporations Act.',
      'At least one share class must be voting shares held by the physician.',
      'The corporation name must include the physician\'s surname.',
      'Other regulated healthcare professionals (and their spouses, children, parents) can hold non-voting shares for income splitting.',
      'Malpractice insurance (CMPA) must be maintained personally — the corporation doesn\'t change CMPA obligations.',
    ],
    taxBenefit: 'Physicians often retain $200K–$400K annually inside their PC, generating tax deferral of $60K–$130K per year vs. personal rates.',
    setup: 'We prepare physician PC articles meeting CPSO requirements, including compliant naming and share structure for potential family income splitting.',
  },
  {
    title: 'Dentists',
    regulator: 'RCDSO (Royal College of Dental Surgeons of Ontario)',
    details: [
      'Dentists can incorporate a Professional Corporation under the Regulated Health Professions Act.',
      'At least 50% of issued shares with voting rights must be held by dentists.',
      'The corporation name must include the dentist\'s surname.',
      'Dental hygienists and registered dental technicians are also eligible for their own professional corporations.',
      'Income splitting with family members through non-voting shares is possible within RCDSO rules.',
    ],
    taxBenefit: 'Similar to physicians — dental professionals can retain significant income at the CCPC 11% rate vs. 53%+ personally.',
    setup: 'RCDSO-compliant articles of incorporation with proper voting share structure.',
  },
  {
    title: 'Lawyers & Paralegals',
    regulator: 'Law Society of Ontario (LSO)',
    details: [
      'Lawyers can practice through a Professional Corporation under the Law Society Act.',
      'All directors and shareholders holding voting shares must be licensees in good standing.',
      'Non-licensee family members can hold non-voting shares.',
      'The corporation is not a limited liability entity for personal liability arising from the lawyer\'s professional work — malpractice liability flows through.',
      'The tax benefit (deferral at corporate rates) is still significant, particularly for high-income litigators and partners.',
    ],
    taxBenefit: 'Significant annual deferral for lawyers earning $250K+, especially given Ontario\'s high personal tax rates above $150K.',
    setup: 'LSO-compliant professional corporation with Articles drafted to meet Law Society requirements.',
  },
  {
    title: 'Applied Behaviour Analysis (ABA) / BCBAs',
    regulator: 'CRPO (College of Registered Psychotherapists) — varies by designation',
    details: [
      'BCBAs and RBAs providing ABA services can incorporate in Ontario.',
      'The regulatory structure for ABA in Canada is evolving — designation and regulator depend on specific credentials.',
      'Most ABA service providers incorporate as a standard business corporation (not a regulated professional corporation) since ABA is not yet governed by a single regulated profession college in Ontario.',
      'Government-funded ABA programs (OAP) allow incorporated providers — check current OAP eligibility requirements.',
      'Tax treatment is identical to any CCPC — small business deduction applies on the first $500K of active income.',
    ],
    taxBenefit: 'ABA service providers earning $100K+ in a fiscal year benefit substantially from CCPC rates vs. personal rates.',
    setup: 'We handle ABA business incorporations and can advise on OAP-compliant corporate structures.',
  },
  {
    title: 'Physiotherapists & Healthcare Practitioners',
    regulator: 'CPO (College of Physiotherapists of Ontario)',
    details: [
      'Physiotherapists can incorporate a Professional Corporation under the Regulated Health Professions Act (RHPA).',
      'At least 50% of voting shares must be held by a physiotherapist member in good standing.',
      'The PC name must include the member\'s surname.',
      'Chiropractors, optometrists, pharmacists, nurses, and other RHPA-regulated professions have similar PC rules under their respective colleges.',
      'Non-voting shares can be held by spouses, parents, or adult children for income-splitting purposes (subject to TOSI rules).',
    ],
    taxBenefit: 'Healthcare practitioners often retain $80K–$200K annually inside their PC, generating substantial annual tax savings.',
    setup: 'Professional corporation articles meeting RHPA and CPO requirements, with income-splitting share structure where applicable.',
  },
]

export default function ProfessionalCorporationsPage() {
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Professional Corporations</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Professional Corporations in Ontario: What Realtors, Doctors, Lawyers & Other Regulated Professionals Need to Know
            </h1>
            <p className="text-navy-100 text-lg">
              Regulator-by-regulator breakdown of PC rules in Ontario — tax benefits, share structure restrictions, naming requirements, and how to get set up.
            </p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 12 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> Regulatory requirements change. Always confirm current rules with your professional regulatory college and consult a CPA before incorporating. This article is for general educational purposes only.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Regulated professionals in Ontario face a unique situation: they can&apos;t just incorporate as a regular business corporation. Most professional regulators impose restrictions on who can own shares, what the corporation can be named, and what activities it can carry on. The tax benefits, however, are substantial — and the rules are manageable once you understand them.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-6 mb-4">Why Incorporate as a Professional?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The primary benefit is the same as any CCPC: income retained in the corporation is taxed at 9–12% (the small business deduction rate) instead of your personal marginal rate of up to 53.5% in Ontario. For a professional earning $200,000 who can retain $100,000 inside the corporation, the annual tax deferral is approximately $30,000–$40,000.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Secondary benefits include liability structuring, potential income splitting with family members (subject to TOSI rules), and building a tax-sheltered investment portfolio inside the corporation over a career.
              </p>

              {professions.map(prof => (
                <div key={prof.title} className="mb-12 border border-gray-200">
                  <div className="bg-navy text-white px-7 py-5">
                    <h2 className="font-serif text-xl font-bold">{prof.title}</h2>
                    <p className="text-gold text-sm mt-1">Regulator: {prof.regulator}</p>
                  </div>
                  <div className="p-7 space-y-5">
                    <div>
                      <h3 className="font-semibold text-navy text-sm uppercase tracking-wide mb-3">Key Rules</h3>
                      <ul className="space-y-2">
                        {prof.details.map(d => (
                          <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gold-50 border border-gold p-4">
                      <p className="text-sm font-semibold text-navy mb-1">Tax Benefit Snapshot</p>
                      <p className="text-sm text-gray-700">{prof.taxBenefit}</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-4">
                      <p className="text-sm font-semibold text-navy mb-1">How We Help</p>
                      <p className="text-sm text-gray-700">{prof.setup}</p>
                    </div>
                  </div>
                </div>
              ))}

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Income Splitting and TOSI — The Key Warning</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many professional corporations include non-voting shares for spouses, adult children, or parents, with the goal of paying dividends to family members in lower tax brackets. The Tax on Split Income (TOSI) rules introduced in 2018 significantly limited this strategy for most professionals.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                <p className="text-sm text-gray-700"><strong>TOSI applies</strong> when dividends are paid to a related individual who is not meaningfully involved in the business. The dividend is then taxed at the top marginal rate in the recipient&apos;s hands — eliminating the income-splitting benefit. There are exceptions for spouses who are 65+, family members who contribute substantial labour, and others. This is an area where professional CPA advice is non-negotiable.</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 mt-10 mb-6">
                <h3 className="font-serif text-lg font-bold text-navy mb-4">Related Reading</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services/incorporation" className="text-gold hover:text-gold-hover font-medium">→ Incorporation Service ($299 + gov fees)</Link> — We handle all regulated profession PCs</li>
                  <li><Link href="/blog/sole-proprietor-vs-corporation-canada" className="text-gold hover:text-gold-hover font-medium">→ Sole Proprietor vs Corporation Tax Math</Link> — See when the numbers work</li>
                  <li><Link href="/blog/federal-vs-ontario-incorporation" className="text-gold hover:text-gold-hover font-medium">→ Federal vs Ontario Incorporation</Link> — Which to choose</li>
                </ul>
              </div>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Incorporate Your Professional Corporation</h3>
                <p className="text-navy-100 text-sm mb-6">
                  We&apos;re experienced with regulated profession PC requirements across Ontario. Book a free consultation to discuss your specific regulatory requirements, share structure, and tax strategy.
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
