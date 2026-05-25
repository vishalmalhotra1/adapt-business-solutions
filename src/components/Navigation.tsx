'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, X, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const serviceLinks = [
  { name: 'ABA Practitioners', href: '/services/aba-practitioners' },
  { name: 'Incorporation, $299 + Gov Fees', href: '/services/incorporation' },
  { name: 'Bookkeeping & Compilations', href: '/services/bookkeeping-compilations' },
  { name: 'Tax Preparation & Planning', href: '/services/tax-preparation' },
  { name: 'Financial Analysis', href: '/services/financial-analysis' },
  { name: 'Payroll Services', href: '/services/payroll' },
  { name: 'Business Consulting', href: '/services/business-consulting' },
  { name: 'Corporate Services', href: '/services/corporate-services' },
]

const locationLinks = [
  { name: 'Orangeville', href: '/locations/orangeville' },
  { name: 'Brampton', href: '/locations/brampton' },
  { name: 'Mississauga', href: '/locations/mississauga' },
  { name: 'Niagara Region', href: '/locations/niagara-region' },
  { name: 'Erin', href: '/locations/erin' },
  { name: 'Mono', href: '/locations/mono' },
  { name: 'Grand Valley', href: '/locations/grand-valley' },
  { name: 'Shelburne', href: '/locations/shelburne' },
  { name: 'Amaranth', href: '/locations/amaranth' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) setIsServicesOpen(false)
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) setIsLocationsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeAll = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsLocationsOpen(false)
    setMobileServicesOpen(false)
    setMobileLocationsOpen(false)
  }

  return (
    <>
      <nav
        className={`bg-white fixed w-full z-50 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''} border-b border-gray-200`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            <Link href="/" onClick={closeAll} aria-label="Adapt Accounting Services - Home">
              <Image
                src="/images/logo.avif"
                alt="Adapt Accounting Services"
                width={160}
                height={60}
                className="h-10 w-auto brightness-0"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">

              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => { setIsServicesOpen(!isServicesOpen); setIsLocationsOpen(false) }}
                  className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-gray-700 hover:text-gray-900 transition-colors"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="listbox"
                >
                  Services
                  <ChevronDown className={`h-3 w-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-gray-200 shadow-lg z-50">
                    {serviceLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors border-b border-gray-100 last:border-0"
                        onClick={closeAll}
                        aria-current={pathname === link.href ? 'page' : undefined}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" ref={locationsRef}>
                <button
                  onClick={() => { setIsLocationsOpen(!isLocationsOpen); setIsServicesOpen(false) }}
                  className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-gray-700 hover:text-gray-900 transition-colors"
                  aria-expanded={isLocationsOpen}
                  aria-haspopup="listbox"
                >
                  Locations
                  <ChevronDown className={`h-3 w-3 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {isLocationsOpen && (
                  <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-200 shadow-lg z-50">
                    {locationLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors border-b border-gray-100 last:border-0"
                        onClick={closeAll}
                        aria-current={pathname === link.href ? 'page' : undefined}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/pricing" className="text-xs font-semibold tracking-widest uppercase text-gray-700 hover:text-gray-900 transition-colors" aria-current={pathname === '/pricing' ? 'page' : undefined}>
                Pricing
              </Link>
              <Link href="/blog" className="text-xs font-semibold tracking-widest uppercase text-gray-700 hover:text-gray-900 transition-colors" aria-current={pathname === '/blog' ? 'page' : undefined}>
                Blog
              </Link>
              <Link href="/#about" className="text-xs font-semibold tracking-widest uppercase text-gray-700 hover:text-gray-900 transition-colors">
                About
              </Link>

              <a
                href="https://calendly.com/accountant-brhd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-navy transition-colors"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 hover:text-gold transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden transform transition-transform duration-300 overflow-y-auto border-l border-gray-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
          <Image
            src="/images/logo.avif"
            alt="Adapt Accounting Services"
            width={130}
            height={50}
            className="h-8 w-auto brightness-0"
          />
          <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-4">
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full text-left py-3 text-xs font-semibold tracking-widest uppercase text-gray-800 border-b border-gray-100"
          >
            Services
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServicesOpen && (
            <div className="py-2 space-y-0">
              {serviceLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 pl-3 text-sm text-gray-600 hover:text-gold transition-colors border-b border-gray-50"
                  onClick={closeAll}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
            className="flex items-center justify-between w-full text-left py-3 text-xs font-semibold tracking-widest uppercase text-gray-800 border-b border-gray-100"
          >
            Locations
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileLocationsOpen && (
            <div className="py-2 space-y-0">
              {locationLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 pl-3 text-sm text-gray-600 hover:text-gold transition-colors border-b border-gray-50"
                  onClick={closeAll}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {[
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/#about' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-xs font-semibold tracking-widest uppercase text-gray-800 hover:text-gold transition-colors border-b border-gray-100"
              onClick={closeAll}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6">
            <a
              href="https://calendly.com/accountant-brhd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-navy text-white text-xs font-semibold tracking-widest uppercase py-4 text-center hover:bg-gold hover:text-navy transition-colors"
              onClick={closeAll}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
