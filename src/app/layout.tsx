import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adapt Business Solutions - CPA Orangeville | Accounting Services Brampton, Mississauga, Niagara',
  description: 'Professional CPA services in Orangeville, Brampton, Mississauga, and Niagara Region. Expert virtual bookkeeping, tax preparation, financial analysis. Serving GTA and surrounding areas. 20-30% more competitive pricing.',
  keywords: 'CPA Orangeville, accountant Brampton, bookkeeping Mississauga, tax preparation Niagara, CPA services GTA, virtual accounting Ontario, small business accountant Orangeville, corporate tax Brampton, financial consulting Mississauga, payroll services Niagara Region, Canadian accountant Ontario',
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
    title: 'Adapt Business Solutions - Professional CPA Services Orangeville, Brampton, Mississauga, Niagara',
    description: 'Expert virtual CPA services for businesses in Orangeville, Brampton, Mississauga, and Niagara Region. Competitive pricing, professional expertise, Ontario-wide availability.',
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
    title: 'Adapt Business Solutions - CPA Services Orangeville, Brampton, Mississauga, Niagara',
    description: 'Expert virtual CPA services for Ontario businesses. Serving Orangeville, Brampton, Mississauga, and Niagara Region with competitive quotes.',
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
                {
                  "@type": "City",
                  "name": "Orangeville",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                  }
                },
                {
                  "@type": "City", 
                  "name": "Brampton",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                  }
                },
                {
                  "@type": "City",
                  "name": "Mississauga", 
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Niagara Region",
                  "containedInPlace": {
                    "@type": "State", 
                    "name": "Ontario"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Greater Toronto Area",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                  }
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "43.9201",
                  "longitude": "-80.0947"
                },
                "geoRadius": "100000"
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
