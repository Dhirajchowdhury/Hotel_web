'use client'

const images = [
  {
    id: 1,
    src: '/luxury-hotel-lobby-grand-chandelier.jpg',
    alt: 'Grand Lobby',
    size: 'lg',
  },
  {
    id: 2,
    src: '/hotel-bedroom-suite-elegant.jpg',
    alt: 'Luxury Suite',
    size: 'md',
  },
  {
    id: 3,
    src: '/hotel-spa-wellness-center.jpg',
    alt: 'Spa & Wellness',
    size: 'md',
  },
  {
    id: 4,
    src: '/hotel-restaurant-fine-dining.jpg',
    alt: 'Fine Dining',
    size: 'lg',
  },
  {
    id: 5,
    src: '/hotel-pool-resort-tropical.jpg',
    alt: 'Resort Pool',
    size: 'md',
  },
  {
    id: 6,
    src: '/hotel-conference-room-business.jpg',
    alt: 'Conference Room',
    size: 'md',
  },
]

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-2">Hotel Experiences</h2>
        <p className="text-muted-foreground">Explore our world-class amenities and facilities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-xl group cursor-pointer ${
              image.size === 'lg' ? 'md:col-span-2' : ''
            }`}
          >
            <div className="aspect-video md:aspect-square overflow-hidden rounded-xl">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
