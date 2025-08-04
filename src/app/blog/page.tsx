import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowRight, TrendingUp, FileText, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CPA Blog | Tax Tips & Business Advice | Adapt Business Solutions',
  description: 'Expert CPA insights, tax tips, and business advice for Ontario businesses. Latest accounting updates from Orangeville, Brampton, Mississauga & Niagara Region.',
  keywords: 'CPA blog, tax tips Ontario, small business accounting advice, CRA updates, business tax planning',
}

// This will be populated by our content management system
const featuredArticles = [
  {
    id: 'small-business-tax-deductions-2025',
    title: 'Small Business Tax Deductions You\'re Missing in 2025',
    excerpt: 'Discover overlooked tax deductions that could save your Ontario business thousands. Expert CPA insights on maximizing your tax savings.',
    category: 'Tax Planning',
    readTime: '8 min read',
    publishDate: '2025-01-15',
    author: 'Adapt Business Solutions',
    featured: true,
    tags: ['Tax Deductions', 'Small Business', 'Ontario', 'CRA']
  },
  {
    id: 'cra-audit-triggers-2025',
    title: 'CRA Audit Red Flags: What Triggers an Audit in 2025',
    excerpt: 'Learn the common triggers that put businesses on CRA\'s radar and how to audit-proof your company.',
    category: 'Compliance',
    readTime: '6 min read',
    publishDate: '2025-01-12',
    author: 'Adapt Business Solutions',
    featured: false,
    tags: ['CRA Audit', 'Compliance', 'Business Protection']
  },
  {
    id: 'brampton-business-grants-2025',
    title: 'Brampton Business Grants and Tax Credits Available in 2025',
    excerpt: 'Complete guide to government funding opportunities for Brampton businesses, including application tips.',
    category: 'Local Business',
    readTime: '10 min read',
    publishDate: '2025-01-10',
    author: 'Adapt Business Solutions',
    featured: false,
    tags: ['Brampton', 'Business Grants', 'Government Funding']
  },
  {
    id: 'gst-hst-changes-2025',
    title: 'GST/HST Changes for 2025: What Ontario Businesses Need to Know',
    excerpt: 'Stay compliant with the latest GST/HST updates affecting Ontario businesses this year.',
    category: 'Tax Updates',
    readTime: '7 min read',
    publishDate: '2025-01-08',
    author: 'Adapt Business Solutions',
    featured: false,
    tags: ['GST/HST', 'Tax Updates', 'Ontario Business']
  }
]

const categories = [
  { name: 'Tax Planning', count: 12, icon: Calculator },
  { name: 'Small Business', count: 18, icon: TrendingUp },
  { name: 'Compliance', count: 8, icon: FileText },
  { name: 'Local Business', count: 15, icon: User },
]

export default function BlogPage() {
  const featuredPost = featuredArticles.find(article => article.featured)
  const recentPosts = featuredArticles.filter(article => !article.featured)

  return (
    <>
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                CPA Insights & Tax Tips
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Expert accounting advice for Ontario businesses from certified CPAs
              </p>
              <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg inline-block font-semibold">
                📝 New articles published daily • Always up-to-date with CRA changes
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-700">
                    <strong>Professional Disclaimer:</strong> The information provided in these articles is for educational purposes only and does not constitute professional accounting, tax, or legal advice. 
                    In accordance with CPA Ontario standards, readers should consult with a qualified CPA for advice specific to their situation. 
                    Tax laws and regulations change frequently, and this content may not reflect the most current updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
                <p className="text-xl text-gray-600">Latest insights from our CPA experts</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="ml-4 text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </span>
                    <span className="ml-4 text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <IconComponent className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.count} articles</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="ml-2 text-gray-500 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.publishDate).toLocaleDateString()}
                      </div>
                      <Link
                        href={`/blog/${article.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/blog/all"
                className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Tax Tips & Business Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get weekly CPA insights delivered to your inbox. No spam, just valuable business advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 500+ Ontario business owners receiving our insights
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
