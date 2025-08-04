import { Phone, Mail, MapPin, Clock, Calculator, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Your Local Ontario CPA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Serving businesses in Orangeville, Brampton, Mississauga, and Niagara Region. 
            Start with our pricing calculator to get an instant estimate for professional 
            CPA services in your area.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/pricing" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:437-772-9598" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">(437) 772-9598</a>
                    <p className="text-sm text-gray-500">Monday - Friday, 5 PM - 10 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:accountant@adaptbusinesssolutions.com" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">accountant@adaptbusinesssolutions.com</a>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Area</h4>
                    <p className="text-gray-600">Orangeville, Brampton, Mississauga<br />Niagara Region & GTA</p>
                    <p className="text-sm text-gray-500">Virtual consultations across Ontario</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 5:00 PM - 10:00 PM EST</p>
                      <p>Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="font-semibold text-primary-900 mb-3">Virtual Consultations</h4>
              <p className="text-primary-700 mb-2">
                Schedule secure video consultations at your convenience
              </p>
              <p className="text-primary-600 font-semibold">Available Canada-Wide</p>
            </div>
          </div>

          {/* Get Quote CTA */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get Your Personalized Quote
            </h3>
            
            <div className="text-center space-y-6">
              <div className="bg-primary-50 rounded-lg p-6">
                <Calculator className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Start with Our Pricing Calculator
                </h4>
                <p className="text-gray-600 mb-4">
                  Get an instant estimate tailored to your business needs and size. 
                  Our interactive calculator provides transparent pricing for all our services.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Instant price estimates</li>
                  <li>• Customized for your business size</li>
                  <li>• No hidden fees or surprises</li>
                  <li>• Compare service packages</li>
                </ul>
              </div>
              
              <Link 
                href="/pricing"
                className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center group inline-flex"
              >
                Start Your Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <p className="text-sm text-gray-500">
                Takes less than 2 minutes • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
