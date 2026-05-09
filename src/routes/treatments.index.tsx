import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/treatments";
import { ArrowUpRight, Sparkles } from "lucide-react";
import treatmentImg from "@/assets/treatment.jpg";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments — Maia Aesthetics & Wellness Clinic" },
      { name: "description", content: "Explore the full menu of treatments at Maia: dermal fillers, anti-wrinkle, laser, skin, IV drip, PRP, cupping, SPMU and more." },
    ],
  }),
  component: TreatmentsIndex,
});

function TreatmentsIndex() {
  return (
    <div>
      {/* Editorial hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 opacity-[0.08] bg-cover bg-center"
          style={{ backgroundImage: `url(${treatmentImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-warm/40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 text-accent mb-6">
                <span className="h-px w-10 bg-accent" />
                <span className="text-[11px] font-semibold tracking-[0.4em] uppercase">The Menu</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl text-primary leading-[1.05]">
                Treatments crafted<br />with intention.
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="text-foreground/75 leading-relaxed text-lg">
                A curated portfolio of injectable, regenerative, laser and wellness therapies — each delivered with clinical precision and an artist's eye for natural balance.
              </p>
              <div className="mt-6 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                <span><span className="text-primary font-bold text-base mr-2">{categories.length}</span> Categories</span>
                <span className="h-px w-8 bg-border" />
                <span>Bespoke Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-sm overflow-hidden border border-border/60">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/treatments/$slug"
              params={{ slug: c.slug }}
              className="group relative bg-card hover:bg-gradient-warm p-8 md:p-10 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-sm text-accent tracking-[0.3em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-3 group-hover:text-accent transition-colors">
                {c.title}
              </h2>
              <p className="text-sm italic text-accent/80 mb-5">{c.tagline}</p>
              <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-8">
                {c.intro}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-border/50">
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                  {c.treatments.length} Options
                </span>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-accent">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Consultation band */}
      <section className="bg-primary text-cream py-16">
        <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <Sparkles className="h-6 w-6 text-accent flex-shrink-0" />
            <div>
              <p className="font-display text-2xl md:text-3xl">Not sure where to begin?</p>
              <p className="text-cream/70 text-sm mt-1">Every treatment journey starts with a complimentary consultation.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-cream text-xs font-semibold tracking-[0.25em] uppercase rounded-sm shadow-luxe hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
