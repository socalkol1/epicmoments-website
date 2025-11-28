// components/GalleryLightbox.tsx
"use client";

import { useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageData } from "@/types";

interface GalleryLightboxProps {
  image: ImageData | undefined;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function GalleryLightbox({
  image,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: GalleryLightboxProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (hasPrevious) onPrevious();
          break;
        case "ArrowRight":
          if (hasNext) onNext();
          break;
      }
    },
    [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-transparent border-none max-w-5xl mx-auto p-4 shadow-none">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#2d1b4e] border border-[#00d4aa]/30 text-white hover:bg-[#00d4aa] hover:text-[#1a0a2e] transition-all duration-200"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Previous Button */}
        {hasPrevious && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-[#2d1b4e] border border-[#00d4aa]/30 text-white hover:bg-[#00d4aa] hover:text-[#1a0a2e] transition-all duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous image</span>
          </Button>
        )}

        {/* Next Button */}
        {hasNext && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-[#2d1b4e] border border-[#00d4aa]/30 text-white hover:bg-[#00d4aa] hover:text-[#1a0a2e] transition-all duration-200"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next image</span>
          </Button>
        )}

        {/* Image Container */}
        <div className="flex flex-col items-center">
          <img
            src={image.src}
            alt={image.title || image.alt}
            className="max-h-[80vh] w-auto mx-auto object-contain rounded-lg border border-white/10"
          />

          {/* Info Panel */}
          <div className="mt-4 text-center">
            <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            <span className="text-[#00d4aa] text-sm mt-1 inline-block">
              {image.category}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
