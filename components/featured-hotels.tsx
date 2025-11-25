// 'use client'

// import { Star, Heart } from 'lucide-react'

// const hotels = [
//   {
//     id: 1,
//     name: 'Palais Elegance',
//     location: 'Paris, France',
//     rating: 4.8,
//     reviews: 512,
//     price: '$450',
//     image: '/luxury-hotel-bedroom-paris.jpg',
//     amenities: ['Pool', 'Spa', 'Restaurant'],
//   },
//   {
//     id: 2,
//     name: 'Venetian Dreams',
//     location: 'Venice, Italy',
//     rating: 4.9,
//     reviews: 748,
//     price: '$520',
//     image: '/luxury-hotel-venice-canal-view.jpg',
//     amenities: ['Gondola Tours', 'Wellness', 'Fine Dining'],
//   },
//   {
//     id: 3,
//     name: 'Azure Retreat',
//     location: 'Santorini, Greece',
//     rating: 4.7,
//     reviews: 421,
//     price: '$380',
//     image: '/luxury-hotel-santorini-sunset.jpg',
//     amenities: ['Beach Access', 'Yoga', 'Sunset Views'],
//   },
//   {
//     id: 4,
//     name: 'Mountain Summit',
//     location: 'Interlaken, Switzerland',
//     rating: 4.8,
//     reviews: 334,
//     price: '$410',
//     image: '/luxury-hotel-mountain-swiss-alps.jpg',
//     amenities: ['Hiking', 'Cable Car', 'Alpine Dining'],
//   },
// ]

// export default function FeaturedHotels() {
//   return (
//     <section id="hotels" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//       <div className="mb-12">
//         <h2 className="text-4xl font-bold text-foreground mb-2">Featured Hotels</h2>
//         <p className="text-muted-foreground">Handpicked luxury accommodations for your next adventure</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {hotels.map((hotel) => (
//           <div key={hotel.id} className="group glass-effect rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
//             {/* Image */}
//             <div className="relative h-48 overflow-hidden bg-muted">
//               <img
//                 src={hotel.image || "/placeholder.svg"}
//                 alt={hotel.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//               />
//               <button className="absolute top-3 right-3 p-2 rounded-full glass-effect hover:glass-effect-strong transition-all">
//                 <Heart size={18} className="text-accent" />
//               </button>
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="font-bold text-lg text-foreground mb-1">{hotel.name}</h3>
//               <p className="text-sm text-muted-foreground mb-3">{hotel.location}</p>

//               {/* Rating */}
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="flex items-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={14}
//                       className={i < Math.floor(hotel.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-xs text-muted-foreground">({hotel.reviews})</span>
//               </div>

//               {/* Amenities */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {hotel.amenities.map((amenity) => (
//                   <span key={amenity} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
//                     {amenity}
//                   </span>
//                 ))}
//               </div>

//               {/* Price and Button */}
//               <div className="flex items-center justify-between">
//                 <span className="text-xl font-bold text-accent">{hotel.price}</span>
//                 <button className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hotels = [
  { id: 1, name: "Palais Elegance", image: "/business-man-professional-portrait.jpg" },
  { id: 2, name: "Venetian Dreams", image: "/luxury-hotel-venice-canal-view.jpg" },
  { id: 3, name: "Azure Retreat", image: "/luxury-hotel-santorini-sunset.jpg" },
  { id: 4, name: "Mountain Summit", image: "/luxury-hotel-mountain-swiss-alps.jpg" },
];

export default function FeaturedHotels() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // calculate sensible end based on section height so it scales
      //const endVal = () => `+=${Math.max(1200, (section.offsetHeight || 1200))}`;
      const endVal = () => "+=900";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: endVal(),
          scrub: 1,
          pin: true,
         // pinSpacing: false,
          // markers: true,
        },
      });

      // TEXT - slower scroll, guard reference
      if (textRef.current) {
        gsap.to(textRef.current, {
          y: -250,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.2,
          },
        });
      }

      // IMAGES - staggered movement and fade
      imagesRef.current.forEach((card, i) => {
        if (!card) return;

        tl.to(
          card,
          {
            x: 380,
            opacity: 0,
            scale: 0.94,
            duration: 1,
            ease: "power1.out",
          },
          i * 0.6
        );
      });

      // ensure ScrollTrigger stays correct after images/layout computed
      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-6 py-2 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* LEFT TEXT */}
        <div className="pr-6">
          <div ref={textRef} className="space-y-6">
            <h2 className="text-5xl font-extrabold text-accent">
              Experience Luxury Like Never Before
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience a world where luxury is not just a promise, but a lifestyle carefully crafted for those who seek the extraordinary. Our collection of featured hotels represents the pinnacle of elegance, comfort, and personalized service — handpicked from the most iconic destinations across the globe. Each hotel embodies its own unique character, blending architectural brilliance with breathtaking landscapes and a commitment to curated hospitality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Allow yourself to wander through marble-clad lobbies illuminated by grand chandeliers, where every footstep echoes refinement. Discover private suites designed with bespoke interiors, where soft ambient lighting, panoramic views, and meticulously detailed craftsmanship create a sanctuary meant only for you. Whether it's waking up to a crimson sunrise over Santorini’s cliffs, sipping handcrafted cocktails in a Venetian sky lounge, or enjoying the charming silence of a Swiss alpine morning — every moment in these luxury escapes is engineered to be unforgettable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Behind every detail lies thoughtful artistry — from velvety linens woven exclusively for your comfort, to world-class cuisines curated by award-winning chefs, blending global flavors with local authenticity. Indulge in serene infinity pools that open toward endless horizons, rejuvenate in holistic spas where age-old wellness rituals meet modern serenity, and unwind in rooftop lounges where the world seems to pause around you.
            </p>
            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              Each featured hotel is more than a stay — it's a chapter in your personal story. A chapter filled with rich experiences, warm moments, and the gentle touch of premium hospitality. As you scroll through this curated showcase, let every slide reveal a new destination, a new emotion, a new dream waiting to be lived. Welcome to the art of luxurious travel. 
            </p> */}
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative w-full h-[550px] flex items-center justify-end">
          <div className="relative w-[75%] h-[420px] flex items-center justify-center -translate-y-0">
            {hotels.map((hotel, idx) => (
              <div
                key={hotel.id}
                ref={(el: HTMLDivElement | null) => {
                  imagesRef.current[idx] = el;
                }}
                className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl glass-effect-strong"
                style={{
                  zIndex: hotels.length - idx,
                  transform: `translateY(${idx * 18}px)`,
                }}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



