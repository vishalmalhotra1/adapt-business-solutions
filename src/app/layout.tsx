import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
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
  title: 'Adapt Business Solutions - CPA Services Ontario | Orangeville, Brampton, Mississauga',
  description: 'Expert virtual CPA services for Ontario small businesses. Tax planning, bookkeeping, financial analysis and more across the GTA and beyond. Serving Orangeville, Brampton, Mississauga, Niagara and surrounding communities.',
  keywords: 'CPA Orangeville, accountant Brampton, bookkeeping Mississauga, tax preparation Niagara, CPA services GTA, virtual accounting Ontario, small business accountant Ontario, corporate tax Ontario',
  authors: [{ name: 'Adapt Business Solutions' }],
  creator: 'Adapt Business Solutions',
  publisher: 'Adapt Business Solutions',
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
    title: 'Adapt Business Solutions - Professional CPA Services Ontario',
    description: 'Expert virtual CPA services for Ontario businesses. Serving Orangeville, Brampton, Mississauga, Niagara and beyond with competitive, professional accounting.',
    siteName: 'Adapt Business Solutions',
    images: [
      {
        url: 'https://adaptbusinesssolutions.com/images/logo.avif',
        width: 1200,
        height: 630,
        alt: 'Adapt Business Solutions - Professional CPA Services Ontario',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adapt Business Solutions - CPA Services Ontario',
    description: 'Expert virtual CPA services for Ontario businesses. Competitive pricing, professional expertise.',
    images: ['https://adaptbusinesssolutions.com/images/logo.avif'],
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com',
  },
  verification: {
    google: 'your-google-verification-code',
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
              "name": "Adapt Business Solutions",
              "description": "Professional CPA and accounting services in Orangeville, Brampton, Mississauga, and Niagara Region. Virtual bookkeeping, tax preparation, financial analysis, and business consulting.",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
