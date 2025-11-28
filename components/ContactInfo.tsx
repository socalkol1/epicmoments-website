// components/ContactInfo.tsx
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, LucideIcon } from "lucide-react";
import { brandInfo } from "@/data/services";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: brandInfo.email,
    href: `mailto:${brandInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: brandInfo.phone,
    href: `tel:${brandInfo.phone.replace(/\D/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: brandInfo.location,
  },
];

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: brandInfo.social.facebook, label: "Facebook" },
  { icon: Instagram, href: brandInfo.social.instagram, label: "Instagram" },
];

export default function ContactInfo() {
  return (
    <div className="lg:sticky lg:top-32 space-y-8">
      {/* Contact Info Card */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-white text-xl font-semibold mb-6">Get in Touch</h3>

        <div className="space-y-6">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a0a2e] border border-white/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-[#00d4aa]" />
              </div>
              <div>
                <p className="text-[#a0a0b0] text-sm">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white hover:text-[#00d4aa] transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links Card */}
      <div className="glass rounded-2xl p-8">
        <h4 className="text-white text-lg font-medium mb-4">Follow Us</h4>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a0a2e] border border-white/10 flex items-center justify-center text-[#a0a0b0] hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours Card */}
      <div className="glass rounded-2xl p-8">
        <h4 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#00d4aa]" />
          Business Hours
        </h4>
        <div className="space-y-2">
          <p className="text-[#f0f0f0]">{brandInfo.hours.weekdays}</p>
          <p className="text-[#a0a0b0]">{brandInfo.hours.weekends}</p>
        </div>
      </div>
    </div>
  );
}
