import type { Metadata } from 'next'
import { Briefcase, CheckCircle, FileText, Shield } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Corporate Services | Adapt Business Solutions',
  description: 'Professional corporate services including business incorporation, compliance, and regulatory filings for Ontario businesses. Federal and provincial corporation support.',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/services/corporate-services' },
}

const cards = [
  {
    icon: Briefcase,
    title: 'Business Incorporation',
    body: 'Complete incorporation services for federal and provincial corporations, from name search to registered office.',
    bullets: ['Articles of Incorporation', 'Corporate name searches', 'Registered office services', 'Share structure design'],
  },
  {
    icon: Shield,
    title: 'Corporate Compliance',
    body: 'Ongoing compliance and corporate governance support to keep your corporation in good standing.',
    bullets: ['Annual returns', 'Corporate resolutions', 'Minute book maintenance', 'Director/officer changes'],
  },
  {
    icon: FileText,
    title: 'Regulatory Filings',
    body: 'Professional regulatory filing services and documentation for all stages of your corporation\'s life.',
    bullets: ['Corporate amendments', 'Extra-provincial registrations', 'Business name registrations', 'Dissolution services'],
  },
]

export default function CorporateServicesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gold bg-opacity-20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-8 w-8 text-gold" />
            </div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Core Service</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Corporate Services</h1>
            <p className="text-navy-100 text-lg max-w-3xl mx-auto">
              Comprehensive corporate services including business incorporation, ongoing compliance, and regulatory filings to support your business operations across Canada.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map(({ icon: Icon, title, body, bullets }) => (
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

        {/* Federal vs Provincial */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Making the Right Choice</p>
              <h2 className="font-serif text-2xl font-bold text-navy">Federal vs. Provincial Incorporation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 shadow-sm p-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">Federal Incorporation</h3>
                <ul className="space-y-3">
                  {[
                    'Name protection across all provinces',
                    'Flexibility to operate in any province',
                    'Preferred for national expansion plans',
                    'Administered under the Canada Business Corporations Act',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gold-50 border border-gold p-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">Ontario (Provincial) Incorporation</h3>
                <ul className="space-y-3">
                  {[
                    'Lower registration costs and simpler maintenance',
                    'Ideal for businesses operating only in Ontario',
                    'Administered under the Business Corporations Act (Ontario)',
                    'Faster processing times for most filings',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Need Corporate Services?</h2>
            <p className="text-navy-100 mb-8">Get an instant price estimate, then let us handle your corporate compliance.</p>
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
