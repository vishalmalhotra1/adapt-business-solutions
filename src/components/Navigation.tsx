'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image 
                  src="/images/logo.avif" 
                  alt="Adapt Business Solutions Logo" 
                  width={160} 
                  height={60}
                  className="h-10 w-auto cursor-pointer"
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
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link href="/pricing" className="block w-full text-left bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
