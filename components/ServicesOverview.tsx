// components/ServicesOverview.tsx
"use client";

import { Camera, Users, CalendarDays, LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { useStaggeredIntersection } from "@/hooks/useIntersectionObserver";

const iconMap: Record<string, LucideIcon> = {
  Camera: Camera,
  Users: Users,
  CalendarDays: CalendarDays,
};

export default function ServicesOverview() {
  const { setRef, isItemVisible } = useStaggeredIntersection(services.length, {
    threshold: 0.1,
    staggerDelay: 200,
  });

  return (
    <section className="bg-[#2d1b4e] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium">
            Services
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#4ade80] mx-auto mt-6" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                ref={setRef(index)}
                className={`glass rounded-2xl p-8 md:p-10 text-center hover-lift transition-all duration-500 ${
                  isItemVisible(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-[#00d4aa] flex items-center justify-center mx-auto">
                  {IconComponent && (
                    <IconComponent className="text-[#00d4aa] w-8 h-8" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mt-6">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#a0a0b0] mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
