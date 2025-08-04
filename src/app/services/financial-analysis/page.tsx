import { TrendingUp, BarChart3, PieChart, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function FinancialAnalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Financial Analysis & Reporting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial analysis and reporting services to help you understand your business 
              performance and make data-driven decisions for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 rounded-xl p-8">
              <BarChart3 className="h-10 w-10 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600 mb-6">
                Detailed analysis of your business performance with key performance indicators and trend analysis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Revenue and profitability analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cost structure optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Industry benchmarking</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 rounded-xl p-8">
              <PieChart className="h-10 w-10 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Budget Forecasting</h3>
              <p className="text-gray-600 mb-6">
                Strategic budget preparation and forecasting to help plan for future growth and manage cash flow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Annual budget preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Rolling forecasts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Variance analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent-50 rounded-xl p-8">
              <Target className="h-10 w-10 text-accent-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Modeling</h3>
              <p className="text-gray-600 mb-6">
                Custom financial models to support business decisions, investment analysis, and strategic planning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Investment appraisal models</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Scenario planning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Sensitivity analysis</span>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Analyze Your Business Performance?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get an instant price estimate first, then contact us to discuss your financial analysis and reporting needs
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
  )
}
