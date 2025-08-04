import { Briefcase, CheckCircle, FileText, Shield } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CorporateServicesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Corporate Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive corporate services including business incorporation, ongoing compliance, 
              and regulatory filings to support your business operations across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 rounded-xl p-8">
              <Briefcase className="h-10 w-10 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Incorporation</h3>
              <p className="text-gray-600 mb-6">
                Complete incorporation services for federal and provincial corporations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Articles of Incorporation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Corporate name searches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Registered office services</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 rounded-xl p-8">
              <Shield className="h-10 w-10 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate Compliance</h3>
              <p className="text-gray-600 mb-6">
                Ongoing compliance and corporate governance support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Annual returns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Corporate resolutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Minute book maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent-50 rounded-xl p-8">
              <FileText className="h-10 w-10 text-accent-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Filings</h3>
              <p className="text-gray-600 mb-6">
                Professional regulatory filing services and documentation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Corporate amendments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Extra-provincial registrations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dissolution services</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Corporate Services?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get an instant price estimate first, then let us handle your corporate compliance and regulatory requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Get Price Estimate
              </Link>
              <Link href="tel:437-772-9598" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Call (437) 772-9598
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}
