// data/mediaDay.ts
import type { PricingOption, IncludedItem, BannerOption, BannerInfo, ImageData } from "@/types";

export const sports: string[] = [
  "Dance",
  "Drill/Cheer",
  "Fast Pitch",
  "Baseball",
  "Soccer",
  "Football",
  "Wrestling",
  "Basketball",
  "Volleyball",
  "Track & Field",
  "And More!"
];

export const pricingOptions: PricingOption[] = [
  {
    id: "team",
    name: "Team Package",
    price: "$65",
    priceNote: "+tax per player",
    highlight: "Most Popular",
    description: "Perfect for teams with 15 or more athletes",
    requirement: "Minimum 15 players",
    additionalInfo: "Add $65 per each additional player after 15",
    features: [
      "3 poses per athlete",
      "Individual & buddy photos",
      "1-2 team photo variations",
      "One shared team gallery",
      "Digital downloads included",
      "Option to purchase prints"
    ]
  },
  {
    id: "small-team",
    name: "Small Team Package",
    price: "$975",
    priceNote: "+tax flat rate",
    highlight: null,
    description: "Ideal for smaller teams or individual groups",
    requirement: "Less than 15 players",
    additionalInfo: "$975 divided by the number of players",
    features: [
      "3 poses per athlete",
      "Individual & buddy photos",
      "1-2 team photo variations",
      "One shared team gallery",
      "Digital downloads included",
      "Option to purchase prints"
    ]
  }
];

export const whatIsIncluded: IncludedItem[] = [
  {
    title: "3 Poses Per Athlete",
    description: "Each player gets multiple professional shots to choose from"
  },
  {
    title: "Individual & Buddy Photos",
    description: "Solo portraits plus fun shots with teammates"
  },
  {
    title: "1-2 Team Photo Variations",
    description: "Classic team photos with creative options"
  },
  {
    title: "Shared Team Gallery",
    description: "One gallery delivered to share across the entire team"
  },
  {
    title: "Digital Downloads",
    description: "High-resolution digital files included in every package"
  },
  {
    title: "Print Options",
    description: "Professional prints available for purchase separately"
  }
];

export const customBanners: BannerOption[] = [
  {
    size: "2' x 3'",
    price: "$105",
    priceNote: "+tax"
  },
  {
    size: "3' x 5'",
    price: "$165",
    priceNote: "+tax"
  }
];

export const bannerInfo: BannerInfo = {
  title: "Custom Banners",
  description: "Showcase your athlete with a stunning custom banner",
  includes: [
    "Choice of pose from your session",
    "Custom design layout",
    "Professional printing",
    "Grommets for easy hanging"
  ],
  note: "Prices are per banner and subject to change. Team & Sponsor Banners available - please inquire for pricing."
};

export const mediaDayImages: ImageData[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/mediaday1/600/800",
    alt: "Baseball player media day portrait"
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/mediaday2/600/800",
    alt: "Soccer player with dramatic lighting"
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/mediaday3/600/800",
    alt: "Softball player portrait"
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/mediaday4/600/800",
    alt: "Cheer team buddy photo"
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/mediaday5/600/800",
    alt: "Football player action pose"
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/mediaday6/600/800",
    alt: "Basketball player dramatic portrait"
  }
];
