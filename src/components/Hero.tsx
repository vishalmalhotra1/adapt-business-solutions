import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20"
      itemScope
      itemType="https://schema.org/ProfessionalService"
    >
      {/* Full-bleed split hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 'calc(100vh - 80px)' }}>

        {/* Left, editorial text */}
        <div className="bg-white flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 xl:px-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">
            CPA Services, Ontario &amp; Canada-Wide
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none text-navy mb-6"
            itemProp="name"
          >
            CPA for<br />
            ABA<br />
            <em className="not-italic text-gold">Practitioners.</em>
          </h1>
          <p
            className="text-base lg:text-lg text-gray-600 leading-relaxed mb-3 max-w-lg"
            itemProp="description"
          >
            Affordable incorporation. Clear taxes. No surprises. Virtual CPA services for ABA practitioners, small business owners, and healthcare professionals across Canada.
          </p>
          <p className="text-sm text-gold font-semibold mb-8 tracking-wide">
            Incorporation from $299 + gov fees · Bookkeeping from $100/mo
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/accountant-brhd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-navy text-white text-xs font-semibold tracking-widest uppercase px-7 py-3.5 hover:bg-gold hover:text-navy transition-colors"
            >
              Book Free Consultation
            </a>
            <Link
              href="/services/aba-practitioners"
              className="inline-flex items-center justify-center border border-navy text-navy text-xs font-semibold tracking-widest uppercase px-7 py-3.5 hover:bg-navy hover:text-white transition-colors"
            >
              ABA Practitioners
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: 'CPA Ontario', label: 'Rep ID V64F78X' },
              { value: 'Virtual', label: 'Canada-Wide' },
              { value: 'EFILE', label: 'Certified' },
              { value: '30+', label: 'Clients Served' },
            ].map(item => (
              <div key={item.label}>
                <div className="text-sm font-bold text-navy">{item.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right, navy decorative panel */}
        <div className="hero-pattern hidden lg:flex flex-col justify-end p-12 xl:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-transparent opacity-80" />
          <div className="relative z-10">
            <blockquote className="font-serif text-xl xl:text-2xl italic text-white leading-relaxed mb-6">
              &ldquo;You work directly with your CPA, never passed to juniors or automated systems.&rdquo;
            </blockquote>
            <div className="w-10 h-px bg-gold mb-5" />
            <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">Start with a free conversation</div>
            <a
              href="https://calendly.com/accountant-brhd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-navy text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-gold transition-colors"
            >
              Book Your Free 30 Min Consult
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
