import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adapt Business Solutions - CPA | Virtual Accounting Services Canada',
  description: 'Professional CPA services across Canada. Expert bookkeeping, tax preparation, financial analysis, and business consulting. 20-30% more competitive than traditional firms. Get your instant quote today!',
  keywords: 'CPA Canada, virtual accounting, bookkeeping services, tax preparation, financial analysis, business consulting, Canadian accountant, online CPA, small business accounting, corporate tax, payroll services',
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
    title: 'Adapt Business Solutions - Professional CPA Services Across Canada',
    description: 'Expert virtual CPA services for Canadian businesses. Competitive pricing, professional expertise, Canada-wide availability. Book your free consultation today!',
    siteName: 'Adapt Business Solutions',
    images: [
      {
        url: 'https://adaptbusinesssolutions.com/images/logo.avif',
        width: 1200,
        height: 630,
        alt: 'Adapt Business Solutions - Professional CPA Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adapt Business Solutions - Professional CPA Services Canada',
    description: 'Expert virtual CPA services for Canadian businesses. Get competitive quotes for bookkeeping, tax prep, and financial consulting.',
    images: ['https://adaptbusinesssolutions.com/images/logo.avif'],
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com',
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this from Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="canonical" href="https://adaptbusinesssolutions.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.country" content="Canada" />
        <meta name="dc.language" content="en-CA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Adapt Business Solutions",
              "description": "Professional CPA and accounting services across Canada. Virtual bookkeeping, tax preparation, financial analysis, and business consulting.",
              "url": "https://adaptbusinesssolutions.com",
              "telephone": "+1-437-772-9598",
              "email": "accountant@adaptbusinesssolutions.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA",
                "addressRegion": "Virtual Practice - Canada Wide"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "Canada"
              },
              "priceRange": "$100-$450",
              "currenciesAccepted": "CAD",
              "paymentAccepted": ["Cash", "Credit Card", "Electronic Transfer"],
              "availableLanguage": "English",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Accounting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bookkeeping Services",
                      "description": "Professional bookkeeping and financial record management"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tax Preparation",
                      "description": "Personal and corporate tax preparation and planning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Financial Analysis",
                      "description": "Business financial analysis and consulting"
                    }
                  }
                ]
              },
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
      </body>
    </html>
  )
}
