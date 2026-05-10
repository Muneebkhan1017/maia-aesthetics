import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import treatment from "@/assets/treatment.jpg";
import { categories } from "@/data/treatments";
import catFillers from "@/assets/cat-dermal-fillers.jpg";
import catWrinkle from "@/assets/cat-anti-wrinkle.jpg";
import catIv from "@/assets/cat-iv-drip.jpg";
import catPrp from "@/assets/cat-prp.jpg";
import catCupping from "@/assets/cat-cupping.jpg";
import catSpmu from "@/assets/cat-spmu.jpg";
import catSkincare from "@/assets/cat-skincare.jpg";
import catFat from "@/assets/cat-fat-dissolve.jpg";
import catLaser from "@/assets/cat-laser.jpg";
import catThreading from "@/assets/cat-threading.jpg";
import catLashes from "@/assets/cat-lashes.jpg";
import catHair from "@/assets/cat-hair-makeup.jpg";
import catPiercings from "@/assets/cat-piercings.jpg";

const CATEGORY_IMAGES: Record<string, string> = {
  "dermal-fillers": catFillers,
  "anti-wrinkle": catWrinkle,
  "im-iv-drip-therapy": catIv,
  "prp-therapy": catPrp,
  "wet-cupping-therapy": catCupping,
  "smpu": catSpmu,
  "skin-care": catSkincare,
  "fat-dissolve": catFat,
  "laser-hair-removal": catLaser,
  "threading": catThreading,
  "lashes": catLashes,
  "hair-makeup": catHair,
  "piercings": catPiercings,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maia Aesthetics & Wellness Clinic — Refined Beauty, Clinical Care" },
      { name: "description", content: "A house of bespoke aesthetic medicine. Injectables, skin, laser and wellness therapies in a serene clinical setting." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={hero} alt="Maia clinic interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/20" />
        <div className="relative mx-auto max-w-7xl w-full px-6 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-6">Aesthetics & Wellness Clinic</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.95] max-w-3xl">
            The art of <em className="text-gradient-gold not-italic">refined</em> beauty.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
            Maia is a sanctuary of clinical excellence — where advanced aesthetic medicine meets quiet, considered luxury.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/treatments" className="px-8 py-4 bg-gradient-gold text-cream text-xs uppercase tracking-[0.25em] rounded-sm shadow-luxe hover:opacity-90 transition">
              Explore Treatments
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-primary/30 text-primary text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-primary hover:text-cream transition">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Our Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Subtle. Considered. Yours.</h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              We believe the most beautiful results are the ones no one can quite place — only that you look rested, refreshed, and unmistakably yourself.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              Every treatment at Maia begins with a thorough consultation, an honest conversation, and a bespoke plan designed around your features, skin and goals.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-luxe">
            <img src={treatment} alt="Luxury skincare" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* TREATMENT GRID */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">The Menu</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">Our Treatments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/treatments/$slug"
                params={{ slug: c.slug }}
                className="group block bg-card border border-border/60 p-8 rounded-sm hover:shadow-luxe hover:border-accent/40 transition-all"
              >
                <h3 className="font-display text-2xl text-primary group-hover:text-gradient-gold transition mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground italic mb-6">{c.tagline}</p>
                <span className="text-xs tracking-[0.25em] uppercase text-accent inline-flex items-center gap-2">
                  Discover →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Bespoke consultations</h2>
          <p className="text-foreground/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            Unsure what would suit your features? Book a £60 consultation with our experts and receive a tailored plan to enhance your natural beauty.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-gold text-cream text-xs uppercase tracking-[0.25em] rounded-sm shadow-luxe">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
