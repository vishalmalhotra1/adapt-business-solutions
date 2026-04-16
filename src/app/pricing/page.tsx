'use client'

import { useState, useEffect, useCallback } from 'react'
import { CheckCircle, ArrowRight, Info } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const serviceTiers = {
  foundation: {
    name: 'Foundation Finance Suite',
    price: { min: 100, max: 190 },
    description: 'Perfect for small businesses and startups',
    popular: false,
  },
  growth: {
    name: 'Growth Navigator Pack',
    price: { min: 190, max: 260 },
    description: 'Ideal for growing businesses',
    popular: true,
  },
  strategic: {
    name: 'Strategic Data Vanguard',
    price: { min: 260, max: 450 },
    description: 'Comprehensive solution for established businesses',
    popular: false,
  },
}

const services = {
  bookkeeping: {
    name: 'Bookkeeping Services',
    foundation: { items: ['Initial Setup & Consultation', 'Transaction Recording', 'Accounts Payable/Receivable', 'Monthly Bank Reconciliations'], included: true },
    growth: { items: ['All Foundation features', 'Monthly Payroll Processing', 'Enhanced reporting'], included: true },
    strategic: { items: ['All Growth features', 'Advanced analytics', 'Custom dashboards'], included: true },
  },
  accounting: {
    name: 'Accounting Services',
    foundation: { items: ['Quarterly Financial Reporting'], included: false },
    growth: { items: ['Monthly Financial Reporting', 'Annual Budgeting & Forecasting', 'Semi-Annual Financial Analysis'], included: true },
    strategic: { items: ['Monthly Financial Reporting', 'Monthly Budgeting & Forecasting', 'Monthly Financial Analysis', 'Monthly Cost Accounting'], included: true },
  },
  taxation: {
    name: 'Taxation Services',
    foundation: { items: ['T1 Filing ($40–120)', 'T2 Filing ($300–1500)', 'Annual HST/GST Filing'], included: true },
    growth: { items: ['All Foundation tax services', 'Quarterly HST/GST Filing'], included: true },
    strategic: { items: ['All Growth tax services', 'Advanced tax planning', 'Quarterly HST/GST Filing'], included: true },
  },
  compilation: {
    name: 'Financial Statement Preparation',
    foundation: { items: ['Compilation Engagements (Add-on)'], included: false, addon: true },
    growth: { items: ['Annual Compilation Engagements (Notice to Reader)'], included: true },
    strategic: { items: ['Annual Compilation Engagements (Notice to Reader)', 'Review Engagements (Available)'], included: true },
  },
  analytics: {
    name: 'Data Analytics & Studies',
    foundation: { items: ['Data Collection & Management'], included: true },
    growth: { items: ['Data Collection & Management', 'Performance Dashboards'], included: true },
    strategic: { items: ['All Growth features', 'Predictive Analytics', 'Custom Reports & Studies'], included: true },
  },
}

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState('growth')
  const [businessSize, setBusinessSize] = useState('small')
  const [estimatedPrice, setEstimatedPrice] = useState(225)
  const [selectedServices] = useState({ bookkeeping: true, accounting: true, taxation: true, compilation: true, analytics: false })

  const sizeMultiplier: Record<string, number> = { micro: 0.8, small: 1.0, medium: 1.3, large: 1.6 }

  const getSizeAdjustedPriceRange = useCallback((tierKey: string) => {
    const tier = serviceTiers[tierKey as keyof typeof serviceTiers]
    const m = sizeMultiplier[businessSize]
    return { min: Math.round(tier.price.min * m), max: Math.round(tier.price.max * m) }
  }, [businessSize])

  const getTraditionalFirmsPricing = useCallback(() => {
    const base: Record<string, { min: number; max: number }> = { foundation: { min: 280, max: 550 }, growth: { min: 350, max: 650 }, strategic: { min: 450, max: 800 } }
    const m: Record<string, number> = { micro: 0.7, small: 1.0, medium: 1.4, large: 2.0 }
    const b = base[selectedTier] || base.growth
    return { min: Math.round(b.min * m[businessSize]), max: Math.round(b.max * m[businessSize]) }
  }, [businessSize, selectedTier])

  const getDIYSoftwarePricing = useCallback(() => {
    const base: Record<string, { min: number; max: number }> = { foundation: { min: 40, max: 80 }, growth: { min: 60, max: 120 }, strategic: { min: 100, max: 200 } }
    const m: Record<string, number> = { micro: 0.8, small: 1.0, medium: 1.5, large: 2.2 }
    const b = base[selectedTier] || base.growth
    return { min: Math.round(b.min * m[businessSize]), max: Math.round(b.max * m[businessSize]) }
  }, [businessSize, selectedTier])

  const calculatePrice = useCallback(() => {
    const tier = serviceTiers[selectedTier as keyof typeof serviceTiers]
    let base = (tier.price.min + tier.price.max) / 2
    base *= sizeMultiplier[businessSize]
    setEstimatedPrice(Math.round(base))
  }, [selectedTier, businessSize])

  useEffect(() => { calculatePrice() }, [calculatePrice])

  const tierKeys = Object.keys(serviceTiers) as Array<keyof typeof serviceTiers>

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern pt-16 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Transparent Pricing</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Service Cost Estimator</h1>
            <p className="text-navy-100 text-lg max-w-2xl mx-auto">
              Get an instant monthly estimate for professional CPA services tailored to your business size and needs.
            </p>
          </div>
        </section>

        {/* Estimator */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Config */}
              <div className="lg:col-span-2 space-y-8">

                {/* Business Size */}
                <div className="border border-gray-100 shadow-sm p-8">
                  <h3 className="font-serif text-xl font-bold text-navy mb-6">Business Size</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { key: 'micro', label: 'Micro', desc: '1–5 employees' },
                      { key: 'small', label: 'Small', desc: '6–20 employees' },
                      { key: 'medium', label: 'Medium', desc: '21–50 employees' },
                      { key: 'large', label: 'Large', desc: '50+ employees' },
                    ].map(size => (
                      <button
                        key={size.key}
                        onClick={() => setBusinessSize(size.key)}
                        className={`p-4 border-2 text-left transition-all ${businessSize === size.key ? 'border-gold bg-gold-50' : 'border-gray-200 hover:border-gold-hover'}`}
                      >
                        <div className="font-semibold text-navy text-sm">{size.label}</div>
                        <div className="text-xs text-gray-500">{size.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Tier */}
                <div className="border border-gray-100 shadow-sm p-8">
                  <h3 className="font-serif text-xl font-bold text-navy mb-6">Service Package</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tierKeys.map(key => {
                      const tier = serviceTiers[key]
                      const price = getSizeAdjustedPriceRange(key)
                      return (
                        <div
                          key={key}
                          onClick={() => setSelectedTier(key)}
                          className={`relative p-6 border-2 cursor-pointer transition-all ${selectedTier === key ? 'border-gold bg-gold-50 shadow-md' : 'border-gray-200 hover:border-gold-hover'}`}
                        >
                          {tier.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                              <span className="bg-gold text-navy text-xs font-bold px-3 py-1">Most Popular</span>
                            </div>
                          )}
                          <h4 className="font-serif font-bold text-navy mb-1 text-sm">{tier.name}</h4>
                          <p className="text-xs text-gray-500 mb-3">{tier.description}</p>
                          <div className="font-bold text-navy text-lg">
                            ${price.min}–${price.max}
                            <span className="text-xs text-gray-500 font-normal">/mo</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Included Services */}
                <div className="border border-gray-100 shadow-sm p-8">
                  <h3 className="font-serif text-xl font-bold text-navy mb-6">
                    What&apos;s Included — {serviceTiers[selectedTier as keyof typeof serviceTiers].name}
                  </h3>
                  <div className="space-y-5">
                    {Object.entries(services).map(([key, service]) => {
                      const tierData = (service as unknown as Record<string, { items: string[]; included: boolean; addon?: boolean }>)[selectedTier]
                      return (
                        <div key={key} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-navy text-sm">{service.name}</h4>
                            {tierData.included ? (
                              <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                            ) : (
                              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5">
                                {tierData.addon ? 'Add-on' : 'Not Included'}
                              </span>
                            )}
                          </div>
                          <ul className="space-y-1">
                            {tierData.items.map((item: string) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                                {item}
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
                <div className="sticky top-20">
                  <div className="bg-navy text-white p-8">
                    <h3 className="font-serif text-xl font-bold mb-6">Your Estimate</h3>
                    <div className="space-y-3 text-sm mb-6">
                      <div className="flex justify-between">
                        <span className="text-navy-100">Package:</span>
                        <span className="font-medium text-sm text-right ml-2">{serviceTiers[selectedTier as keyof typeof serviceTiers].name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-navy-100">Size:</span>
                        <span className="font-medium capitalize">{businessSize}</span>
                      </div>
                    </div>
                    <div className="border-t border-navy-medium pt-6 mb-6">
                      <p className="text-navy-100 text-sm mb-1">Estimated Monthly Cost</p>
                      <div className="font-serif text-4xl font-bold text-gold">
                        ${estimatedPrice}
                        <span className="text-lg font-normal text-white">/mo</span>
                      </div>
                      <p className="text-navy-100 text-xs mt-2">*Final pricing confirmed at consultation</p>
                    </div>
                    <div className="space-y-3">
                      <Link
                        href={`/contact?price=${estimatedPrice}&tier=${encodeURIComponent(selectedTier)}&size=${encodeURIComponent(businessSize)}&services=${encodeURIComponent(Object.entries(selectedServices).filter(([, s]) => s).map(([k]) => k).join(', '))}`}
                        className="w-full bg-gold hover:bg-gold-hover text-navy font-semibold py-4 flex items-center justify-center gap-2 transition-colors group"
                      >
                        Get Detailed Quote
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href="tel:437-772-9598"
                        className="w-full border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-3 flex items-center justify-center transition-colors text-sm"
                      >
                        Call (437) 772-9598
                      </a>
                    </div>
                  </div>

                  <div className="bg-gold-50 border border-gold p-5 mt-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-2">Why Choose Our Pricing?</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 20–30% more competitive than traditional firms</li>
                          <li>• Virtual delivery reduces overhead costs</li>
                          <li>• Transparent, all-inclusive pricing</li>
                          <li>• No hidden fees or surprise charges</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl font-bold text-navy mb-2">How We Compare</h2>
              <p className="text-gray-600">See how our pricing stacks up against alternatives</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-100 p-8 text-center">
                <h3 className="font-semibold text-gray-700 mb-3">Traditional Firms</h3>
                <div className="font-serif text-3xl font-bold text-gray-500 mb-3">
                  ${getTraditionalFirmsPricing().min}–${getTraditionalFirmsPricing().max}
                </div>
                <p className="text-gray-500 text-sm mb-4">Per month for similar services</p>
                <ul className="text-sm text-gray-500 space-y-1 text-left">
                  <li>• Higher overhead costs</li>
                  <li>• Hourly billing surprises</li>
                  <li>• Limited availability</li>
                </ul>
              </div>
              <div className="bg-navy text-white p-8 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-navy text-xs font-bold px-3 py-1">Best Value</span>
                </div>
                <h3 className="font-semibold mb-3">Adapt Business Solutions</h3>
                <div className="font-serif text-3xl font-bold text-gold mb-3">
                  ${getSizeAdjustedPriceRange(selectedTier).min}–${getSizeAdjustedPriceRange(selectedTier).max}
                </div>
                <p className="text-navy-100 text-sm mb-4">Per month with more features</p>
                <ul className="text-sm text-navy-100 space-y-1 text-left">
                  <li>• Virtual efficiency savings</li>
                  <li>• Transparent fixed pricing</li>
                  <li>• Canada-wide availability</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 p-8 text-center">
                <h3 className="font-semibold text-gray-700 mb-3">DIY Software</h3>
                <div className="font-serif text-3xl font-bold text-gray-500 mb-3">
                  ${getDIYSoftwarePricing().min}–${getDIYSoftwarePricing().max}
                </div>
                <p className="text-gray-500 text-sm mb-4">Per month + your time</p>
                <ul className="text-sm text-gray-500 space-y-1 text-left">
                  <li>• Time-intensive learning</li>
                  <li>• Risk of errors</li>
                  <li>• No professional guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
