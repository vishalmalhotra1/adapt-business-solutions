import { Calculator, CheckCircle, FileText, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BookkeepingCompilationsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bookkeeping & Compilation Engagements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional bookkeeping services and compilation engagements performed in accordance 
              with CPA Canada standards and CPA Ontario regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bookkeeping Services */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bookkeeping Services</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Monthly Financial Record Keeping</h3>
                    <p className="text-gray-600">Complete recording of all business transactions using cloud-based accounting software</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Accounts Payable & Receivable</h3>
                    <p className="text-gray-600">Management of vendor payments and customer invoicing with aging reports</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Bank & Credit Card Reconciliations</h3>
                    <p className="text-gray-600">Monthly reconciliation of all business accounts to ensure accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Financial Statements Preparation</h3>
                    <p className="text-gray-600">Monthly, quarterly, and annual financial statements for management use</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compilation Engagements */}
            <div className="bg-primary-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compilation Engagements</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">CPA Canada Standards Compliance</h3>
                    <p className="text-gray-600">All compilation engagements performed in accordance with CSRS 4200</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Notice to Reader</h3>
                    <p className="text-gray-600">Proper compilation reports with required Notice to Reader statements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Independence</h3>
                    <p className="text-gray-600">Maintaining professional independence as required by CPA Ontario</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Control</h3>
                    <p className="text-gray-600">Adherence to quality control standards and professional requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CPA Standards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Standards & Compliance
            </h2>
            <p className="text-lg text-gray-600">
              Our compilation engagements strictly adhere to CPA Canada and CPA Ontario professional standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CSRS 4200 Compliance</h3>
              <p className="text-gray-600 mb-4">
                All compilation engagements performed in accordance with Canadian Standard on Related Services (CSRS) 4200, 
                &quot;Compilation Engagements.&quot;
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Proper engagement letters</li>
                <li>• Appropriate compilation procedures</li>
                <li>• Required compilation reports</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notice to Reader</h3>
              <p className="text-gray-600 mb-4">
                All compiled financial statements include the required Notice to Reader clearly stating 
                the nature and limitations of a compilation engagement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• No assurance provided</li>
                <li>• Limited procedures performed</li>
                <li>• Management responsibility stated</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Ethics</h3>
              <p className="text-gray-600 mb-4">
                Maintaining professional independence and adhering to the CPA Ontario Code of Professional Conduct 
                throughout all engagements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Independence requirements</li>
                <li>• Confidentiality obligations</li>
                <li>• Professional competence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-12 bg-amber-50 border-l-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Notice</h3>
              <p className="text-amber-800 mb-4">
                Compilation engagements do not provide assurance on financial statements. A compilation is limited to 
                presenting information that is the representation of management in the form of financial statements.
              </p>
              <p className="text-amber-800">
                Users of compiled financial statements should be aware that these statements may not be appropriate 
                for their purposes and should consider engaging a public accountant to perform an audit or review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get an instant price estimate first, then contact us for a detailed consultation about your bookkeeping and compilation needs
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
