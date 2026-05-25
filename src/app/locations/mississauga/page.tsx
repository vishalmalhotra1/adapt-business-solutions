import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CPA Mississauga | Professional Accounting & Tax Services | Adapt Accounting Services',
  description: 'Expert virtual CPA services in Mississauga, Ontario. Bookkeeping, tax preparation, corporate tax, and financial analysis for Mississauga businesses. Serving Square One, Port Credit, and all of Mississauga.',
  keywords: 'CPA Mississauga, accountant Mississauga, tax preparation Mississauga, bookkeeping Mississauga, corporate tax Mississauga',
  openGraph: {
    title: 'Professional CPA Services in Mississauga, Ontario',
    description: 'Expert CPA services for Mississauga businesses. Bookkeeping, tax preparation, and financial consulting.',
    url: 'https://adaptbusinesssolutions.com/locations/mississauga',
    type: 'website',
  },
  alternates: { canonical: 'https://adaptbusinesssolutions.com/locations/mississauga' },
}

const services = [
  { label: 'Tax Preparation Mississauga', href: '/services/tax-preparation', desc: 'Complete T1 personal and T2 corporate tax returns for Mississauga businesses and individuals.' },
  { label: 'Bookkeeping Services', href: '/services/bookkeeping-compilations', desc: 'Professional monthly bookkeeping, reconciliations, and financial statements.' },
  { label: 'Corporate Services', href: '/services/corporate-services', desc: 'Corporate tax planning and T2 filings for Mississauga corporations and CCPCs.' },
  { label: 'Financial Analysis', href: '/services/financial-analysis', desc: 'KPI dashboards, budget forecasting, and cash flow analysis for GTA businesses.' },
  { label: 'Payroll Services', href: '/services/payroll', desc: 'Accurate payroll processing, CRA remittances, and T4 preparation.' },
  { label: 'Business Consulting', href: '/services/business-consulting', desc: 'Strategic growth planning and financial strategy for Mississauga SMEs.' },
]

const whyUs = [
  { title: 'GTA Business Expertise', desc: 'Deep understanding of the Mississauga and GTA business landscape across all major industries.' },
  { title: 'Corporate Focus', desc: 'Specialized experience with Mississauga corporations and the unique tax considerations of the GTA business district.' },
  { title: 'Virtual Efficiency', desc: 'Save time with secure online document sharing and virtual consultations, no traffic, no wait.' },
  { title: 'Transparent Flat Fees', desc: 'Predictable monthly pricing with no surprise invoices or hourly billing.' },
]

const areas = ['Mississauga City Centre', 'Port Credit', 'Streetsville', 'Meadowvale', 'Erin Mills', 'Clarkson', 'Malton', 'Lakeview']

export default function MississaugaPage() {
  return (
    <>
      <Navigation />
      <div id="main-content" className="pt-20">

        {/* Hero */}
        <section className="hero-pattern text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Mississauga, ON</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Professional CPA Services in Mississauga</h1>
            <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8">
              Expert virtual CPA services for Mississauga businesses and individuals, from Square One to Port Credit and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:437-772-9598" className="inline-block bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors">
                Call (437) 772-9598
              </a>
              <Link href="/pricing" className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">What We Offer</p>
              <h2 className="font-serif text-2xl font-bold text-navy">CPA Services for Mississauga Businesses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <div key={s.href} className="bg-white border border-gray-100 shadow-sm p-6 hover:border-gold transition-colors">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{s.label}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <Link href={s.href} className="inline-flex items-center text-gold hover:text-gold-hover font-semibold text-sm transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
                <h2 className="font-serif text-2xl font-bold text-navy mb-8">
                  Why Mississauga Businesses Choose Adapt Accounting Services
                </h2>
                <div className="space-y-5">
                  {whyUs.map(item => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">{item.title}</h4>
                        <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gold-50 border border-gold p-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 text-sm mb-6">Get an instant quote for your Mississauga business accounting needs.</p>
                <Link href="/pricing" className="w-full inline-block bg-navy hover:bg-navy-light text-white font-semibold px-6 py-4 text-center transition-colors mb-4">
                  Calculate Your Quote
                </Link>
                <p className="text-center text-sm text-gray-500">Or call us directly:</p>
                <a href="tel:437-772-9598" className="block text-center text-gold font-bold text-lg mt-1 hover:text-gold-hover transition-colors">
                  (437) 772-9598
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-xl font-bold text-navy mb-6">Mississauga Areas We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map(area => (
                <span key={area} className="bg-white border border-gray-200 text-sm text-gray-700 px-4 py-2">{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Ready for Expert CPA Services in Mississauga?</h2>
            <p className="text-navy-100 mb-8">Virtual consultations available Canada-wide. No commute required.</p>
            <Link href="/pricing" className="inline-block bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors">
              Book a Free Consultation
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
