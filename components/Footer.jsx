// components/Footer.jsx
import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import { brandInfo } from "@/data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/media-day", label: "Media Day" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: brandInfo.social.facebook, icon: Facebook, label: "Facebook" },
  { href: brandInfo.social.instagram, icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0a2e] border-t border-[#00d4aa]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold tracking-wider text-white">
                EPIC MOMENTS
              </h3>
            </Link>
            <p className="font-['Playfair_Display'] italic text-[#a0a0b0] mt-1">
              {brandInfo.tagline}
            </p>
            <p className="text-[#a0a0b0] mt-4">{brandInfo.description}</p>
            <p className="text-[#a0a0b0] text-sm mt-6">
              &copy; {currentYear} {brandInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#f0f0f0] hover:text-[#00d4aa] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Connect</h4>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0a0b0] hover:text-[#00d4aa] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Email */}
            <a
              href={`mailto:${brandInfo.email}`}
              className="flex items-center gap-2 text-[#f0f0f0] hover:text-[#00d4aa] transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>{brandInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Aurora gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#00d4aa] to-transparent opacity-50" />
    </footer>
  );
}
