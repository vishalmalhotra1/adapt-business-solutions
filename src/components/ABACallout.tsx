import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const points = [
  'Professional Corporation (PC) setup for RBA practitioners',
  'CPBAO compliance, we know what\'s required and what isn\'t',
  'Contractor vs. employee classification, avoid CRA risk',
  'ABA-specific tax deductions: BACB fees, software, mileage, home office',
  'OAP funding flow, Supervisee payroll, and HST on therapy services',
  'Tax strategy to keep more of what you earn',
]

export default function ABACallout() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d2d3a 0%, #0d1b2a 60%)' }} aria-labelledby="aba-callout-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            <p className="text-teal-300 text-xs font-bold tracking-widest uppercase mb-5">
              Specialty Practice
            </p>
            <h2 id="aba-callout-heading" className="font-serif text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              The CPA Who Understands <br className="hidden sm:block" />
              ABA Practitioners
            </h2>
            <p className="text-navy-100 text-lg leading-relaxed mb-8">
              Most CPAs don&apos;t know CPBAO from CRA. We specialize in behavior analysts, RBAs, Supervisees, and ABA therapy practice owners across Ontario, handling the complex tax and accounting issues general CPAs miss.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/aba-practitioners"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white font-semibold px-7 py-4 transition-colors group"
              >
                Explore ABA Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <a
                href="https://calendly.com/accountant-brhd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-4 transition-colors"
                aria-label="Book ABA consultation (opens in new tab)"
              >
                Book ABA Consultation
              </a>
            </div>
          </div>

          {/* Right: Checklist */}
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="font-serif text-xl font-bold text-white mb-6">
              We handle everything ABA-specific:
            </h3>
            <ul className="space-y-4" role="list">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-navy-100 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-navy-100 text-xs">
                Whether you&apos;re a solo RBA contractor, running a multi-therapist practice, or anywhere in between, we&apos;ve incorporated ABA businesses and optimized tax strategy for behaviour analysts across Ontario.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
