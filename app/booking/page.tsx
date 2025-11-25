"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  SlidersHorizontal,
  CheckCircle,
} from "lucide-react";

import { hotels } from "@/data/hotels";
import HotelList from "@/components/hotels-list";

export default function Booking() {
  const params = useSearchParams();

  const location = params.get("location") ?? "";
  const checkIn = params.get("checkIn") ?? "";
  const checkOut = params.get("checkOut") ?? "";
  const guests = params.get("guests") ?? "1";

  const [selectedHotel, setSelectedHotel] = useState<any>(null);
  const [addonsStep, setAddonsStep] = useState(false);
  const [addons, setAddons] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [finished, setFinished] = useState(false);

  const addonOptions = [
    "Baby Diaper Arrangement",
    "Pre-cooked Meals",
    "Temperature-Controlled Room",
    "Warm Water Ready",
    "Wheelchair Assistance",
    "Wine or Rum Arrangement",
    "Birthday / Anniversary Cake",
    "Sexual Wellness Products",
    "Elderly Care Facilities",
    "Spa Appointment",
    "Private Cab Pickup",
  ];

  const toggleAddon = (item: string) =>
    setAddons((prev) =>
      prev.includes(item)
        ? prev.filter((x) => x !== item)
        : [...prev, item]
    );

  return (
    <div className="max-w-6xl mx-auto px-6 pt-40 pb-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-accent mb-10 text-center">
        Book Your Luxury Stay
      </h1>

      {/* Summary */}
      <div className="glass-effect-strong rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Your Selection</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-foreground">
          <div className="flex items-start gap-3">
            <MapPin className="text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Check-in</p>
              <p className="font-medium">{checkIn}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Check-out</p>
              <p className="font-medium">{checkOut}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Guests</p>
              <p className="font-medium">{guests}</p>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 2 — HOTEL LISTING */}
      {!addonsStep && (
        <>
          <HotelList
            hotels={hotels.filter(
              (h) =>
                h.location.toLowerCase() ===
                location.toLowerCase()
            )}
            selectedHotelId={selectedHotel?.id ?? null}
            onSelect={(hotel) => setSelectedHotel(hotel)}
          />

          <button
            disabled={!selectedHotel}
            onClick={() => {
              setAddonsStep(true);
              setTimeout(() => {
                window.scrollTo({
                  top: window.scrollY + 700,
                  behavior: "smooth",
                });
              }, 200);
            }}
            className={`w-full mt-10 py-4 rounded-xl text-lg font-semibold transition ${
              selectedHotel
                ? "bg-accent text-accent-foreground hover:opacity-90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            Continue to Add-Ons
          </button>
        </>
      )}

      {/* STEP 3 — ADD-ONS */}
      {addonsStep && !finished && (
        <div className="glass-effect-strong rounded-2xl p-8 mt-12" id="addons">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <SlidersHorizontal size={20} /> Add-On Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {addonOptions.map((item) => (
              <label
                key={item}
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition 
                  ${
                    addons.includes(item)
                      ? "border-accent bg-accent/10"
                      : "border-border bg-background/30"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={addons.includes(item)}
                  onChange={() => toggleAddon(item)}
                  className="accent-accent"
                />
                <span className="text-sm text-foreground">{item}</span>
              </label>
            ))}
          </div>

          {/* Notes */}
          <textarea
            placeholder="Tell us more… special arrangements?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-32 p-4 rounded-xl bg-background border border-border text-foreground"
          />

          <button
            onClick={() => setFinished(true)}
            className="w-full mt-8 bg-accent text-accent-foreground py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
          >
            Confirm & Finish
          </button>
        </div>
      )}

      {/* STEP 4 — FINAL MESSAGE */}
      {finished && (
        <div className="glass-effect-strong rounded-2xl p-12 text-center mt-12">
          <CheckCircle className="text-accent mx-auto mb-4" size={60} />
          <h2 className="text-3xl font-bold mb-4 text-accent">
            Preferences Saved!
          </h2>
          <p className="text-lg text-muted-foreground">
            Thank you for choosing <span className="text-accent font-semibold">{selectedHotel?.name}</span>.  
            Our team will ensure that your stay is prepared with your selected add-ons  
            and special arrangements.  
            We look forward to welcoming you with unmatched luxury.
          </p>
        </div>
      )}
    </div>
  );
}
