// app/gallery/page.js
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Gallery | Epic Moments - Sports Photography",
  description:
    "Browse our collection of epic sports moments. Action shots, media day portraits, team events, and athlete headshots.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#1a0a2e]">
      <PageHeader
        preTitle="Portfolio"
        title="Our Gallery"
        subtitle="Browse our collection of epic sports moments"
      />
      <GalleryGrid />
    </div>
  );
}
