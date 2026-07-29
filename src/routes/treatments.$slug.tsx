import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories, categoryInfo, type Treatment } from "@/data/treatments";
import { Clock, Calendar, Syringe, Heart, ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

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

const META_ICONS = {
  Duration: Clock,
  Downtime: Calendar,
  Method: Syringe,
  Aftercare: Heart,
} as const;

function MetaCard({ label, value }: { label: keyof typeof META_ICONS; value: string }) {
  const Icon = META_ICONS[label];
  return (
    <div className="group relative bg-card border border-border/60 p-7 rounded-sm hover:border-accent/50 hover:shadow-soft transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center border border-accent/20">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">{label}</p>
      </div>
      <p className="text-sm text-foreground/85 leading-relaxed">{value}</p>
    </div>
  );
}

function TreatmentPage() {
  const { category, info } = Route.useLoaderData();
  const idx = categories.findIndex((c) => c.slug === category.slug);
  const numLabel = String(idx + 1).padStart(2, "0");

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-warm border-b border-border/60 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]" aria-hidden>
          <div className="font-display text-[28rem] leading-none text-primary select-none -mt-20 -mr-20 text-right">
            {numLabel}
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-10">
            <Link to="/" className="hover:text-accent transition">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/treatments" className="hover:text-accent transition">Treatments</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-accent">{category.title}</span>
          </nav>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="font-display text-accent tracking-[0.3em] text-sm mb-4">— {numLabel} / {String(categories.length).padStart(2, "0")}</p>
              <h1 className="h1-editorial text-primary" style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)" }}>
                {category.title}
              </h1>
              <p className="mt-5 text-lg md:text-xl italic text-accent/90 font-display">{category.tagline}</p>
            </div>
            <div className="md:col-span-4">
              <p className="text-foreground/75 leading-relaxed">{category.intro}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-primary hover:text-accent transition"
              >
                Book a Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {info && (
        <>
          {/* ABOUT & SCIENCE */}
          <section className="py-20 md:py-24">
            <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-accent">About</p>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">What it is</h2>
                <p className="text-foreground/75 leading-[1.85] text-[15px]">{info.about}</p>
              </div>
              <div className="md:border-l md:border-border/60 md:pl-16">
                <div className="flex items-center gap-3 mb-5">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-accent">The Science</p>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">How it works</h2>
                <p className="text-foreground/75 leading-[1.85] text-[15px]">{info.science}</p>
              </div>
            </div>
          </section>

          {/* PROCESS & QUICK FACTS */}
          <section className="py-20 md:py-24 bg-secondary/40 border-y border-border/60">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-3xl mb-14">
                <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-accent mb-4">The Treatment</p>
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">How it's done</h2>
                <p className="text-foreground/75 leading-[1.85] text-[15px]">{info.process}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <MetaCard label="Duration" value={info.duration} />
                <MetaCard label="Downtime" value={info.downtime} />
                <MetaCard label="Method" value={info.method} />
                <MetaCard label="Aftercare" value={info.aftercare} />
              </div>
            </div>
          </section>
        </>
      )}

      {/* PRICE LIST */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-accent mb-3">Investment</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary">Price List</h2>
            </div>
            <p className="text-xs text-muted-foreground italic max-w-sm">
              Final pricing confirmed at consultation. Bespoke packages available.
            </p>
          </div>

          <div className="bg-card border border-border/60 rounded-sm overflow-hidden">
            {category.treatments.map((t: Treatment, i: number) => (
              <div
                key={t.name}
                className={`group flex items-baseline justify-between gap-6 px-6 md:px-10 py-6 hover:bg-gradient-warm/40 transition-colors ${
                  i !== 0 ? "border-t border-border/50" : ""
                }`}
              >
                <div className="flex items-baseline gap-5 flex-1 min-w-0">
                  <span className="font-display text-xs text-accent/60 tracking-[0.2em] hidden sm:inline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground font-medium truncate">{t.name}</p>
                </div>
                <div className="flex items-baseline gap-4 flex-shrink-0">
                  <span className="hidden md:block flex-1 border-b border-dotted border-border/80 w-24" />
                  <p className="font-display text-xl md:text-2xl text-gradient-gold tracking-wide whitespace-nowrap">
                    {t.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-accent mb-4">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">
            Book your {category.title.toLowerCase()} consultation
          </h2>
          <p className="text-cream/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Every treatment begins with a personal consultation to design a plan that's tailored entirely to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-gold text-cream text-xs font-semibold uppercase tracking-[0.25em] rounded-sm shadow-luxe hover:opacity-90 transition"
            >
              Enquire Now
            </Link>
            <Link
              to="/treatments"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-cream/30 text-cream text-xs font-semibold uppercase tracking-[0.25em] rounded-sm hover:bg-cream/10 transition"
            >
              ← All Treatments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
