import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Adapt Business Solutions - Professional CPA & Accounting Services Canada',
  description: 'Expert CPA services across Canada. Professional bookkeeping, tax preparation, financial analysis, and business consulting. 20-30% more competitive pricing. Get your free quote today!',
  keywords: 'CPA services Canada, virtual accounting, bookkeeping Toronto, tax preparation Canada, financial consulting, small business accountant, corporate tax services, payroll management',
  openGraph: {
    title: 'Adapt Business Solutions - Professional CPA & Accounting Services Canada',
    description: 'Expert CPA services across Canada. Professional bookkeeping, tax preparation, financial analysis, and business consulting. Get your free quote today!',
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
