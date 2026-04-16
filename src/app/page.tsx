import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adapt Business Solutions — CPA Services Ontario | Orangeville, Brampton, Mississauga',
  description: 'Expert virtual CPA services for Ontario small businesses. Tax planning, bookkeeping, financial analysis and more — serving Orangeville, Brampton, Mississauga, Niagara, Erin, Shelburne and beyond.',
  keywords: 'CPA Orangeville, accountant Brampton, bookkeeping Mississauga, tax preparation Niagara, small business accountant GTA, corporate tax Ontario, CPA Erin, CPA Shelburne',
  openGraph: {
    title: 'Adapt Business Solutions — Professional CPA Services Ontario',
    description: 'Expert virtual CPA services for Ontario businesses. Tax planning, bookkeeping, financial consulting. Serving the GTA and surrounding communities.',
    url: 'https://adaptbusinesssolutions.com',
    type: 'website',
  },
  alternates: { canonical: 'https://adaptbusinesssolutions.com' },
}

const stats = [
  { value: '30+', label: 'Clients Served' },
  { value: '2+', label: 'Years in Practice' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: 'Virtual', label: 'Canada-Wide' },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <Hero />

        {/* Stats Bar */}
        <section className="bg-navy-light py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl font-bold text-gold mb-1">{stat.value}</div>
                  <div className="text-navy-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <About />
        <Locations />

        {/* CTA Banner */}
        <section className="bg-navy py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gold mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-navy-100 text-lg mb-8 leading-relaxed">
              Join over 30 Ontario business owners who trust Adapt Business Solutions for their
              bookkeeping, tax, and financial strategy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors"
              >
                Get Your Free Consultation
              </Link>
              <a
                href="tel:437-772-9598"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors"
              >
                Call (437) 772-9598
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
