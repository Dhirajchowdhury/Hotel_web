// 'use client'

// import { useState } from 'react'
// import { MoreVertical, Home, MapPin, Star, Mail, Sun, Moon, X, Plus, BookOpen, User } from 'lucide-react'

// interface SidePanelProps {
//   currentPage?: string
//   onNavigate?: (page: string) => void
// }

// export default function SidePanel({ currentPage = 'home', onNavigate }: SidePanelProps) {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isDark, setIsDark] = useState(false)

//   const toggleTheme = () => {
//     const newDark = !isDark
//     setIsDark(newDark)
//     localStorage.setItem('theme', newDark ? 'dark' : 'light')
//     if (newDark) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }

//   const menuItems = [
//     { icon: Home, label: 'Home', page: 'home' },
//     { icon: BookOpen, label: 'Booking', page: 'booking' },
//     { icon: MapPin, label: 'Catalogue', page: 'catalogue' },
//     { icon: Plus, label: 'Add-Ons', page: 'add-ons' },
//     { icon: Mail, label: 'Contact', page: 'contact' },
//     { icon: Plus, label: 'List Property', page: 'list-property' },
//     { icon: User, label: 'Dashboard', page: 'dashboard' },
//   ]

//   const handleNavigate = (page: string) => {
//     onNavigate?.(page)
//     setIsOpen(false)
//   }

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass-effect hover:glass-effect-strong transition-all"
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <X size={24} /> : <MoreVertical size={24} />}
//       </button>

//       {/* Slide-out Panel */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-80 glass-effect-strong z-40 transform transition-transform duration-300 overflow-y-auto ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="p-8 pt-24">
//           <h2 className="text-2xl font-bold mb-8 text-foreground">Menu</h2>
          
//           {/* Menu Items */}
//           <nav className="space-y-4 mb-12">
//             {menuItems.map((item) => {
//               const Icon = item.icon
//               return (
//                 <button
//                   key={item.page}
//                   onClick={() => handleNavigate(item.page)}
//                   className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-colors group ${
//                     currentPage === item.page
//                       ? 'bg-accent/20 text-accent'
//                       : 'text-foreground hover:bg-accent/10 hover:text-accent'
//                   }`}
//                 >
//                   <Icon size={20} className="transition-colors" />
//                   <span className="font-medium text-left">{item.label}</span>
//                 </button>
//               )
//             })}
//           </nav>

//           {/* Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
//           >
//             {isDark ? <Sun size={20} /> : <Moon size={20} />}
//             <span className="text-foreground font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
//           </button>

//           {/* Footer Text */}
//           <p className="mt-12 text-sm text-muted-foreground">© 2025 Luxe Hotels. All rights reserved.</p>
//         </div>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   )
// }

'use client'

import { useState } from 'react'
import {
  MoreVertical,
  Home,
  MapPin,
  Mail,
  Sun,
  Moon,
  X,
  Plus,
  BookOpen,
  User
} from 'lucide-react'

interface SidePanelProps {
  currentPage?: string
  onNavigate?: (page: string) => void
}

export default function SidePanel({
  currentPage = 'home',
  onNavigate
}: SidePanelProps) {

  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')

    if (newDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  const menuItems = [
    { icon: Home, label: 'Home', page: 'home' },
    { icon: BookOpen, label: 'Booking', page: 'booking' },
    { icon: MapPin, label: 'Catalogue', page: 'catalogue' },
    { icon: Plus, label: 'Add-Ons', page: 'add-ons' },
    { icon: Mail, label: 'Contact', page: 'contact' },
    { icon: Plus, label: 'List Property', page: 'list-property' },
    { icon: User, label: 'Dashboard', page: 'dashboard' }
  ]

  const handleNavigate = (page: string) => {
    onNavigate?.(page)
    setIsOpen(false)
  }

  return (
    <>
      {/* TOP-LEFT MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed left-10 top-6 z-50
          p-3 rounded-xl      /* SQUARE WITH ROUNDED CORNER */
          bg-accent text-accent-foreground
          shadow-lg hover:opacity-90 transition-all
        "
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} className="text-accent-foreground" />
        ) : (
          <MoreVertical size={24} className="text-accent-foreground" />
        )}
      </button>

      {/* SIDE PANEL */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-80 glass-effect-strong z-40
          transform transition-transform duration-300
          overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-8 pt-32">   {/* FIXED OVERLAP → MORE TOP SPACE */}
          
          <h2 className="text-2xl font-bold mb-8 text-foreground">Menu</h2>

          <nav className="space-y-4 mb-12">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`
                    w-full flex items-center gap-4 px-4 py-3 rounded-lg
                    transition-colors group
                    ${
                      currentPage === item.page
                        ? 'bg-accent/20 text-accent'
                        : 'text-foreground hover:bg-accent/10 hover:text-accent'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* THEME SWITCH */}
          <button
            onClick={toggleTheme}
            className="
              w-full flex items-center justify-center gap-2
              px-4 py-3 rounded-lg
              bg-accent/10 hover:bg-accent/20 transition-colors
            "
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span className="font-medium text-foreground">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>

          <p className="mt-12 text-sm text-muted-foreground">
            © 2025 Luxe Hotels. All rights reserved.
          </p>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
