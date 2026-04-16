import type { Metadata } from 'next'
import { FileText, CheckCircle, Calendar, Shield, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tax Preparation & Planning | Adapt Business Solutions',
  description: 'Professional tax preparation and strategic tax planning for Ontario individuals and businesses. T1 personal, T2 corporate, HST/GST returns. CRA-compliant CPA services.',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/tax-preparation' },
}

const personalItems = [
  { title: 'T1 Personal Tax Returns', desc: 'Complete preparation of personal income tax returns for all provinces.' },
  { title: 'Self-Employment Income', desc: 'Proper reporting of business income, expenses, and CCA calculations.' },
  { title: 'Investment Income & Capital Gains', desc: 'Optimization of investment income reporting and capital gains treatment.' },
  { title: 'Rental Property Income', desc: 'Complete rental income and expense reporting with depreciation schedules.' },
]

const corporateItems = [
  { title: 'T2 Corporate Tax Returns', desc: 'Complete corporate tax preparation for all business structures.' },
  { title: 'Small Business Deduction', desc: 'Maximizing small business deduction and CCPC benefits.' },
  { title: 'SR&ED Tax Credits', desc: 'Scientific research and development tax credit applications and optimization.' },
  { title: 'Provincial Corporate Tax', desc: 'Multi-jurisdictional corporate tax compliance.' },
]

const planningCards = [
  {
    icon: DollarSign,
    title: 'Income Splitting Strategies',
    body: 'Legitimate income splitting techniques to reduce overall family tax burden while complying with attribution rules.',
    bullets: ['Spousal RRSP contributions', 'Family trust structures', 'Pension income splitting'],
  },
  {
    icon: Calendar,
    title: 'Year-End Planning',
    body: 'Strategic year-end planning to optimize current year tax position and prepare for future tax obligations.',
    bullets: ['Capital gains/loss harvesting', 'Expense timing optimization', 'RRSP contribution planning'],
  },
  {
    icon: Shield,
    title: 'Estate Planning',
    body: 'Tax-efficient estate planning strategies to minimize tax on death and maximize wealth transfer to beneficiaries.',
    bullets: ['Estate freeze techniques', 'Charitable giving strategies', 'Trust planning'],
  },
]

export default function TaxPreparationPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gold bg-opacity-20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Core Service</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Tax Preparation &amp; Planning</h1>
            <p className="text-navy-100 text-lg max-w-3xl mx-auto">
              Comprehensive tax services for individuals and businesses across Canada, ensuring CRA compliance and maximizing tax efficiency.
            </p>
          </div>
        </section>

        {/* Personal & Corporate */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Personal Tax Returns</h2>
                <div className="space-y-5">
                  {personalItems.map(item => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-navy">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gold-50 border border-gold p-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Corporate Tax Returns</h2>
                <div className="space-y-5">
                  {corporateItems.map(item => (
                    <div key={item.title} className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-navy">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Tax Planning */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Proactive Approach</p>
              <h2 className="font-serif text-3xl font-bold text-navy mb-3">Strategic Tax Planning</h2>
              <p className="text-gray-600">Proactive strategies to minimize tax liability and maximize after-tax income.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {planningCards.map(({ icon: Icon, title, body, bullets }) => (
                <div key={title} className="bg-white border border-gray-100 shadow-sm p-6">
                  <div className="bg-gold-50 w-10 h-10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{body}</p>
                  <ul className="space-y-1.5">
                    {bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GST/HST */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gold-50 border border-gold p-10">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-2">GST/HST Services</h2>
                <p className="text-gray-600">Complete GST/HST compliance and optimization services.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-navy mb-4">GST/HST Returns</h3>
                  <ul className="space-y-3">
                    {['Monthly, quarterly, and annual GST/HST returns', 'Input tax credit optimization', 'Place of supply determinations'].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-4">GST/HST Registration</h3>
                  <ul className="space-y-3">
                    {['Voluntary and mandatory registration assistance', 'Quick Method election analysis', 'Multi-provincial registration coordination'].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRA Representation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">We Have You Covered</p>
              <h2 className="font-serif text-2xl font-bold text-navy">CRA Representation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Shield, title: 'Audit Defense', desc: 'Complete representation during CRA audits with professional advocacy.' },
                { icon: FileText, title: 'Notice of Objection', desc: 'Filing objections and appeals to challenge CRA assessments.' },
                { icon: Calendar, title: 'Voluntary Disclosure', desc: 'Voluntary disclosure program applications for penalty and interest relief.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-gray-100 shadow-sm p-6">
                  <div className="bg-gold-50 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Maximize Your Tax Efficiency</h2>
            <p className="text-navy-100 mb-8">Get an instant price estimate, then schedule a consultation about your tax needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="inline-block bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors">
                Get Price Estimate
              </Link>
              <a href="tel:437-772-9598" className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors">
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
