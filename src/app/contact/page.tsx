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
    // Pricing estimator data
    estimatedPrice: '',
    selectedTier: '',
    businessSize: '',
    selectedServices: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Prepare form data for Formspree
      const formPayload = new FormData()
      formPayload.append('firstName', formData.firstName)
      formPayload.append('lastName', formData.lastName)
      formPayload.append('email', formData.email)
      formPayload.append('phone', formData.phone)
      formPayload.append('service', formData.service)
      formPayload.append('message', formData.message)
      
      // Add pricing data if available
      if (formData.estimatedPrice) {
        formPayload.append('estimatedPrice', formData.estimatedPrice)
        formPayload.append('selectedTier', formData.selectedTier)
        formPayload.append('businessSize', formData.businessSize)
        formPayload.append('selectedServices', formData.selectedServices)
      }

      const response = await fetch('https://formspree.io/f/mqalykql', {
        method: 'POST',
        body: formPayload,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          estimatedPrice: '',
          selectedTier: '',
          businessSize: '',
          selectedServices: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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

              {!formData.estimatedPrice ? (
                // Redirect to pricing if no estimate
                <div className="text-center space-y-6 py-8">
                  <div className="bg-primary-50 rounded-lg p-8">
                    <Calculator className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Start with Your Personalized Quote
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      To provide you with the most accurate service proposal, please start with our pricing calculator to get an instant estimate tailored to your business needs.
                    </p>
                    <Link 
                      href="/pricing"
                      className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors group"
                    >
                      Get Your Quote First
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-gray-500 mt-4">
                      Takes less than 2 minutes • No commitment required
                    </p>
                  </div>
                </div>
              ) : (
                // Show contact form for users with pricing
                <>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Get Your Detailed Quote
                  </h3>
                  
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">
                            Message sent successfully!
                          </h3>
                          <div className="mt-2 text-sm text-green-700">
                            <p>Thank you for your inquiry! We will contact you within 24 hours with a detailed proposal.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">
                            Error sending message
                          </h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>There was a problem sending your message. Please try again or contact us directly at (437) 772-9598.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              
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
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Request Detailed Quote
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
              </>
            )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
