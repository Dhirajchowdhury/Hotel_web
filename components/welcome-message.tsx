'use client'

import { X } from 'lucide-react'

interface WelcomeMessageProps {
  onClose: () => void
}

export default function WelcomeMessage({ onClose }: WelcomeMessageProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="glass-effect-strong max-w-md w-full mx-4 p-8 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>

        <h1 className="text-3xl font-bold text-foreground mb-3">Welcome to Luxe</h1>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Discover premium luxury accommodations worldwide. Book your perfect stay today with exclusive deals and exceptional service.
        </p>

        <button
          onClick={onClose}
          className="w-full px-4 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Explore Now
        </button>
      </div>
    </div>
  )
}
