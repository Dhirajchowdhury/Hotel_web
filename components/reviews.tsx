// 'use client'

// import { Star, Quote } from 'lucide-react'

// const reviews = [
//   {
//     id: 1,
//     author: 'Sarah Mitchell',
//     role: 'Travel Influencer',
//     rating: 5,
//     text: 'An absolutely phenomenal experience. The attention to detail and personalized service made our stay unforgettable. Highly recommend!',
//     image: '/happy-guest-portrait-professional.jpg',
//     hotel: 'Palais Elegance',
//   },
//   {
//     id: 2,
//     author: 'James Richardson',
//     role: 'Business Executive',
//     rating: 5,
//     text: 'Outstanding facilities and impeccable service. The hotel exceeded all expectations. Will definitely return for future visits.',
//     image: '/business-man-professional-portrait.jpg',
//     hotel: 'Venetian Dreams',
//   },
//   {
//     id: 3,
//     author: 'Emma Thompson',
//     role: 'Photographer',
//     rating: 5,
//     text: 'The views are breathtaking and every moment spent here was magical. Perfect for a romantic getaway or special celebration.',
//     image: '/placeholder.svg?height=100&width=100',
//     hotel: 'Azure Retreat',
//   },
// ]

// export default function Reviews() {
//   return (
//     <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//       <div className="mb-12">
//         <h2 className="text-4xl font-bold text-foreground mb-2">Guest Reviews</h2>
//         <p className="text-muted-foreground">What our satisfied guests are saying</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {reviews.map((review) => (
//           <div key={review.id} className="glass-effect rounded-xl p-8 hover:glass-effect-strong transition-all relative">
//             <Quote className="absolute top-4 right-4 text-accent/20" size={32} />
            
//             {/* Rating */}
//             <div className="flex gap-1 mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   size={16}
//                   className="fill-accent text-accent"
//                 />
//               ))}
//             </div>

//             {/* Review Text */}
//             <p className="text-foreground mb-6 leading-relaxed italic">"{review.text}"</p>

//             {/* Author */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={review.image || "/placeholder.svg"}
//                 alt={review.author}
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-semibold text-foreground">{review.author}</p>
//                 <p className="text-xs text-muted-foreground">{review.role}</p>
//                 <p className="text-xs text-accent">{review.hotel}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const baseReviews = [
  {
    id: 1,
    author: 'Sarah Mitchell',
    role: 'Travel Influencer',
    rating: 5,
    text: 'An absolutely phenomenal experience. The attention to detail and personalized service made our stay unforgettable.',
    image: '/happy-guest-portrait-professional.jpg',
    hotel: 'Palais Elegance',
  },
  {
    id: 2,
    author: 'James Richardson',
    role: 'Business Executive',
    rating: 5,
    text: 'Outstanding facilities and impeccable service. Will definitely return for future visits.',
    image: '/business-man-professional-portrait.jpg',
    hotel: 'Venetian Dreams',
  },
  {
    id: 3,
    author: 'Emma Thompson',
    role: 'Photographer',
    rating: 5,
    text: 'The views are breathtaking and every moment spent here was magical.',
    image: '/placeholder.svg',
    hotel: 'Azure Retreat',
  },
]

// duplicate for infinite loop
const reviews = [...baseReviews, ...baseReviews]

export default function Reviews() {
  const rowRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const [isJumping, setIsJumping] = useState(false)

  useEffect(() => {
    const el = rowRef.current
    if (!el) return

    let mounted = true
    let resizeObserver: ResizeObserver | null = null
    let st: ScrollTrigger | null = null

    // ---- WAIT FOR IMAGES ----
    const waitForImages = () =>
      new Promise<void>((resolve) => {
        const imgs = Array.from(
          el.querySelectorAll<HTMLImageElement>('img')
        )

        if (imgs.length === 0) return resolve()

        let loaded = 0

        const onDone = () => {
          loaded++
          if (loaded >= imgs.length) resolve()
        }

        imgs.forEach((img) => {
          if (img.complete) onDone()
          else {
            img.addEventListener('load', onDone)
            img.addEventListener('error', onDone)
          }
        })

        setTimeout(resolve, 1500) // fallback
      })

    const buildTween = () => {
      if (!mounted || !rowRef.current) return

      const el = rowRef.current
      const totalWidth = el.scrollWidth
      if (totalWidth < 1) return

      const loopDistance = totalWidth / 2

      tweenRef.current?.kill()

      // infinite loop tween
      tweenRef.current = gsap.to(el, {
        x: -loopDistance,
        duration: 10, // ← auto-scroll speed (lower = faster)
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: (val) => {
            const x = parseFloat(val)
            const wrapped = -((Math.abs(x) % loopDistance))
            return `${wrapped}px`
          },
        },
      })

      // Scroll-based speed boost
      st?.kill()
      st = ScrollTrigger.create({
        trigger: '#reviews-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          if (!tweenRef.current || isJumping) return
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 700, 3)
          tweenRef.current.timeScale(boost)
        },
      })
    }

    waitForImages().then(() => {
      buildTween()

      if ('ResizeObserver' in window) {
        resizeObserver = new ResizeObserver(() => {
          tweenRef.current?.kill()
          buildTween()
        })
        resizeObserver.observe(el)
      }
    })

    return () => {
      mounted = false
      tweenRef.current?.kill()
      st?.kill()
      resizeObserver?.disconnect()
    }
  }, [isJumping])

  // ---- JUMP TO NEXT REVIEW ----
  const handleNext = () => {
    if (!rowRef.current || !tweenRef.current) return

    setIsJumping(true)

    const cardWidth = 388 // width + gap
    const current = gsap.getProperty(rowRef.current, 'x') as number
    const target = current - cardWidth

    gsap.to(rowRef.current, {
      x: target,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        setIsJumping(false)
      },
    })
  }

  return (
    <section
      id="reviews-section"
      className="w-full py-28 overflow-hidden relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-2">
          Guest Reviews
        </h2>
        <p className="text-muted-foreground">
          What our guests are saying
        </p>
      </div>

      {/* Jump Button (top-right of review row) */}
      <button
        onClick={handleNext}
        className="absolute right-8 top-48 z-20 p-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:opacity-90 transition"
      >
        <ChevronRight size={22} />
      </button>

      <div className="relative w-full overflow-hidden pt-4">
        <div
          ref={rowRef}
          className="flex gap-8"
          style={{ width: 'max-content' }}
        >
          {reviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="glass-effect rounded-xl p-8 w-[380px] min-w-[380px] hover:glass-effect-strong transition-all relative"
            >
              <Quote
                className="absolute top-4 right-4 text-accent/20"
                size={32}
              />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {review.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.role}
                  </p>
                  <p className="text-xs text-accent">
                    {review.hotel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
