import { Calculator, FileText, TrendingUp, Users, PieChart, Briefcase } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Calculator,
    title: 'Bookkeeping & Compilations',
    description: 'Professional bookkeeping services and compilation engagements to ensure accurate financial records.',
    features: ['Monthly Bookkeeping', 'Financial Compilations', 'Accounts Reconciliation'],
    link: '/services/bookkeeping-compilations'
  },
  {
    icon: FileText,
    title: 'Tax Preparation & Planning',
    description: 'Comprehensive tax services including preparation, planning, and strategic optimization.',
    features: ['Personal & Corporate Tax', 'Tax Planning Strategies', 'CRA Representation'],
    link: '/services/tax-preparation'
  },
  {
    icon: TrendingUp,
    title: 'Financial Analysis',
    description: 'In-depth analysis and reporting to help you make informed business decisions.',
    features: ['Performance Analytics', 'Budget Forecasting', 'Financial Modeling'],
    link: '/services/financial-analysis'
  },
  {
    icon: Users,
    title: 'Payroll Services',
    description: 'Complete payroll management including processing, compliance, and employee benefits.',
    features: ['Payroll Processing', 'Benefits Administration', 'Compliance Management'],
    link: '/services/payroll'
  },
  {
    icon: PieChart,
    title: 'Business Consulting',
    description: 'Strategic business advice to help optimize operations and drive growth.',
    features: ['Business Strategy', 'Process Optimization', 'Growth Planning'],
    link: '/services/business-consulting'
  },
  {
    icon: Briefcase,
    title: 'Corporate Services',
    description: 'Comprehensive corporate services including incorporation and ongoing compliance.',
    features: ['Business Incorporation', 'Corporate Compliance', 'Regulatory Filings'],
    link: '/services/corporate-services'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50" itemScope itemType="https://schema.org/Service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" itemProp="name">
            Professional CPA Services for Orangeville & GTA Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            Serving businesses in Orangeville, Brampton, Mississauga, and Niagara Region with 
            comprehensive accounting services from basic bookkeeping to strategic financial planning.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <article 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-600"
                itemScope 
                itemType="https://schema.org/Service"
              >
                <div className="mb-6">
                  <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" itemProp="description">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2" itemProp="serviceType">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.link}
                  className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-block"
                  itemProp="url"
                >
                  Learn More →
                </Link>
              </article>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/pricing" className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold inline-block">
            Get Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
