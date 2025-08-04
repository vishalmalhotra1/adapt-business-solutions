import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Calculator, TrendingUp, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CPA Services Orangeville Ontario | Adapt Business Solutions | Local Accountant',
  description: 'Professional CPA and accounting services in Orangeville, Ontario. Expert bookkeeping, tax preparation, financial analysis for Orangeville businesses. Local virtual CPA services.',
  keywords: 'CPA Orangeville, accountant Orangeville Ontario, bookkeeping Orangeville, tax preparation Orangeville, financial services Orangeville, local CPA Orangeville',
  openGraph: {
    title: 'CPA Services Orangeville Ontario | Adapt Business Solutions',
    description: 'Professional CPA services for Orangeville businesses. Expert bookkeeping, tax preparation, and financial consulting in Orangeville, Ontario.',
    url: 'https://adaptbusinesssolutions.com/locations/orangeville',
    type: 'website',
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com/locations/orangeville',
  },
}

export default function OrangevillePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional CPA Services in <span className="text-primary-600">Orangeville, Ontario</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Serving Orangeville businesses with expert virtual CPA services including bookkeeping, 
                tax preparation, financial analysis, and business consulting. Local expertise with 
                modern convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing" className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors">
                  Get Your Orangeville Quote
                </Link>
                <a href="tel:437-772-9598" className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">
                  Call (437) 772-9598
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Orangeville */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive CPA Services for Orangeville Businesses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From small startups to established corporations in Orangeville, we provide 
                tailored accounting solutions to meet your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bookkeeping Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional bookkeeping for Orangeville businesses with monthly reconciliations, 
                  accounts management, and financial record keeping.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Transaction recording and categorization</li>
                  <li>• Bank reconciliations</li>
                  <li>• Accounts payable/receivable</li>
                  <li>• Financial statements</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Complete tax services for Orangeville individuals and businesses including 
                  personal (T1) and corporate (T2) tax returns.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personal tax returns (T1)</li>
                  <li>• Corporate tax returns (T2)</li>
                  <li>• HST/GST filing</li>
                  <li>• Tax planning and optimization</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic financial advice for Orangeville businesses including budgeting, 
                  forecasting, and business growth planning.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Financial analysis and reporting</li>
                  <li>• Budget planning and forecasting</li>
                  <li>• Business performance metrics</li>
                  <li>• Growth strategy consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Orangeville */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Orangeville Businesses Choose Adapt Business Solutions
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Market Knowledge</h4>
                      <p className="text-gray-600">Understanding of Orangeville business environment and local regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Virtual Convenience</h4>
                      <p className="text-gray-600">Modern virtual services without the need for office visits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                      <p className="text-gray-600">20-30% more competitive than traditional Orangeville accounting firms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Responsive Service</h4>
                      <p className="text-gray-600">Quick response times and personalized attention to your business</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Get an instant quote for your Orangeville business accounting needs.
                </p>
                <div className="space-y-4">
                  <Link href="/pricing" className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center block">
                    Calculate Your Quote
                  </Link>
                  <div className="text-center text-gray-600">
                    <p>Or call us directly:</p>
                    <a href="tel:437-772-9598" className="text-primary-600 font-semibold text-lg hover:text-primary-700">
                      (437) 772-9598
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
