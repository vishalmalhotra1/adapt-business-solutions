import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import ABACallout from '@/components/ABACallout'
import Locations from '@/components/Locations'
import BlogPreview from '@/components/BlogPreview'
import GoogleReviews from '@/components/GoogleReviews'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adapt Accounting Services, CPA for ABA Practitioners & Ontario Businesses | Incorporate $299',
  description: 'CPA services for ABA practitioners, small business owners, and Ontario professionals. Incorporate for $299 + gov fees. Bookkeeping, T1/T2 tax, CPBAO compliance, OAP payroll. Virtual, Canada-wide.',
  keywords: 'CPA for ABA practitioners, RBA incorporation Ontario, ABA accountant Ontario, incorporate in Ontario, CPA Orangeville, accountant Brampton, bookkeeping Mississauga, professional corporation Ontario, CPBAO compliance',
  openGraph: {
    title: 'Adapt Accounting Services, Professional CPA Services Ontario',
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
      <main id="main-content" className="min-h-screen bg-white">
        <Hero />

        {/* Stats Bar */}
        <section className="bg-white border-y border-gray-200 py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white text-center py-8 px-4">
                  <div className="font-serif text-3xl font-bold text-navy mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <About />
        <ABACallout />
        <Locations />
        <BlogPreview />
        <GoogleReviews />

        {/* CTA Banner */}
        <section className="bg-navy py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">Take the Next Step</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Incorporate or<br />Take Control of Your Finances?
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mb-8" />
            <p className="text-gray-400 text-base mb-10 leading-relaxed max-w-2xl mx-auto">
              Incorporate your Ontario business for $299 + government fees, or join over 30 business owners who trust Adapt Accounting Services for bookkeeping, tax, and financial strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/accountant-brhd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-navy text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-white transition-colors"
              >
                Book Free Consultation
              </a>
              <Link
                href="/pricing"
                className="inline-block border border-white text-white text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-white hover:text-navy transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
