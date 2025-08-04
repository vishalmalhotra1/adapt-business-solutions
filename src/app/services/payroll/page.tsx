import { Users, CheckCircle, Calendar, Shield } from 'lucide-react'
import Link from 'next/link'

export default function PayrollPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Payroll Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete payroll management services ensuring accurate, timely payroll processing 
              and full compliance with Canadian employment standards and tax regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Payroll Processing</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Bi-weekly & Monthly Payroll</h3>
                    <p className="text-gray-600">Accurate payroll calculation and processing for all employee types</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">CRA Remittances</h3>
                    <p className="text-gray-600">Timely remittance of payroll taxes, CPP, EI, and other deductions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">T4 & Record of Employment</h3>
                    <p className="text-gray-600">Year-end T4 preparation and ROE processing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Compliance & Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Employment Standards</h3>
                    <p className="text-gray-600">Ensuring compliance with provincial employment standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Vacation & Benefits Tracking</h3>
                    <p className="text-gray-600">Comprehensive tracking of vacation accruals and benefits</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Streamline Your Payroll Process</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get an instant price estimate for our payroll services
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
