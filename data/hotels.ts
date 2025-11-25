export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;

  distance: {
    monument?: number;
    railway?: number;
    airport?: number;
    office?: number;
  };
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Palais Elegance",
    location: "Paris",
    price: 320,
    rating: 4.8,
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    distance: { monument: 1.2, railway: 3.5, airport: 18 },
  },
  {
    id: 2,
    name: "Venetian Dreams",
    location: "Venice",
    price: 280,
    rating: 4.7,
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    distance: { monument: 0.9, railway: 2.1, airport: 14 },
  },
  {
    id: 3,
    name: "Azure Retreat",
    location: "Santorini",
    price: 250,
    rating: 4.6,
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    distance: { monument: 0.5, railway: 4.2, airport: 10 },
  },
  {
    id: 4,
    name: "Mountain Summit",
    location: "Zermatt",
    price: 400,
    rating: 4.9,
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    distance: { monument: 1.8, railway: 5.0, airport: 20 },
  },
];
