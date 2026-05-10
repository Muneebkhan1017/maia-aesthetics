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
      <section className="relative py-24 md:py-32 bg-gradient-warm overflow-hidden">
        <div className="absolute top-0 right-0 font-display text-[20rem] leading-none text-accent/[0.05] pointer-events-none select-none -mr-10 -mt-10 hidden md:block">
          02
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> The Menu
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-primary leading-[1.05] tracking-tight">
                Treatments crafted <em className="text-gradient-gold not-italic">around you</em>.
              </h2>
              <div className="h-[2px] w-24 bg-gradient-gold mt-6" />
            </div>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-primary hover:text-accent transition self-start md:self-end"
            >
              View All Treatments <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => {
              const img = CATEGORY_IMAGES[c.slug] ?? treatment;
              return (
                <Link
                  key={c.slug}
                  to="/treatments/$slug"
                  params={{ slug: c.slug }}
                  className="group relative flex flex-col bg-card border border-border/60 rounded-sm overflow-hidden hover:shadow-luxe hover:border-accent/40 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                    <span className="absolute top-4 left-4 font-display text-sm text-cream/90 tracking-[0.25em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute top-4 right-4 h-9 w-9 rounded-full bg-cream/95 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-2xl text-cream leading-tight">{c.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-xs tracking-[0.18em] uppercase text-accent mb-3">{c.tagline}</p>
                    <p className="text-sm text-foreground/75 leading-relaxed line-clamp-3 mb-6">
                      {c.intro}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/60">
                      <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                        {c.treatments.length} options
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-primary group-hover:text-accent transition">
                        View More <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
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
