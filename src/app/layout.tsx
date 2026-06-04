import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adaptbusinesssolutions.com'),
  title: 'Adapt Accounting Services, CPA for ABA Practitioners & Ontario Businesses',
  description: 'CPA services for ABA practitioners, small business owners, and Ontario professionals. Incorporate for $299 + gov fees. Bookkeeping, T1/T2 tax, CPBAO compliance, OAP payroll. Virtual, Canada-wide.',
  keywords: 'CPA for ABA practitioners, RBA incorporation Canada, behavior analyst CPA, CPBAO compliance, ABA tax strategy, CPA Orangeville, accountant Brampton, bookkeeping Mississauga, professional corporation Ontario, incorporate Ontario $299',
  authors: [{ name: 'Adapt Accounting Services' }],
  creator: 'Adapt Accounting Services',
  publisher: 'Adapt Accounting Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://adaptbusinesssolutions.com',
    title: 'Adapt Accounting Services, CPA for ABA Practitioners & Ontario Businesses',
    description: 'CPA for ABA practitioners, small business owners, and Ontario professionals. Incorporate for $299. Bookkeeping, tax, CPBAO compliance, virtual Canada-wide.',
    siteName: 'Adapt Accounting Services',
    images: [
      {
        url: 'https://adaptbusinesssolutions.com/images/logo.avif',
        width: 1200,
        height: 630,
        alt: 'Adapt Accounting Services - Professional CPA Services Ontario',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adapt Accounting Services - CPA Services Ontario',
    description: 'Expert virtual CPA services for Ontario businesses. Competitive pricing, professional expertise.',
    images: ['https://adaptbusinesssolutions.com/images/logo.avif'],
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com',
  },
  verification: {
    google: 'e290c92527c070d9',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://adaptbusinesssolutions.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d1b2a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.country" content="Canada" />
        <meta name="dc.language" content="en-CA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Adapt Accounting Services",
              "description": "CPA services specializing in ABA practitioners, behavior analysts, and Ontario small businesses. Virtual bookkeeping, incorporation, tax preparation, CPBAO compliance, and OAP payroll. Serving Canada-wide.",
              "url": "https://adaptbusinesssolutions.com",
              "telephone": "+1-437-772-9598",
              "email": "accountant@adaptbusinesssolutions.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA",
                "addressRegion": "ON",
                "addressLocality": "Orangeville",
                "postalCode": "L9W"
              },
              "areaServed": [
                { "@type": "City", "name": "Orangeville" },
                { "@type": "City", "name": "Brampton" },
                { "@type": "City", "name": "Mississauga" },
                { "@type": "Place", "name": "Niagara Region" },
                { "@type": "City", "name": "Erin" },
                { "@type": "City", "name": "Mono" },
                { "@type": "City", "name": "Grand Valley" },
                { "@type": "City", "name": "Shelburne" },
                { "@type": "City", "name": "Amaranth" }
              ],
              "priceRange": "$100-$450",
              "currenciesAccepted": "CAD",
              "availableLanguage": "English",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "17:00",
                "closes": "22:00",
                "timeZone": "America/Toronto"
              },
              "logo": {
                "@type": "ImageObject",
                "url": "https://adaptbusinesssolutions.com/images/logo.avif",
                "width": 300,
                "height": 112
              },
              "image": "https://adaptbusinesssolutions.com/images/logo.avif",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47"
              }
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
