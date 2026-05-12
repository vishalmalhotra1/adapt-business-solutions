import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CPA for ABA Practitioners in Canada — Incorporation & Tax Strategy | Adapt',
  description: 'Expert CPA services for behavior analysts. CPBAO-compliant professional corporation, Certificate of Authorization support, ABA tax deductions, OAP payroll. Virtual, Canada-wide.',
  keywords: 'ABA practitioner CPA, BCBA incorporation Canada, behavior analyst accounting, CPBAO compliance, Ontario ABA tax, RBT payroll, OAP funding accounting, professional corporation BCBA',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/aba-practitioners' },
  openGraph: {
    title: 'CPA for ABA Practitioners in Canada — Adapt Accounting Services',
    description: 'The CPA firm that understands CPBAO, OAP funding, contractor classification, and ABA-specific tax deductions. $299 incorporation. Virtual, Canada-wide.',
    url: 'https://adaptbusinesssolutions.com/services/aba-practitioners',
    type: 'website',
  },
}

const painPoints = [
  {
    question: 'Should I incorporate as a Professional Corporation?',
    answer: 'Probably yes — but the threshold depends on your income. Most BCBAs earning $80K+ save thousands annually through tax deferral. Income left inside the corporation is taxed at ~12.2% vs. your personal marginal rate of up to 53.5%. Note: unlike general corporations, ABA professional corporations cannot split income with a non-registrant spouse — all shareholders must be CPBAO registrants.',
  },
  {
    question: 'What exactly is CPBAO compliance for a professional corporation?',
    answer: 'CPBAO-registered behaviour analysts who want to practice through a corporation must obtain a Certificate of Authorization from CPBAO ($350 initial, $250/year renewal) — on top of Ontario incorporation. All shareholders, officers, and directors must be current CPBAO registrants. Non-registrant spouses cannot hold shares. The corporation name must follow strict CPBAO naming rules (surname + "Applied Behaviour Analysis Professional Corporation"). These rules are similar to physician and dentist PCs. Getting the structure wrong puts your Certificate of Authorization at risk.',
  },
  {
    question: 'Am I classified correctly by CRA — self-employed or employed?',
    answer: 'If you work for a clinic but you\'re paid as a contractor, CRA may reclassify you as an employee. That means back taxes, CPP, and EI. We review your arrangement and flag the risk before CRA does.',
  },
  {
    question: 'What can I actually deduct as an ABA practitioner?',
    answer: 'BACB certification fees, CPBAO dues, clinical software (Catalyst, CentralReach), mileage for home visits, home office, CE conferences, RBT training and supervision costs, professional liability insurance, and more.',
  },
  {
    question: 'Is my ABA revenue subject to HST?',
    answer: 'It depends on who you\'re treating and how you\'re funded. OAP-funded services have different HST rules than private-pay. Getting this wrong creates CRA liability — in both directions.',
  },
]

const services = [
  {
    name: 'CPBAO-Compliant Incorporation',
    price: '$299 + gov fees',
    description: 'Full CPBAO professional corporation setup — OBCA incorporation plus Certificate of Authorization support. Gov fees include ~$326 for filing + NUANS, plus the $350 CPBAO CoA application fee (separate). We handle every step.',
    includes: [
      'NUANS name search (CPBAO naming rules)',
      'OBCA articles of incorporation',
      'CPBAO-compliant share structure',
      'Certificate of Authorization application support',
      'CRA accounts: corporate tax, HST, payroll',
      'OAP provider transition support',
    ],
    highlight: false,
  },
  {
    name: 'Monthly Bookkeeping',
    price: '$399 / month',
    description: 'Month-end reconciliation, invoice tracking, expense categorization for ABA-specific deductions, HST filing, and clean records for your T2. Everything you need to stop worrying about the books.',
    includes: [
      'Monthly bank reconciliation',
      'ABA-specific expense categorization',
      'Invoice and receivables tracking',
      'HST/GST filing',
      'Payroll for RBTs and staff',
      'Monthly financial summary',
    ],
    highlight: true,
  },
  {
    name: 'Annual Tax',
    price: 'From $299',
    description: 'Corporate T2, personal T1, T1135 for foreign assets, and full CRA compliance — all filed by a licensed CPA Ontario. We file electronically and handle CRA correspondence.',
    includes: [
      'T2 corporate income tax return',
      'T1 personal income tax return',
      'T1135 foreign property (if applicable)',
      'T4 / T5 slips for you and staff',
      'EFILE-certified filing',
      'CRA correspondence support',
    ],
    highlight: false,
  },
]

const abaBlogPosts = [
  {
    id: 'incorporating-aba-practice-ontario-behaviour-analysts',
    title: 'Incorporating Your ABA Practice in Ontario',
    description: 'Why BCBAs can incorporate, real tax savings at different income levels, OAP funding implications, and how we handle the setup.',
    tag: 'Incorporation',
    readTime: '9 min',
    emoji: '🏢',
  },
  {
    id: 'hst-aba-therapy-services-ontario',
    title: 'HST and ABA Therapy Services in Ontario',
    description: 'When is ABA revenue exempt vs. taxable? How OAP funding affects your HST position, and how to avoid a CRA reassessment.',
    tag: 'HST & Tax',
    readTime: '8 min',
    emoji: '📋',
  },
  {
    id: 'tax-deductions-aba-business-owners-ontario',
    title: 'Tax Deductions for ABA Business Owners',
    description: 'Every legitimate deduction for ABA practice owners — clinical software, mileage, BACB fees, CE conferences, RBT costs, and home office.',
    tag: 'Tax Planning',
    readTime: '8 min',
    emoji: '💰',
  },
  {
    id: 'payroll-aba-practice-ontario-bcba-rbt',
    title: 'Payroll: BCBAs, RBTs & OAP Funding',
    description: 'Employee vs contractor for RBTs, OAP funding flow, CRA remittance obligations, and the director liability risk most ABA owners miss.',
    tag: 'Payroll',
    readTime: '9 min',
    emoji: '👥',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Book a free 30-min call',
    desc: 'Tell us about your practice — solo contractor, small clinic, or somewhere in between. We listen before we recommend anything.',
  },
  {
    step: '02',
    title: 'We review your structure',
    desc: 'We assess your current setup: sole prop vs corporation, contractor classification risk, HST position, and where tax savings exist.',
  },
  {
    step: '03',
    title: 'Incorporate (if it makes sense)',
    desc: 'We handle everything — NUANS, articles, minute book, CRA accounts. Done in days, not weeks. $299 + government fees.',
  },
  {
    step: '04',
    title: 'Ongoing support (optional)',
    desc: 'Monthly bookkeeping + annual T2/T1 means you never have to think about accounting again. We handle it, you do the clinical work.',
  },
]

const testimonials = [
  {
    name: 'Cristian Gomez Fuentes',
    date: 'May 2026',
    text: 'Adapt stepped right in, took over all communication with the CRA, organized my old boxes of receipts, and prepared a rock-solid response. They proved all my HST claims were valid and got the auditor to drop the payroll dispute entirely. They literally saved me from a penalty that would have ruined me.',
  },
  {
    name: 'Marley Boultby',
    date: 'May 2026',
    text: 'They implemented a clear tracking system for our jobs and cleaned up our entire ledger in record time. Really good bookkeeping that lets me see exactly which projects are actually profitable for us. They truly go above and beyond and care about the success of their clients.',
  },
  {
    name: 'Rahul Soi',
    date: 'April 2024',
    text: 'The team at Adapt Business Solutions gave me top-tier service! I came in needing some tax work to get done and they held my hand through the process and even got me a higher return! Awesome!',
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
  )
}

export default function ABAPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white" style={{ background: 'linear-gradient(135deg, #0d2d3a 0%, #0d1b2a 70%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1.5 tracking-widest uppercase mb-6">
                Specialty CPA Practice
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                CPA for ABA Practitioners in Canada
              </h1>
              <p className="text-lg text-navy-100 leading-relaxed mb-8 max-w-2xl">
                Professional corporation incorporation. CPBAO compliance. Contractor classification expertise. Tax deductions specific to your practice. We understand your world — most CPAs don&apos;t.
              </p>
              <p className="text-gold font-semibold text-lg mb-10">
                Cheap incorporation. Clear taxes. No surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/accountant-brhd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 transition-colors group"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 transition-colors"
                >
                  View Services &amp; Pricing
                </a>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 text-sm text-navy-100">
                <div><span className="text-gold font-semibold">Vishal Devgun</span><span className="ml-2">CPA Ontario · Rep ID V64F78X</span></div>
                <div><span className="text-gold font-semibold">EFILE</span><span className="ml-2">Certified</span></div>
                <div><span className="text-gold font-semibold">Virtual</span><span className="ml-2">Canada-Wide</span></div>
                <div><span className="text-gold font-semibold">$299</span><span className="ml-2">Incorporation</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-2 mb-6">
                <AlertCircle className="h-4 w-4" />
                Sound familiar?
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
                Running an ABA practice as a sole proprietor costs you thousands in unnecessary taxes
              </h2>
              <p className="text-gray-600 text-lg">
                You&apos;re great at what you do clinically. The tax and compliance side is a different world — and most general accountants don&apos;t know ABA-specific rules any better than you do.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {painPoints.map((item) => (
                <details
                  key={item.question}
                  className="group border border-gray-200 bg-gray-50 hover:border-gold/40 transition-colors"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                    <span className="font-semibold text-navy text-base pr-4">{item.question}</span>
                    <span className="text-gold font-bold text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Services + Pricing */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Transparent Pricing</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
                What We Do for ABA Practices
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We&apos;ve incorporated ABA businesses, handled OAP funding payroll, filed HST for therapy practices, and optimized tax strategy for behaviour analysts across Canada. No learning curve on our end.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.name}
                  className={`flex flex-col p-8 border-t-4 ${service.highlight ? 'bg-navy text-white border-t-teal-400 shadow-xl' : 'bg-white border-t-gold shadow-sm'}`}
                >
                  {service.highlight && (
                    <span className="inline-block bg-teal-400 text-navy text-xs font-bold px-3 py-1 mb-4 self-start">Most Popular</span>
                  )}
                  <h3 className={`font-serif text-xl font-bold mb-1 ${service.highlight ? 'text-white' : 'text-navy'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-2xl font-bold mb-4 ${service.highlight ? 'text-teal-400' : 'text-gold'}`}>
                    {service.price}
                  </p>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 ${service.highlight ? 'text-navy-100' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${service.highlight ? 'text-teal-400' : 'text-gold'}`} />
                        <span className={service.highlight ? 'text-navy-100' : 'text-gray-600'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://calendly.com/accountant-brhd/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center font-semibold py-3 px-6 transition-colors group ${service.highlight ? 'bg-teal-500 hover:bg-teal-400 text-white' : 'bg-navy hover:bg-navy-light text-white'}`}
                  >
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABA Blog Guides */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Free Resources</p>
              <h2 className="font-serif text-3xl font-bold text-white mb-3">
                ABA Accounting Guides — Written by Your CPA
              </h2>
              <p className="text-navy-100 max-w-2xl">
                Plain-language guides written specifically for Ontario behaviour analysts. No jargon, no generic advice — just the real answers to the questions ABA practitioners actually have.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {abaBlogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/50 p-6 transition-all flex flex-col"
                >
                  <span className="text-3xl mb-3">{post.emoji}</span>
                  <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-2 py-0.5 mb-3 self-start">
                    {post.tag}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white mb-2 leading-snug group-hover:text-teal-300 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-navy-100 text-xs leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center gap-1 text-teal-400 text-sm font-semibold">
                    Read Guide ({post.readTime})
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Simple Process</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
                How It Works for ABA Practitioners
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                From first call to fully incorporated and compliant — most clients are set up within 2 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step) => (
                <div key={step.step} className="relative">
                  <div className="font-serif text-5xl font-bold text-gold/20 mb-4">{step.step}</div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Credentials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-2">
                <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Your CPA</p>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">
                  Vishal Devgun, CPA Ontario
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  CPA Ontario · Rep ID V64F78X · EFILE Certified · Master&apos;s in Data Analytics
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Adapt Accounting Services was built to bring affordable, transparent CPA services to small business owners and professionals who deserve better than a big firm that doesn&apos;t know their industry.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We specialize in ABA practitioners because we&apos;ve done the work — incorporated ABA businesses, navigated HST on therapy services, handled OAP funding payroll, and structured ABA practices for maximum tax efficiency.
                </p>
              </div>
              <div className="bg-navy text-white p-6">
                <h3 className="font-serif font-bold mb-4 text-gold">Credentials</h3>
                <ul className="space-y-3 text-sm text-navy-100">
                  {[
                    'CPA Ontario · Rep ID V64F78X',
                    'EFILE Certified (CRA)',
                    'Master\'s in Data Analytics',
                    'Virtual, Canada-Wide',
                    '30+ clients served',
                    'Orangeville, ON based',
                  ].map(c => (
                    <li key={c} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Client Reviews</p>
              <h2 className="font-serif text-3xl font-bold text-navy mb-2">What Our Clients Say</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <span className="font-bold text-navy">4.9</span>
                <span className="text-gray-500 text-sm">· Google Reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((r) => (
                <div key={r.name} className="bg-gray-50 border border-gray-100 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                    </div>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold">
                      {r.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-navy text-sm">{r.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendly Embed */}
        <section id="book" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Free Consultation</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
                Schedule Your Free 30-Minute Consultation
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Tell us about your ABA practice. No obligation — just a real conversation with your CPA about your tax situation and what we can do for you.
              </p>
            </div>
            <CalendlyEmbed height={700} className="shadow-lg" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gold mb-4">
              Ready to Optimize Your ABA Practice?
            </h2>
            <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">
              Incorporate for $299, get your books in order, and start keeping more of what you earn. We handle the accounting — you handle the clinical work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/accountant-brhd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 transition-colors group"
              >
                Book Now — It&apos;s Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:accountant@adaptbusinesssolutions.com"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 transition-colors"
              >
                Email a Question
              </a>
            </div>
            <p className="text-navy-100 text-sm mt-6">
              Or call: <a href="tel:437-772-9598" className="text-gold hover:text-gold-hover font-semibold">(437) 772-9598</a>
              &nbsp;·&nbsp; accountant@adaptbusinesssolutions.com
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
