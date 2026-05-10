import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/treatments";
import { Sparkles } from "lucide-react";
import treatmentImg from "@/assets/treatment.jpg";
import imgDermalFillers from "@/assets/cat-dermal-fillers.jpg";
import imgAntiWrinkle from "@/assets/cat-anti-wrinkle.jpg";
import imgIvDrip from "@/assets/cat-iv-drip.jpg";
import imgPrp from "@/assets/cat-prp.jpg";
import imgCupping from "@/assets/cat-cupping.jpg";
import imgSpmu from "@/assets/cat-spmu.jpg";
import imgSkincare from "@/assets/cat-skincare.jpg";
import imgFatDissolve from "@/assets/cat-fat-dissolve.jpg";
import imgLaser from "@/assets/cat-laser.jpg";
import imgThreading from "@/assets/cat-threading.jpg";
import imgLashes from "@/assets/cat-lashes.jpg";
import imgHairMakeup from "@/assets/cat-hair-makeup.jpg";
import imgPiercings from "@/assets/cat-piercings.jpg";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments — Maia Aesthetics & Wellness Clinic" },
      { name: "description", content: "Explore the full menu of treatments at Maia: dermal fillers, anti-wrinkle, laser, skin, IV drip, PRP, cupping, SPMU and more." },
    ],
  }),
  component: TreatmentsIndex,
});

const CATEGORY_IMAGES: Record<string, string> = {
  "dermal-fillers": imgDermalFillers,
  "anti-wrinkle": imgAntiWrinkle,
  "im-iv-drip-therapy": imgIvDrip,
  "prp-therapy": imgPrp,
  "wet-cupping-therapy": imgCupping,
  "smpu": imgSpmu,
  "skin-care": imgSkincare,
  "fat-dissolve": imgFatDissolve,
  "laser-hair-removal": imgLaser,
  "threading": imgThreading,
  "lashes": imgLashes,
  "hair-makeup": imgHairMakeup,
  "piercings": imgPiercings,
};

function TreatmentsIndex() {
  return (
    <div>
      {/* Editorial hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-warm">
        {/* Decorative background image */}
        <div className="absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
            style={{ backgroundImage: `url(${treatmentImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Oversized decorative numeral */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block" aria-hidden>
          <span className="font-display italic text-[22rem] leading-none text-accent/[0.06] pr-8">
            {String(categories.length).padStart(2, "0")}
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-12">
            <Link to="/" className="hover:text-accent transition">Home</Link>
            <span className="text-accent/50">/</span>
            <span className="text-accent">Treatments</span>
          </nav>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 text-accent mb-6">
                <span className="h-px w-12 bg-gradient-gold" />
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-[11px] font-semibold tracking-[0.4em] uppercase">The Treatment Menu</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-primary leading-[1.02] tracking-tight">
                Treatments crafted
                <br />
                <span className="italic text-gradient-gold">with intention.</span>
              </h1>
              <p className="mt-8 text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                A curated portfolio of injectable, regenerative, laser and wellness therapies — each delivered with clinical precision and an artist's eye.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-cream text-[11px] font-semibold tracking-[0.3em] uppercase rounded-sm shadow-luxe hover:opacity-90 transition"
                >
                  Explore Treatments
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-primary/25 text-primary text-[11px] font-semibold tracking-[0.3em] uppercase rounded-sm hover:bg-primary hover:text-cream transition"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Stat rail */}
            <div className="md:col-span-4 md:border-l md:border-border/60 md:pl-10 space-y-8">
              {[
                { k: String(categories.length).padStart(2, "0"), l: "Treatment Categories" },
                { k: "10+", l: "Years of Expertise" },
                { k: "100%", l: "Personalised Plans" },
              ].map((s) => (
                <div key={s.l} className="flex items-baseline gap-5">
                  <span className="font-display text-4xl md:text-5xl text-gradient-gold leading-none">{s.k}</span>
                  <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((c, i) => {
            const img = CATEGORY_IMAGES[c.slug] ?? treatmentImg;
            return (
              <article
                key={c.slug}
                className="group flex flex-col bg-card border border-border/60 rounded-sm overflow-hidden hover:shadow-luxe hover:border-accent/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
                  <img
                    src={img}
                    alt={c.title}
                    loading="lazy"
                    width={800}
                    height={640}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-display text-sm tracking-[0.3em] text-cream/90 bg-primary/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-7">
                  <h2 className="font-display text-2xl text-primary group-hover:text-accent transition-colors">
                    {c.title}
                  </h2>
                  <p className="mt-1 text-sm italic text-accent/80">{c.tagline}</p>
                  <p className="mt-4 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                    {c.intro}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                      {c.treatments.length} Options
                    </span>
                    <Link
                      to="/treatments/$slug"
                      params={{ slug: c.slug }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-gold text-cream text-[11px] font-semibold tracking-[0.25em] uppercase rounded-sm shadow-soft hover:opacity-90 hover:shadow-md transition-all"
                    >
                      View More →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
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
