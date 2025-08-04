'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const locationsRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when any link is clicked
  useEffect(() => {
    function handleLinkClick(event: MouseEvent) {
      const target = event.target as HTMLElement
      // Check if the clicked element is a link or inside a link
      const link = target.closest('a')
      if (link && link.href && (link.href.startsWith('/') || link.href.includes(window.location.hostname))) {
        // This is an internal link, close the mobile menu
        setIsOpen(false)
        setIsLocationsOpen(false)
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => {
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" aria-label="Adapt Business Solutions - Home">
                <Image 
                  src="/images/logo.avif" 
                  alt="Adapt Business Solutions - Professional CPA Services Logo" 
                  width={160} 
                  height={60}
                  className="h-10 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            
            {/* Locations Dropdown */}
            <div className="relative" ref={locationsRef}>
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                aria-expanded={isLocationsOpen}
              >
                Locations
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    <Link
                      href="/locations/orangeville"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      Orangeville
                    </Link>
                    <Link
                      href="/locations/brampton"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      Brampton
                    </Link>
                    <Link
                      href="/locations/mississauga"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      Mississauga
                    </Link>
                    <Link
                      href="/locations/niagara-region"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      Niagara Region
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/pricing" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t"
                 role="menu" 
                 aria-orientation="vertical" 
                 aria-labelledby="mobile-menu">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)} role="menuitem">
                Home
              </Link>
              <Link href="/#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)} role="menuitem">
                Services
              </Link>
              <Link href="/#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)} role="menuitem">
                About
              </Link>
              
              {/* Mobile Locations Menu */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-600"
                >
                  Locations
                  <ChevronDown className={`h-4 w-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLocationsOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/locations/orangeville"
                      className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                      onClick={() => {setIsOpen(false); setIsLocationsOpen(false)}}
                    >
                      Orangeville
                    </Link>
                    <Link
                      href="/locations/brampton"
                      className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                      onClick={() => {setIsOpen(false); setIsLocationsOpen(false)}}
                    >
                      Brampton
                    </Link>
                    <Link
                      href="/locations/mississauga"
                      className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                      onClick={() => {setIsOpen(false); setIsLocationsOpen(false)}}
                    >
                      Mississauga
                    </Link>
                    <Link
                      href="/locations/niagara-region"
                      className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                      onClick={() => {setIsOpen(false); setIsLocationsOpen(false)}}
                    >
                      Niagara Region
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)} role="menuitem">
                Pricing
              </Link>
              <Link href="/pricing" className="block w-full text-left bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors" onClick={() => setIsOpen(false)} role="menuitem">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
