import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white" aria-label="Site footer">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-light">

          {/* Brand */}
          <div className="bg-navy pr-10 pb-10 lg:pb-0">
            <Image
              src="/images/logo.avif"
              alt="Adapt Accounting Services"
              width={150}
              height={56}
              className="h-9 w-auto brightness-0 invert mb-6"
            />
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Orangeville &amp; Greater Toronto Area
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering Growth, Ensuring Value. Virtual CPA practice serving Ontario businesses with professional accounting, tax, and financial strategy.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>accountant@adaptbusinesssolutions.com</p>
              <p>Orangeville, ON · Serving GTA &amp; Ontario</p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-navy px-0 lg:px-10 pb-10 lg:pb-0">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Services</h4>
            <ul className="space-y-3" aria-label="Services links">
              {[
                { label: 'ABA Practitioners', href: '/services/aba-practitioners' },
                { label: 'Incorporation Services', href: '/services/incorporation' },
                { label: 'Bookkeeping & Compilations', href: '/services/bookkeeping-compilations' },
                { label: 'Tax Preparation & Planning', href: '/services/tax-preparation' },
                { label: 'Financial Analysis', href: '/services/financial-analysis' },
                { label: 'Payroll Services', href: '/services/payroll' },
                { label: 'Business Consulting', href: '/services/business-consulting' },
                { label: 'Corporate Services', href: '/services/corporate-services' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="bg-navy px-0 lg:px-10 pb-10 lg:pb-0">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Locations</h4>
            <ul className="space-y-3" aria-label="Location links">
              {[
                { label: 'Orangeville', href: '/locations/orangeville' },
                { label: 'Brampton', href: '/locations/brampton' },
                { label: 'Mississauga', href: '/locations/mississauga' },
                { label: 'Niagara Region', href: '/locations/niagara-region' },
                { label: 'Erin', href: '/locations/erin' },
                { label: 'Mono', href: '/locations/mono' },
                { label: 'Grand Valley', href: '/locations/grand-valley' },
                { label: 'Shelburne', href: '/locations/shelburne' },
                { label: 'Amaranth', href: '/locations/amaranth' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-navy px-0 lg:px-10">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Get Started</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Book a free 30-minute consultation, no pressure, no commitment.
            </p>
            <a
              href="https://calendly.com/accountant-brhd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors mb-8"
            >
              Book Consultation
            </a>
            <div className="pt-6 border-t border-navy-light space-y-2 text-xs text-gray-500">
              <p className="font-medium text-white text-xs tracking-wide uppercase">Hours</p>
              <p>Mon–Fri: 5:00 PM – 10:00 PM EST</p>
              <p>Sat–Sun: Closed</p>
            </div>
            <div className="mt-6">
              <Image
                src="/images/cpa-ontario-logo.png"
                alt="CPA Ontario Registered Firm"
                width={120}
                height={48}
                className="w-auto h-10 object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Adapt Accounting Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
