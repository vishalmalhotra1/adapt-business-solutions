import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-pattern pt-16 text-white"
      itemScope
      itemType="https://schema.org/ProfessionalService"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            CPA Services — Ontario &amp; Canada-Wide
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            itemProp="name"
          >
            CPA for ABA Practitioners &amp; Ontario Businesses
          </h1>
          <p
            className="text-lg text-navy-100 leading-relaxed mb-4 max-w-2xl"
            itemProp="description"
          >
            Cheap incorporation. Clear taxes. No surprises. Virtual CPA services for ABA practitioners, small business owners, contractors, and healthcare professionals across Canada.
          </p>
          <p className="text-gold font-semibold mb-10">
            Incorporation from $299 + gov fees · Bookkeeping from $100/mo · Virtual Canada-Wide
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/accountant-brhd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/services/aba-practitioners"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors"
            >
              ABA Practitioners →
            </Link>
          </div>

          <div className="mt-12 pt-10 border-t border-navy-medium flex flex-wrap gap-8 text-sm text-navy-100">
            <div>
              <span className="text-gold font-semibold">CPA Ontario</span>
              <span className="ml-2">Rep ID V64F78X</span>
            </div>
            <div>
              <span className="text-gold font-semibold">Virtual</span>
              <span className="ml-2">Canada-Wide</span>
            </div>
            <div>
              <span className="text-gold font-semibold">EFILE</span>
              <span className="ml-2">Certified</span>
            </div>
            <div>
              <span className="text-gold font-semibold">30+</span>
              <span className="ml-2">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
