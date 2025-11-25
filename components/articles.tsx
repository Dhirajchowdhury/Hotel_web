"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Top 10 Luxury Destinations for 2025",
    excerpt: "Explore the world’s most breathtaking luxury travel experiences…",
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    date: "Mar 15",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "The Art of Hotel Service Excellence",
    excerpt: "How world-class hotels deliver unmatched hospitality…",
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    date: "Mar 10",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Wellness Retreats for Mind & Body",
    excerpt: "Discover serene destinations designed for ultimate relaxation…",
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    date: "Mar 5",
    readTime: "7 min",
  },
  {
    id: 4,
    title: "Luxury Suites Redefined",
    excerpt: "A deep dive into the world of modern luxurious suites…",
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    date: "Feb 22",
    readTime: "4 min",
  },
  {
    id: 5,
    title: "Fine Dining Experiences Worldwide",
    excerpt: "Explore Michelin-level culinary experiences across the globe…",
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    date: "Feb 18",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Ultra-Premium Villa Escapes",
    excerpt: "Discover ultra-private villas offering world-class luxury…",
    image: "/luxury-hotel-mountain-swiss-alps.jpg",
    date: "Feb 10",
    readTime: "7 min",
  },
];

export default function Articles() {
  return (
    <section
      id="articles-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-foreground">Latest Articles</h2>
        <p className="text-muted-foreground mt-2">
          Travel tips, luxury insights, and destination guides
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 
                       transition-all hover:shadow-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>

              <Link
                href="/catalogue"
                className="inline-flex items-center gap-2 text-accent font-medium pt-2
                           hover:gap-3 transition-all"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
