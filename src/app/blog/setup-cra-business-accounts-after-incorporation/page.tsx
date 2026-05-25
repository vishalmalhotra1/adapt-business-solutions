import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Setting Up CRA Business Accounts After Incorporation | Adapt Accounting',
  description: 'Step-by-step guide to registering CRA business accounts after incorporating in Ontario, Business Number, corporate income tax (RT), HST (RC), payroll (RP), and My Business Account access.',
  keywords: 'CRA business accounts after incorporation, CRA Business Number registration, HST registration after incorporation, My Business Account CRA, corporate income tax account CRA',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/setup-cra-business-accounts-after-incorporation' },
  openGraph: {
    title: 'Setting Up CRA Business Accounts After Incorporation',
    description: 'Step-by-step guide to all the CRA registrations you need after incorporating a Canadian business.',
    url: 'https://adaptbusinesssolutions.com/blog/setup-cra-business-accounts-after-incorporation',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Setting Up CRA Business Accounts After Incorporation',
  description: 'How to register CRA business accounts after incorporating, Business Number, HST, payroll, and corporate income tax.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Accounting Services', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/setup-cra-business-accounts-after-incorporation' },
}

const accounts = [
  {
    code: 'BN',
    name: 'Business Number (BN)',
    required: 'Always',
    detail: 'The 9-digit root number for your corporation. All other program accounts are extensions of the BN. You need a BN before you can register for any other program. CRA automatically issues a BN when they receive your first T2.',
    when: 'Immediately after incorporation, we handle this as part of our service',
  },
  {
    code: 'RC',
    name: 'Corporate Income Tax Account (RC)',
    required: 'Always',
    detail: 'The RC account is used for filing your T2 and making corporate tax installment payments. Format: 123456789 RC 0001. CRA creates this automatically when you obtain a Business Number.',
    when: 'Created automatically with BN',
  },
  {
    code: 'RT',
    name: 'HST/GST Account (RT)',
    required: 'When gross revenue exceeds $30,000',
    detail: 'Register for HST once (or before) your corporation\'s gross revenue in any rolling 4 consecutive quarters exceeds $30,000. You can voluntarily register earlier to claim input tax credits. Format: 123456789 RT 0001.',
    when: 'At or before $30,000 gross revenue. Voluntary early registration is common.',
  },
  {
    code: 'RP',
    name: 'Payroll Account (RP)',
    required: 'If paying employees or salary to yourself',
    detail: 'Register for a payroll account before you pay your first salary (including to yourself as a shareholder-employee). You\'ll need to remit CPP, EI, and income tax withholdings. Format: 123456789 RP 0001.',
    when: 'Before your first payroll payment',
  },
  {
    code: 'RZ',
    name: 'Information Return Account (RZ)',
    required: 'If filing T5 dividend slips',
    detail: 'Needed for filing information returns including T5 slips (dividends) and T5013 (partnership returns). Many small corporations use the RC account for this and don\'t need a separate RZ.',
    when: 'When issuing T5 dividend slips to shareholders',
  },
]

export default function CRAAccountsPage() {
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
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Post-Incorporation</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">Setting Up Your CRA Business Accounts After Incorporation</h1>
            <p className="text-navy-100 text-lg">Every account you need to register, when to register it, and what happens if you don&apos;t.</p>
            <p className="text-navy-100 text-sm mt-4">Published May 6, 2026 · 5 min read · By Adapt Accounting Services CPA</p>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Getting your certificate of incorporation is exciting. But your corporation isn&apos;t truly operational until the CRA knows it exists and has the right accounts set up. Here&apos;s exactly what you need to register and when.
              </p>

              <div className="space-y-5 mb-10">
                {accounts.map(acc => (
                  <div key={acc.code} className="border border-gray-200">
                    <div className="flex items-center gap-4 bg-navy text-white px-6 py-4">
                      <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded">{acc.code}</span>
                      <h2 className="font-serif text-lg font-bold">{acc.name}</h2>
                      <span className="ml-auto text-xs text-navy-100">{acc.required}</span>
                    </div>
                    <div className="p-6 space-y-3">
                      <p className="text-sm text-gray-700">{acc.detail}</p>
                      <div className="bg-gold-50 border border-gold px-4 py-2 text-xs text-navy font-medium">
                        When to register: {acc.when}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Setting Up My Business Account (CRA Online)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                My Business Account is CRA&apos;s online portal for corporations. Once set up, you can:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'View and pay tax balances',
                  'File HST returns electronically',
                  'Submit payroll remittances',
                  'View correspondence from CRA',
                  'Authorize a representative (your CPA)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To set up My Business Account, you need your Business Number and the corporation&apos;s postal code on file with CRA. You can register at canada.ca/cra-business-account.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Authorizing Your CPA as Representative</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To allow your CPA to file on your behalf, you must authorize them as a representative through My Business Account (online) or by submitting a signed T1013 (for personal accounts) or RC59 (for business accounts). Our CRA Rep ID is <strong>V64F78X</strong>. We walk every new client through this step.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Happens If You Don&apos;t Register for HST on Time?</h2>
              <div className="bg-red-50 border border-red-200 p-5 mb-8">
                <p className="text-sm text-gray-700">If you pass the $30,000 threshold and don&apos;t register, CRA can assess HST as if you had been registered, meaning you become retroactively liable for HST you didn&apos;t collect. You may also face interest and penalties. Voluntary registration before the threshold avoids this and lets you claim ITCs on business purchases immediately.</p>
              </div>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">We Handle the CRA Setup For You</h3>
                <p className="text-navy-100 text-sm mb-6">Our incorporation service includes CRA Business Number registration, HST registration (if applicable), and My Business Account setup guidance, so you&apos;re operational from day one.</p>
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
