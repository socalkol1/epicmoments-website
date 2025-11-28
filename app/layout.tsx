// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Epic Moments - J Smith Media | Sports Photography",
  description:
    "Professional sports photography capturing epic moments. Specializing in action shots, media day portraits, team events, and athlete headshots in Atlanta, Georgia.",
  keywords: [
    "sports photography",
    "action photography",
    "media day",
    "athlete portraits",
    "team photography",
    "Atlanta photographer",
  ],
  authors: [{ name: "J Smith Media" }],
  openGraph: {
    title: "Epic Moments - J Smith Media | Sports Photography",
    description:
      "Professional sports photography capturing epic moments. Specializing in action shots, media day portraits, team events, and athlete headshots.",
    url: "https://www.epicmoments.photo",
    siteName: "Epic Moments",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00d4aa] focus:text-[#1a0a2e] focus:rounded-md"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
