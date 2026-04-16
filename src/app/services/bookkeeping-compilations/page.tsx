import type { Metadata } from 'next'
import { Calculator, CheckCircle, FileText, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping & Compilation Services | Adapt Business Solutions',
  description: 'Professional bookkeeping and compilation engagement services for Ontario small businesses. CPA Canada CSRS 4200 compliant. Serving Orangeville, Brampton, Mississauga and all of Ontario.',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/bookkeeping-compilations' },
}

const bookkeepingItems = [
  { title: 'Monthly Financial Record Keeping', desc: 'Complete recording of all business transactions using cloud-based accounting software.' },
  { title: 'Accounts Payable & Receivable', desc: 'Management of vendor payments and customer invoicing with aging reports.' },
  { title: 'Bank & Credit Card Reconciliations', desc: 'Monthly reconciliation of all business accounts to ensure accuracy.' },
  { title: 'Financial Statements Preparation', desc: 'Monthly, quarterly, and annual financial statements for management use.' },
]

const compilationItems = [
  { title: 'CPA Canada Standards Compliance', desc: 'All compilation engagements performed in accordance with CSRS 4200.' },
  { title: 'Notice to Reader', desc: 'Proper compilation reports with required Notice to Reader statements.' },
  { title: 'Professional Independence', desc: 'Maintaining professional independence as required by CPA Ontario.' },
  { title: 'Quality Control', desc: 'Adherence to quality control standards and professional requirements.' },
]

const standards = [
  {
    title: 'CSRS 4200 Compliance',
    body: 'All compilation engagements performed in accordance with Canadian Standard on Related Services (CSRS) 4200, "Compilation Engagements."',
    bullets: ['Proper engagement letters', 'Appropriate compilation procedures', 'Required compilation reports'],
  },
  {
    title: 'Notice to Reader',
    body: 'All compiled financial statements include the required Notice to Reader clearly stating the nature and limitations of a compilation engagement.',
    bullets: ['No assurance provided', 'Limited procedures performed', 'Management responsibility stated'],
  },
  {
    title: 'Professional Ethics',
    body: 'Maintaining professional independence and adhering to the CPA Ontario Code of Professional Conduct throughout all engagements.',
    bullets: ['Independence requirements', 'Confidentiality obligations', 'Professional competence'],
  },
]

export default function BookkeepingCompilationsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gold bg-opacity-20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-8 w-8 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Core Service</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Bookkeeping &amp; Compilation Engagements
            </h1>
            <p className="text-navy-100 text-lg max-w-3xl mx-auto">
              Professional bookkeeping and compilation engagements performed in accordance with CPA Canada standards and CPA Ontario regulations.
            </p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div className="bg-gray-50 p-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Bookkeeping Services</h2>
                <div className="space-y-5">
                  {bookkeepingItems.map(item => (
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
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Compilation Engagements</h2>
                <div className="space-y-5">
                  {compilationItems.map(item => (
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

        {/* Standards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Our Commitment</p>
              <h2 className="font-serif text-3xl font-bold text-navy mb-3">Professional Standards &amp; Compliance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our compilation engagements strictly adhere to CPA Canada and CPA Ontario professional standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map(s => (
                <div key={s.title} className="bg-white border border-gray-100 shadow-sm p-6">
                  <h3 className="font-serif text-lg font-bold text-navy mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.body}</p>
                  <ul className="space-y-1.5">
                    {s.bullets.map(b => (
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

        {/* Disclaimer */}
        <section className="py-10 bg-amber-50 border-l-4 border-amber-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Important Notice</h3>
                <p className="text-sm text-amber-800">
                  Compilation engagements do not provide assurance on financial statements. A compilation is limited to presenting information that is the representation of management in the form of financial statements. Users of compiled financial statements should consider whether they need an audit or review engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
            <p className="text-navy-100 mb-8">
              Get an instant price estimate, then contact us to discuss your bookkeeping and compilation needs.
            </p>
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
