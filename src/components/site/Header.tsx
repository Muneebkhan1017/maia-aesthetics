import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Instagram, Calendar, ChevronDown, Menu, X, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import { categories } from "@/data/treatments";

type NavItem = { to: "/" | "/treatments" | "/about" | "/contact"; label: string; hasMega?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments", hasMega: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Main bar */}
      <div
        className={`backdrop-blur-md border-b transition-all ${
          scrolled
            ? "bg-background/95 border-border/80 shadow-soft"
            : "bg-background/80 border-border/40"
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Maia Aesthetics Clinic" className={`w-auto transition-all ${scrolled ? "h-9" : "h-11"}`} />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-bold text-3xl tracking-[0.2em] text-primary">MAIA</span>
              <span className="text-[11px] font-semibold tracking-[0.32em] text-muted-foreground mt-1.5">AESTHETICS &amp; WELLNESS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((n) => (
              <div
                key={n.to}
                className="relative"
                onMouseEnter={() => setMegaOpen(!!n.hasMega)}
              >
                <Link
                  to={n.to}
                  className="group flex items-center gap-1 text-sm font-semibold tracking-[0.2em] uppercase text-foreground/85 hover:text-accent transition-colors py-2"
                  activeProps={{ className: "text-accent" }}
                >
                  {n.label}
                  {n.hasMega && <ChevronDown className="h-3 w-3 opacity-60" />}
                  <span className="absolute left-0 right-0 -bottom-0.5 mx-auto h-px w-0 group-hover:w-full bg-gradient-gold transition-all duration-300" />
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+447000000000"
              className="lg:hidden flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary border border-primary/30 rounded-full hover:bg-primary/5"
            >
              <Phone className="h-3.5 w-3.5" /> Call
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-[0.22em] uppercase bg-gradient-gold text-cream rounded-full shadow-soft hover:opacity-90 hover:shadow-md transition-all"
            >
              <Calendar className="h-3.5 w-3.5" /> Book Consultation
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mega menu for Treatments */}
        {megaOpen && (
          <div
            className="hidden lg:block absolute left-0 right-0 bg-background/98 backdrop-blur-xl border-t border-b border-border/60 shadow-lg"
            onMouseEnter={() => setMegaOpen(true)}
          >
            <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <p className="font-display text-2xl text-primary leading-tight">Bespoke Aesthetic Medicine</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Explore our full menu of injectable, regenerative and wellness therapies — each tailored in consultation.
                </p>
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] tracking-[0.25em] uppercase text-accent hover:text-primary transition"
                >
                  View All Treatments →
                </Link>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-x-6 gap-y-4">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    to="/treatments/$slug"
                    params={{ slug: c.slug }}
                    onClick={() => setMegaOpen(false)}
                    className="group block py-2 border-l-2 border-transparent hover:border-accent pl-3 transition-all"
                  >
                    <p className="font-display text-base text-primary group-hover:text-accent transition">{c.title}</p>
                    <p className="text-[11px] tracking-wide text-muted-foreground mt-0.5">{c.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/98 backdrop-blur-xl">
          <div className="px-6 py-5 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] py-3 border-b border-border/40 text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="tel:+447000000000"
                className="flex items-center justify-center gap-2 px-4 py-3 text-[11px] tracking-[0.2em] uppercase border border-primary/30 text-primary rounded-full"
              >
                <Phone className="h-3.5 w-3.5" /> Call
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 text-[11px] tracking-[0.2em] uppercase bg-gradient-gold text-cream rounded-full"
              >
                <Calendar className="h-3.5 w-3.5" /> Book
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-5 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              <Clock className="h-3 w-3" /> Mon–Sat · 10–19
              <span className="ml-auto flex items-center gap-2">
                <MapPin className="h-3 w-3" /> London
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
