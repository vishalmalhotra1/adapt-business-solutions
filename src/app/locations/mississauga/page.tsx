import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CPA Services Mississauga | Professional Accounting & Tax Services | Adapt Business Solutions',
  description: 'Expert CPA services in Mississauga, Ontario. Professional accounting, tax preparation, bookkeeping, and business consulting for Mississauga businesses. Call (647) 123-4567.',
  keywords: 'CPA Mississauga, accountant Mississauga, tax preparation Mississauga, bookkeeping Mississauga, business consulting Mississauga, financial services Mississauga Ontario',
  openGraph: {
    title: 'Professional CPA Services in Mississauga, Ontario',
    description: 'Trusted accounting and tax services for Mississauga businesses and residents. Expert CPAs providing comprehensive financial solutions.',
    url: 'https://adaptbusinesssolutions.com/locations/mississauga',
    siteName: 'Adapt Business Solutions',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com/locations/mississauga'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Adapt Business Solutions - Mississauga CPA Services",
  "description": "Professional CPA and accounting services for Mississauga, Ontario businesses and individuals",
  "url": "https://adaptbusinesssolutions.com/locations/mississauga",
  "telephone": "+1-437-772-9598",
  "email": "info@adaptbusinesssolutions.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mississauga",
    "addressRegion": "Ontario",
    "addressCountry": "CA"
  },
  "areaServed": [
    "Mississauga",
    "Brampton",
    "Oakville",
    "Milton",
    "Etobicoke",
    "Streetsville",
    "Port Credit",
    "Meadowvale",
    "Erin Mills",
    "Square One"
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

export default function MississaugaPage() {
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
                Professional CPA Services in Mississauga
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Expert accounting and tax solutions for Canada&apos;s sixth-largest city
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
                <h3 className="text-xl font-semibold mb-2">Serving Mississauga & GTA</h3>
                <p className="text-gray-600">
                  Streetsville, Port Credit, Meadowvale, Erin Mills, Square One, Cooksville
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Convenient Hours</h3>
                <p className="text-gray-600">
                  Flexible scheduling to accommodate busy Mississauga professionals and businesses
                </p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Corporate Expertise</h3>
                <p className="text-gray-600">
                  Specialized services for Mississauga&apos;s thriving business district and corporate community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Mississauga */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive CPA Services for Mississauga
              </h2>
              <p className="text-xl text-gray-600">
                From tech startups to established corporations, serving Mississauga&apos;s diverse business ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Corporate Tax Services</h3>
                <p className="text-gray-600 mb-4">
                  Specialized corporate tax preparation for Mississauga businesses. Navigate complex tax regulations with confidence.
                </p>
                <Link href="/services/tax-preparation" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Financial Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Advanced financial analysis and reporting for Mississauga&apos;s dynamic business environment.
                </p>
                <Link href="/services/financial-analysis" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic business consulting for growing Mississauga companies. Scale your business with expert guidance.
                </p>
                <Link href="/services/business-consulting" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bookkeeping & Compilations</h3>
                <p className="text-gray-600 mb-4">
                  Professional bookkeeping services for Mississauga businesses. Keep your finances organized and compliant.
                </p>
                <Link href="/services/bookkeeping-compilations" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Payroll Management</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive payroll services for Mississauga employers. Accurate, timely, and compliant payroll processing.
                </p>
                <Link href="/services/payroll" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Corporate Services</h3>
                <p className="text-gray-600 mb-4">
                  Full-service corporate accounting for Mississauga companies. From setup to annual compliance.
                </p>
                <Link href="/services/corporate-services" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Mississauga */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Mississauga Businesses Trust Adapt Business Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Corporate District Expertise</h3>
                      <p className="text-gray-600">
                        Deep understanding of Mississauga&apos;s business hubs including Square One, Airport Corporate Centre, and Meadowvale.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technology Integration</h3>
                      <p className="text-gray-600">
                        Modern accounting solutions and cloud-based systems perfect for Mississauga&apos;s tech-forward businesses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">International Business Support</h3>
                      <p className="text-gray-600">
                        Expertise in international tax and accounting matters for Mississauga&apos;s globally-connected businesses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Scalable Solutions</h3>
                      <p className="text-gray-600">
                        Services that grow with your business, from startup to enterprise level in Mississauga&apos;s competitive market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Connect With Us Today
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Call Our Mississauga Team</p>
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
                    Schedule Consultation
                  </Link>
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Proudly serving all of Mississauga and the Greater Toronto Area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve in Mississauga
              </h2>
              <p className="text-xl text-gray-600">
                Specialized accounting expertise across Mississauga&apos;s key business sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Technology & Software',
                'Manufacturing',
                'Healthcare & Medical',
                'Professional Services',
                'Real Estate',
                'Retail & E-commerce',
                'Financial Services',
                'Transportation & Logistics'
              ].map((industry) => (
                <div key={industry} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{industry}</h3>
                  <p className="text-sm text-gray-600">
                    Specialized CPA services tailored to your industry needs
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Areas Served */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Mississauga Areas We Serve
              </h2>
              <p className="text-gray-600">
                Professional CPA services throughout Mississauga and neighboring communities
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Square One',
                'Streetsville',
                'Port Credit',
                'Meadowvale',
                'Erin Mills',
                'Cooksville',
                'Malton',
                'Clarkson',
                'Lorne Park',
                'Hurontario',
                'Creditview',
                'Dixie'
              ].map((area) => (
                <div key={area} className="bg-white rounded-lg p-4">
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
