export interface AutoBlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

// This file is updated automatically by scripts/generate-blog.mjs
// Do not edit the array manually — add entries via the GitHub Actions workflow
import postsData from './auto-blog-posts.json'

export const autoBlogPosts: AutoBlogPost[] = postsData as AutoBlogPost[]
