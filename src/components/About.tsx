import { CheckCircle } from 'lucide-react'

const points = [
  {
    title: 'CPA Certified Professional',
    desc: 'Fully credentialed Chartered Professional Accountant with CPA Ontario in good standing.',
  },
  {
    title: 'Data-Driven Insights',
    desc: 'Advanced analytics background applied to your finances for actionable, evidence-based decisions.',
  },
  {
    title: 'Virtual & Canada-Wide',
    desc: 'Fully virtual practice — no commutes, no delays. Serving clients across Ontario and all of Canada.',
  },
  {
    title: 'Personalized Service',
    desc: 'You work directly with your CPA — never passed to juniors or automated systems.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6">
              The Adapt Business Solutions Difference
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Adapt Business Solutions is a virtual CPA practice built for the modern Ontario
              business owner. We combine rigorous professional standards with a data analytics
              background to deliver insights — not just reports.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a sole proprietor in Orangeville or a growing corporation in Brampton,
              you receive the same senior-level attention typically reserved for larger firms, at a
              price that makes sense for small and medium business.
            </p>
          </div>

          {/* Right */}
          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <h3 className="font-serif text-xl font-bold text-navy mb-8">
              What Sets Us Apart
            </h3>
            <div className="space-y-6">
              {points.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{point.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <blockquote className="text-sm text-gray-600 italic">
                &ldquo;Empowering Growth, Ensuring Value — your trusted CPA in financial excellence.&rdquo;
              </blockquote>
              <p className="text-xs text-gray-400 mt-2">— Adapt Business Solutions</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
