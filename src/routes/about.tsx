import { createFileRoute, Link } from "@tanstack/react-router";
import treatment from "@/assets/treatment.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maia Aesthetics & Wellness Clinic" },
      { name: "description", content: "Discover the philosophy, expertise and team behind Maia Aesthetics & Wellness Clinic." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">About Maia</p>
          <h1 className="h1-editorial text-primary mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>Where artistry meets <em className="not-italic italic text-gradient-gold">medicine</em>.</h1>
          <p className="text-lg text-foreground/75 leading-relaxed max-w-3xl mx-auto">
            Maia Aesthetics &amp; Wellness Clinic was founded on a simple belief — that beauty treatments should feel as considered as the results they deliver.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-luxe">
            <img src={treatment} alt="Skincare" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-display text-4xl text-primary mb-6">Our approach</h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>We blend the precision of evidence-based aesthetic medicine with the warmth of a true sanctuary. Every face we treat is unique, and every plan we design respects that.</p>
              <p>From the most subtle anti-wrinkle treatment to advanced regenerative therapies, our practitioners are highly trained, fully insured, and committed to ongoing education.</p>
              <p>We pride ourselves on transparency, honesty and saying no when a treatment isn't right for you — because integrity is the foundation of beautiful results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { n: "01", t: "Bespoke", d: "Every plan is designed around your unique features and goals." },
            { n: "02", t: "Clinical", d: "Premium products, sterile technique, evidence-based protocols." },
            { n: "03", t: "Considered", d: "Subtle, natural results that enhance — never overpower." },
          ].map((b) => (
            <div key={b.n}>
              <p className="font-display text-5xl text-gradient-gold mb-3">{b.n}</p>
              <h3 className="font-display text-2xl text-primary mb-2">{b.t}</h3>
              <p className="text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-gold text-cream text-xs uppercase tracking-[0.25em] rounded-sm shadow-luxe">
          Book a consultation
        </Link>
      </section>
    </div>
  );
}
