import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socials = [
  { href: "https://wa.me/447758604949", label: "WhatsApp", Icon: MessageCircle },
  { href: "https://instagram.com/maia_aesthetics_clinic", label: "Instagram", Icon: Instagram },
  { href: "https://facebook.com/", label: "Facebook", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-beige/70">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <h3 className="font-display text-6xl md:text-7xl text-gradient-gold mb-3 leading-none">MAIA</h3>
          <p className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-6 font-semibold">Aesthetics &amp; Wellness Clinic</p>
          <p className="text-sm text-foreground/70 max-w-md leading-[1.85]">
            Bespoke aesthetic medicine and wellness therapies, delivered with clinical excellence and an unwavering commitment to natural, refined results.
          </p>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5 font-semibold">Explore</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><Link to="/treatments" className="story-link hover:text-accent">Treatments</Link></li>
            <li><Link to="/about" className="story-link hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="story-link hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5 font-semibold">Connect</h4>
          <ul className="space-y-3 text-sm text-foreground/70 mb-6">
            <li><a href="https://wa.me/447758604949" className="story-link hover:text-accent">WhatsApp 07758 604949</a></li>
            <li><a href="https://instagram.com/maia_aesthetics_clinic" className="story-link hover:text-accent">@maia_aesthetics_clinic</a></li>
          </ul>
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group h-11 w-11 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:bg-gradient-gold hover:text-cream hover:border-transparent transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-[11px] text-muted-foreground tracking-[0.25em] uppercase">
        © {new Date().getFullYear()} Maia Aesthetics &amp; Wellness Clinic
      </div>
    </footer>
  );
}
