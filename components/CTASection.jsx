// components/CTASection.jsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function CTASection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="bg-gradient-to-r from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Pre-title */}
        <span className="text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium">
          Ready?
        </span>

        {/* Main Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
          Let&apos;s Capture Your Next Victory
        </h2>

        {/* Paragraph */}
        <p className="text-[#a0a0b0] text-lg mt-6 max-w-xl mx-auto">
          Every game has a story. Every athlete has a moment. Let&apos;s make
          sure yours is captured forever.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#00d4aa] to-[#4ade80] text-[#1a0a2e] font-semibold uppercase tracking-wider px-10 py-6 text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,170,0.5)] transition-all duration-300"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
