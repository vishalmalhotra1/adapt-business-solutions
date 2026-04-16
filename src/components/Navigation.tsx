'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const serviceLinks = [
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
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
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
      <nav className="bg-navy fixed w-full z-50 border-b border-navy-light" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" onClick={closeAll} aria-label="Adapt Business Solutions - Home">
              <Image
                src="/images/logo.avif"
                alt="Adapt Business Solutions"
                width={160}
                height={60}
                className="h-10 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => { setIsServicesOpen(!isServicesOpen); setIsLocationsOpen(false) }}
                  className="flex items-center text-navy-50 hover:text-gold transition-colors text-sm font-medium"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border-t-2 border-gold shadow-xl z-50">
                    <div className="py-1">
                      {serviceLinks.map(link => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm text-navy hover:bg-gold-50 hover:text-gold transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div className="relative" ref={locationsRef}>
                <button
                  onClick={() => { setIsLocationsOpen(!isLocationsOpen); setIsServicesOpen(false) }}
                  className="flex items-center text-navy-50 hover:text-gold transition-colors text-sm font-medium"
                  aria-expanded={isLocationsOpen}
                >
                  Locations
                  <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLocationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border-t-2 border-gold shadow-xl z-50">
                    <div className="py-1">
                      {locationLinks.map(link => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm text-navy hover:bg-gold-50 hover:text-gold transition-colors"
                          onClick={() => setIsLocationsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/blog" className="text-navy-50 hover:text-gold transition-colors text-sm font-medium">
                Blog
              </Link>
              <Link href="/pricing" className="text-navy-50 hover:text-gold transition-colors text-sm font-medium">
                Pricing
              </Link>
              <Link href="/#about" className="text-navy-50 hover:text-gold transition-colors text-sm font-medium">
                About
              </Link>

              <Link
                href="/pricing"
                className="bg-gold hover:bg-gold-hover text-navy font-semibold px-5 py-2 text-sm transition-colors"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-gold transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-navy z-50 md:hidden transform transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-navy-light">
          <Image
            src="/images/logo.avif"
            alt="Adapt Business Solutions"
            width={130}
            height={50}
            className="h-8 w-auto brightness-0 invert"
          />
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gold">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-5 space-y-1">
          {/* Services */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full text-left text-white hover:text-gold py-3 text-sm font-medium"
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServicesOpen && (
            <div className="ml-3 space-y-1 pb-2">
              {serviceLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm text-navy-100 hover:text-gold transition-colors"
                  onClick={closeAll}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* Locations */}
          <button
            onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
            className="flex items-center justify-between w-full text-left text-white hover:text-gold py-3 text-sm font-medium"
          >
            Locations
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileLocationsOpen && (
            <div className="ml-3 space-y-1 pb-2">
              {locationLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm text-navy-100 hover:text-gold transition-colors"
                  onClick={closeAll}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/blog" className="block text-white hover:text-gold py-3 text-sm font-medium" onClick={closeAll}>
            Blog
          </Link>
          <Link href="/pricing" className="block text-white hover:text-gold py-3 text-sm font-medium" onClick={closeAll}>
            Pricing
          </Link>
          <Link href="/#about" className="block text-white hover:text-gold py-3 text-sm font-medium" onClick={closeAll}>
            About
          </Link>

          <div className="pt-4">
            <Link
              href="/pricing"
              className="block w-full bg-gold hover:bg-gold-hover text-navy font-semibold py-3 text-center text-sm transition-colors"
              onClick={closeAll}
            >
              Book Consultation
            </Link>
          </div>

          <div className="pt-6 space-y-2 text-xs text-navy-100">
            <p>(437) 772-9598</p>
            <p>Mon–Fri: 5:00 PM – 10:00 PM EST</p>
          </div>
        </div>
      </div>
    </>
  )
}
