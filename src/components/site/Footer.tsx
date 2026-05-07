import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl text-gradient-gold mb-3">MAIA</h3>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Aesthetics &amp; Wellness Clinic</p>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Bespoke aesthetic medicine and wellness therapies, delivered with clinical excellence and an unwavering commitment to natural, refined results.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/treatments" className="hover:text-accent">Treatments</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="https://wa.me/447758604949" className="hover:text-accent">WhatsApp 07758 604949</a></li>
            <li><a href="https://instagram.com/maia_aesthetics_clinic" className="hover:text-accent">@maia_aesthetics_clinic</a></li>
            <li><a href="https://www.tiktok.com/@maia_aesthetics_clinic" className="hover:text-accent">TikTok</a></li>
            <li><a href="https://facebook.com/" className="hover:text-accent">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground tracking-wide">
        © {new Date().getFullYear()} Maia Aesthetics &amp; Wellness Clinic. All rights reserved.
      </div>
    </footer>
  );
}
