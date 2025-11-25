'use client'

import { Wifi, Utensils, Dumbbell, Users, Key, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Lightning-fast connectivity throughout the property for seamless work and entertainment',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Award-winning restaurants with Michelin-starred chefs and international cuisine',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym facilities with personal training and wellness programs',
  },
  {
    icon: Users,
    title: '24/7 Concierge',
    description: 'Dedicated staff ready to assist with reservations, recommendations, and special requests',
  },
  {
    icon: Key,
    title: 'Suite Selection',
    description: 'Luxurious rooms ranging from deluxe accommodations to presidential suites',
  },
  {
    icon: Sparkles,
    title: 'Spa Services',
    description: 'Full-service spa with treatments from world-renowned therapists and holistic wellness',
  },
]

export default function Highlights() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-2">Why Choose Luxe Hotels</h2>
        <p className="text-muted-foreground">Experience unparalleled luxury and service excellence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon
          return (
            <div key={index} className="glass-effect rounded-xl p-6 hover:glass-effect-strong transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
