// components/FeaturedGallery.jsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredImages } from "@/data/images";
import { useStaggeredIntersection } from "@/hooks/useIntersectionObserver";

export default function FeaturedGallery() {
  const { setRef, isItemVisible } = useStaggeredIntersection(
    featuredImages.length,
    { threshold: 0.1, staggerDelay: 150 }
  );

  return (
    <section className="bg-[#1a0a2e] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium">
            Portfolio
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Featured Work
          </h2>
          <p className="text-[#a0a0b0] text-lg mt-4">
            Recent highlights from the field
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#4ade80] mx-auto mt-6" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredImages.map((image, index) => (
            <div
              key={image.id}
              ref={setRef(index)}
              className={`relative group rounded-xl overflow-hidden aspect-[4/3] border border-white/10 bg-[#2d1b4e] cursor-pointer transition-all duration-700 ease-out ${
                isItemVisible(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover image-zoom"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-[#1a0a2e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30 mb-2">
                  {image.category}
                </span>
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_40px_rgba(0,212,170,0.1)]" />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center text-[#00d4aa] hover:text-[#4ade80] font-medium transition-colors duration-200 group"
          >
            Explore Full Gallery
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
