import type { Metadata } from 'next'
import { Users, CheckCircle, Calendar, Shield } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Payroll Services | Adapt Business Solutions',
  description: 'Complete payroll management for Ontario businesses. Accurate processing, CRA remittances, T4 preparation, and full compliance with Canadian employment standards.',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/payroll' },
}

const processingItems = [
  { title: 'Bi-weekly & Monthly Payroll', desc: 'Accurate payroll calculation and processing for all employee types.' },
  { title: 'CRA Remittances', desc: 'Timely remittance of payroll taxes, CPP, EI, and other deductions.' },
  { title: 'T4 & Record of Employment', desc: 'Year-end T4 preparation and ROE processing.' },
  { title: 'Direct Deposit Setup', desc: 'Streamlined direct deposit management for all employees.' },
]

const complianceItems = [
  { icon: Shield, title: 'Employment Standards', desc: 'Ensuring compliance with Ontario and provincial employment standards.' },
  { icon: Calendar, title: 'Vacation & Benefits Tracking', desc: 'Comprehensive tracking of vacation accruals and employee benefits.' },
  { icon: Users, title: 'New Hire Onboarding', desc: 'Payroll setup and documentation for new employees.' },
  { icon: CheckCircle, title: 'Year-End Reporting', desc: 'Complete year-end payroll summaries and T4 Summary preparation.' },
]

export default function PayrollPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gold bg-opacity-20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Core Service</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Payroll Services</h1>
            <p className="text-navy-100 text-lg max-w-3xl mx-auto">
              Complete payroll management ensuring accurate, timely processing and full compliance with Canadian employment standards and tax regulations.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div className="bg-gray-50 p-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Payroll Processing</h2>
                <div className="space-y-5">
                  {processingItems.map(item => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-navy">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gold-50 border border-gold p-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Compliance &amp; Benefits</h2>
                <div className="space-y-5">
                  {complianceItems.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-navy">{title}</h3>
                        <p className="text-gray-600 text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why outsource */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">The Benefits</p>
              <h2 className="font-serif text-2xl font-bold text-navy">Why Outsource Your Payroll?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Save Time', desc: 'Free up hours every pay period — focus on running your business instead of payroll admin.' },
                { title: 'Avoid Penalties', desc: 'Late or incorrect CRA remittances carry steep penalties. We handle it accurately, every time.' },
                { title: 'Stay Compliant', desc: 'Employment standards evolve. We keep your payroll current with the latest CRA and provincial rules.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white border border-gray-100 shadow-sm p-6 text-center">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Streamline Your Payroll Process</h2>
            <p className="text-navy-100 mb-8">Get an instant price estimate for our payroll services.</p>
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
