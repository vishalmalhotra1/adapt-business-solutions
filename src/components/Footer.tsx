import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo.avif"
              alt="Adapt Business Solutions"
              width={150}
              height={56}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-navy-100 text-sm leading-relaxed">
              Empowering Growth, Ensuring Value. Virtual CPA practice serving Ontario businesses
              with professional accounting, tax, and financial strategy.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:437-772-9598" className="flex items-center gap-2 text-navy-100 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                (437) 772-9598
              </a>
              <a href="mailto:accountant@adaptbusinesssolutions.com" className="flex items-center gap-2 text-navy-100 hover:text-gold transition-colors break-all">
                <Mail className="h-4 w-4 flex-shrink-0" />
                accountant@adaptbusinesssolutions.com
              </a>
              <div className="flex items-start gap-2 text-navy-100">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Orangeville, ON · Serving GTA &amp; Ontario</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Services</h3>
            <ul className="space-y-2">
              {[
                { label: 'Bookkeeping & Compilations', href: '/services/bookkeeping-compilations' },
                { label: 'Tax Preparation & Planning', href: '/services/tax-preparation' },
                { label: 'Financial Analysis', href: '/services/financial-analysis' },
                { label: 'Payroll Services', href: '/services/payroll' },
                { label: 'Business Consulting', href: '/services/business-consulting' },
                { label: 'Corporate Services', href: '/services/corporate-services' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-100 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Locations</h3>
            <ul className="space-y-2">
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
                  <Link href={link.href} className="text-sm text-navy-100 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Hours &amp; Info</h3>
            <div className="space-y-3 text-sm text-navy-100">
              <p>
                <span className="font-medium text-white">Virtual Consultations</span><br />
                Available Canada-Wide
              </p>
              <p>
                <span className="font-medium text-white">Business Hours</span><br />
                Mon–Fri: 5:00 PM – 10:00 PM EST<br />
                Sat–Sun: Closed
              </p>
              <p>
                <span className="font-medium text-white">Pricing</span><br />
                Starting from $100/month<br />
                Transparent, flat-fee packages
              </p>
            </div>
            <div className="mt-5">
              <Link
                href="/pricing"
                className="inline-block bg-gold hover:bg-gold-hover text-navy font-semibold text-sm px-5 py-2.5 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-navy-100 text-xs">
            &copy; {new Date().getFullYear()} Adapt Business Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-navy-100 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-navy-100 hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
