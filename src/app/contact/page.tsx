'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Calculator, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    estimatedPrice: '',
    selectedTier: '',
    businessSize: '',
    selectedServices: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const estimatedPrice = urlParams.get('price') || ''
    const selectedTier = urlParams.get('tier') || ''
    const businessSize = urlParams.get('size') || ''
    const selectedServices = urlParams.get('services') || ''

    if (estimatedPrice) {
      setFormData(prev => ({
        ...prev,
        estimatedPrice,
        selectedTier,
        businessSize,
        selectedServices,
        service: 'pricing-estimate',
        message: `I am interested in getting a detailed quote based on my cost estimate:\n\nEstimated Price: $${estimatedPrice}/month\nService Tier: ${selectedTier}\nBusiness Size: ${businessSize}\nServices: ${selectedServices}\n\nPlease provide a detailed proposal for my business needs.`,
      }))
    } else {
      window.location.href = '/pricing'
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const formPayload = new FormData()
      Object.entries(formData).forEach(([key, val]) => {
        if (val) formPayload.append(key, val)
      })
      const response = await fetch('https://formspree.io/f/mqalykql', {
        method: 'POST',
        body: formPayload,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '', estimatedPrice: '', selectedTier: '', businessSize: '', selectedServices: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Get Started</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Complete Your Quote Request</h1>
            <p className="text-navy-100 text-lg max-w-2xl mx-auto">
              Based on your pricing estimate, let&apos;s finalize the details and get your professional CPA services started.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="font-serif text-2xl font-bold text-navy">Contact Information</h3>
                {[
                  { icon: Phone, title: 'Phone', main: '(437) 772-9598', sub: 'Monday–Friday, 5 PM – 10 PM EST', href: 'tel:437-772-9598' },
                  { icon: Mail, title: 'Email', main: 'accountant@adaptbusinesssolutions.com', sub: 'We respond within 24 hours', href: 'mailto:accountant@adaptbusinesssolutions.com' },
                  { icon: MapPin, title: 'Service Area', main: 'Virtual Practice — All of Canada', sub: 'Secure video consultations available', href: null },
                  { icon: Clock, title: 'Business Hours', main: 'Mon–Fri: 5:00 PM – 10:00 PM EST', sub: 'Saturday & Sunday: Closed', href: null },
                ].map(({ icon: Icon, title, main, sub, href }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="bg-gold-50 p-3 flex-shrink-0">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{title}</h4>
                      {href ? (
                        <a href={href} className="text-gold hover:text-gold-hover font-medium transition-colors">{main}</a>
                      ) : (
                        <p className="text-gray-700 font-medium">{main}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-gold-50 border border-gold p-5">
                  <h4 className="font-semibold text-navy mb-2">Virtual Consultations</h4>
                  <p className="text-sm text-gray-600">Secure video consultations via Zoom or Teams at your convenience — available Canada-Wide.</p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white border border-gray-100 shadow-sm p-8">
                {!formData.estimatedPrice ? (
                  <div className="text-center py-8">
                    <Calculator className="h-14 w-14 text-gold mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-navy mb-3">Start with a Personalized Quote</h3>
                    <p className="text-gray-600 mb-6">
                      Use our pricing calculator first to get an instant estimate tailored to your business, then submit your request.
                    </p>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 transition-colors group"
                    >
                      Get Your Quote First
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-xs text-gray-400 mt-3">Takes less than 2 minutes · No commitment</p>
                  </div>
                ) : (
                  <>
                    {formData.estimatedPrice && (
                      <div className="bg-gold-50 border border-gold p-4 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calculator className="h-4 w-4 text-gold" />
                          <span className="font-semibold text-navy text-sm">Your Pricing Estimate</span>
                        </div>
                        <p className="text-sm text-gray-700"><strong>Estimated Cost:</strong> ${formData.estimatedPrice}/month</p>
                        <p className="text-sm text-gray-700"><strong>Service Tier:</strong> {formData.selectedTier}</p>
                        <p className="text-sm text-gray-700"><strong>Business Size:</strong> {formData.businessSize}</p>
                      </div>
                    )}

                    <h3 className="font-serif text-xl font-bold text-navy mb-6">Get Your Detailed Quote</h3>

                    {submitStatus === 'success' && (
                      <div className="mb-5 p-4 bg-green-50 border border-green-200">
                        <p className="text-sm font-semibold text-green-800">Message sent successfully!</p>
                        <p className="text-sm text-green-700 mt-1">Thank you — we will contact you within 24 hours with a detailed proposal.</p>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="mb-5 p-4 bg-red-50 border border-red-200">
                        <p className="text-sm font-semibold text-red-800">Error sending message</p>
                        <p className="text-sm text-red-700 mt-1">Please try again or call us at <a href="tel:437-772-9598" className="font-medium">(437) 772-9598</a>.</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                          <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} placeholder="John"
                            className="w-full px-3 py-2.5 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                          <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} placeholder="Doe"
                            className="w-full px-3 py-2.5 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@example.com"
                          className="w-full px-3 py-2.5 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(437) 772-9598"
                          className="w-full px-3 py-2.5 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                        <select name="service" value={formData.service} onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm bg-white">
                          <option value="">Select a service</option>
                          <option value="pricing-estimate">Detailed Quote from Pricing Estimate</option>
                          <option value="bookkeeping">Bookkeeping &amp; Compilations</option>
                          <option value="tax">Tax Preparation &amp; Planning</option>
                          <option value="payroll">Payroll Services</option>
                          <option value="consulting">Business Consulting</option>
                          <option value="financial-analysis">Financial Analysis</option>
                          <option value="corporate">Corporate Services</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea name="message" rows={5} required value={formData.message} onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm resize-none" />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-navy hover:bg-navy-light disabled:bg-gray-400 text-white font-semibold py-4 transition-colors flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>Request Detailed Quote <Send className="h-4 w-4" /></>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
