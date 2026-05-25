import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HST on ABA Therapy Services Ontario 2025: CRA Rules | Adapt Business Solutions CPA',
  description: 'Is ABA therapy HST-exempt in Ontario? Under CRA GI-113, most ABA and IBI therapy for autism qualifies for HST exemption. Learn the three pathways, what remains taxable, and how OAP funding fits in.',
  keywords: 'HST ABA therapy Ontario exempt, CRA GI-113 ABA autism training HST, OAP funding HST exempt Ontario, behaviour analyst HST registration Ontario',
  alternates: { canonical: 'https://adaptbusinesssolutions.com/blog/hst-aba-therapy-services-ontario' },
  openGraph: {
    title: 'HST and ABA Therapy in Ontario: The CRA&apos;s Actual Rules for Behaviour Analysts',
    description: 'Is ABA therapy HST-exempt in Ontario? Under CRA GI-113, most ABA and IBI therapy for autism qualifies for HST exemption. Learn the three pathways, what remains taxable, and how OAP funding fits in.',
    url: 'https://adaptbusinesssolutions.com/blog/hst-aba-therapy-services-ontario',
    type: 'article',
    publishedTime: '2026-05-07',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'HST and ABA Therapy in Ontario: The CRA&apos;s Actual Rules for Behaviour Analysts',
  description: 'Is ABA therapy HST-exempt in Ontario? Under CRA GI-113, most ABA and IBI therapy for autism qualifies for HST exemption. Learn the three pathways, what remains taxable, and how OAP funding fits in.',
  datePublished: '2026-05-07',
  dateModified: '2026-05-07',
  author: { '@type': 'Organization', name: 'Adapt Business Solutions', url: 'https://adaptbusinesssolutions.com' },
  publisher: { '@type': 'Organization', name: 'Adapt Business Solutions', url: 'https://adaptbusinesssolutions.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://adaptbusinesssolutions.com/blog/hst-aba-therapy-services-ontario' },
}

export default function BlogPostPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-16 min-h-screen bg-white">
        <section className="hero-pattern text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold-hover text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mb-4">ABA Practices</span>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              HST and ABA Therapy in Ontario: The CRA&apos;s Actual Rules for Behaviour Analysts
            </h1>
            <p className="text-navy-100 text-sm mt-4">Published 2026-05-07 &middot; 8 min read &middot; By Adapt Business Solutions CPA</p>
          </div>
        </section>
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-amber-800">
              <strong>Professional Disclaimer:</strong> This article is for educational purposes only and does not constitute professional accounting, tax, or legal advice. Tax laws change frequently, verify current rules with a qualified CPA. Consult Adapt Business Solutions or another licensed CPA for advice specific to your situation.
            </p>
          </div>
        </div>
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                HST for ABA therapy is one of the most misunderstood tax issues for RBAs. Many practitioners either charge 13% HST when they do not have to, passing an unnecessary cost to families, or fail to analyze their position at all and run the risk of CRA liability. The good news: the CRA has issued specific guidance on ABA and autism therapy in GI-113, and most direct ABA therapy for autism qualifies for HST exemption. Here is what that actually means for your practice.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The CRA&apos;s Specific Exemption: GI-113 and Autism Training</h2>
              <p className="text-gray-700 leading-relaxed">The CRA published GST/HST Info Sheet GI-113 specifically addressing ABA and Intensive Behavioural Intervention (IBI) therapy for autism. Under Section 14 of Part II of Schedule V of the Excise Tax Act, supplies of training services specially designed to assist individuals with autism are exempt from HST.</p>
              <p className="text-gray-700 leading-relaxed mt-3">Critically, the exemption does not require the provider to be a physician, psychologist, or any specific regulated health professional. RBAs and ABA practitioners can qualify.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Legal basis: Section 14, Part II, Schedule V of the Excise Tax Act
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  What qualifies: training specially designed to assist individuals with autism in coping with or alleviating the effects of autism
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Provider requirement: none, does not need to be a regulated health professional
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Scope: covers the entire package of services, therapy, assessment, program development, and supervision are treated as one supply
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Key rule: The training must not be similar to training ordinarily given to persons who do not have autism. Standard educational or recreational programming does not qualify, ABA/IBI designed specifically for autism does.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">The Three Pathways to HST Exemption</h2>
              <p className="text-gray-700 leading-relaxed">To claim the exemption, one of three conditions must be satisfied. Most ABA practices will qualify through at least one of these pathways, and OAP-funded practices often qualify automatically through the third.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Pathway 1, Professional certification: A practitioner, medical practitioner, social worker, or registered nurse certifies in writing that the ABA training is appropriate for the individual. RBAs can certify as practitioners.
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Pathway 2, Prescribed person certification: A prescribed person or class member certifies appropriateness under prescribed conditions.
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Pathway 3, Government funding evidence: The provider receives satisfactory evidence that payment comes from a government or organization administering a disability assistance program. OAP funding qualifies here.
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">OAP-funded practices: If your revenue comes from OAP funding, Pathway 3 applies, the government funding itself is satisfactory evidence of the exemption. This means OAP-funded ABA therapy is HST-exempt without needing any additional written certification.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Is Included in the Exempt Supply</h2>
              <p className="text-gray-700 leading-relaxed">A key ruling from the CRA is that the entire package of ABA services, not just direct therapy hours, is treated as a single supply for HST purposes. This means ancillary elements are also exempt when the main service qualifies.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Direct ABA therapy sessions: exempt (core service)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Assessments and program development: exempt (part of the single supply)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Clinical supervision of the therapy program: exempt (part of the single supply)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Additional fees for ancillary services within the program: exempt as part of the service consideration
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Practical implication: You do not need to split your invoice into &quot;exempt therapy&quot; and &quot;taxable supervision.&quot; The CRA treats it all as one supply, if the conditions are met for the therapy, the whole invoice is exempt.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What Remains Taxable at 13% HST</h2>
              <p className="text-gray-700 leading-relaxed">Not all services provided by an ABA practitioner are exempt. The exemption is specific to training for individuals with autism (or their personal caregivers). Other ABA-adjacent services fall outside the exemption.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Professional consultation billed to another ABA provider or school board: taxable
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Staff training and Supervisee supervision billed to an employer (not a client): taxable
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  ABA services for conditions other than autism: taxable (GI-113 is autism-specific)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Corporate training or workplace behavior consulting: taxable
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Training provided to professional caregivers (as opposed to personal caregivers): taxable
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">Mixed practice: If your practice provides both exempt ABA services (for autism clients) and taxable services (staff training, consultation), you have a mixed-supply situation. You must apportion input tax credits between exempt and taxable activities. A CPA should set up this tracking from the start.</p>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">What This Means for HST Registration and Invoicing</h2>
              <p className="text-gray-700 leading-relaxed">If all or most of your revenue is from exempt ABA therapy for autism, you may not need to register for HST at all, even if revenues exceed $30,000. Exempt suppliers do not charge HST, but they also cannot claim input tax credits on their business expenses.</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Primarily exempt revenue: likely no HST registration required; no HST charged to clients
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  No ITCs available on expenses related to exempt supplies (equipment, software, rent proportionate to exempt services)
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Mixed exempt and taxable revenue: register for HST, charge on taxable services only, apportion ITCs
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Invoices for exempt services: do not include HST, show $0 HST or note &quot;HST exempt under Schedule V&quot;
                </li>
              </ul>
              <div className="bg-gold-50 border-l-4 border-gold p-4 my-4">
                <p className="text-sm text-gray-700">We handle HST position analysis for ABA practices across a range of structures, OAP-only, private pay only, and mixed. We determine whether registration is required, set up your invoicing correctly, and ensure your position is defensible if CRA ever reviews it.</p>
              </div>
              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The CRA has specifically addressed ABA and autism therapy in GI-113, and the answer is more favourable than most practitioners realize. Direct ABA therapy for autism is exempt from HST under three clear pathways, OAP funding automatically satisfies the government evidence pathway, and the entire service package (therapy, assessments, supervision) is treated as one exempt supply. Understanding this correctly saves your clients money and keeps your practice compliant.
              </p>
              <div className="bg-navy p-8 mt-10">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Get Your ABA Practice HST Position Right</h3>
                <p className="text-navy-100 text-sm mb-6">
                  Adapt Business Solutions analyzes HST for RBAs in Ontario, OAP-funded, private pay, and mixed. We give you a clear, defensible position and set up your invoicing correctly. Book a free consultation.
                </p>
                <a href="https://calendly.com/accountant-brhd/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 transition-colors group">
                  Book Free Consultation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}
