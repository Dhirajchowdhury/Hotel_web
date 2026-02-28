
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
              Behind every detail lies thoughtful unbelievable mind — from velvety linens woven exclusively for your comfort, to world-class cuisines curated by award-winning chefs, blending global flavors with local authenticity. Indulge in serene infinity pools that open toward endless horizons, rejuvenate in holistic spas where age-old wellness rituals meet modern serenity, and unwind in rooftop lounges where the world seems to pause around you.
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



