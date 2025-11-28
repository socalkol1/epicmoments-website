// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact | Epic Moments - Sports Photography",
  description:
    "Get in touch with Epic Moments for your sports photography needs. Action shots, media day sessions, event coverage, and portrait sessions.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#1a0a2e]">
      <PageHeader
        preTitle="Contact"
        title="Let's Work Together"
        subtitle="Ready to capture your next epic moment? Get in touch."
      />

      {/* Contact Form & Info */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - 60% */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info - 40% */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
