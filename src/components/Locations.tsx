import Link from 'next/link'
import { MapPin, Users, Building, Grape } from 'lucide-react'

export default function Locations() {
  const locations = [
    {
      name: 'Orangeville',
      href: '/locations/orangeville',
      icon: Building,
      description: 'Small business hub serving the heart of Dufferin County',
      areas: ['Shelburne', 'Mono', 'Amaranth', 'Grand Valley'],
      specialties: ['Small Business', 'Agriculture', 'Local Services']
    },
    {
      name: 'Brampton',
      href: '/locations/brampton',
      icon: Users,
      description: 'Diverse business community in Canada\'s fastest-growing city',
      areas: ['Bramalea', 'Heart Lake', 'Sandalwood', 'Georgetown'],
      specialties: ['Corporate Services', 'Multilingual Support', 'Tech Startups']
    },
    {
      name: 'Mississauga',
      href: '/locations/mississauga',
      icon: Building,
      description: 'Corporate headquarters and business district expertise',
      areas: ['Square One', 'Port Credit', 'Streetsville', 'Meadowvale'],
      specialties: ['Corporate Tax', 'Financial Analysis', 'International Business']
    },
    {
      name: 'Niagara Region',
      href: '/locations/niagara-region',
      icon: Grape,
      description: 'Wine industry and tourism business specialists',
      areas: ['St. Catharines', 'Niagara Falls', 'Welland', 'NOTL'],
      specialties: ['Wine Industry', 'Tourism', 'Agriculture', 'Manufacturing']
    }
  ]

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proudly Serving Ontario Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Local expertise with regional reach. Our CPA services extend across key Ontario markets, 
            providing specialized accounting solutions tailored to each community&apos;s unique business landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => {
            const IconComponent = location.icon
            return (
              <div key={location.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {location.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Service Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {location.areas.map((area) => (
                      <span key={area} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {location.specialties.map((specialty) => (
                      <span key={specialty} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={location.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Learn More
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t Find Your Area?
            </h3>
            <p className="text-gray-600 mb-6">
              We serve clients throughout Southern Ontario. Even if your location isn&apos;t listed above, 
              we&apos;d love to discuss how we can help your business thrive.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
