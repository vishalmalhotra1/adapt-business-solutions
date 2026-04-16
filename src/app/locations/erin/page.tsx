import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CPA Erin | Accounting & Tax Services | Adapt Business Solutions',
  description: 'Professional virtual CPA services for Erin, Ontario businesses. Tax preparation, bookkeeping, and financial consulting for Erin and Wellington County. Local CPA expertise.',
  keywords: 'CPA Erin Ontario, accountant Erin, tax preparation Erin, bookkeeping Erin Wellington County',
  openGraph: {
    title: 'CPA Services Erin, Ontario | Adapt Business Solutions',
    description: 'Professional CPA services for Erin businesses. Bookkeeping, tax preparation, and financial consulting.',
    url: 'https://adaptbusinesssolutions.com/locations/erin',
    type: 'website',
  },
  alternates: { canonical: 'https://adaptbusinesssolutions.com/locations/erin' },
}

const services = [
  { label: 'Tax Preparation', href: '/services/tax-preparation', desc: 'Personal (T1) and corporate (T2) tax returns for Erin businesses and residents.' },
  { label: 'Bookkeeping & Compilations', href: '/services/bookkeeping-compilations', desc: 'Monthly bookkeeping and financial statements for rural and small-town Ontario businesses.' },
  { label: 'Business Consulting', href: '/services/business-consulting', desc: 'Strategic financial planning for Erin entrepreneurs and growing businesses.' },
  { label: 'Corporate Services', href: '/services/corporate-services', desc: 'Incorporation, annual filings, and corporate compliance for Wellington County businesses.' },
  { label: 'Payroll Services', href: '/services/payroll', desc: 'Streamlined payroll processing and CRA remittances for Erin employers.' },
  { label: 'Financial Analysis', href: '/services/financial-analysis', desc: 'Budget forecasting and performance reporting to help your business grow.' },
]

const whyUs = [
  { title: 'Rural Ontario Expertise', desc: 'Understanding of the unique business environment in small-town and rural Wellington County.' },
  { title: 'Virtual Convenience', desc: 'Full-service CPA support without the need to travel to a city — everything handled online.' },
  { title: 'Affordable Flat Fees', desc: 'Transparent monthly pricing starting at $100/month, designed for small businesses.' },
  { title: 'Personalized Attention', desc: 'Unlike large accounting firms, you get direct access to your CPA every time.' },
]

export default function ErinPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">

        {/* Hero */}
        <section className="hero-pattern text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Erin, ON</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Professional CPA Services in Erin</h1>
            <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8">
              Expert virtual accounting and tax services for Erin and Wellington County businesses — professional CPA support without the city commute.
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
              <h2 className="font-serif text-2xl font-bold text-navy">CPA Services for Erin Businesses</h2>
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
                  Why Erin Businesses Choose Adapt Business Solutions
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
                <p className="text-gray-600 text-sm mb-6">Get an instant quote for your Erin business accounting needs.</p>
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

        {/* Nearby */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-xl font-bold text-navy mb-6">Also Serving Nearby Communities</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Erin', 'Hillsburgh', 'Orangeville', 'Mono', 'Amaranth', 'Grand Valley', 'Shelburne', 'Brampton'].map(area => (
                <span key={area} className="bg-white border border-gray-200 text-sm text-gray-700 px-4 py-2">{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Expert CPA Services for Erin Businesses</h2>
            <p className="text-navy-100 mb-8">Virtual consultations available. Professional CPA support, wherever you are in Ontario.</p>
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
