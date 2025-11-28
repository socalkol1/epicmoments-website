// app/media-day/page.js
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Camera, Users, Image, Download, Printer } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import FeatureCard from "@/components/FeatureCard";
import {
  pricingOptions,
  whatIsIncluded,
  customBanners,
  bannerInfo,
  mediaDayImages
} from "@/data/mediaDay";
import { useIntersectionObserver, useStaggeredIntersection } from "@/hooks/useIntersectionObserver";

const featureIcons = {
  "3 Poses Per Athlete": Camera,
  "Individual & Buddy Photos": Users,
  "1-2 Team Photo Variations": Image,
  "Shared Team Gallery": Image,
  "Digital Downloads": Download,
  "Print Options": Printer,
};

export default function MediaDayPage() {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: pricingRef, isVisible: pricingVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { setRef: setIncludedRef, isItemVisible: isIncludedVisible } = useStaggeredIntersection(
    whatIsIncluded.length,
    { staggerDelay: 100 }
  );
  const { setRef: setImageRef, isItemVisible: isImageVisible } = useStaggeredIntersection(
    mediaDayImages.length,
    { staggerDelay: 150 }
  );

  return (
    <div className="bg-[#1a0a2e]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e]" />

        {/* Decorative light effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4aa]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4a2c7a]/20 rounded-full blur-[100px]" />

        <div
          ref={heroRef}
          className={`relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-20 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-block text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium mb-6">
            High School Sports Portraits
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Media Day
          </h1>

          <p className="text-xl md:text-2xl text-[#f0f0f0] max-w-3xl mx-auto mb-10">
            Professional sports portraits that capture the spirit, intensity, and personality of every athlete
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#00d4aa] to-[#20b2aa] text-[#1a0a2e] font-semibold uppercase tracking-wider px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.5)] transition-all duration-300"
          >
            <Link href="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            preTitle="Pricing"
            title="Media Day Packages"
          />

          <div
            ref={pricingRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-700 ${pricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {pricingOptions.map((option) => (
              <PricingCard
                key={option.id}
                name={option.name}
                price={option.price}
                priceNote={option.priceNote}
                description={option.description}
                requirement={option.requirement}
                additionalInfo={option.additionalInfo}
                features={option.features}
                highlight={option.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sample Images Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            preTitle="Our Work"
            title="Media Day Highlights"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {mediaDayImages.map((image, index) => (
              <div
                key={image.id}
                ref={setImageRef(index)}
                className={`relative group aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-[#2d1b4e] transition-all duration-700 ${isImageVisible(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Banners Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#2d1b4e]/50 to-[#1a0a2e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium">
                Add-On
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold mt-4 mb-6">
                {bannerInfo.title}
              </h2>
              <p className="text-[#a0a0b0] text-lg mb-8">
                {bannerInfo.description}
              </p>

              {/* Banner sizes */}
              <div className="flex flex-wrap gap-4 mb-8">
                {customBanners.map((banner) => (
                  <div
                    key={banner.size}
                    className="glass rounded-xl p-6 text-center min-w-[140px]"
                  >
                    <p className="text-[#a0a0b0] text-sm mb-1">{banner.size}</p>
                    <p className="text-white text-2xl font-bold">
                      {banner.price}
                      <span className="text-[#a0a0b0] text-sm font-normal">{banner.priceNote}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <ul className="space-y-3 mb-6">
                {bannerInfo.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00d4aa] shrink-0 mt-0.5" />
                    <span className="text-[#f0f0f0]">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[#a0a0b0] text-sm italic">
                {bannerInfo.note}
              </p>
            </div>

            {/* Banner preview placeholder */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#2d1b4e]">
                <img
                  src="https://picsum.photos/seed/banner-preview/600/800"
                  alt="Custom banner example"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-[#00d4aa]/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium">
            Ready to Book?
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Let&apos;s Make Your Team Look Epic
          </h2>
          <p className="text-[#a0a0b0] text-lg mt-6 max-w-xl mx-auto">
            Contact us today to schedule your team&apos;s media day session. We&apos;ll work with your schedule to find the perfect time.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00d4aa] to-[#4ade80] text-[#1a0a2e] font-semibold uppercase tracking-wider px-10 py-6 text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,170,0.5)] transition-all duration-300"
            >
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
          <p className="text-[#a0a0b0] text-sm mt-6">
            Please inquire for accurate pricing based on your team size and needs.
          </p>
        </div>
      </section>
    </div>
  );
}
