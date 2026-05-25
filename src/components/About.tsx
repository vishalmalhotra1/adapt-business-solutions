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
    desc: 'Fully virtual practice, no commutes, no delays. Serving clients across Ontario and all of Canada.',
  },
  {
    title: 'Personalized Service',
    desc: 'You work directly with your CPA, never passed to juniors or automated systems.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-px bg-transparent lg:bg-gray-200">

          {/* Left */}
          <div className="bg-gray-50 lg:bg-white lg:pr-16 py-12 lg:py-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">Why Choose Us</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight mb-8">
              The Adapt<br />Difference.
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Adapt Accounting Services is a virtual CPA practice built for the modern Ontario
              business owner. We combine rigorous professional standards with a data analytics
              background to deliver insights, not just reports.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Whether you are a sole proprietor in Orangeville or a growing corporation in Brampton,
              you receive the same senior-level attention typically reserved for larger firms, at a
              price that makes sense for small and medium business.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/accountant-brhd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gold hover:text-navy transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white lg:pl-16 py-12 lg:py-16">
            <h3 className="font-serif text-xl font-bold text-navy mb-8 uppercase tracking-wide">What Sets Us Apart</h3>
            <div className="space-y-0">
              {points.map((point, i) => (
                <div key={point.title} className={`py-6 ${i < points.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-px bg-gold mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1.5">{point.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <blockquote className="font-serif text-base italic text-gray-500 leading-relaxed">
                &ldquo;Empowering Growth, Ensuring Value, your trusted CPA in financial excellence.&rdquo;
              </blockquote>
              <p className="text-xs text-gray-400 mt-3 tracking-wide uppercase"> Adapt Accounting Services</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
