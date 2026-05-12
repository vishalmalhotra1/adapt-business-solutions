import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Cristian Gomez Fuentes',
    date: 'May 2026',
    rating: 5,
    text: 'Getting hit with a CRA audit notice for my bakery almost made me close my doors. Adapt stepped right in, took over all communication with the CRA, organized my old boxes of receipts, and prepared a rock-solid response. They proved all my HST claims were valid and got the auditor to drop the payroll dispute entirely. They literally saved me from a penalty that would have ruined me.',
  },
  {
    name: 'Marley Boultby',
    date: 'May 2026',
    rating: 5,
    text: 'I highly recommend Adapt Accounting to other local business owners. Managing a growing construction company meant my finances were getting sloppy very fast. They implemented a clear tracking system for our jobs and cleaned up our entire ledger in record time. Really good bookkeeping that lets me see exactly which projects are actually profitable for us.',
  },
  {
    name: 'Lorenzo Garcia',
    date: 'May 2026',
    rating: 5,
    text: 'This was the easiest tax season I\'ve ever had and it\'s all thanks to this team. No more printing spreadsheets and hunting for receipts in my car. They set me up on a simple app where I just upload pictures of my expenses on the go. Really good bookkeeping makes my year end ready to go without any stress.',
  },
  {
    name: 'Andrew Borj',
    date: 'April 2026',
    rating: 5,
    text: 'The team here is amazing! They took over our corporate taxes and made the whole T2 process feel like a breeze. Great people to work with.',
  },
  {
    name: 'Bobby Anand',
    date: 'April 2026',
    rating: 5,
    text: 'I recently started working with this CPA-certified firm for both my personal and business needs, and I\'ve been very impressed. Professional, responsive, and genuinely invested in helping their clients succeed.',
  },
  {
    name: 'Nishika Devgun',
    date: 'April 2024',
    rating: 5,
    text: 'They helped me file my T1 return, and made the process easy and fast. They had so much professionalism and helped guide me every step of the way.',
  },
  {
    name: 'Dipa',
    date: 'April 2024',
    rating: 5,
    text: 'Had an amazing experience with the team at Adapt Business Solutions! Best place to go for all your bookkeeping and accounting needs. Friendly and professional service!',
  },
  {
    name: 'Rahul Soi',
    date: 'April 2024',
    rating: 5,
    text: 'The team at Adapt Business Solutions gave me top-tier service! I came in needing some tax work to get done and they held my hand through the process and even got me a higher return! Awesome!',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Client Reviews</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <StarRating count={5} />
            <span className="font-bold text-navy text-lg">4.9</span>
            <span className="text-gray-500 text-sm">· 8 reviews on Google</span>
          </div>
          <a
            href="https://www.google.com/maps/search/Adapt+Accounting+Services+Orangeville+ON"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold hover:text-gold-hover font-semibold transition-colors"
          >
            See all reviews on Google →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-100 shadow-sm p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating count={review.rating} />
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-navy text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/search/Adapt+Accounting+Services+Orangeville+ON"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 transition-colors text-sm"
          >
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
