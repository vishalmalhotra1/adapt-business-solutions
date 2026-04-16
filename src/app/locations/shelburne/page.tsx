import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CPA Shelburne | Accounting & Tax Services | Adapt Business Solutions',
  description: 'Professional virtual CPA services for Shelburne, Ontario businesses. Tax preparation, bookkeeping, and financial consulting for Shelburne and Dufferin County.',
  keywords: 'CPA Shelburne Ontario, accountant Shelburne, tax preparation Shelburne, bookkeeping Shelburne Dufferin',
  openGraph: {
    title: 'CPA Services Shelburne, Ontario | Adapt Business Solutions',
    description: 'Professional CPA services for Shelburne businesses. Bookkeeping, tax preparation, and financial consulting.',
    url: 'https://adaptbusinesssolutions.com/locations/shelburne',
    type: 'website',
  },
  alternates: { canonical: 'https://adaptbusinesssolutions.com/locations/shelburne' },
}

const services = [
  { label: 'Tax Preparation', href: '/services/tax-preparation', desc: 'T1 personal and T2 corporate tax returns for Shelburne businesses and residents.' },
  { label: 'Bookkeeping & Compilations', href: '/services/bookkeeping-compilations', desc: 'Monthly bookkeeping, reconciliations, and compiled financial statements.' },
  { label: 'Business Consulting', href: '/services/business-consulting', desc: 'Strategic planning and financial advice for Shelburne entrepreneurs.' },
  { label: 'Corporate Services', href: '/services/corporate-services', desc: 'Business incorporation, annual filings, and compliance for Dufferin County businesses.' },
  { label: 'Payroll Services', href: '/services/payroll', desc: 'Accurate payroll processing and CRA remittances for Shelburne employers.' },
  { label: 'Financial Analysis', href: '/services/financial-analysis', desc: 'Cash flow management, budgeting, and performance analysis.' },
]

const whyUs = [
  { title: 'Shelburne & Dufferin Expertise', desc: 'Based in Orangeville, we know the Shelburne and Dufferin County business community.' },
  { title: 'Virtual Convenience', desc: 'Full CPA services delivered online — no need to travel to a larger city for professional accounting.' },
  { title: 'Transparent Pricing', desc: 'Clear, flat-fee monthly packages starting at $100/month. No billable hours, no surprises.' },
  { title: 'Personalized Service', desc: 'Direct access to your CPA — not a junior associate or call centre.' },
]

export default function ShelburnePage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">

        {/* Hero */}
        <section className="hero-pattern text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Shelburne, ON</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Professional CPA Services in Shelburne</h1>
            <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8">
              Expert virtual accounting and tax services for Shelburne and Dufferin County — professional CPA support, no city commute required.
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
              <h2 className="font-serif text-2xl font-bold text-navy">CPA Services for Shelburne Businesses</h2>
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
                  Why Shelburne Businesses Choose Adapt Business Solutions
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
                <p className="text-gray-600 text-sm mb-6">Get an instant quote for your Shelburne business accounting needs.</p>
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

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Expert CPA Services for Shelburne Businesses</h2>
            <p className="text-navy-100 mb-8">Virtual consultations available. Serving Shelburne and all of Dufferin County.</p>
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
