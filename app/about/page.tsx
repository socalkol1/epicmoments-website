// app/about/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | Epic Moments - J Smith Media",
  description:
    "Meet Jenelle, the storyteller behind Epic Moments Photography. From her first camera moments at age seven to today, she captures the magic that matters most.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#1a0a2e]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%)]" />
        <div className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-[#00d4aa]/15 blur-[80px]" />
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[#4a2c7a]/30 blur-[90px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16">
          <span className="inline-block text-[#00d4aa] text-sm uppercase tracking-[0.35em] font-medium mb-6">
            The Story Behind the Lens
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Hi, I&apos;m Jenelle
          </h1>
          <p className="text-lg md:text-2xl text-[#f0f0f0] max-w-3xl leading-relaxed">
            I&apos;m the storyteller behind Epic Moments Photography. I fell in love
            with photography as a kid and never really grew out of it. At seven,
            my Susie Snapshot doll became the very first model in front of my lens.
            Decades later, that passion has only grown.
          </p>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="inline-block text-[#00d4aa] text-xs uppercase tracking-[0.3em] font-medium mb-6">
            My Journey
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                A Lifelong Love for Capturing Moments
              </h2>
              <p className="text-[#a0a0b0] text-lg leading-relaxed mb-6">
                Every photo holds a little bit of magic. I love learning new ways
                to capture the moments that matter most &mdash; the energy, the joy, the
                quiet in-between glances that turn into stories you can feel.
              </p>
              <p className="text-[#f0f0f0] text-lg leading-relaxed">
                Welcome to Epic Moments. If it matters to you, it matters to me.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-28 h-28 rounded-2xl bg-[#2d1b4e] border border-white/10 flex items-center justify-center text-[#00d4aa] font-bold text-xl">
                    1991
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Age 7
                  </h3>
                  <p className="text-[#a0a0b0]">
                    Playing with her Susie Snapshot doll &mdash; the very first model
                    in front of her lens.
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-28 h-28 rounded-2xl bg-[#2d1b4e] border border-white/10 flex items-center justify-center text-[#00d4aa] font-bold text-xl">
                    2025
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Age 41
                  </h3>
                  <p className="text-[#a0a0b0]">
                    Still chasing perfect moments &mdash; now with a new camera upgrade
                    and a deeper love for the craft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#2d1b4e]/40 to-[#1a0a2e]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Story First",
                text:
                  "I&apos;m always looking for the feeling in a moment &mdash; the story that makes it unforgettable.",
              },
              {
                title: "Always Learning",
                text:
                  "I love discovering new techniques and tools to make each image better than the last.",
              },
              {
                title: "Magic in the Details",
                text:
                  "From the big celebrations to the quiet glances, I capture what matters most.",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 md:p-8">
                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#a0a0b0]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-[#00d4aa] text-sm uppercase tracking-[0.35em] font-medium">
            Let&apos;s Create
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Your Next Epic Moment
          </h2>
          <p className="text-[#a0a0b0] text-lg mt-6">
            Ready to capture something meaningful? I&apos;d love to hear your story
            and help bring it to life.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00d4aa] to-[#20b2aa] text-[#1a0a2e] font-semibold uppercase tracking-wider px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.5)] transition-all duration-300"
            >
              <Link href="/contact">Contact Jenelle</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

