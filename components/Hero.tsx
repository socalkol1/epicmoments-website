// components/Hero.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { heroImage } from "@/data/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Aurora-style gradient overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-heading */}
        <span className="inline-block text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium mb-6 animate-fade-in-up">
          Sports Photography
        </span>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 animate-fade-in-up delay-200">
          EPIC MOMENTS
        </h1>

        {/* Brand tagline */}
        <p className="font-['Playfair_Display'] italic text-2xl md:text-3xl text-[#a0a0b0] mb-6 animate-fade-in-up delay-400">
          J Smith Media
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#f0f0f0] max-w-2xl mx-auto mb-10 animate-fade-in-up delay-600">
          Capturing the thrill of victory, one frame at a time.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-800">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#00d4aa] to-[#20b2aa] text-[#1a0a2e] font-semibold uppercase tracking-wider px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.5)] transition-all duration-300"
          >
            <Link href="/gallery">
              View Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#00d4aa] rounded-full animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
}
