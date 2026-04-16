import type { Metadata } from 'next'
import { TrendingUp, BarChart3, PieChart, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Financial Analysis & Reporting | Adapt Business Solutions',
  description: 'Comprehensive financial analysis, budget forecasting, and performance reporting for Ontario businesses. Data-driven insights from a certified CPA.',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/financial-analysis' },
}

const cards = [
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    body: 'Detailed analysis of your business performance with key performance indicators and trend analysis.',
    bullets: ['Revenue and profitability analysis', 'Cost structure optimization', 'Industry benchmarking'],
    bg: 'bg-gray-50',
  },
  {
    icon: PieChart,
    title: 'Budget Forecasting',
    body: 'Strategic budget preparation and forecasting to help plan for future growth and manage cash flow.',
    bullets: ['Annual budget preparation', 'Rolling forecasts', 'Variance analysis'],
    bg: 'bg-gold-50 border border-gold',
  },
  {
    icon: Target,
    title: 'Financial Modeling',
    body: 'Custom financial models to support business decisions, investment analysis, and strategic planning.',
    bullets: ['Investment appraisal models', 'Scenario planning', 'Sensitivity analysis'],
    bg: 'bg-gray-50',
  },
]

export default function FinancialAnalysisPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gold bg-opacity-20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Core Service</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Financial Analysis &amp; Reporting</h1>
            <p className="text-navy-100 text-lg max-w-3xl mx-auto">
              Comprehensive financial analysis and reporting services to help you understand your business performance and make data-driven decisions for sustainable growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map(({ icon: Icon, title, body, bullets, bg }) => (
                <div key={title} className={`${bg} p-8`}>
                  <div className="bg-gold-50 w-12 h-12 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{body}</p>
                  <ul className="space-y-2">
                    {bullets.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Full Suite</p>
              <h2 className="font-serif text-2xl font-bold text-navy">What We Deliver</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Monthly Management Reports',
                'KPI Dashboards',
                'Cash Flow Projections',
                'Break-Even Analysis',
                'Profitability Reports',
                'Working Capital Analysis',
                'Ratio Analysis',
                'Trend Reports',
              ].map(item => (
                <div key={item} className="bg-white border border-gray-100 shadow-sm p-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Ready to Analyze Your Business Performance?</h2>
            <p className="text-navy-100 mb-8">Get an instant price estimate, then discuss your financial analysis needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="inline-block bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors">
                Get Price Estimate
              </Link>
              <a href="tel:437-772-9598" className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors">
                Call (437) 772-9598
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
