import { Calculator, FileText, TrendingUp, Users, PieChart, Briefcase } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Calculator,
    title: 'Bookkeeping & Compilations',
    description: 'Professional bookkeeping and compilation engagements performed to CPA Canada standards, keeping your records accurate and compliant.',
    link: '/services/bookkeeping-compilations',
  },
  {
    icon: FileText,
    title: 'Tax Preparation & Planning',
    description: 'Strategic tax preparation for individuals and corporations, minimizing liability while ensuring full CRA compliance.',
    link: '/services/tax-preparation',
  },
  {
    icon: TrendingUp,
    title: 'Financial Analysis',
    description: 'Data-driven financial analysis, budgeting, and forecasting to help you make informed business decisions and drive growth.',
    link: '/services/financial-analysis',
  },
  {
    icon: Users,
    title: 'Payroll Services',
    description: 'Full payroll management including processing, CRA remittances, T4s, and compliance with Ontario employment standards.',
    link: '/services/payroll',
  },
  {
    icon: PieChart,
    title: 'Business Consulting',
    description: 'Strategic advisory to optimize your operations, improve profitability, and build a clear financial roadmap for growth.',
    link: '/services/business-consulting',
  },
  {
    icon: Briefcase,
    title: 'Corporate Services',
    description: 'Complete incorporation, annual filings, corporate compliance, and ongoing governance for federally and provincially registered corporations.',
    link: '/services/corporate-services',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From daily bookkeeping to complex corporate tax strategy — everything your Ontario
            business needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 group border-t-2 border-t-gold"
              >
                <div className="bg-gold-50 w-12 h-12 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-gold hover:text-gold-hover font-semibold text-sm transition-colors inline-flex items-center"
                >
                  Learn More
                  <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 transition-colors"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
