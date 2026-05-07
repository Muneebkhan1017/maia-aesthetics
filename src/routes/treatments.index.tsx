import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/treatments";

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
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Our Menu</p>
        <h1 className="font-display text-5xl md:text-6xl text-primary">Treatments</h1>
        <p className="mt-6 max-w-2xl mx-auto text-foreground/70 leading-relaxed">
          A curated selection of aesthetic, wellness and beauty treatments — each delivered with clinical precision and an artist's eye.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/treatments/$slug"
            params={{ slug: c.slug }}
            className="group block bg-card border border-border/60 p-8 rounded-sm hover:shadow-luxe hover:border-accent/40 transition"
          >
            <h2 className="font-display text-2xl text-primary mb-2">{c.title}</h2>
            <p className="text-sm italic text-muted-foreground mb-4">{c.tagline}</p>
            <p className="text-sm text-foreground/70 line-clamp-3 mb-6">{c.intro}</p>
            <span className="text-xs tracking-[0.25em] uppercase text-accent">View Details →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
