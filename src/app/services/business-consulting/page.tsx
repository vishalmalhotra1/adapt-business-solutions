import type { Metadata } from 'next'
import { PieChart, CheckCircle, TrendingUp, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Business Consulting | Adapt Business Solutions',
  description: 'Strategic business consulting for Ontario small businesses. Process optimization, growth planning, and financial strategy from a certified CPA. Virtual consultations available.',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/business-consulting' },
}

const services = [
  {
    icon: Target,
    title: 'Business Strategy',
    body: 'Strategic planning and business development guidance tailored to your industry and goals.',
    bullets: ['Market positioning analysis', 'Competitive landscape review', 'Strategic goal-setting'],
  },
  {
    icon: TrendingUp,
    title: 'Process Optimization',
    body: 'Streamlining operations to reduce costs, improve efficiency, and eliminate bottlenecks.',
    bullets: ['Workflow analysis', 'System and software selection', 'Operational KPI tracking'],
  },
  {
    icon: PieChart,
    title: 'Growth Planning',
    body: 'Data-driven strategies to scale your business sustainably while managing risk.',
    bullets: ['Revenue growth modeling', 'Expansion feasibility analysis', 'Financing strategy'],
  },
  {
    icon: Lightbulb,
    title: 'Startup Advisory',
    body: 'Expert guidance for new businesses on structure, compliance, and financial foundations.',
    bullets: ['Business structure selection', 'CRA registration and compliance', 'Initial financial planning'],
  },
]

export default function BusinessConsultingPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gold bg-opacity-20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <PieChart className="h-8 w-8 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Core Service</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Business Consulting</h1>
            <p className="text-navy-100 text-lg max-w-3xl mx-auto">
              Strategic consulting to help optimize your operations, improve profitability, and achieve sustainable growth across Canada.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map(({ icon: Icon, title, body, bullets }) => (
                <div key={title} className="border border-gray-100 shadow-sm p-8 hover:border-gold transition-colors">
                  <div className="bg-gold-50 w-12 h-12 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{body}</p>
                  <ul className="space-y-2">
                    {bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">How We Work</p>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">A CPA&apos;s Perspective on Your Business</h2>
                <p className="text-gray-600 mb-6">
                  Unlike general business consultants, our advice is grounded in financial data. We combine strategic thinking with deep accounting expertise to give you recommendations that are both practical and measurable.
                </p>
                <div className="space-y-4">
                  {[
                    'Identify financial inefficiencies hidden in your numbers',
                    'Build realistic financial models for strategic decisions',
                    'Align business strategy with tax-efficient structures',
                    'Track progress through financial KPIs, not just gut feel',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gold-50 border border-gold p-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">Our Consulting Process</h3>
                <ol className="space-y-4">
                  {[
                    { step: '01', label: 'Discovery Call', desc: 'We understand your business, goals, and challenges.' },
                    { step: '02', label: 'Financial Review', desc: 'We analyze your numbers to identify opportunities.' },
                    { step: '03', label: 'Strategic Plan', desc: 'We deliver a clear, actionable roadmap.' },
                    { step: '04', label: 'Ongoing Support', desc: 'We stay with you to track and adjust.' },
                  ].map(({ step, label, desc }) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="font-serif text-2xl font-bold text-gold leading-none">{step}</span>
                      <div>
                        <h4 className="font-semibold text-navy">{label}</h4>
                        <p className="text-gray-600 text-sm">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Ready to Grow Your Business?</h2>
            <p className="text-navy-100 mb-8">Get an instant price estimate for our consulting services.</p>
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
