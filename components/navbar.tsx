// 'use client'

// import { useState } from 'react'
// import { Menu, Home, MapPin, Star, Users, Mail, LogIn, Sun, Moon, Plus, BookOpen, User } from 'lucide-react'

// interface NavbarProps {
//   currentPage?: string
//   onNavigate?: (page: string) => void
//   isDark?: boolean
//   onToggleTheme?: () => void
// }

// export default function Navbar({ currentPage = 'home', onNavigate, isDark = false, onToggleTheme }: NavbarProps) {
//   const [isDarkLocal, setIsDarkLocal] = useState(isDark)

//   const toggleTheme = () => {
//     const newDark = !isDarkLocal
//     setIsDarkLocal(newDark)
//     localStorage.setItem('theme', newDark ? 'dark' : 'light')
//     if (newDark) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     onToggleTheme?.()
//   }

//   const handleNavigate = (page: string) => {
//     onNavigate?.(page)
//   }

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-40 glass-effect">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <button
//             onClick={() => handleNavigate('home')}
//             className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
//           >
//             <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
//               <span className="text-accent-foreground font-bold text-lg">L</span>
//             </div>
//             <span className="text-xl font-semibold text-foreground hidden sm:inline">Luxe</span>
//           </button>

//           <div className="hidden md:flex items-center gap-8">
//             <button
//               onClick={() => handleNavigate('home')}
//               className={`flex items-center gap-2 transition-colors ${
//                 currentPage === 'home' ? 'text-accent' : 'text-foreground hover:text-accent'
//               }`}
//             >
//               <Home size={18} />
//               <span className="text-sm">Home</span>
//             </button>
//             <button
//               onClick={() => handleNavigate('booking')}
//               className={`flex items-center gap-2 transition-colors ${
//                 currentPage === 'booking' ? 'text-accent' : 'text-foreground hover:text-accent'
//               }`}
//             >
//               <BookOpen size={18} />
//               <span className="text-sm">Booking</span>
//             </button>
//             <button
//               onClick={() => handleNavigate('catalogue')}
//               className={`flex items-center gap-2 transition-colors ${
//                 currentPage === 'catalogue' ? 'text-accent' : 'text-foreground hover:text-accent'
//               }`}
//             >
//               <MapPin size={18} />
//               <span className="text-sm">Catalogue</span>
//             </button>
//             <button
//               onClick={() => handleNavigate('contact')}
//               className={`flex items-center gap-2 transition-colors ${
//                 currentPage === 'contact' ? 'text-accent' : 'text-foreground hover:text-accent'
//               }`}
//             >
//               <Mail size={18} />
//               <span className="text-sm">Contact</span>
//             </button>
//             <button
//               onClick={() => handleNavigate('dashboard')}
//               className={`flex items-center gap-2 transition-colors ${
//                 currentPage === 'dashboard' ? 'text-accent' : 'text-foreground hover:text-accent'
//               }`}
//             >
//               <User size={18} />
//               <span className="text-sm">Dashboard</span>
//             </button>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
//               aria-label="Toggle theme"
//             >
//               {isDarkLocal ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-medium">
//               <LogIn size={18} />
//               <span className="hidden sm:inline">Sign In</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }


'use client'

import { useState } from 'react'
import {
  Home,
  MapPin,
  LogIn,
  BookOpen,
  User,
  UserPlus
} from 'lucide-react'

interface NavbarProps {
  currentPage?: string
  onNavigate?: (page: string) => void
}

export default function Navbar({
  currentPage = 'home',
  onNavigate
}: NavbarProps) {

  const handleNavigate = (page: string) => {
    onNavigate?.(page)
  }

  return (
    <>
      {/* ---------------- SIGN IN + REGISTER BUTTONS ---------------- */}
      <div className="fixed right-6 top-[38px] z-50 flex items-center gap-3">
        <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-medium shadow-lg">
          <UserPlus size={18} />
          <span className="hidden sm:inline">Register</span>
        </button>

        <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-medium shadow-lg">
          <LogIn size={18} />
          <span className="hidden sm:inline">Sign In</span>
        </button>
      </div>

      {/* ---------------- CENTER NAVBAR ---------------- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
        <div className="
          glass-effect 
          rounded-2xl 
          shadow-lg 
          px-12               /* ⭐ Wider spacing */
          py-4 
          flex 
          items-center 
          justify-between     /* ⭐ Logo pushes to left edge internally */
          gap-16              /* ⭐ Increased spacing between groups */
          min-w-[750px]       /* ⭐ Horizontal width increased */
        ">

          {/* ---------------- LEFT LOGO (moved to edge) ---------------- */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-semibold text-foreground hidden sm:inline">
              Luxe
            </span>
          </button>

          {/* ---------------- CENTER NAVIGATION ---------------- */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => handleNavigate('home')}
              className={`flex items-center gap-2 transition-colors ${
                currentPage === 'home'
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              <Home size={18} />
              <span className="text-sm">Home</span>
            </button>

            {/* <button
              onClick={() => handleNavigate('booking')}
              className={`flex items-center gap-2 transition-colors ${
                currentPage === 'booking'
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              <BookOpen size={18} />
              <span className="text-sm">Booking</span>
            </button> */}

            <button
              onClick={() => handleNavigate('catalogue')}
              className={`flex items-center gap-2 transition-colors ${
                currentPage === 'catalogue'
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              <MapPin size={18} />
              <span className="text-sm">Catalogue</span>
            </button>

            {/* CONTACT REMOVED SUCCESSFULLY */}

            <button
              onClick={() => handleNavigate('dashboard')}
              className={`flex items-center gap-2 transition-colors ${
                currentPage === 'dashboard'
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              <User size={18} />
              <span className="text-sm">Dashboard</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
