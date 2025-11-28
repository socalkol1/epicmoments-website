// components/PricingCard.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Star, ChevronRight } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  priceNote?: string;
  description?: string;
  requirement?: string;
  additionalInfo?: string;
  features?: string[];
  highlight?: string | null;
  ctaText?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  priceNote,
  description,
  requirement,
  additionalInfo,
  features = [],
  highlight = null,
  ctaText = "Book Now",
  ctaHref = "/contact",
}: PricingCardProps) {
  const isHighlighted = !!highlight;

  return (
    <div
      className={`relative glass rounded-2xl p-8 md:p-10 ${
        isHighlighted ? "border-[#00d4aa]/50 ring-1 ring-[#00d4aa]/30" : ""
      }`}
    >
      {/* Highlight badge */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#00d4aa] to-[#4ade80] text-[#1a0a2e]">
            <Star className="w-3.5 h-3.5" />
            {highlight}
          </span>
        </div>
      )}

      {/* Package name */}
      <h3 className="text-white text-2xl font-bold mb-2 mt-2">{name}</h3>
      {description && <p className="text-[#a0a0b0] mb-6">{description}</p>}

      {/* Price */}
      <div className="mb-6">
        <span className="text-5xl font-extrabold text-white">{price}</span>
        {priceNote && <span className="text-[#a0a0b0] ml-2">{priceNote}</span>}
      </div>

      {/* Requirement/Info box */}
      {(requirement || additionalInfo) && (
        <div className="bg-[#1a0a2e]/50 rounded-lg p-4 mb-6">
          {requirement && (
            <p className="text-[#00d4aa] font-medium">{requirement}</p>
          )}
          {additionalInfo && (
            <p className="text-[#a0a0b0] text-sm mt-1">{additionalInfo}</p>
          )}
        </div>
      )}

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00d4aa] shrink-0 mt-0.5" />
              <span className="text-[#f0f0f0]">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Button
        asChild
        className={`w-full py-6 font-semibold uppercase tracking-wider ${
          isHighlighted
            ? "bg-gradient-to-r from-[#00d4aa] to-[#20b2aa] text-[#1a0a2e] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]"
            : "bg-[#2d1b4e] text-white border border-[#00d4aa]/30 hover:border-[#00d4aa] hover:bg-[#00d4aa]/10"
        } transition-all duration-300`}
      >
        <Link href={ctaHref}>
          {ctaText} <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
}
