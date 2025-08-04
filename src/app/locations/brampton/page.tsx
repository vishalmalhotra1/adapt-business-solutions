import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CPA Services Brampton | Professional Accounting & Tax Preparation | Adapt Business Solutions',
  description: 'Expert CPA services in Brampton, Ontario. Professional accounting, tax preparation, bookkeeping, and business consulting for Brampton businesses and individuals. Call (647) 123-4567.',
  keywords: 'CPA Brampton, accountant Brampton, tax preparation Brampton, bookkeeping Brampton, business consulting Brampton, financial services Brampton Ontario',
  openGraph: {
    title: 'Professional CPA Services in Brampton, Ontario',
    description: 'Trusted accounting and tax services for Brampton businesses and residents. Expert CPAs providing comprehensive financial solutions.',
    url: 'https://adaptbusinesssolutions.com/locations/brampton',
    siteName: 'Adapt Business Solutions',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com/locations/brampton'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Adapt Business Solutions - Brampton CPA Services",
  "description": "Professional CPA and accounting services for Brampton, Ontario businesses and individuals",
  "url": "https://adaptbusinesssolutions.com/locations/brampton",
  "telephone": "+1-437-772-9598",
  "email": "info@adaptbusinesssolutions.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brampton",
    "addressRegion": "Ontario",
    "addressCountry": "CA"
  },
  "areaServed": [
    "Brampton",
    "Mississauga",
    "Caledon",
    "Georgetown",
    "Bolton",
    "Bramalea",
    "Heart Lake",
    "Sandalwood",
    "Churchville"
  ],
  "serviceType": [
    "Tax Preparation",
    "Bookkeeping",
    "Financial Analysis",
    "Business Consulting",
    "Payroll Services",
    "Corporate Services"
  ]
}

export default function BramptonPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional CPA Services in Brampton
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Trusted accounting and tax solutions for Brampton businesses and residents
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="tel:+14377729598"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (437) 772-9598
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Serving Brampton & Area</h3>
                <p className="text-gray-600">
                  Bramalea, Heart Lake, Sandalwood, Churchville, Caledon, Georgetown, Bolton
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-600">
                  Evening and weekend appointments available for busy Brampton professionals
                </p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Brampton business landscape and tax requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Brampton */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive CPA Services for Brampton
              </h2>
              <p className="text-xl text-gray-600">
                From small Brampton startups to established corporations, we provide tailored financial solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tax Preparation Brampton</h3>
                <p className="text-gray-600 mb-4">
                  Expert tax filing for Brampton residents and businesses. Maximize deductions and ensure compliance with CRA requirements.
                </p>
                <Link href="/services/tax-preparation" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bookkeeping Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional bookkeeping for Brampton businesses. Keep your finances organized and tax-ready year-round.
                </p>
                <Link href="/services/bookkeeping-compilations" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic financial advice for growing Brampton businesses. Planning, forecasting, and growth strategies.
                </p>
                <Link href="/services/business-consulting" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Payroll Services</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive payroll management for Brampton employers. Ensure accurate, timely, and compliant payroll processing.
                </p>
                <Link href="/services/payroll" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Financial Analysis</h3>
                <p className="text-gray-600 mb-4">
                  In-depth financial analysis for Brampton businesses. Make informed decisions with comprehensive financial insights.
                </p>
                <Link href="/services/financial-analysis" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Corporate Services</h3>
                <p className="text-gray-600 mb-4">
                  Complete corporate accounting services for Brampton companies. From incorporation to annual filings.
                </p>
                <Link href="/services/corporate-services" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Brampton */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Brampton Businesses Choose Adapt Business Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Local Brampton Knowledge</h3>
                      <p className="text-gray-600">
                        We understand the unique business environment in Brampton, from the bustling downtown core to the industrial areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Multilingual Services</h3>
                      <p className="text-gray-600">
                        Serving Brampton&apos;s diverse community with accounting services in multiple languages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Fast Response Times</h3>
                      <p className="text-gray-600">
                        Quick turnaround on tax filings and financial reports to keep your Brampton business moving forward.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                      <p className="text-gray-600">
                        Transparent, competitive pricing structure designed for Brampton small and medium businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Ready to Get Started?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Call Us Today</p>
                      <Link href="tel:+14377729598" className="text-primary-600 hover:text-primary-700">
                        (437) 772-9598
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <Link href="mailto:info@adaptbusinesssolutions.com" className="text-primary-600 hover:text-primary-700">
                        info@adaptbusinesssolutions.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block"
                  >
                    Schedule Free Consultation
                  </Link>
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Serving all areas of Brampton and surrounding regions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Areas Served */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Brampton Areas We Serve
              </h2>
              <p className="text-gray-600">
                Professional CPA services throughout Brampton and surrounding communities
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Downtown Brampton',
                'Bramalea',
                'Heart Lake',
                'Sandalwood',
                'Churchville',
                'Caledon',
                'Georgetown',
                'Bolton',
                'Mississauga Road',
                'Queen Street',
                'Main Street',
                'Bovaird Drive'
              ].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
