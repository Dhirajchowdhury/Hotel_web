// 'use client'

// import AppRouter from '@/components/app-router'

// export default function Page() {
//   return <AppRouter />
// }
"use client";

import { useEffect, useState } from "react";

import WelcomeMessage from "@/components/welcome-message";
import SearchSection from "@/components/search-section";
import FeaturedHotels from "@/components/featured-hotels";
import Highlights from "@/components/highlights";
import Reviews from "@/components/reviews";
import Articles from "@/components/articles"; 
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // runs only on client
    const hasSeen = typeof window !== "undefined" && localStorage.getItem("seen_welcome");

    if (!hasSeen) {
      setShowWelcome(true);
      localStorage.setItem("seen_welcome", "true");
    }
  }, []);

  return (
    <div className="pt-40">
      {/* FIRST TIME POPUP */}
      {showWelcome && <WelcomeMessage onClose={() => setShowWelcome(false)} />}

      {/* ---------------- BIG WELCOME HEADING ---------------- */}
      <div className="text-center px-6 mb-16">
        <h1 className="text-6xl font-extrabold text-accent tracking-wide drop-shadow-sm">
          WELCOME
        </h1>

        <p className="mt-3 text-2xl italic text-muted-foreground font-light tracking-wide">
          to your beloved site for hotel booking
        </p>
      </div>

      {/* Search Section */}
      <SearchSection />

      {/* Featured Hotels */}
      <div className="px-6">
        <FeaturedHotels />
      </div>

      {/* Highlights */}
      <div className="px-6">
        <Highlights />
      </div>

      {/* Reviews Section */}
      <div className="mt-12 px-6">
        <Reviews />
      </div>

      {/* Articles */}
      <div className="mt-12 px-6">
        <Articles />
      </div>

      {/* Contact Section */}
      <div className="mt-20 px-6 pb-20">
        <Contact />
      </div>
    </div>
  );
}
