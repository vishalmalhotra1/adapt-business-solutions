/**
 * Daily Blog Generator
 * Called by GitHub Actions daily cron job.
 * Uses Claude API to generate SEO-optimized CPA blog posts for Ontario businesses.
 *
 * Requires: ANTHROPIC_API_KEY environment variable
 * Usage: node scripts/generate-blog.mjs
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ─── Topic seeds (rotated by day-of-year to ensure variety) ──────────────────
const TOPIC_SEEDS = [
  'Ontario payroll source deductions: what small businesses must remit to CRA',
  'HST Quick Method election: pros, cons, and when to switch',
  'CRA My Business Account setup and features for Ontario businesses',
  'Principal residence exemption: rules Ontario homeowners need to know',
  'RRSP vs TFSA strategy for self-employed Canadians in Ontario',
  'Holding company in Ontario: tax advantages and setup costs',
  'SR&ED tax credits for Ontario small businesses and startups',
  'Ontario minimum wage and payroll compliance for small employers',
  'Business expense claims for home-based businesses in Ontario',
  'CRA installment payments: who must pay and how to calculate',
  'T4 preparation guide for Ontario small business owners',
  'Corporate year-end tax planning checklist for Ontario CCPCs',
  'GST/HST audit triggers and how to prepare your records',
  'Ontario apprenticeship training tax credit for small business',
  'Intercompany transactions and transfer pricing basics for SMEs',
  'Capital gains vs business income: the key distinctions in Canada',
  'Ontario digital business expenses and software deductions',
  'CRA prescribed interest rates and installment interest planning',
  'Shareholder loans: tax traps and rules Ontario business owners must know',
  'Ontario regional opportunities investment tax credit',
  'T2 corporate tax return: key schedules Ontario businesses must file',
  'Automobile benefit and standby charge calculations for employees',
  'Lifetime capital gains exemption: qualifying small business shares in Ontario',
  'Ontario Co-operative Education tax credit for employers',
  'Business-use-of-home expenses for Ontario consultants and contractors',
  'Deemed disposition on death: tax planning for Ontario business owners',
  'Non-capital losses and how Ontario businesses can carry them back or forward',
  'Ontario small business tax rates 2025: federal + provincial breakdown',
  'CRA charity donation receipts: rules for Ontario business donors',
  'Late filing penalties and interest in Canada: how to minimize them',
  'Ontario employer health tax (EHT) exemptions for small businesses',
  'Independent contractor vs employee: CRA tests and Ontario risks',
  'CEBA loan repayment and tax implications for Ontario businesses',
  'Passive income trap: how it affects the small business deduction in Ontario',
  'Electronic records and CRA audit readiness for Ontario businesses',
  'Income splitting strategies for Ontario family businesses post-TOSI rules',
  'Ontario Film and Television Tax Credit and creative industry accounting',
  'CRA voluntary disclosure program: fix past errors before an audit',
  'Rent expense deductions for Ontario businesses in commercial leases',
  'Ontario employer obligations for T4A slips and contractor payments',
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

function escapeJSX(str) {
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

function getTopicForToday() {
  const start = new Date(new Date().getFullYear(), 0, 0)
  const dayOfYear = Math.floor((Date.now() - start.getTime()) / 86400000)
  return TOPIC_SEEDS[dayOfYear % TOPIC_SEEDS.length]
}

// ─── Claude generation ────────────────────────────────────────────────────────

async function generatePost(client, topic, existingSlugs) {
  console.log(`Generating blog post on: "${topic}"`)

  const prompt = `You are a senior CPA (Chartered Professional Accountant) at a virtual accounting firm in Orangeville, Ontario, Canada. Write a comprehensive, SEO-optimized blog article for Ontario small business owners about:

TOPIC: ${topic}

Today's date: ${todayISO()}
Existing posts (do NOT duplicate these topics): ${existingSlugs.join(', ')}

Return ONLY a valid JSON object with this exact structure (no markdown, no code fences, just raw JSON):

{
  "title": "Full SEO title (50-60 chars ideal)",
  "slug": "url-slug-lowercase-hyphens",
  "metaTitle": "SEO meta title with | Adapt Business Solutions suffix",
  "metaDescription": "150-160 character SEO meta description targeting Ontario business owners",
  "keywords": "5-8 comma-separated keywords targeting Ontario/Canada searches",
  "category": "one of: Tax Planning | Bookkeeping | Corporate Services | Business Strategy | HST & GST | Payroll | CRA Compliance",
  "excerpt": "2-3 sentence blog index excerpt (engaging, informative)",
  "readTime": "X min read",
  "intro": "Strong opening paragraph (2-3 sentences) that hooks the reader and states what they will learn",
  "sections": [
    {
      "heading": "Section heading (H2)",
      "paragraph1": "First paragraph content",
      "paragraph2": "Optional second paragraph (empty string if not needed)",
      "bullets": ["bullet point 1", "bullet point 2", "bullet point 3"],
      "callout": "Optional highlighted tip or important note (empty string if not needed)"
    }
  ],
  "conclusion": "Closing paragraph summarizing key takeaways",
  "ctaHeading": "Call-to-action section heading",
  "ctaBody": "1-2 sentence CTA body text"
}

Requirements:
- Write 5-7 substantive sections with real Canadian tax/accounting details
- Include specific CRA rules, rates, or deadlines where relevant
- Every section should have 2-3 bullet points minimum
- Use at least 2 callouts (tips or important notices)
- Mention Ontario specifically where relevant
- Naturally reference Adapt Business Solutions services without being salesy
- Content must be 100% accurate for Canada/Ontario tax law as of 2025
- The disclaimer will be added automatically - do NOT include one in the content`

  const response = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 6000,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = response.content[0].text.trim()

  // Extract JSON - handle case where Claude wraps in code fences anyway
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('Claude did not return valid JSON')

  return JSON.parse(jsonMatch[0])
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

  const newEntry = `
  <url>
    <loc>https://adaptbusinesssolutions.com/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`

  // Insert before closing </urlset>
  xml = xml.replace('</urlset>', `${newEntry}\n</urlset>`)
  fs.writeFileSync(sitemapPath, xml)
  console.log(`  ✓ sitemap.xml updated`)
}

// ─── Auto-blog-posts.json updater ────────────────────────────────────────────

function updatePostsRegistry(data, date) {
  const registryPath = path.join(ROOT, 'src', 'data', 'auto-blog-posts.json')
  const existing = JSON.parse(fs.readFileSync(registryPath, 'utf-8'))

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

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ERROR: ANTHROPIC_API_KEY environment variable not set.')
    console.error('Add it as a GitHub Actions secret named ANTHROPIC_API_KEY.')
    process.exit(1)
  }

  const client = new Anthropic({ apiKey })

  // Get existing slugs to avoid duplicates
  const registryPath = path.join(ROOT, 'src', 'data', 'auto-blog-posts.json')
  const existing = JSON.parse(fs.readFileSync(registryPath, 'utf-8'))
  const existingSlugs = existing.map(p => p.id)

  // Pick topic
  const topic = getTopicForToday()
  const date = todayISO()

  try {
    // Generate content
    const data = await generatePost(client, topic, existingSlugs)

    // Validate slug uniqueness
    if (existingSlugs.includes(data.slug)) {
      data.slug = `${data.slug}-${date}`
    }

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

    console.log(`\n✅ Blog post generated: "${data.title}"`)
    console.log(`   URL: /blog/${data.slug}`)
    console.log(`   Category: ${data.category}`)
  } catch (err) {
    console.error('ERROR generating blog post:', err.message)
    process.exit(1)
  }
}

main()
