"use client";

import { useState, useEffect } from "react";
import { Hotel } from "@/data/hotels";
import { ArrowRight, MapPin, Star, BadgeIndianRupee } from "lucide-react";

export default function HotelList({
  hotels,
  onSelect,
  selectedHotelId,
}: {
  hotels: Hotel[];
  onSelect: (hotel: Hotel) => void;
  selectedHotelId: number | null;
}) {
  const [sortedHotels, setSortedHotels] = useState<Hotel[]>(hotels);
  const [sortType, setSortType] = useState("low");

  useEffect(() => {
    let arr = [...hotels];

    if (sortType === "low") arr.sort((a, b) => a.price - b.price);
    if (sortType === "high") arr.sort((a, b) => b.price - a.price);
    if (sortType === "rating") arr.sort((a, b) => b.rating - a.rating);
    if (sortType === "distance")
      arr.sort(
        (a, b) =>
          (a.distance.monument ?? 999) - (b.distance.monument ?? 999)
      );

    setSortedHotels(arr);
  }, [sortType, hotels]);

  return (
    <>
      {/* SORT BAR */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-semibold">Available Hotels</p>

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="bg-background border border-border px-3 py-2 rounded-lg"
        >
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="rating">Rating: High → Low</option>
          <option value="distance">Closest to Landmark</option>
        </select>
      </div>

      {/* HOTEL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedHotels.map((hotel) => (
          <div
            key={hotel.id}
            className={`glass-effect-strong rounded-2xl overflow-hidden shadow-xl transition cursor-pointer ${
              selectedHotelId === hotel.id
                ? "border-2 border-accent scale-[1.02]"
                : "hover:scale-[1.02]"
            }`}
            onClick={() => onSelect(hotel)}
          >
            <img src={hotel.image} className="w-full h-52 object-cover" />

            <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                {hotel.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 text-accent font-semibold">
                <BadgeIndianRupee size={18} />
                {hotel.price}/night
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-yellow-500">
                <Star size={18} /> {hotel.rating}
              </div>

              {/* Distances */}
              <p className="text-sm text-muted-foreground">
                <MapPin size={14} className="inline mr-1" />
                Landmark: {hotel.distance.monument} km • Railway:{" "}
                {hotel.distance.railway} km
              </p>

              <button className="mt-4 flex items-center gap-2 text-accent font-medium">
                View Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
