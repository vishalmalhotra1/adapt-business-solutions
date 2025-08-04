import { Award, Target, Heart, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Adapt Business Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As a virtual CPA practice, Adapt Business Solutions has been serving the financial 
                needs of businesses and individuals across Canada for 2 years. We combine 
                traditional accounting expertise with modern technology to deliver exceptional results 
                from coast to coast.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our virtual service model allows us to provide personalized, professional accounting 
                services to clients nationwide. We believe in building long-term relationships based 
                on trust, integrity, and results - regardless of your location in Canada.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-sm text-gray-600">Delivering the highest quality of service</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Precision</h3>
                <p className="text-sm text-gray-600">Accurate and detailed financial management</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Care</h3>
                <p className="text-sm text-gray-600">Personalized attention to every client</p>
              </div>
            </div>
          </div>

          {/* Right Content - Why Choose Us */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Why Choose Adapt Business Solutions?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">CPA Certified Professional</h4>
                  <p className="text-gray-600">Certified Public Accountant with extensive professional experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Data-Driven Insights</h4>
                  <p className="text-gray-600">We use advanced analytics to provide actionable financial insights</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Technology Integration</h4>
                  <p className="text-gray-600">Modern tools and software for efficient financial management</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Canada-Wide Service</h4>
                  <p className="text-gray-600">Virtual practice serving clients across all provinces and territories</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proactive Communication</h4>
                  <p className="text-gray-600">Regular updates and transparent communication throughout</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h4 className="font-semibold text-primary-900 mb-2">Our Mission</h4>
              <p className="text-primary-700">
                To empower businesses with accurate financial insights and strategic guidance, 
                enabling them to make informed decisions and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
