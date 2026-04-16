import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Incorporate a Business in Ontario: Step-by-Step | Adapt Business Solutions',
  description: 'Everything you need to know about incorporating in Ontario — federal vs. provincial, articles of incorporation, costs, timelines, and when it actually makes financial sense.',
  keywords: 'how to incorporate Ontario, business incorporation Ontario, federal vs provincial incorporation, articles of incorporation Ontario, CCPC Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/how-to-incorporate-business-ontario' },
  openGraph: {
    title: 'How to Incorporate a Business in Ontario: Step-by-Step',
    description: 'Federal vs. provincial, articles of incorporation, costs, timelines, and when incorporation makes financial sense.',
    url: 'https://adaptbusinesssolutions.com/blog/how-to-incorporate-business-ontario',
    type: 'article',
  },
}

export default function IncorporateOntarioPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold-hover text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">Corporate Services</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              How to Incorporate a Business in Ontario: Step-by-Step
            </h1>
            <p className="text-navy-100 text-lg">
              Everything you need to know about incorporating in Ontario — federal vs. provincial, articles of incorporation, costs, timelines, and when it actually makes financial sense.
            </p>
            <p className="text-navy-100 text-sm mt-4">Published August 5, 2025 · 8 min read · By Adapt Business Solutions CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Disclaimer:</strong> This article is for educational purposes only. Incorporation involves legal and financial decisions specific to your situation. Consult a qualified CPA and/or lawyer before incorporating.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Incorporating a business is one of the most significant financial and legal decisions you will make as an Ontario entrepreneur. It affects your taxes, your liability, and how your business is perceived by clients and lenders. This guide walks you through the entire process — from deciding whether to incorporate, to the step-by-step mechanics of actually doing it.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Should You Incorporate? The Financial Case</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The primary financial reason to incorporate is the small business deduction (SBD). A Canadian-Controlled Private Corporation (CCPC) earning active business income pays federal tax at 9% on the first $500,000 of net income, compared to the top personal marginal rate in Ontario of approximately 53.5%.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This creates a significant tax deferral opportunity: if you earn $200,000 in business income but only need $80,000 to live on, a corporation can pay tax at 9-12% on the retained $120,000, while you would pay 43-53% on that same amount personally. The deferred tax can be reinvested in the business.
              </p>
              <div className="bg-gold-50 border-l-4 border-gold p-4 mb-6">
                <p className="text-sm text-gray-700"><strong>Rule of thumb:</strong> Incorporation typically starts making financial sense when your net business income exceeds approximately $80,000–$100,000 per year and you do not need to withdraw all profits personally.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Federal vs. Provincial Incorporation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have two choices for incorporating in Ontario: federally under the Canada Business Corporations Act (CBCA), or provincially under the Ontario Business Corporations Act (OBCA).
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Federal Incorporation (CBCA)</h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Corporate name protected across all provinces and territories',
                  'Right to carry on business in any province (with extra-provincial registration)',
                  'Better for businesses planning national expansion',
                  'Federal filing fee: $200 online',
                  'Must also register to carry on business in Ontario (additional $60)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Provincial Incorporation (OBCA)</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Lower overall cost for Ontario-only businesses',
                  'Simpler ongoing maintenance requirements',
                  'Ontario provincial fee: $300 online or by mail',
                  'Name protection only within Ontario',
                  'Administered by ServiceOntario',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Step-by-Step: How to Incorporate in Ontario</h2>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Step 1: Choose a Corporate Name</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your corporation needs a unique name that includes a legal element (Inc., Ltd., Corp., Limited, Incorporated, or Corporation). You can search the NUANS (Newly Upgraded Automated Name Search) database to check name availability. A NUANS report costs approximately $13.80 for a 5-day window. Alternatively, you can use a numbered company (e.g., 1234567 Ontario Inc.) which is faster and cheaper.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Step 2: Prepare Articles of Incorporation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Articles of Incorporation are the foundational document of your corporation. They specify: the corporation&apos;s name, the province of the registered office, the first directors, the classes and maximum number of shares, and any restrictions on business activities or share transfers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For most small businesses, a simple share structure works well: unlimited common shares with no restrictions. Your CPA can advise on whether multiple share classes (to allow income splitting with family members) make sense for your situation.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Step 3: Register and File</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For Ontario provincial incorporation, file Articles of Incorporation through ServiceOntario or through a law firm. The government processing time is typically 5–15 business days, with expedited options available.
              </p>

              <h3 className="font-serif text-xl font-bold text-navy mt-6 mb-3">Step 4: Post-Incorporation Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                After incorporation, you need to complete several administrative steps: hold an organizational meeting, create the corporate minute book, issue shares to shareholders, appoint directors and officers, register for a CRA Business Number, register for HST (if applicable), and open a corporate bank account.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Ongoing Costs of a Corporation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Incorporating is not free after the initial setup. Annual costs include: corporate tax return (T2) preparation ($800–$2,500+ per year through a CPA), annual return filing with ServiceOntario ($12/year), and potentially more complex bookkeeping requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                These costs need to be weighed against the tax savings. At modest income levels, the accounting costs may outweigh the tax benefits — which is why the $80,000–$100,000 net income threshold is often cited as the breakeven point.
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Should You Incorporate? Let&apos;s Talk Through Your Situation</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Every business is different. A CPA can model the tax impact of incorporation for your specific income level, business type, and personal financial situation before you commit.
                </p>
                <Link href="/pricing" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                  Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </article>

      </div>
      <Footer />
    </>
  )
}
