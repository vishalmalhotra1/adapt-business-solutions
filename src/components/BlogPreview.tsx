import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { autoBlogPosts } from '@/data/auto-blog-posts'

// Pinned ABA posts shown first, then fill with latest auto posts
const pinnedPosts = [
  {
    id: 'incorporating-aba-practice-ontario-behaviour-analysts',
    title: 'Incorporating Your ABA Practice in Ontario: What Behaviour Analysts Need to Know',
    excerpt: 'Running an ABA therapy practice as a sole proprietor leaves significant tax savings on the table. Here is exactly what incorporating means for behaviour analysts.',
    category: 'ABA Practices',
    readTime: '9 min read',
    date: '2026-05-07',
  },
  {
    id: 'sole-proprietor-vs-corporation-canada',
    title: 'Sole Proprietor vs Corporation Canada: The Real Tax Math at $50K, $100K, $150K',
    excerpt: 'Exact numbers comparing sole proprietorship and incorporation tax burden in Canada. See when incorporating saves money, and when it doesn\'t.',
    category: 'Tax Strategy',
    readTime: '10 min read',
    date: '2026-05-06',
  },
]

function getPreviewPosts() {
  const latest = [...autoBlogPosts].reverse().slice(0, 1)
  const combined = [...pinnedPosts, ...latest]
  const seen = new Set<string>()
  return combined.filter(p => {
    if (seen.has(p.id)) return false
    seen.add(p.id)
    return true
  }).slice(0, 3)
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })
}

const categoryColors: Record<string, string> = {
  'ABA Practices': 'bg-teal-600 text-white',
  'Tax Strategy': 'bg-navy text-white',
  'Tax Planning': 'bg-navy text-white',
  'Incorporation': 'bg-gold text-navy',
  'Payroll': 'bg-navy text-white',
  'HST & GST': 'bg-navy text-white',
}

export default function BlogPreview() {
  const posts = getPreviewPosts()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">CPA Insights</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              Tax Tips &amp; Accounting Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center text-sm font-semibold text-gold hover:text-gold-hover transition-colors group"
          >
            View all {autoBlogPosts.length + 20}+ articles
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={`group flex flex-col border hover:shadow-md transition-all ${i === 0 ? 'border-gold/40 bg-gold-50' : 'border-gray-100 bg-white'}`}
            >
              <div className="p-6 flex flex-col flex-1">
                <span className={`inline-block text-xs font-bold px-2.5 py-1 mb-4 self-start ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                  {post.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-navy mb-3 leading-snug group-hover:text-gold transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center text-gold hover:text-gold-hover font-semibold text-sm transition-colors group/link">
                  Read Article
                  <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
