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
            CPA Services — Ontario
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            itemProp="name"
          >
            Expert CPA Services for Ontario Businesses
          </h1>
          <p
            className="text-lg text-navy-100 leading-relaxed mb-10 max-w-2xl"
            itemProp="description"
          >
            Virtual accounting, tax planning, and financial strategy — built for small business
            owners across the GTA and beyond. Serving Orangeville, Brampton, Mississauga,
            Niagara, and surrounding communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 transition-colors group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 transition-colors"
            >
              View Services
            </Link>
          </div>

          <div className="mt-12 pt-10 border-t border-navy-medium flex flex-wrap gap-8 text-sm text-navy-100">
            <div>
              <span className="text-gold font-semibold">CPA Certified</span>
              <span className="ml-2">Professional</span>
            </div>
            <div>
              <span className="text-gold font-semibold">Virtual</span>
              <span className="ml-2">Canada-Wide</span>
            </div>
            <div>
              <span className="text-gold font-semibold">100%</span>
              <span className="ml-2">Client Satisfaction</span>
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
