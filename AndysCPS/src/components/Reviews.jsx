import { useEffect, useRef, useState } from 'react'

function SequentialReviewCard({ children, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        },
        {
          threshold: 0.1, // Wait until 10% of this specific card is visible before sliding
          rootMargin: '0px 0px -50px 0px'
        }
      )

      if (cardRef.current) {
        observer.observe(cardRef.current)
      }
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [])

  const isOdd = index % 2 !== 0
  const startingDirectionClass = isOdd 
    ? 'opacity-0 -translate-x-32' // Odd cards start way out left
    : 'opacity-0 translate-x-32'  // Even cards start way out right

  return (
    <div
      ref={cardRef}
      className={`w-full max-w-2xl bg-slate-800/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700/60 shadow-xl transition-all duration-1000 ease-out transform ${
        isOdd ? 'self-start' : 'self-end text-right'
      } ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : startingDirectionClass
      }`}
    >
      {children}
    </div>
  )
}

export default function Reviews() {
  const reviewsData = [
    {
      id: 1,
      name: "Teresa M.",
      location: "Yuba City, CA",
      stars: 5,
      date: "June 2026",
      comment: "Alwasys a pleasure working with Andy's Complete Plumbing Service!!!"
    },
    {
      id: 2,
      name: "Sonia M",
      location: "Wheatland, CA",
      stars: 5,
      date: "May 2026",
      comment: "The bathroom ceiling was badly damaged from a really bad water leak. Thankfully, Andy from Andy's Complete Plumbing Service came out, found the problem, and fixed it quickly. His work was excellent, and he gave me so much peace of mind."
    },
    {
      id: 3,
      name: "Kimberly P.",
      location: "Wheatland, CA",
      stars: 5,
      date: "July 2026",
      comment: "Excellet communication, was able to pinpoint the issue and fit my water working again!"
    }
  ]

  return (
    <section id="Reviews" className="scroll-mt-28 py-24 border-t border-slate-800/60 overflow-x-hidden">
      
      {/* Header */}
      <div className="space-y-4 mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          What Our Customers Say
        </h2>
        <p className="text-base md:text-lg text-slate-300">
          Real reviews from real homeowners and businesses across Northern California.
        </p>
      </div>

      {/* Flex vertical layout stack forcing individual scroll boundaries */}
      <div className="flex flex-col space-y-16 w-full">
        {reviewsData.map((review, idx) => {
          const isOdd = (idx + 1) % 2 !== 0;
          return (
            <SequentialReviewCard key={review.id} index={idx + 1}>
              
              {/* Stars align based on direction */}
              <div className={`text-yellow-400 text-lg mb-4 select-none tracking-wider flex ${!isOdd && 'justify-end'}`}>
                {"★".repeat(review.stars)}
              </div>

              {/* Review Comment */}
              <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6 font-medium italic">
                "{review.comment}"
              </p>

              {/* Author Footer */}
              <div className="border-t border-slate-700/50 pt-4">
                <h4 className="font-bold text-white text-base tracking-tight">{review.name}</h4>
                <div className={`flex text-xs text-slate-400 mt-1 font-medium gap-4 ${!isOdd ? 'justify-end' : 'justify-between'}`}>
                  <span>{review.location}</span>
                  <span>{review.date}</span>
                </div>
              </div>

            </SequentialReviewCard>
          );
        })}
      </div>

    </section>
  )
}