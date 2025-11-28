// components/GalleryGrid.jsx
"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ZoomIn } from "lucide-react";
import { galleryImages, categories } from "@/data/images";
import { useStaggeredIntersection } from "@/hooks/useIntersectionObserver";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const { setRef, isItemVisible } = useStaggeredIntersection(
    filteredImages.length,
    { threshold: 0.1, staggerDelay: 100 }
  );

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : filteredImages.length - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <>
      {/* Filter Tabs */}
      <div className="max-w-2xl mx-auto my-12">
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 bg-[#2d1b4e]/50 rounded-full p-2 border border-[#00d4aa]/20 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all data-[state=inactive]:text-[#a0a0b0] data-[state=inactive]:hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00d4aa] data-[state=active]:to-[#20b2aa] data-[state=active]:text-[#1a0a2e] data-[state=active]:font-semibold"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              ref={setRef(index)}
              onClick={() => openLightbox(index)}
              className={`relative group aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-[#2d1b4e] transition-all duration-700 ease-out ${
                isItemVisible(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover image-zoom"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-[#1a0a2e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom Icon (top-right) */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-[#00d4aa]/20 border border-[#00d4aa]/30 flex items-center justify-center backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-[#00d4aa]" />
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30 mb-2">
                  {image.category}
                </span>
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        image={filteredImages[currentImageIndex]}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasPrevious={filteredImages.length > 1}
        hasNext={filteredImages.length > 1}
      />
    </>
  );
}
