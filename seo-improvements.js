// Add structured data for local business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Adapt Business Solutions",
  "description": "Professional CPA and accounting services across Ontario",
  "url": "https://adaptbusinesssolutions.com",
  "telephone": "+1-437-772-9598",
  "email": "info@adaptbusinesssolutions.com",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Orangeville",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    {
      "@type": "PostalAddress", 
      "addressLocality": "Brampton",
      "addressRegion": "Ontario", 
      "addressCountry": "CA"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Mississauga", 
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Niagara Region",
      "addressRegion": "Ontario", 
      "addressCountry": "CA"
    }
  ],
  "areaServed": [
    "Orangeville", "Brampton", "Mississauga", "Niagara Region",
    "Dufferin County", "Peel Region", "St. Catharines", "Niagara Falls"
  ],
  "serviceType": [
    "Tax Preparation",
    "Bookkeeping", 
    "Financial Analysis",
    "Business Consulting",
    "Payroll Services",
    "Corporate Services"
  ],
  "priceRange": "$100-$450",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://www.linkedin.com/company/adapt-business-solutions",
    "https://www.facebook.com/adaptbusinesssolutions"
  ]
}

// SEO Meta Tags to Add
const seoMetaTags = {
  homePage: {
    title: "CPA Services Ontario | Adapt Business Solutions | Bookkeeping & Tax",
    description: "Expert CPA services in Orangeville, Brampton, Mississauga & Niagara Region. Professional bookkeeping, tax preparation, financial analysis. Call (437) 772-9598",
    keywords: "CPA Ontario, accountant Orangeville, tax preparation Brampton, bookkeeping Mississauga, financial services Niagara Region"
  },
  
  // Blog post ideas with target keywords
  blogPostIdeas: [
    {
      title: "Small Business Tax Deductions Ontario 2025: Complete Guide",
      keyword: "small business tax deductions Ontario",
      searchVolume: "3,000/month",
      difficulty: "Medium"
    },
    {
      title: "How Much Does a Small Business Accountant Cost in Ontario?", 
      keyword: "small business accountant cost Ontario",
      searchVolume: "1,500/month",
      difficulty: "Low"
    },
    {
      title: "CRA Small Business Audit: What Triggers It & How to Prepare",
      keyword: "CRA small business audit",
      searchVolume: "2,000/month", 
      difficulty: "Medium"
    }
  ]
}
