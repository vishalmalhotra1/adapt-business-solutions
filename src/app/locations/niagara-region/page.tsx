import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CPA Services Niagara Region | Professional Accounting & Tax Services | Adapt Business Solutions',
  description: 'Expert CPA services in Niagara Region, Ontario. Professional accounting, tax preparation, bookkeeping for St. Catharines, Niagara Falls, Welland. Call (647) 123-4567.',
  keywords: 'CPA Niagara Region, accountant St. Catharines, tax preparation Niagara Falls, bookkeeping Welland, business consulting Niagara, financial services Niagara Ontario',
  openGraph: {
    title: 'Professional CPA Services in Niagara Region, Ontario',
    description: 'Trusted accounting and tax services for Niagara Region businesses and residents. Expert CPAs serving St. Catharines, Niagara Falls, Welland.',
    url: 'https://adaptbusinesssolutions.com/locations/niagara-region',
    siteName: 'Adapt Business Solutions',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com/locations/niagara-region'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Adapt Business Solutions - Niagara Region CPA Services",
  "description": "Professional CPA and accounting services for Niagara Region, Ontario businesses and individuals",
  "url": "https://adaptbusinesssolutions.com/locations/niagara-region",
  "telephone": "+1-647-123-4567",
  "email": "info@adaptbusinesssolutions.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Niagara Region",
    "addressRegion": "Ontario",
    "addressCountry": "CA"
  },
  "areaServed": [
    "St. Catharines",
    "Niagara Falls",
    "Welland",
    "Thorold",
    "Niagara-on-the-Lake",
    "Port Colborne",
    "Lincoln",
    "Pelham",
    "West Lincoln",
    "Wainfleet",
    "Fort Erie",
    "Grimsby"
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

export default function NiagaraRegionPage() {
  return (
    <>
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
                Professional CPA Services in Niagara Region
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Expert accounting and tax solutions for Niagara&apos;s thriving business community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="tel:+16471234567"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (647) 123-4567
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
                <h3 className="text-xl font-semibold mb-2">Serving All Niagara</h3>
                <p className="text-gray-600">
                  St. Catharines, Niagara Falls, Welland, Thorold, NOTL, Port Colborne, and all 12 municipalities
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Regional Coverage</h3>
                <p className="text-gray-600">
                  On-site visits available throughout the Niagara Peninsula for your convenience
                </p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Industry Knowledge</h3>
                <p className="text-gray-600">
                  Specialized expertise in tourism, agriculture, manufacturing, and wine industry accounting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Niagara Region */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive CPA Services for Niagara Region
              </h2>
              <p className="text-xl text-gray-600">
                From wineries to tourism operators, specialized accounting for Niagara&apos;s unique economy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Wine Industry Accounting</h3>
                <p className="text-gray-600 mb-4">
                  Specialized CPA services for Niagara&apos;s world-renowned wine industry. Inventory, excise taxes, and regulations expertise.
                </p>
                <Link href="/services/corporate-services" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tourism & Hospitality</h3>
                <p className="text-gray-600 mb-4">
                  Expert accounting for hotels, restaurants, attractions, and tourism businesses throughout Niagara Region.
                </p>
                <Link href="/services/business-consulting" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Agricultural Accounting</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive farm accounting services including crop insurance, equipment depreciation, and agricultural tax planning.
                </p>
                <Link href="/services/tax-preparation" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Manufacturing CFO Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced financial management for Niagara&apos;s manufacturing sector. Cost accounting and efficiency analysis.
                </p>
                <Link href="/services/financial-analysis" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Small Business Support</h3>
                <p className="text-gray-600 mb-4">
                  Complete bookkeeping and tax services for Niagara&apos;s small business community. Personal attention, professional results.
                </p>
                <Link href="/services/bookkeeping-compilations" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <CheckCircle className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cross-Border Services</h3>
                <p className="text-gray-600 mb-4">
                  International tax and accounting expertise for businesses operating across the US-Canada border.
                </p>
                <Link href="/services/corporate-services" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Niagara */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Niagara Region Businesses Choose Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Regional Expertise</h3>
                      <p className="text-gray-600">
                        Deep understanding of Niagara&apos;s unique business environment, from Brock University partnerships to cross-border commerce.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Industry Specialization</h3>
                      <p className="text-gray-600">
                        Proven expertise in wine, tourism, agriculture, and manufacturing - Niagara&apos;s key economic drivers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Seasonal Business Support</h3>
                      <p className="text-gray-600">
                        Understanding of seasonal fluctuations in tourism and agriculture with tailored financial planning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personal Service</h3>
                      <p className="text-gray-600">
                        The personal attention and community connection that Niagara businesses deserve and expect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Ready to Work Together?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Call Our Niagara Team</p>
                      <Link href="tel:+16471234567" className="text-primary-600 hover:text-primary-700">
                        (647) 123-4567
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
                  Serving all 12 municipalities of Niagara Region
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
                Niagara Region Industries We Serve
              </h2>
              <p className="text-xl text-gray-600">
                Specialized expertise across Niagara&apos;s diverse economic landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Wine & Vineyards',
                'Tourism & Hospitality',
                'Agriculture & Farming',
                'Manufacturing',
                'Transportation & Logistics',
                'Retail & Services',
                'Construction',
                'Healthcare'
              ].map((industry) => (
                <div key={industry} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{industry}</h3>
                  <p className="text-sm text-gray-600">
                    Tailored CPA services for your industry
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
                Niagara Region Municipalities We Serve
              </h2>
              <p className="text-gray-600">
                Professional CPA services throughout all of Niagara Region
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                'St. Catharines',
                'Niagara Falls',
                'Welland',
                'Thorold',
                'Niagara-on-the-Lake',
                'Port Colborne',
                'Lincoln',
                'Pelham',
                'West Lincoln',
                'Wainfleet',
                'Fort Erie',
                'Grimsby'
              ].map((area) => (
                <div key={area} className="bg-white rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Year-Round Support for Seasonal Businesses
              </h2>
              <p className="text-xl text-gray-600">
                Understanding Niagara&apos;s unique seasonal business cycles
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Peak Season Support</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Tourism revenue optimization</li>
                  <li>• Cash flow management during busy periods</li>
                  <li>• Staff payroll and seasonal hiring support</li>
                  <li>• Tax planning for seasonal income spikes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Off-Season Planning</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Budget planning for slow periods</li>
                  <li>• Equipment maintenance and depreciation</li>
                  <li>• Strategic planning and business development</li>
                  <li>• Year-end tax preparation and planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
