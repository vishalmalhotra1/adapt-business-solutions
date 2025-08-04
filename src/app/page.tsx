import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Adapt Business Solutions - CPA Orangeville | Accounting Services Brampton, Mississauga, Niagara',
  description: 'Expert CPA services in Orangeville, Brampton, Mississauga, and Niagara Region. Professional bookkeeping, tax preparation, financial analysis, and business consulting. 20-30% more competitive pricing in Ontario.',
  keywords: 'CPA Orangeville, accountant Brampton, bookkeeping Mississauga, tax preparation Niagara, small business accountant GTA, corporate tax Ontario, payroll services Orangeville, financial consulting Brampton',
  openGraph: {
    title: 'Adapt Business Solutions - Professional CPA Services Orangeville, Brampton, Mississauga, Niagara',
    description: 'Expert CPA services in Orangeville and surrounding GTA regions. Professional bookkeeping, tax preparation, financial analysis. Get your free quote today!',
    url: 'https://adaptbusinesssolutions.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://adaptbusinesssolutions.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
