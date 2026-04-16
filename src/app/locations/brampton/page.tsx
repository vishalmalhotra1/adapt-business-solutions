import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CPA Brampton | Professional Accounting & Tax Services | Adapt Business Solutions',
  description: 'Expert CPA services in Brampton, Ontario. Professional accounting, tax preparation, bookkeeping, and business consulting for Brampton businesses. Virtual CPA — serving all of Brampton.',
  keywords: 'CPA Brampton, accountant Brampton, tax preparation Brampton, bookkeeping Brampton',
  openGraph: {
    title: 'Professional CPA Services in Brampton, Ontario',
    description: 'Trusted accounting and tax services for Brampton businesses. Expert CPAs providing comprehensive financial solutions.',
    url: 'https://adaptbusinesssolutions.com/locations/brampton',
    type: 'website',
  },
  alternates: { canonical: 'https://adaptbusinesssolutions.com/locations/brampton' },
}

const services = [
  { label: 'Tax Preparation Brampton', href: '/services/tax-preparation', desc: 'Expert tax filing for Brampton residents and businesses. Maximize deductions and stay CRA-compliant.' },
  { label: 'Bookkeeping Services', href: '/services/bookkeeping-compilations', desc: 'Professional bookkeeping for Brampton businesses. Keep finances organized and tax-ready year-round.' },
  { label: 'Business Consulting', href: '/services/business-consulting', desc: 'Strategic financial advice for growing Brampton businesses. Planning, forecasting, and growth strategies.' },
  { label: 'Payroll Services', href: '/services/payroll', desc: 'Comprehensive payroll management for Brampton employers. Accurate, timely, and compliant.' },
  { label: 'Financial Analysis', href: '/services/financial-analysis', desc: 'In-depth financial analysis for Brampton businesses. Make informed decisions with comprehensive insights.' },
  { label: 'Corporate Services', href: '/services/corporate-services', desc: 'Complete corporate accounting services. From incorporation to annual filings.' },
]

const whyUs = [
  { title: 'Local Brampton Knowledge', desc: 'Deep understanding of the Brampton business environment, from the downtown core to industrial areas.' },
  { title: 'Multilingual Services', desc: "Serving Brampton's diverse community with accounting services accessible to all." },
  { title: 'Fast Response Times', desc: 'Quick turnaround on tax filings and financial reports to keep your Brampton business moving.' },
  { title: 'Competitive Pricing', desc: 'Transparent, competitive pricing designed for Brampton small and medium businesses.' },
]

const areas = ['Downtown Brampton', 'Bramalea', 'Heart Lake', 'Sandalwood', 'Churchville', 'Caledon', 'Georgetown', 'Bolton']

export default function BramptonPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">

        {/* Hero */}
        <section className="hero-pattern text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Brampton, ON</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Professional CPA Services in Brampton</h1>
            <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8">
              Trusted accounting and tax solutions for Brampton businesses in Canada&apos;s fastest-growing city.
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
              <h2 className="font-serif text-2xl font-bold text-navy">Comprehensive CPA Services for Brampton</h2>
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
                  Why Brampton Businesses Choose Adapt Business Solutions
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
                <p className="text-gray-600 text-sm mb-6">Get an instant quote for your Brampton business accounting needs.</p>
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
            <h2 className="font-serif text-xl font-bold text-navy mb-6">Brampton Areas We Serve</h2>
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
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Ready for Expert CPA Services in Brampton?</h2>
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
