'use client'

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { MapPin, Users, Calendar } from 'lucide-react';

export default function SearchSection() {
  const router = useRouter();
  const [location, setLocation] = useState('')
  const [guests, setGuests] = useState('1')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  const handleSearch = () => {
    if (!location || !checkIn || !checkOut) {
      alert("Please fill all fields");
      return;
    }

    router.push(
      `/booking?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass-effect-strong rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Stay</h2>
        <p className="text-muted-foreground mb-8">Search from thousands of luxury hotels worldwide</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="relative">
            <label className="block text-sm font-medium text-foreground mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-accent" size={20} />
              <input
                type="text"
                placeholder="Enter destination"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-accent" size={20} />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
              />
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-accent" size={20} />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 text-accent" size={20} />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>
          </div>
        </div>

        <button
  onClick={handleSearch}
  className="w-full mt-6 px-6 py-3 rounded-lg bg-accent text-accent-foreground 
            font-semibold hover:opacity-90 transition-opacity text-lg"
>
  Search Hotels
</button>

      </div>
    </section>
  )
}
