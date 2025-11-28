// components/PageHeader.tsx
"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface PageHeaderProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  animated?: boolean;
  centered?: boolean;
}

export default function PageHeader({
  preTitle,
  title,
  subtitle,
  children,
  className = "",
  animated = true,
  centered = true,
}: PageHeaderProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={`bg-[#1a0a2e] pt-32 pb-16 ${className}`}>
      <div
        ref={animated ? ref : null}
        className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${
          centered ? "text-center" : ""
        } ${
          animated
            ? `transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`
            : ""
        }`}
      >
        {preTitle && (
          <span className="text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium">
            {preTitle}
          </span>
        )}
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#a0a0b0] text-lg mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
