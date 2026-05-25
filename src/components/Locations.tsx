import Link from 'next/link'
import { MapPin } from 'lucide-react'

const locations = [
  { name: 'Orangeville', href: '/locations/orangeville', desc: 'Our home base in Dufferin County, serving the heart of the region.' },
  { name: 'Brampton', href: '/locations/brampton', desc: "Expert services for Canada's fastest-growing city businesses." },
  { name: 'Mississauga', href: '/locations/mississauga', desc: 'Corporate and SME accounting for the GTA business district.' },
  { name: 'Niagara Region', href: '/locations/niagara-region', desc: 'Specialists in wine, tourism, and agriculture industry accounting.' },
  { name: 'Erin', href: '/locations/erin', desc: 'Personalized CPA services for Erin businesses and residents.' },
  { name: 'Mono', href: '/locations/mono', desc: 'Virtual accounting built for Mono Township small businesses.' },
  { name: 'Grand Valley', href: '/locations/grand-valley', desc: 'Local expertise for businesses in Grand Valley and Dufferin County.' },
  { name: 'Shelburne', href: '/locations/shelburne', desc: 'Trusted CPA services for Shelburne businesses and entrepreneurs.' },
  { name: 'Amaranth', href: '/locations/amaranth', desc: 'Comprehensive accounting services for Amaranth Township.' },
]

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-white" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold-accessible)' }}>
            Service Areas
          </p>
          <h2 id="locations-heading" className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            Proudly Serving Ontario Communities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Local expertise, virtual convenience. We serve businesses across the GTA, Dufferin
            County, and Niagara Region, wherever you are in Ontario, we are here for you.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {locations.map((loc) => (
            <li key={loc.name}>
              <Link
                href={loc.href}
                className="group border border-gray-100 p-6 hover:border-gold hover:shadow-md transition-all flex flex-col h-full"
                aria-label={`CPA services in ${loc.name}, ${loc.desc}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gold-50 p-2" aria-hidden="true">
                    <MapPin className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{loc.desc}</p>
                <span className="text-sm font-semibold group-hover:underline underline-offset-4 transition-colors" style={{ color: 'var(--gold-accessible)' }} aria-hidden="true">
                  View Local CPA Services →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Not listed? We serve all of Ontario virtually.{' '}
            <Link href="/pricing" className="font-semibold hover:underline underline-offset-4" style={{ color: 'var(--gold-accessible)' }}>
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
