'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Calculator } from 'lucide-react'
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
    // Pricing estimator data
    estimatedPrice: '',
    selectedTier: '',
    businessSize: '',
    selectedServices: ''
  })

  // Check if we have pricing data from URL params or localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const pricingData = {
      estimatedPrice: urlParams.get('price') || '',
      selectedTier: urlParams.get('tier') || '',
      businessSize: urlParams.get('size') || '',
      selectedServices: urlParams.get('services') || ''
    }

    // If we have pricing data, pre-fill the form
    if (pricingData.estimatedPrice) {
      setFormData(prev => ({
        ...prev,
        ...pricingData,
        service: 'pricing-estimate',
        message: `I'm interested in getting a detailed quote based on my cost estimate:\n\nEstimated Price: $${pricingData.estimatedPrice}/month\nService Tier: ${pricingData.selectedTier}\nBusiness Size: ${pricingData.businessSize}\nServices: ${pricingData.selectedServices}\n\nPlease provide a detailed proposal for my business needs.`
      }))
    } else {
      // Redirect users without pricing data back to pricing page
      window.location.href = '/pricing'
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Your Quote Request
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on your pricing estimate, let&apos;s finalize the details and get you started 
              with our professional CPA services across Canada.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <p className="text-gray-600">(437) 772-9598</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 5 PM - 10 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">accountant@adaptbusinesssolutions.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Area</h4>
                      <p className="text-gray-600">Virtual Practice<br />Serving All of Canada</p>
                      <p className="text-sm text-gray-500">Remote consultations available</p>
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

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {formData.estimatedPrice && (
                <div className="bg-primary-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calculator className="h-5 w-5 text-primary-600" />
                    <h4 className="font-semibold text-primary-900">Your Pricing Estimate</h4>
                  </div>
                  <div className="text-sm text-primary-800">
                    <p><strong>Estimated Cost:</strong> ${formData.estimatedPrice}/month</p>
                    <p><strong>Service Tier:</strong> {formData.selectedTier}</p>
                    <p><strong>Business Size:</strong> {formData.businessSize}</p>
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {formData.estimatedPrice ? 'Get Your Detailed Quote' : 'Send Us a Message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(437) 772-9598"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="pricing-estimate">Detailed Quote from Pricing Estimate</option>
                    <option value="bookkeeping">Bookkeeping & Compilations</option>
                    <option value="tax">Tax Preparation & Planning</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="financial-analysis">Financial Analysis</option>
                    <option value="corporate">Corporate Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={formData.estimatedPrice ? "Your pricing estimate details are pre-filled. Please add any additional requirements or questions..." : "Tell us about your needs..."}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center group"
                >
                  {formData.estimatedPrice ? 'Request Detailed Quote' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
