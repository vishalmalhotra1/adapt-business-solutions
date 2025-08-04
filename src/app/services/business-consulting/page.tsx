import { PieChart, CheckCircle, TrendingUp, Target } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BusinessConsultingPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <PieChart className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Business Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic business consulting services to help optimize your operations, 
              improve profitability, and achieve sustainable growth across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Target className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Strategy</h3>
              <p className="text-gray-600">Strategic planning and business development guidance</p>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Optimization</h3>
              <p className="text-gray-600">Streamlining operations for improved efficiency</p>
            </div>

            <div className="bg-accent-50 rounded-xl p-8 text-center">
              <PieChart className="h-12 w-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Planning</h3>
              <p className="text-gray-600">Strategic growth planning and expansion strategies</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get an instant price estimate for our business consulting services
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
