// app/page.js
import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import ServicesOverview from "@/components/ServicesOverview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGallery />
      <ServicesOverview />
      <CTASection />
    </>
  );
}
