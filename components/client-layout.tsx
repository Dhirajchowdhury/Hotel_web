// "use client";

// import { useState, useEffect } from "react";
// import { Analytics } from "@vercel/analytics/next";
// import AppRouter from "@/components/app-router";

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const saved = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     const shouldUseDark = saved
//       ? saved === "dark"
//       : prefersDark;

//     if (shouldUseDark) {
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   if (!mounted) return null;

//   return (
//     <>
//       <AppRouter />
//       <Analytics />
//       {children}
//     </>
//   );
// }



"use client";

import Navbar from "@/components/navbar";
import SidePanel from "@/components/side-panel";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;

    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <SidePanel />
      {children}
    </>
  );
}
