// data/images.ts
import type { HeroImage, ImageData } from "@/types";

export const heroImage: HeroImage = {
  src: "https://picsum.photos/seed/epic-hero/1920/1080",
  alt: "Dramatic sports action shot"
};

export const featuredImages: ImageData[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/epic1/800/600",
    alt: "Basketball player mid-dunk",
    category: "Action Shots",
    title: "Rise to Victory"
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/epic2/800/600",
    alt: "Soccer team media day",
    category: "Media Days",
    title: "Team United"
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/epic3/800/600",
    alt: "Tennis serve action",
    category: "Action Shots",
    title: "Power Serve"
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/epic4/800/600",
    alt: "Football quarterback portrait",
    category: "Portraits",
    title: "Game Face"
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/epic5/800/600",
    alt: "Swimming competition",
    category: "Events",
    title: "Breaking the Surface"
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/epic6/800/600",
    alt: "Track and field athlete",
    category: "Action Shots",
    title: "Finish Line"
  }
];

export const galleryImages: ImageData[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/gallery1/800/600",
    title: "Championship Game Winner",
    category: "Action Shots",
    alt: "Championship Game Winner"
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/gallery2/800/600",
    title: "Team Portrait Session",
    category: "Media Days",
    alt: "Team Portrait Session"
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/gallery3/800/600",
    title: "Slam Dunk",
    category: "Action Shots",
    alt: "Slam Dunk"
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/gallery4/800/600",
    title: "Victory Celebration",
    category: "Events",
    alt: "Victory Celebration"
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/gallery5/800/600",
    title: "Quarterback Portrait",
    category: "Portraits",
    alt: "Quarterback Portrait"
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/gallery6/800/600",
    title: "Sprint Finish",
    category: "Action Shots",
    alt: "Sprint Finish"
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/gallery7/800/600",
    title: "Team Huddle",
    category: "Events",
    alt: "Team Huddle"
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/gallery8/800/600",
    title: "Cheerleader Action",
    category: "Action Shots",
    alt: "Cheerleader Action"
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/gallery9/800/600",
    title: "Coach Interview",
    category: "Media Days",
    alt: "Coach Interview"
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/gallery10/800/600",
    title: "MVP Moment",
    category: "Portraits",
    alt: "MVP Moment"
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/gallery11/800/600",
    title: "Game Day Atmosphere",
    category: "Events",
    alt: "Game Day Atmosphere"
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/gallery12/800/600",
    title: "Perfect Form",
    category: "Action Shots",
    alt: "Perfect Form"
  }
];

export const categories: string[] = ["All", "Action Shots", "Media Days", "Portraits", "Events"];
