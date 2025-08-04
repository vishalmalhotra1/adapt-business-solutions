'use client'

import { useState, useEffect } from 'react'
import { Calculator, CheckCircle, DollarSign, ArrowRight, Info } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const serviceTiers = {
  foundation: {
    name: 'Foundation Finance Suite',
    price: { min: 100, max: 190 },
    color: 'primary',
    description: 'Perfect for small businesses and startups',
    popular: false
  },
  growth: {
    name: 'Growth Navigator Pack',
    price: { min: 190, max: 260 },
    color: 'accent',
    description: 'Ideal for growing businesses',
    popular: true
  },
  strategic: {
    name: 'Strategic Data Vanguard',
    price: { min: 260, max: 450 },
    color: 'primary',
    description: 'Comprehensive solution for established businesses',
    popular: false
  }
}

const services = {
  bookkeeping: {
    name: 'Bookkeeping Services',
    foundation: {
      items: ['Initial Setup and Consultation', 'Transaction Recording', 'Accounts Payable/Receivable Management', 'Monthly Bank Reconciliations'],
      included: true
    },
    growth: {
      items: ['All Foundation features', 'Monthly Payroll Processing', 'Enhanced reporting'],
      included: true
    },
    strategic: {
      items: ['All Growth features', 'Advanced analytics', 'Custom dashboards'],
      included: true
    }
  },
  accounting: {
    name: 'Accounting Services',
    foundation: {
      items: ['Quarterly Financial Reporting'],
      included: false
    },
    growth: {
      items: ['Monthly Financial Reporting', 'Annual Budgeting and Forecasting', 'Semi-Annual Financial Analysis'],
      included: true
    },
    strategic: {
      items: ['Monthly Financial Reporting', 'Monthly Budgeting and Forecasting', 'Monthly Financial Analysis', 'Monthly Cost Accounting'],
      included: true
    }
  },
  taxation: {
    name: 'Taxation Services',
    foundation: {
      items: ['T1 Filing ($40-120)', 'T2 Filing ($300-1500)', 'Annual HST/GST Filing'],
      included: true
    },
    growth: {
      items: ['All Foundation tax services', 'Quarterly HST/GST Filing'],
      included: true
    },
    strategic: {
      items: ['All Growth tax services', 'Advanced tax planning', 'Quarterly HST/GST Filing'],
      included: true
    }
  },
  compilation: {
    name: 'Financial Statement Preparation',
    foundation: {
      items: ['Compilation Engagements (Add-on)'],
      included: false,
      addon: true
    },
    growth: {
      items: ['Annual Compilation Engagements (Notice to Reader)'],
      included: true
    },
    strategic: {
      items: ['Annual Compilation Engagements (Notice to Reader)', 'Review Engagements (Available)'],
      included: true
    }
  },
  analytics: {
    name: 'Data Analytics and Studies',
    foundation: {
      items: ['Data Collection and Management'],
      included: true
    },
    growth: {
      items: ['Data Collection and Management', 'Performance Dashboards'],
      included: true
    },
    strategic: {
      items: ['All Growth features', 'Predictive Analytics', 'Custom Reports and Studies'],
      included: true
    }
  }
}

export default function CostEstimatorPage() {
  const [selectedTier, setSelectedTier] = useState('growth')
  const [selectedServices, setSelectedServices] = useState({
    bookkeeping: true,
    accounting: true,
    taxation: true,
    compilation: true,
    analytics: false
  })
  const [businessSize, setBusinessSize] = useState('small')
  const [estimatedPrice, setEstimatedPrice] = useState(225)

  const calculatePrice = () => {
    const tier = serviceTiers[selectedTier as keyof typeof serviceTiers]
    let basePrice = (tier.price.min + tier.price.max) / 2
    
    // Adjust based on business size
    const sizeMultiplier: Record<string, number> = {
      micro: 0.8,
      small: 1.0,
      medium: 1.3,
      large: 1.6
    }
    
    basePrice *= sizeMultiplier[businessSize]
    
    // Add-ons
    let addons = 0
    if (selectedServices.analytics && selectedTier === 'foundation') {
      addons += 50
    }
    
    setEstimatedPrice(Math.round(basePrice + addons))
  }

  // Calculate price when dependencies change
  useEffect(() => {
    calculatePrice()
  }, [selectedTier, businessSize, selectedServices])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Service Cost Estimator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant estimate for your accounting and bookkeeping needs. 
              Our competitive pricing is designed to provide exceptional value for Canadian businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Estimator Tool */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Business Size Selection */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Size</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: 'micro', label: 'Micro Business', desc: '1-5 employees' },
                    { key: 'small', label: 'Small Business', desc: '6-20 employees' },
                    { key: 'medium', label: 'Medium Business', desc: '21-50 employees' },
                    { key: 'large', label: 'Large Business', desc: '50+ employees' }
                  ].map((size) => (
                    <button
                      key={size.key}
                      onClick={() => {
                        setBusinessSize(size.key)
                        calculatePrice()
                      }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        businessSize === size.key
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{size.label}</div>
                      <div className="text-sm text-gray-600">{size.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Tier Selection */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Package</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(serviceTiers).map(([key, tier]) => (
                    <div
                      key={key}
                      className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedTier === key
                          ? 'border-primary-600 bg-primary-50 shadow-lg'
                          : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                      } ${tier.popular ? 'ring-2 ring-accent-500 ring-opacity-50' : ''}`}
                      onClick={() => {
                        setSelectedTier(key)
                        calculatePrice()
                      }}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                          <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              <span>Most Popular</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <h4 className="font-bold text-gray-900 mb-2">{tier.name}</h4>
                      <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                      <div className="text-2xl font-bold text-primary-600">
                        ${tier.price.min} - ${tier.price.max}
                        <span className="text-sm text-gray-500 font-normal">/month</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included in {serviceTiers[selectedTier as keyof typeof serviceTiers].name}
                </h3>
                <div className="space-y-6">
                  {Object.entries(services).map(([serviceKey, service]) => {
                    const tierData = (service as any)[selectedTier]
                    return (
                      <div key={serviceKey} className="border-b border-gray-100 pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{service.name}</h4>
                          {tierData.included ? (
                            <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                          ) : (
                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {tierData.addon ? 'Add-on Available' : 'Not Included'}
                            </span>
                          )}
                        </div>
                        <ul className="space-y-2">
                          {tierData.items.map((item: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-primary-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="font-semibold">{serviceTiers[selectedTier as keyof typeof serviceTiers].name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business Size:</span>
                      <span className="font-semibold capitalize">{businessSize}</span>
                    </div>
                  </div>

                  <div className="border-t border-primary-500 pt-6 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">Estimated Monthly Cost:</span>
                    </div>
                    <div className="text-4xl font-bold mt-2">
                      ${estimatedPrice}
                      <span className="text-lg font-normal">/month</span>
                    </div>
                    <p className="text-primary-100 text-sm mt-2">
                      *Final pricing may vary based on specific requirements
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link 
                      href={`/contact?price=${estimatedPrice}&tier=${encodeURIComponent(selectedTier)}&size=${encodeURIComponent(businessSize)}&services=${encodeURIComponent(Object.entries(selectedServices).filter(([_, selected]) => selected).map(([service, _]) => service).join(', '))}`}
                      className="w-full bg-white text-primary-600 px-6 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center group"
                    >
                      Get Detailed Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      href="tel:437-772-9598"
                      className="w-full border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block"
                    >
                      Call (437) 772-9598
                    </Link>
                  </div>
                </div>

                {/* Competitive Advantage */}
                <div className="bg-accent-50 rounded-xl p-6 mt-6">
                  <div className="flex items-start space-x-3">
                    <Info className="h-6 w-6 text-accent-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-accent-900 mb-2">Why Choose Our Pricing?</h4>
                      <ul className="text-sm text-accent-800 space-y-1">
                        <li>• 20-30% more competitive than traditional firms</li>
                        <li>• Virtual delivery reduces overhead costs</li>
                        <li>• Transparent, all-inclusive pricing</li>
                        <li>• No hidden fees or surprise charges</li>
                        <li>• Scale up or down as your business grows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Compare</h2>
            <p className="text-lg text-gray-600">
              See how our competitive pricing stacks up against traditional accounting firms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Firms</h3>
              <div className="text-3xl font-bold text-gray-600 mb-4">$300-600</div>
              <p className="text-gray-600 mb-4">Per month for similar services</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Higher overhead costs</li>
                <li>• Hourly billing surprises</li>
                <li>• Limited availability</li>
                <li>• Geographic constraints</li>
              </ul>
            </div>

            <div className="bg-primary-600 text-white rounded-xl p-8 text-center relative shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Best Value</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Adapt Business Solutions</h3>
              <div className="text-3xl font-bold mb-4">${serviceTiers[selectedTier as keyof typeof serviceTiers].price.min}-${serviceTiers[selectedTier as keyof typeof serviceTiers].price.max}</div>
              <p className="text-primary-100 mb-4">Per month with more features</p>
              <ul className="space-y-2 text-sm text-primary-100">
                <li>• Virtual efficiency savings</li>
                <li>• Transparent fixed pricing</li>
                <li>• Canada-wide availability</li>
                <li>• Modern technology stack</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DIY Software</h3>
              <div className="text-3xl font-bold text-gray-600 mb-4">$50-100</div>
              <p className="text-gray-600 mb-4">Per month + your time</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Time-intensive learning</li>
                <li>• Risk of errors</li>
                <li>• No professional guidance</li>
                <li>• Limited compliance support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Schedule a free consultation to discuss your specific needs and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Free Consultation
              </Link>
              <Link href="tel:437-772-9598" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Call Now: (437) 772-9598
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
