import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to simplify your finances? Start with our pricing calculator for an instant
            estimate, or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gold-50 p-3 flex-shrink-0">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-1">Phone</h4>
                <a href="tel:437-772-9598" className="text-gold hover:text-gold-hover font-medium transition-colors">
                  (437) 772-9598
                </a>
                <p className="text-sm text-gray-500 mt-1">Monday–Friday, 5 PM – 10 PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gold-50 p-3 flex-shrink-0">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-1">Email</h4>
                <a
                  href="mailto:accountant@adaptbusinesssolutions.com"
                  className="text-gold hover:text-gold-hover font-medium transition-colors break-all"
                >
                  accountant@adaptbusinesssolutions.com
                </a>
                <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gold-50 p-3 flex-shrink-0">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-1">Service Area</h4>
                <p className="text-gray-600">Orangeville, Brampton, Mississauga</p>
                <p className="text-gray-600">Niagara Region, Erin, Mono &amp; more</p>
                <p className="text-sm text-gray-500 mt-1">Virtual consultations across Ontario</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gold-50 p-3 flex-shrink-0">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-1">Business Hours</h4>
                <p className="text-gray-600">Monday–Friday: 5:00 PM – 10:00 PM EST</p>
                <p className="text-gray-600">Saturday &amp; Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <h3 className="font-serif text-2xl font-bold text-navy mb-3">
              Start with a Free Estimate
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Use our interactive pricing calculator to get an instant monthly estimate
              tailored to your business size and service needs. Transparent, no-surprise pricing.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                'Instant price estimates',
                'Customized for your business size',
                'No hidden fees or commitments',
                'Compare service packages',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/pricing"
              className="block w-full bg-navy hover:bg-navy-light text-white font-semibold py-4 text-center transition-colors"
            >
              Calculate Your Quote
            </Link>
            <p className="text-xs text-gray-400 text-center mt-3">
              Takes less than 2 minutes · No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
