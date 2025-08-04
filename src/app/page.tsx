import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
