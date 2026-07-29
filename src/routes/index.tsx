import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";
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
import { Reveal } from "@/components/site/Reveal";

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
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-[88px] pt-[88px]">
        <img src={hero} alt="Maia clinic interior" className="absolute inset-0 h-full w-full object-cover" />
        {/* Cream fade for text legibility on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/10" />
        {/* Dark bottom-to-top gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl w-full px-6 py-24 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-accent/50 bg-cream/50 backdrop-blur-md shadow-[0_0_30px_-8px_oklch(0.72_0.11_80/0.5)]">
            <Sparkles className="h-3 w-3 text-accent" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent">Aesthetics &amp; Wellness Clinic</span>
          </div>

          <h1 className="h1-editorial text-primary max-w-4xl">
            The art of{" "}
            <em className="not-italic italic text-gradient-gold" style={{ fontSize: "1.08em" }}>
              refined
            </em>{" "}
            beauty.
          </h1>
          <p className="mt-10 max-w-xl text-lg md:text-xl text-foreground/75 leading-[1.75]">
            Maia is a sanctuary of clinical excellence — where advanced aesthetic medicine meets quiet, considered luxury.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/treatments"
              className="btn-sweep px-9 py-4 bg-gradient-gold text-ink text-[11px] font-bold uppercase tracking-[0.28em] rounded-full shadow-luxe hover:shadow-lift hover:scale-[1.03] transition-all duration-300"
            >
              Explore Treatments
            </Link>
            <Link
              to="/contact"
              className="glass-cream group px-9 py-4 text-primary text-[11px] font-bold uppercase tracking-[0.28em] rounded-full hover:text-accent transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator pointer-events-none">
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary/60 font-semibold">Scroll</span>
          <ChevronDown className="h-4 w-4 text-accent" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Faded monogram */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden>
          <span className="font-display italic text-[36rem] leading-none text-accent/[0.05]">M</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-16 md:gap-20 items-center">
          {/* Image with offset gold frame */}
          <Reveal className="md:col-span-6 relative">
            <div className="relative">
              <div className="absolute -inset-3 md:-inset-5 border border-accent/60 rounded-sm translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6" aria-hidden />
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-luxe">
                <img src={treatment} alt="Luxury skincare" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 md:pl-6" delay={120}>
            <div className="mb-6 flex items-center gap-4">
              <span className="overline-rule" />
              <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-accent">Our Philosophy</span>
            </div>
            <h2 className="h2-editorial text-primary mb-8">Subtle. Considered. Yours.</h2>
            <p className="text-foreground/75 leading-[1.85] mb-5 text-[17px] max-w-xl">
              We believe the most beautiful results are the ones no one can quite place — only that you look rested, refreshed, and unmistakably yourself.
            </p>
            <p className="text-foreground/75 leading-[1.85] text-[17px] max-w-xl">
              Every treatment at Maia begins with a thorough consultation, an honest conversation, and a bespoke plan designed around your features, skin and goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TREATMENT GRID */}
      <section className="relative py-28 md:py-36 bg-gradient-warm overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal className="max-w-2xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="overline-rule" />
                <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-accent">The Menu</span>
              </div>
              <h2 className="h2-editorial text-primary">
                Treatments crafted{" "}
                <em className="not-italic italic text-gradient-gold">around you</em>.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/treatments"
                className="story-link inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-primary hover:text-accent transition font-semibold"
              >
                View All Treatments <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((c, i) => {
              const img = CATEGORY_IMAGES[c.slug] ?? treatment;
              return (
                <Reveal key={c.slug} delay={i * 70}>
                  <Link
                    to="/treatments/$slug"
                    params={{ slug: c.slug }}
                    className="group relative flex flex-col h-full bg-card border border-accent/20 rounded-xl overflow-hidden shadow-soft hover:shadow-luxe hover:border-accent/70 hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={img}
                        alt={c.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="font-display font-semibold text-2xl text-cream leading-tight tracking-tight">{c.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-7">
                      <p className="text-[11px] tracking-[0.22em] uppercase text-accent mb-3 font-bold">{c.tagline}</p>
                      <p className="text-[14px] text-foreground/70 leading-[1.7] line-clamp-2 mb-6">
                        {c.intro}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-5 border-t border-border/60">
                        <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground font-semibold">
                          {c.treatments.length} Options
                        </span>
                        <span className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-primary group-hover:text-accent transition font-bold">
                          View More
                          <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="relative bg-ink text-cream py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-dot-gold opacity-60" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden />

        <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="overline-rule" />
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-accent">Begin Your Journey</span>
            <span className="overline-rule" />
          </div>
          <h2 className="h2-editorial mb-8 text-cream">
            Bespoke <em className="not-italic italic text-gradient-gold">consultations</em>
          </h2>
          <p className="text-cream/75 leading-[1.85] mb-10 max-w-2xl mx-auto text-[17px]">
            Unsure what would suit your features? Book a £60 consultation with our experts and receive a tailored plan to enhance your natural beauty.
          </p>
          <Link
            to="/contact"
            className="btn-sweep inline-block px-12 py-5 bg-gradient-gold text-ink text-[11px] font-bold uppercase tracking-[0.3em] rounded-full shadow-luxe hover:shadow-lift hover:scale-[1.03] transition-all duration-300"
          >
            Book Now
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
