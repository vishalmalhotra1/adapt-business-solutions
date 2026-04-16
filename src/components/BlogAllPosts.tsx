'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export interface BlogPostEntry {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

interface Props {
  posts: BlogPostEntry[]
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

const PAGE_SIZE = 9

export default function BlogAllPosts({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category))).sort()]

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleCategory(cat: string) {
    setActiveCategory(cat)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-2 text-sm font-semibold border transition-colors ${
              activeCategory === cat
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-navy border-gray-300 hover:border-navy hover:text-navy'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map(post => (
          <article key={post.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="p-6 flex flex-col flex-1">
              <span className="inline-block bg-gold-50 text-gold border border-gold text-xs font-bold px-2 py-0.5 mb-3 self-start">
                {post.category}
              </span>
              <h3 className="font-serif text-lg font-bold text-navy mb-3 leading-snug flex-1">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.date)}
                </span>
                <span>{post.readTime}</span>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-gold hover:text-gold-hover font-semibold text-sm transition-colors"
              >
                Read More <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
            className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3 transition-colors"
          >
            Load More Articles ({filtered.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {visible.length === 0 && (
        <p className="text-gray-500 text-center py-12">No articles in this category yet.</p>
      )}
    </div>
  )
}
