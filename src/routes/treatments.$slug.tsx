import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories, categoryInfo } from "@/data/treatments";

export const Route = createFileRoute("/treatments/$slug")({
  head: ({ params }) => {
    const c = categories.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${c?.title ?? "Treatment"} — Maia Aesthetics & Wellness` },
        { name: "description", content: c?.intro ?? "Treatment at Maia." },
      ],
    };
  },
  loader: ({ params }) => {
    const c = categories.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { category: c, info: categoryInfo[params.slug] };
  },
  component: TreatmentPage,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display text-4xl text-primary">Treatment not found</h1>
      <Link to="/treatments" className="mt-6 inline-block text-accent uppercase text-xs tracking-[0.25em]">← Back to all treatments</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="py-32 text-center text-muted-foreground">{error.message}</div>,
});

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card border border-border/60 p-6 rounded-sm">
      <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-2">{label}</p>
      <p className="text-sm text-foreground/85 leading-relaxed">{value}</p>
    </div>
  );
}

function TreatmentPage() {
  const { category, info } = Route.useLoaderData();

  return (
    <div>
      {/* HEADER */}
      <section className="bg-gradient-warm py-20 md:py-28 border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Link to="/treatments" className="text-xs tracking-[0.25em] uppercase text-accent hover:underline">← All Treatments</Link>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-primary">{category.title}</h1>
          <p className="mt-4 text-lg italic text-muted-foreground">{category.tagline}</p>
          <p className="mt-8 max-w-3xl mx-auto text-foreground/75 leading-relaxed">{category.intro}</p>
        </div>
      </section>

      {info && (
        <>
          {/* ABOUT & SCIENCE */}
          <section className="py-20">
            <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">About</p>
                <h2 className="font-display text-3xl text-primary mb-4">What it is</h2>
                <p className="text-foreground/75 leading-relaxed">{info.about}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">The Science</p>
                <h2 className="font-display text-3xl text-primary mb-4">How it works</h2>
                <p className="text-foreground/75 leading-relaxed">{info.science}</p>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="py-20 bg-secondary/30 border-y border-border/60">
            <div className="mx-auto max-w-5xl px-6">
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">The Treatment</p>
              <h2 className="font-display text-3xl text-primary mb-6">How it's done</h2>
              <p className="text-foreground/75 leading-relaxed mb-10 max-w-3xl">{info.process}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <InfoCard label="Duration" value={info.duration} />
                <InfoCard label="Downtime" value={info.downtime} />
                <InfoCard label="Method" value={info.method} />
                <InfoCard label="Aftercare" value={info.aftercare} />
              </div>
            </div>
          </section>
        </>
      )}

      {/* PRICE LIST */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Investment</p>
            <h2 className="font-display text-4xl text-primary">Price List</h2>
          </div>
          <div className="bg-card border border-border/60 rounded-sm overflow-hidden shadow-soft">
            {category.treatments.map((t, i) => (
              <div
                key={t.name}
                className={`flex items-baseline justify-between gap-6 px-8 py-5 ${i !== 0 ? "border-t border-border/60" : ""}`}
              >
                <div className="flex-1">
                  <p className="text-foreground font-medium">{t.name}</p>
                </div>
                <p className="font-display text-xl text-gradient-gold tracking-wide">{t.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground italic">
            Prices are guides — final pricing confirmed at consultation. Custom packages available on request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-warm border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl text-primary mb-4">Book your {category.title.toLowerCase()} consultation</h2>
          <p className="text-foreground/70 mb-8">Every treatment begins with a personal consultation to design a plan that's right for you.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-gold text-cream text-xs uppercase tracking-[0.25em] rounded-sm shadow-luxe">
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
