/**
 * Daily Blog Generator — FREE version (no API costs)
 * Called by GitHub Actions daily cron job.
 * Rotates through pre-written posts in blog-data.mjs — zero API spend.
 *
 * Usage: node scripts/generate-blog.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { BLOG_POSTS } from './blog-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeJSX(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function todayISO() {
  return new Date().toISOString().split('T')[0]
}

function getPostForToday(existingSlugs) {
  const start = new Date(new Date().getFullYear(), 0, 0)
  const dayOfYear = Math.floor((Date.now() - start.getTime()) / 86400000)

  // Find the next post that hasn't been published yet
  // Try up to BLOG_POSTS.length rotations to find an unpublished one
  for (let offset = 0; offset < BLOG_POSTS.length; offset++) {
    const candidate = BLOG_POSTS[(dayOfYear + offset) % BLOG_POSTS.length]
    if (!existingSlugs.includes(candidate.slug)) {
      return candidate
    }
  }

  // All posts have been published — cycle back from the start
  return BLOG_POSTS[dayOfYear % BLOG_POSTS.length]
}

// ─── JSX page builder ─────────────────────────────────────────────────────────

function buildPageTSX(data, date) {
  const { title, slug, metaTitle, metaDescription, keywords, category, intro, sections, conclusion, ctaHeading, ctaBody } = data

  // Build sections JSX
  const sectionsJSX = sections.map(section => {
    const bulletsJSX = section.bullets && section.bullets.length > 0
      ? `
              <ul className="space-y-2 my-4">
                ${section.bullets.map(b => `<li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  ${escapeJSX(b)}
                </li>`).join('\n                ')}
              </ul>`
      : ''

    const calloutJSX = section.callout
      ? `
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">${escapeJSX(section.callout)}</p>
              </div>`
      : ''

    const p2JSX = section.paragraph2
      ? `
              <p className="text-gray-700 leading-relaxed mt-3">${escapeJSX(section.paragraph2)}</p>`
      : ''

    return `
              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">${escapeJSX(section.heading)}</h2>
              <p className="text-gray-700 leading-relaxed">${escapeJSX(section.paragraph1)}</p>${p2JSX}${bulletsJSX}${calloutJSX}`
  }).join('\n')

  return `import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '${escapeJSX(metaTitle)}',
  description: '${escapeJSX(metaDescription)}',
  keywords: '${escapeJSX(keywords)}',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/${slug}' },
  openGraph: {
    title: '${escapeJSX(title)}',
    description: '${escapeJSX(metaDescription)}',
    url: 'https://adaptbusinesssolutions.com/blog/${slug}',
    type: 'article',
    publishedTime: '${date}',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '${escapeJSX(title)}',
  description: '${escapeJSX(metaDescription)}',
  datePublished: '${date}',
  dateModified: '${date}',
  author: {
    '@type': 'Organization',
    name: 'Adapt Business Solutions',
    url: 'https://adaptbusinesssolutions.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Adapt Business Solutions',
    url: 'https://adaptbusinesssolutions.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adaptbusinesssolutions.com/blog/${slug}',
  },
}

export default function BlogPostPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16 min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-pattern text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold-hover text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">${escapeJSX(category)}</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              ${escapeJSX(title)}
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published ${date} &middot; ${data.readTime} &middot; By Adapt Business Solutions CPA</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Professional Disclaimer:</strong> This article is for educational purposes only and does not constitute professional accounting, tax, or legal advice. Tax laws change frequently — verify current rules with a qualified CPA. Consult Adapt Business Solutions or another licensed CPA for advice specific to your situation.
            </p>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                ${escapeJSX(intro)}
              </p>
${sectionsJSX}

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ${escapeJSX(conclusion)}
              </p>

              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">${escapeJSX(ctaHeading)}</h3>
                <p className="text-navy-100 text-sm mb-6">
                  ${escapeJSX(ctaBody)}
                </p>
                <Link href="/pricing" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
`
}

// ─── Sitemap updater ──────────────────────────────────────────────────────────

function updateSitemap(slug, date) {
  const sitemapPath = path.join(ROOT, 'public', 'sitemap.xml')
  let xml = fs.readFileSync(sitemapPath, 'utf-8')

  // Don't add duplicate entries
  if (xml.includes(`/blog/${slug}`)) {
    console.log(`  ✓ sitemap.xml already contains /blog/${slug}`)
    return
  }

  const newEntry = `
  <url>
    <loc>https://adaptbusinesssolutions.com/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`

  xml = xml.replace('</urlset>', `${newEntry}\n</urlset>`)
  fs.writeFileSync(sitemapPath, xml)
  console.log(`  ✓ sitemap.xml updated`)
}

// ─── Auto-blog-posts.json updater ────────────────────────────────────────────

function updatePostsRegistry(data, date) {
  const registryPath = path.join(ROOT, 'src', 'data', 'auto-blog-posts.json')
  const existing = JSON.parse(fs.readFileSync(registryPath, 'utf-8'))

  // Don't add duplicates
  if (existing.some(p => p.id === data.slug)) {
    console.log(`  ✓ auto-blog-posts.json already has "${data.slug}"`)
    return
  }

  existing.push({
    id: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    readTime: data.readTime,
    date,
  })

  fs.writeFileSync(registryPath, JSON.stringify(existing, null, 2))
  console.log(`  ✓ auto-blog-posts.json updated (${existing.length} total posts)`)
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  // Get existing slugs to avoid duplicates
  const registryPath = path.join(ROOT, 'src', 'data', 'auto-blog-posts.json')
  const existing = JSON.parse(fs.readFileSync(registryPath, 'utf-8'))
  const existingSlugs = existing.map(p => p.id)

  // Pick today's post from the pre-written library
  const data = getPostForToday(existingSlugs)
  const date = todayISO()

  console.log(`Publishing blog post: "${data.title}"`)

  // Write page file
  const pageDir = path.join(ROOT, 'src', 'app', 'blog', data.slug)
  fs.mkdirSync(pageDir, { recursive: true })
  const pagePath = path.join(pageDir, 'page.tsx')
  fs.writeFileSync(pagePath, buildPageTSX(data, date))
  console.log(`  ✓ Created: src/app/blog/${data.slug}/page.tsx`)

  // Update registry
  updatePostsRegistry(data, date)

  // Update sitemap
  updateSitemap(data.slug, date)

  console.log(`\n✅ Blog post published: "${data.title}"`)
  console.log(`   URL: /blog/${data.slug}`)
  console.log(`   Category: ${data.category}`)
}

main()
