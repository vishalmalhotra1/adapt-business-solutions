import type { Metadata } from 'next'
import { CheckCircle, ArrowRight, Building2, FileText, Clock, DollarSign, Shield, Users } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Incorporate in Ontario — $299 + Gov Fees | Adapt Accounting Services CPA',
  description: 'Incorporate your Ontario business for $299 + government fees. Real CPA, not a search house. Includes articles of incorporation, minute book setup, and CRA account registration. Named or numbered corporation.',
  keywords: 'incorporate in Ontario, Ontario incorporation cost, incorporation services Ontario, incorporate a business Canada, online incorporation Ontario, cheap incorporation Ontario, CPA incorporation Ontario, incorporate small business Canada',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/incorporation' },
  openGraph: {
    title: 'Incorporate Your Ontario Business — $299 + Government Fees',
    description: 'Real CPA incorporation service. Articles of incorporation, minute book, CRA Business Number setup. Named or numbered corporation. Serving all of Ontario.',
    url: 'https://adaptbusinesssolutions.com/services/incorporation',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Incorporation Ontario',
  description: 'Ontario business incorporation service by a CPA. Includes articles of incorporation, minute book setup, and CRA account registration.',
  provider: {
    '@type': 'AccountingService',
    name: 'Adapt Accounting Services',
    url: 'https://adaptbusinesssolutions.com',
    telephone: '437-772-9598',
  },
  areaServed: { '@type': 'Province', name: 'Ontario' },
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'CAD',
    description: 'Flat-fee incorporation service, plus government filing fees',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to incorporate in Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our CPA incorporation service is $299 + government fees. Ontario provincial filing is $300. Federal incorporation (CBCA) is $200 + $60 to register in Ontario. Total all-in cost is typically $599–$660 depending on whether you go provincial or federal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to incorporate in Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A numbered corporation in Ontario typically takes 5–10 business days. Named corporations require a NUANS report first (same-day), then 5–10 business days for ServiceOntario to process. Expedited processing is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lawyer to incorporate in Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A CPA can handle business incorporation in Ontario. Lawyers are not required for standard incorporations. We prepare and file all articles of incorporation, set up your minute book, and register your CRA accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a NUANS report and do I need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A NUANS (Newly Upgraded Automated Name Search) report checks your proposed corporate name against existing businesses and trademarks. You need one if you want a named corporation (e.g., "Acme Consulting Inc."). You do NOT need one for a numbered company (e.g., "1234567 Ontario Inc.").',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I incorporate federally or provincially in Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you operate only in Ontario, provincial incorporation under the OBCA is simpler and slightly less expensive. If you plan to operate in multiple provinces or want name protection across Canada, federal incorporation under the CBCA is the better choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a CPA incorporate my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CPAs regularly handle business incorporations in Ontario. Unlike online search houses, a CPA also advises on share structure, tax implications, and sets you up for ongoing compliance — not just the filing.',
      },
    },
  ],
}

const included = [
  { icon: FileText, title: 'Articles of Incorporation', desc: 'Professionally prepared and filed with ServiceOntario or Corporations Canada.' },
  { icon: Building2, title: 'Corporate Name Search (NUANS)', desc: 'Included for named corporations. Numbered corporations skip this step.' },
  { icon: Shield, title: 'Minute Book Setup', desc: 'Share certificates, organizational resolutions, director and officer records.' },
  { icon: Users, title: 'CRA Business Number', desc: 'Corporate account registration with CRA, including HST (if applicable).' },
  { icon: Clock, title: 'Share Structure Design', desc: 'Guidance on share classes for income splitting and future flexibility.' },
  { icon: DollarSign, title: 'Ongoing CPA Relationship', desc: 'Direct access to your CPA for T2, bookkeeping, and tax planning — not a ticket queue.' },
]

const steps = [
  { num: '01', title: 'Book a Free Call', desc: 'We discuss your situation — named vs numbered, federal vs provincial, share structure, and whether incorporation makes financial sense for your income level.' },
  { num: '02', title: 'We Prepare the Documents', desc: 'We prepare your Articles of Incorporation, conduct the NUANS search (if needed), and design a share structure tailored to your goals.' },
  { num: '03', title: 'Government Filing', desc: 'We file with ServiceOntario or Corporations Canada on your behalf. Processing typically takes 5–10 business days.' },
  { num: '04', title: 'Post-Incorporation Setup', desc: 'We set up your minute book, issue share certificates, register your CRA Business Number, and help you open a corporate bank account.' },
]

const costs = [
  { item: 'CPA Service Fee', amount: '$299', note: 'Flat fee, no surprises' },
  { item: 'Ontario Provincial Filing', amount: '$300', note: 'Paid to ServiceOntario' },
  { item: 'Federal Filing (CBCA)', amount: '$200 + $60', note: 'If choosing federal incorporation' },
  { item: 'NUANS Report (named corp)', amount: '~$14', note: 'Not required for numbered corp' },
  { item: 'Minute Book (physical)', amount: '$50–$100', note: 'Optional physical binder' },
]

const differentiation = [
  'Real CPA — not a search house or document mill',
  'Transparent pricing with government fees broken out',
  'Share structure advice included (most online services skip this)',
  'Pathway to T2, bookkeeping, and payroll — one relationship',
  'Cross-border and professional corporation expertise',
  'CRA Rep ID V64F78X — authorized to represent you at CRA',
]

export default function IncorporationPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Incorporation Services Ontario</p>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Incorporate Your Ontario Business
                <span className="text-gold block mt-1">$299 + Government Fees</span>
              </h1>
              <p className="text-navy-100 text-lg mb-8 leading-relaxed">
                A real CPA handles your entire incorporation — articles of incorporation, NUANS name search, minute book setup, and CRA account registration. Named or numbered corporation, federal or provincial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors group"
                >
                  Start Your Incorporation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:437-772-9598"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors"
                >
                  Call (437) 772-9598
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing callout */}
        <section className="bg-gold-50 border-b border-gold py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {costs.slice(0, 3).map(c => (
                <div key={c.item}>
                  <div className="font-serif text-2xl font-bold text-navy">{c.amount}</div>
                  <div className="text-sm font-semibold text-navy mt-0.5">{c.item}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Everything Covered</p>
              <h2 className="font-serif text-3xl font-bold text-navy">What&apos;s Included in Your $299</h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto">One flat fee covers all professional work. Government filing fees are paid directly and itemized separately — no bundling.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="border border-gray-100 shadow-sm p-7 hover:border-gold transition-colors">
                  <div className="bg-gold-50 w-11 h-11 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Simple Process</p>
              <h2 className="font-serif text-3xl font-bold text-navy">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map(step => (
                <div key={step.num} className="relative">
                  <div className="font-serif text-5xl font-bold text-gold opacity-20 mb-4">{step.num}</div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Federal vs Provincial */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Making the Right Choice</p>
              <h2 className="font-serif text-3xl font-bold text-navy">Federal vs. Ontario Incorporation</h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto">Both options create a valid Canadian corporation. The right choice depends on where you operate.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-2">Ontario Provincial (OBCA)</h3>
                <p className="text-sm text-gray-500 mb-5">Best for businesses operating within Ontario</p>
                <ul className="space-y-3">
                  {[
                    'Government fee: $300',
                    'Name protection within Ontario',
                    'Simpler annual maintenance',
                    'Faster processing for most filings',
                    'Administered by ServiceOntario',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-gold-50 border border-gold p-4 text-sm text-navy font-medium">
                  Total all-in: ~$599 (our fee + ON filing)
                </div>
              </div>
              <div className="bg-navy text-white p-8">
                <h3 className="font-serif text-xl font-bold text-white mb-2">Federal (CBCA)</h3>
                <p className="text-sm text-navy-100 mb-5">Best for businesses operating in multiple provinces</p>
                <ul className="space-y-3">
                  {[
                    'Government fees: $200 federal + $60 ON registration',
                    'Name protection across all provinces',
                    'Right to operate in any province',
                    'Preferred for national expansion',
                    'Requires extra-provincial registration per province',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-100">
                      <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-navy-light border border-navy-medium p-4 text-sm text-white font-medium">
                  Total all-in: ~$659 (our fee + federal + ON registration)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Why Adapt</p>
                <h2 className="font-serif text-3xl font-bold text-navy mb-5">A Real CPA, Not a Document Mill</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Most online incorporation services are search houses — they file documents and disappear. We&apos;re a CPA Ontario-registered firm. That means you get professional advice on share structure, tax implications, and a CPA you can actually talk to when you have questions after.
                </p>
                <ul className="space-y-3">
                  {differentiation.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-1 text-sm">Professional Corporations</h3>
                  <p className="text-gray-600 text-sm">Regulated professionals — realtors (PREC), healthcare practitioners, lawyers — have specific PC rules. We handle them all.</p>
                  <Link href="/blog/professional-corporations-ontario" className="text-gold text-sm font-medium mt-2 inline-block hover:text-gold-hover">Learn about professional corporations →</Link>
                </div>
                <div className="bg-white border border-gray-100 shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-1 text-sm">Cross-Border & US Rental Income</h3>
                  <p className="text-gray-600 text-sm">Canadians with US investments, Robinhood/Coinbase accounts, or US rental properties need specialized tax treatment. We know T1135.</p>
                  <Link href="/services/tax-preparation" className="text-gold text-sm font-medium mt-2 inline-block hover:text-gold-hover">Tax services →</Link>
                </div>
                <div className="bg-white border border-gray-100 shadow-sm p-6">
                  <h3 className="font-semibold text-navy mb-1 text-sm">Government Employee Side Businesses</h3>
                  <p className="text-gray-600 text-sm">Running a side business as a government employee? We understand the conflict of interest rules and how to structure your business properly.</p>
                  <Link href="/blog/side-hustle-taxes-government-employees-ontario" className="text-gold text-sm font-medium mt-2 inline-block hover:text-gold-hover">Read the guide →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Cost Breakdown */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-navy">Full Cost Breakdown</h2>
              <p className="text-gray-600 mt-3">No hidden fees. Government fees paid directly, itemized on your invoice.</p>
            </div>
            <div className="border border-gray-200">
              {costs.map((c, i) => (
                <div key={c.item} className={`flex items-center justify-between px-8 py-5 ${i < costs.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div>
                    <div className="font-semibold text-navy text-sm">{c.item}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{c.note}</div>
                  </div>
                  <div className="font-serif font-bold text-navy text-lg">{c.amount}</div>
                </div>
              ))}
              <div className="flex items-center justify-between px-8 py-5 bg-navy text-white">
                <div className="font-semibold">Total (Ontario Provincial)</div>
                <div className="font-serif font-bold text-gold text-xl">~$599</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">Government fees subject to change by ServiceOntario / Corporations Canada. All prices in CAD.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-navy">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-semibold text-navy mb-2">{faq.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-gold mb-4">Ready to Incorporate?</h2>
            <p className="text-navy-100 text-lg mb-8">
              Book a free 30-minute consultation. We&apos;ll confirm whether incorporation makes sense for your income level, choose federal or provincial, and get started immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:437-772-9598"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors"
              >
                Call (437) 772-9598
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
