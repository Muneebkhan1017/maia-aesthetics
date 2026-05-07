import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Maia Aesthetics Clinic" className="h-9 w-auto" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl tracking-wider text-primary">MAIA</span>
            <span className="text-[9px] tracking-[0.25em] text-muted-foreground">AESTHETICS &amp; WELLNESS</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide uppercase text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="px-5 py-2 text-xs tracking-[0.2em] uppercase bg-gradient-gold text-cream rounded-sm shadow-soft hover:opacity-90 transition">
            Book
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18"/> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-wide py-2">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
