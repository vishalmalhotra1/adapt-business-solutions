import { FileText, CheckCircle, Calendar, Shield, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TaxPreparationPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tax Preparation & Planning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax services for individuals and businesses across Canada, 
              ensuring compliance with CRA requirements and maximizing tax efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal Tax */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Tax Returns</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">T1 Personal Tax Returns</h3>
                    <p className="text-gray-600">Complete preparation of personal income tax returns for all provinces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Self-Employment Income</h3>
                    <p className="text-gray-600">Proper reporting of business income, expenses, and CCA calculations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Investment Income & Capital Gains</h3>
                    <p className="text-gray-600">Optimization of investment income reporting and capital gains treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Rental Property Income</h3>
                    <p className="text-gray-600">Complete rental income and expense reporting with depreciation schedules</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Tax */}
            <div className="bg-primary-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Corporate Tax Returns</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">T2 Corporate Tax Returns</h3>
                    <p className="text-gray-600">Complete corporate tax preparation for all business structures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Small Business Deduction</h3>
                    <p className="text-gray-600">Maximizing small business deduction and CCPC benefits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scientific Research & Development</h3>
                    <p className="text-gray-600">SR&ED tax credit applications and optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Provincial Corporate Tax</h3>
                    <p className="text-gray-600">Multi-jurisdictional corporate tax compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Planning Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Tax Planning
            </h2>
            <p className="text-lg text-gray-600">
              Proactive tax planning strategies to minimize tax liability and maximize after-tax income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <DollarSign className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Income Splitting Strategies</h3>
              <p className="text-gray-600 mb-4">
                Legitimate income splitting techniques to reduce overall family tax burden while 
                complying with attribution rules.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Spousal RRSP contributions</li>
                <li>• Family trust structures</li>
                <li>• Pension income splitting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Calendar className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Year-End Planning</h3>
              <p className="text-gray-600 mb-4">
                Strategic year-end planning to optimize current year tax position and 
                prepare for future tax obligations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Capital gains/loss harvesting</li>
                <li>• Expense timing optimization</li>
                <li>• RRSP contribution planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Shield className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estate Planning</h3>
              <p className="text-gray-600 mb-4">
                Tax-efficient estate planning strategies to minimize tax on death and 
                maximize wealth transfer to beneficiaries.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Estate freeze techniques</li>
                <li>• Charitable giving strategies</li>
                <li>• Trust planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GST/HST Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent-50 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GST/HST Services</h2>
              <p className="text-lg text-gray-600">
                Complete GST/HST compliance and optimization services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">GST/HST Returns</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Monthly, quarterly, and annual GST/HST returns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Input tax credit optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Place of supply determinations</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">GST/HST Registration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Voluntary and mandatory registration assistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Quick Method election analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Multi-provincial registration coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRA Representation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CRA Representation</h2>
            <p className="text-lg text-gray-600">
              Professional representation for CRA audits, objections, and disputes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Defense</h3>
              <p className="text-gray-600">Complete representation during CRA audits with professional advocacy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Notice of Objection</h3>
              <p className="text-gray-600">Filing objections and appeals to challenge CRA assessments</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Voluntary Disclosure</h3>
              <p className="text-gray-600">Voluntary disclosure program applications for penalty and interest relief</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Maximize Your Tax Efficiency</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get an instant price estimate first, then schedule a consultation to discuss your tax preparation and planning needs
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
