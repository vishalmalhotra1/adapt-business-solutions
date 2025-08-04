import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/images/logo.avif" 
                alt="Adapt Business Solutions Logo" 
                width={160} 
                height={60}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Growth, Ensuring Value – Your trusted CPA in financial excellence. 
              Virtual accounting practice serving clients across Canada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/bookkeeping-compilations" className="text-gray-300 hover:text-white transition-colors">
                  Bookkeeping & Compilations
                </a>
              </li>
              <li>
                <a href="/services/tax-preparation" className="text-gray-300 hover:text-white transition-colors">
                  Tax Preparation & Planning
                </a>
              </li>
              <li>
                <a href="/services/financial-analysis" className="text-gray-300 hover:text-white transition-colors">
                  Financial Analysis
                </a>
              </li>
              <li>
                <a href="/services/payroll" className="text-gray-300 hover:text-white transition-colors">
                  Payroll Services
                </a>
              </li>
              <li>
                <a href="/services/business-consulting" className="text-gray-300 hover:text-white transition-colors">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="/services/corporate-services" className="text-gray-300 hover:text-white transition-colors">
                  Corporate Services
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <a href="/locations/orangeville" className="text-gray-300 hover:text-white transition-colors">
                  Orangeville CPA Services
                </a>
              </li>
              <li>
                <a href="/locations/brampton" className="text-gray-300 hover:text-white transition-colors">
                  Brampton Accounting
                </a>
              </li>
              <li>
                <a href="/locations/mississauga" className="text-gray-300 hover:text-white transition-colors">
                  Mississauga CPA
                </a>
              </li>
              <li>
                <a href="/locations/niagara-region" className="text-gray-300 hover:text-white transition-colors">
                  Niagara Region Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing Calculator
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Get Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Orangeville, Ontario</p>
                  <p>Serving GTA & Niagara Region</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:437-772-9598" className="text-primary-300 hover:text-primary-200 transition-colors">(437) 772-9598</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:accountant@adaptbusinesssolutions.com" className="text-primary-300 hover:text-primary-200 transition-colors">accountant@adaptbusinesssolutions.com</a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Virtual Consultations</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Fri: 5:00 PM - 10:00 PM EST</p>
                <p>Weekend: Closed</p>
                <p>Serving Ontario Businesses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Adapt Business Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
