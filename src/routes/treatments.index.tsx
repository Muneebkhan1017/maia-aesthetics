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
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 opacity-[0.08] bg-cover bg-center"
          style={{ backgroundImage: `url(${treatmentImg})` }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
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
                A curated portfolio of injectable, regenerative, laser and wellness therapies — each delivered with clinical precision and an artist's eye.
              </p>
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
