import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-primary-50 to-white" itemScope itemType="https://schema.org/ProfessionalService">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <header className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" itemProp="name">
                Empowering Growth,{' '}
                <span className="text-primary-600">Ensuring Value</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" itemProp="description">
                Your trusted CPA in financial excellence. We provide comprehensive 
                bookkeeping, compilations, tax planning, and financial strategy services to help your 
                business thrive across Canada.
              </p>
            </header>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#services" className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors text-center">
                View Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">30+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-600">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Strategic Financial Planning
                  </h3>
                  <p className="text-gray-600">
                    Data-driven insights and strategic planning to optimize your financial performance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent-500">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tax Optimization
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive tax planning and compliance to minimize liability and maximize savings
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600">
                    Personalized service with a dedicated team focused on your business success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
