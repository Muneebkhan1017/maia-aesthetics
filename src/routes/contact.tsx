import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maia Aesthetics & Wellness Clinic" },
      { name: "description", content: "Book your consultation or get in touch with Maia Aesthetics & Wellness Clinic via WhatsApp, Instagram or email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Get In Touch</p>
        <h1 className="h1-editorial text-primary mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>Book Your <em className="not-italic italic text-gradient-gold">Visit</em></h1>
        <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-16">
          We'd love to welcome you. Reach out via WhatsApp for the fastest response, or DM us on social.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 grid sm:grid-cols-2 gap-6">
        <a href="https://wa.me/447758604949" className="group bg-card border border-border/60 p-8 rounded-sm hover:shadow-luxe hover:border-accent/40 transition">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">WhatsApp</p>
          <p className="font-display text-2xl text-primary group-hover:text-gradient-gold">07758 604 949</p>
          <p className="mt-3 text-sm text-muted-foreground">Tap to chat — fastest response.</p>
        </a>
        <a href="https://instagram.com/maia_aesthetics_clinic" className="group bg-card border border-border/60 p-8 rounded-sm hover:shadow-luxe hover:border-accent/40 transition">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Instagram</p>
          <p className="font-display text-2xl text-primary group-hover:text-gradient-gold">@maia_aesthetics_clinic</p>
          <p className="mt-3 text-sm text-muted-foreground">DM us — see our latest work.</p>
        </a>
        <a href="https://www.tiktok.com/@maia_aesthetics_clinic" className="group bg-card border border-border/60 p-8 rounded-sm hover:shadow-luxe hover:border-accent/40 transition">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">TikTok</p>
          <p className="font-display text-2xl text-primary group-hover:text-gradient-gold">@maia_aesthetics_clinic</p>
          <p className="mt-3 text-sm text-muted-foreground">Watch treatments in action.</p>
        </a>
        <a href="https://facebook.com/" className="group bg-card border border-border/60 p-8 rounded-sm hover:shadow-luxe hover:border-accent/40 transition">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Facebook</p>
          <p className="font-display text-2xl text-primary group-hover:text-gradient-gold">Maia Aesthetics Clinic</p>
          <p className="mt-3 text-sm text-muted-foreground">Reviews & updates.</p>
        </a>
      </div>

      <div className="mx-auto max-w-3xl px-6 mt-20 text-center bg-gradient-warm rounded-sm border border-border/60 p-12">
        <h2 className="font-display text-3xl text-primary mb-3">£60 Consultation</h2>
        <p className="text-foreground/75 max-w-xl mx-auto">
          Want to enhance your image with subtle tweaks but unsure what would suit your structure? Book in for a consultation with our experts and receive a tailored plan.
        </p>
      </div>
    </div>
  );
}
