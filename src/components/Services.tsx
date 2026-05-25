import Link from 'next/link'

const services = [
  {
    title: 'Bookkeeping & Compilations',
    description: 'Professional bookkeeping and compilation engagements performed to CPA Canada standards, keeping your records accurate and compliant.',
    link: '/services/bookkeeping-compilations',
  },
  {
    title: 'Tax Preparation & Planning',
    description: 'Strategic tax preparation for individuals and corporations, minimizing liability while ensuring full CRA compliance.',
    link: '/services/tax-preparation',
  },
  {
    title: 'Financial Analysis',
    description: 'Data-driven financial analysis, budgeting, and forecasting to help you make informed business decisions and drive growth.',
    link: '/services/financial-analysis',
  },
  {
    title: 'Payroll Services',
    description: 'Full payroll management including processing, CRA remittances, T4s, and compliance with Ontario employment standards.',
    link: '/services/payroll',
  },
  {
    title: 'Business Consulting',
    description: 'Strategic advisory to optimize your operations, improve profitability, and build a clear financial roadmap for growth.',
    link: '/services/business-consulting',
  },
  {
    title: 'Corporate Services',
    description: 'Complete incorporation, annual filings, corporate compliance, and ongoing governance for federally and provincially registered corporations.',
    link: '/services/corporate-services',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold-accessible)' }}>What We Offer</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 id="services-heading" className="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight max-w-lg">
              Comprehensive<br />Financial Services.
            </h2>
            <p className="text-gray-600 max-w-sm text-sm leading-relaxed md:text-right">
              From daily bookkeeping to complex corporate tax strategy, everything your Ontario business needs under one roof.
            </p>
          </div>
          <div className="mt-8 h-px bg-gray-200" aria-hidden="true" />
        </div>

        {/* 1px-gap grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200" role="list">
          {services.map((service) => (
            <li key={service.title} className="bg-white p-10 group hover:bg-gray-50 transition-colors">
              <h3 className="font-serif text-xl font-bold text-navy mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-xs font-semibold tracking-widest uppercase transition-colors inline-flex items-center gap-2 underline-offset-4 hover:underline"
                style={{ color: 'var(--gold-accessible)' }}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-block bg-navy text-white text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-navy transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
