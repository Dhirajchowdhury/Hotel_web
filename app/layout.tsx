// 'use client'

// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import { useState, useEffect } from 'react'
// import './globals.css'
// import AppRouter from '@/components/app-router'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Luxe Hotels - Premium Accommodation & Booking',
//   description: 'Discover and book premium luxury hotels worldwide. Elegant stays, exceptional service.',
//   generator: 'v0.app',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   const [isDark, setIsDark] = useState(false)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const saved = localStorage.getItem('theme')
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//     const should = saved ? saved === 'dark' : prefersDark
//     setIsDark(should)
//     if (should) {
//       document.documentElement.classList.add('dark')
//     }
//   }, [])

//   if (!mounted) return null

//   return (
//     <html lang="en">
//       <body className={`font-sans antialiased`}>
//         <AppRouter />
//         <Analytics />
//       </body>
//     </html>
//   )
// }

import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/client-layout";

export const metadata: Metadata = {
  title: "Luxe Hotels - Premium Accommodation & Booking",
  description: "Discover and book premium luxury hotels worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        {/* ============================
            BACKGROUND LAYERS
           ============================ */}

        {/* FLOATING BLOB BACKGROUND */}
        <div className="background-blobs">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>
        </div>

        {/* GRADIENT GLOW OVERLAY */}
        <div className="soft-gradient"></div>

        {/* FILM GRAIN TEXTURE */}
        <div className="grain-overlay"></div>

        {/* ============================
            MAIN APP CONTENT
           ============================ */}
           {/* TINY FLOATING BUBBLES */}
<div className="bubbles-container">
  {Array.from({ length: 22 }).map((_, i) => (
    <div
      key={i}
      className="bubble"
      style={{
        width: `${8 + Math.random() * 14}px`,
        height: `${8 + Math.random() * 14}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        '--speed': `${6 + Math.random() * 6}s`
      } as React.CSSProperties}
    ></div>
  ))}
</div>

        <ClientLayout>
          {children}
        </ClientLayout>

      </body>
    </html>
  );
}

