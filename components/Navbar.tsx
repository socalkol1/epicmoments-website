// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Facebook, Instagram, LucideIcon } from "lucide-react";
import { brandInfo } from "@/data/services";

interface NavLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/media-day", label: "Media Day" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks: SocialLink[] = [
  { href: brandInfo.social.facebook, icon: Facebook, label: "Facebook" },
  { href: brandInfo.social.instagram, icon: Instagram, label: "Instagram" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string): boolean => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a0a2e]/95 backdrop-blur-md border-b border-[#00d4aa]/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-white font-bold text-xl tracking-wider uppercase">
            EPIC MOMENTS
          </span>
          <span className="font-['Playfair_Display'] italic text-sm text-[#a0a0b0] hidden sm:block">
            J Smith Media
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-[#00d4aa]"
                  : "text-[#f0f0f0] hover:text-[#00d4aa]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0b0] hover:text-[#00d4aa] transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <Button
            asChild
            className="bg-gradient-to-r from-[#00d4aa] to-[#20b2aa] text-[#1a0a2e] font-semibold uppercase tracking-wider text-sm px-6 hover:shadow-[0_0_20px_rgba(0,212,170,0.5)] transition-all duration-300"
          >
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#00d4aa] hover:bg-[#2d1b4e]"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#1a0a2e] border-l border-[#00d4aa]/20 w-[300px]"
          >
            <div className="flex flex-col h-full pt-8">
              {/* Mobile Logo */}
              <div className="mb-8">
                <span className="text-white font-bold text-xl tracking-wider uppercase">
                  EPIC MOMENTS
                </span>
                <p className="font-['Playfair_Display'] italic text-sm text-[#a0a0b0] mt-1">
                  J Smith Media
                </p>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium py-2 transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-[#00d4aa]"
                        : "text-[#f0f0f0] hover:text-[#00d4aa]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[#a0a0b0] text-sm mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#2d1b4e] border border-white/10 flex items-center justify-center text-[#a0a0b0] hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto pb-8">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#00d4aa] to-[#20b2aa] text-[#1a0a2e] font-semibold uppercase tracking-wider py-6 hover:shadow-[0_0_20px_rgba(0,212,170,0.5)] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
