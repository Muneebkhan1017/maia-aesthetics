export type Treatment = {
  name: string;
  price: string;
  duration?: string;
  downtime?: string;
  method?: string;
  about?: string;
  science?: string;
  process?: string;
  aftercare?: string;
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  treatments: Treatment[];
};

export const categories: Category[] = [
  {
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    tagline: "Restore volume. Refine contour.",
    intro:
      "Hyaluronic acid based dermal fillers used to enhance facial contours, restore lost volume, soften lines and create natural balance.",
    treatments: [
      { name: "0.5ml Lips", price: "£95" },
      { name: "1.1ml Lip Filler", price: "£165" },
      { name: "Russian Lips 0.5ml", price: "£125" },
      { name: "Russian Lips 1ml", price: "£200" },
      { name: "Tear Trough", price: "£289 – £389" },
      { name: "Marionette Lines", price: "£250" },
      { name: "Naso Folds", price: "£250" },
      { name: "Jaw", price: "£220" },
      { name: "Chin", price: "£180" },
      { name: "1.1ml Cheeks", price: "£250" },
      { name: "2.2ml Cheeks", price: "£350" },
      { name: "3ml Package", price: "£350" },
      { name: "4ml Package", price: "£450" },
      { name: "5ml Package", price: "£530" },
    ],
    // shared section info below applied across page header
  },
  {
    slug: "anti-wrinkle",
    title: "Anti Wrinkle",
    tagline: "Smooth lines. Preserve expression.",
    intro:
      "Botulinum toxin injections relax targeted facial muscles to soften dynamic lines and prevent deeper wrinkles.",
    treatments: [
      { name: "1 Area", price: "£80" },
      { name: "2 Areas", price: "£160" },
      { name: "3 Areas", price: "£190" },
      { name: "4 Areas", price: "£220" },
      { name: "Forehead Lines", price: "£80" },
      { name: "Frown Lines", price: "£80" },
      { name: "Crows Feet (outer eye)", price: "£80" },
      { name: "Bunny Lines (nose)", price: "£80" },
      { name: "Lip Flip", price: "£150" },
      { name: "Brow Lift", price: "£160" },
      { name: "Downturned Mouth", price: "£170" },
      { name: "Pebble / Dimpled Chin", price: "£170" },
      { name: "Jawline Slimming / Teeth Grinding", price: "£220" },
      { name: "Neck", price: "£220" },
      { name: "Excessive Sweat", price: "£270" },
    ],
  },
  {
    slug: "im-iv-drip-therapy",
    title: "IM / IV Drip Therapy",
    tagline: "Wellness from within.",
    intro:
      "Intramuscular shots and intravenous infusions deliver vitamins, minerals and antioxidants directly into the bloodstream for maximum absorption.",
    treatments: [
      { name: "Vitamin Shots: B12 / Vit C / Vit D / B Complex / Biotin", price: "£35" },
      { name: "Iron Infusion", price: "£199" },
      { name: "Hydrate Infusion", price: "£180" },
      { name: "Multivitamin Infusion", price: "£220" },
      { name: "Myers Cocktail", price: "£330" },
      { name: "Hair Growth Drip", price: "£220" },
      { name: "Hangover Detox", price: "£250" },
      { name: "Glutathione Therapy", price: "£300" },
    ],
  },
  {
    slug: "prp-therapy",
    title: "PRP Therapy",
    tagline: "Your body's own renewal.",
    intro:
      "Platelet-Rich Plasma uses growth factors from your own blood to stimulate collagen, regenerate tissue and restore hair growth.",
    treatments: [
      { name: "LED Light Therapy", price: "£99" },
      { name: "PRP Hair Restoration", price: "£250" },
      { name: "Vampire Facial", price: "£250" },
      { name: "Under Eye Rejuvenation", price: "£250" },
      { name: "Exomes", price: "£120" },
    ],
  },
  {
    slug: "wet-cupping-therapy",
    title: "Wet Cupping Therapy",
    tagline: "Ancient healing, modern technique.",
    intro:
      "Hijama / wet cupping draws stagnant blood and toxins from targeted areas, supporting circulation, recovery and detoxification.",
    treatments: [
      { name: "6 Cups", price: "£35" },
      { name: "8 Cups", price: "£50" },
      { name: "10 Cups", price: "£10" },
      { name: "12 Cups", price: "£20" },
    ],
  },
  {
    slug: "smpu",
    title: "Semi-Permanent Makeup",
    tagline: "Wake up flawless.",
    intro:
      "Cosmetic tattooing techniques using fine needles to deposit pigment in the upper layers of the skin for natural, long-lasting results.",
    treatments: [
      { name: "Microblading", price: "£250" },
      { name: "Microshading", price: "£250" },
      { name: "Combination Brows", price: "£300" },
      { name: "Eye Liner", price: "£350" },
      { name: "Lip Blush", price: "£350" },
      { name: "Lip Liner", price: "£280" },
      { name: "Ombre Lips", price: "£300" },
      { name: "Skin Camouflage", price: "£120" },
    ],
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    tagline: "Refine, renew, glow.",
    intro:
      "Bespoke clinical facials and advanced skin treatments to address texture, tone, hydration and signs of ageing.",
    treatments: [
      { name: "Dermaplane", price: "£35" },
      { name: "Extraction Facial", price: "£50" },
      { name: "Add Jelly / Sheet Mask", price: "£10" },
      { name: "Add LED Light Therapy", price: "£20" },
      { name: "Microneedling", price: "£75" },
      { name: "Add Skin Boosters", price: "£80" },
      { name: "Add Polynucleotides", price: "£90" },
      { name: "Add Exomes", price: "£90" },
      { name: "Add Profhilo", price: "£120" },
    ],
  },
  {
    slug: "fat-dissolve",
    title: "Fat Dissolve",
    tagline: "Targeted contour, no surgery.",
    intro:
      "Injectable fat dissolving solutions break down stubborn pockets of fat in localised areas for a more sculpted silhouette.",
    treatments: [
      { name: "Chin", price: "£89" },
      { name: "Lower Abdomen", price: "£179" },
      { name: "Upper Abdomen", price: "£179" },
      { name: "Back Rolls", price: "£179" },
      { name: "Lower Back", price: "£189" },
      { name: "Inner Thigh", price: "£199" },
      { name: "Outer Thigh", price: "£189" },
    ],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    tagline: "Smooth, lasting results.",
    intro:
      "Medical-grade laser energy targets the melanin in hair follicles, disabling future growth for long-term hair reduction.",
    treatments: [
      { name: "Upper Lip", price: "£35" },
      { name: "Chin", price: "£38" },
      { name: "Full Face", price: "£45" },
      { name: "Neck", price: "£35" },
      { name: "Shoulders", price: "£65" },
      { name: "Back", price: "£65" },
      { name: "Chest", price: "£55" },
      { name: "ForeArms", price: "£50" },
      { name: "Full Arms", price: "£60" },
      { name: "Under Arms", price: "£45" },
      { name: "Navel", price: "£35" },
      { name: "Stomach", price: "£40" },
      { name: "Lower Back", price: "£45" },
      { name: "Fingers", price: "£28" },
      { name: "Half Leg", price: "£45" },
      { name: "Full Leg", price: "£65" },
      { name: "Bikini Line", price: "£48" },
      { name: "Hollywood", price: "£65" },
      { name: "Full Body Head to Toe", price: "£200" },
      { name: "8 Sessions Full Body", price: "£1500" },
      { name: "12 Sessions Full Body", price: "£2200" },
    ],
  },
  {
    slug: "threading",
    title: "Threading",
    tagline: "Precision shaping.",
    intro:
      "Ancient hair removal technique using a twisted cotton thread to lift hair directly from the follicle, leaving clean, defined lines.",
    treatments: [
      { name: "Eyebrows", price: "£10" },
      { name: "Thread & Tint", price: "£20" },
      { name: "HD Brows", price: "£25" },
      { name: "Beard Line Up", price: "£15" },
      { name: "Full Face", price: "£25" },
    ],
  },
  {
    slug: "lashes",
    title: "Lashes",
    tagline: "Eyes that speak.",
    intro:
      "From subtle lifts to dramatic Hollywood volume — semi-permanent lash treatments tailored to your eye shape and lifestyle.",
    treatments: [
      { name: "Lash Lift", price: "£45" },
      { name: "Lash Lift & Tint", price: "£50" },
      { name: "Classic", price: "£45" },
      { name: "Hybrid Lashes", price: "£50" },
      { name: "Russian Lashes", price: "£55" },
      { name: "Mega Volume", price: "£65" },
      { name: "Vegas Wispy", price: "£75" },
    ],
  },
  {
    slug: "hair-makeup",
    title: "Hair & Makeup",
    tagline: "Bridal & event ready.",
    intro:
      "Editorial and bridal hair and makeup services in studio or mobile, designed to last from morning vows to last dance.",
    treatments: [
      { name: "Makeup", price: "£50" },
      { name: "Party Hair", price: "£35" },
      { name: "Hair & Makeup", price: "£85" },
      { name: "Bridal Makeup", price: "£250" },
      { name: "Bridal Hair", price: "£250" },
      { name: "Bridal Hair & Makeup", price: "£500" },
      { name: "Groups of 3+ Per Person", price: "£75" },
      { name: "Mobile Fee", price: "£20" },
      { name: "Add Strip Lashes", price: "£5" },
    ],
  },
  {
    slug: "piercings",
    title: "Piercings",
    tagline: "Sterile. Precise. Personal.",
    intro:
      "Single-use sterile needle piercings performed in a clinical environment, with quality jewellery and full aftercare guidance.",
    treatments: [
      { name: "Lobe", price: "£25" },
      { name: "Double Lobe", price: "£35" },
      { name: "Cartilage", price: "£25" },
      { name: "Nipple", price: "£35" },
      { name: "Double Nipple", price: "£60" },
      { name: "Navel", price: "£30" },
      { name: "Medusa", price: "£30" },
      { name: "Eyebrow", price: "£30" },
      { name: "Upper/Lower Lip", price: "£30" },
      { name: "Septum", price: "£35" },
      { name: "Dermals", price: "£45" },
      { name: "Nose", price: "£25" },
    ],
  },
];

export type CategoryInfo = {
  about: string;
  science: string;
  process: string;
  duration: string;
  downtime: string;
  method: string;
  aftercare: string;
};

export const categoryInfo: Record<string, CategoryInfo> = {
  "dermal-fillers": {
    about: "Dermal fillers are gel-like substances based on hyaluronic acid (HA) — a sugar molecule naturally found in your skin that holds up to 1000x its weight in water. We inject them beneath the skin to add volume, define contours, and rejuvenate areas that have lost youthful structure.",
    science: "HA fillers integrate with your tissue, attracting water molecules to plump and hydrate. Cross-linked HA gels are formulated with different densities — softer gels for lips and tear troughs, firmer gels for cheeks, jaw and chin projection.",
    process: "After consultation and skin prep, the area is numbed with topical anaesthetic. Filler is delivered using either a fine needle (for precision in lips and lines) or a blunt-tip cannula (for cheeks, jaw and tear troughs — minimising bruising and reducing vascular risk).",
    duration: "30 – 60 minutes per area",
    downtime: "Minimal. Some swelling, redness or bruising for 24–72 hours. Full settle by 2 weeks.",
    method: "Needle or cannula, depending on area and indication.",
    aftercare: "Avoid makeup, exercise, alcohol, saunas and facials for 24–48 hours. Sleep elevated and avoid pressure on the treated area for 2 weeks.",
  },
  "anti-wrinkle": {
    about: "Anti-wrinkle injections use a purified neuromodulator (botulinum toxin type A) to temporarily relax the muscles responsible for dynamic expression lines.",
    science: "The toxin blocks acetylcholine release at the neuromuscular junction, preventing the targeted muscle from contracting. Without repeated folding, the overlying skin smooths and existing lines soften over time.",
    process: "Tiny amounts are delivered with an ultra-fine 30G+ needle into precise muscle points mapped during consultation. The treatment itself takes 10–15 minutes.",
    duration: "15 minutes",
    downtime: "None. Pinprick marks and mild redness settle within an hour. Results begin in 3–5 days, peak at 2 weeks, and last 3–4 months.",
    method: "Fine needle micro-injections.",
    aftercare: "No lying flat, no exercise, no facials and no rubbing the area for 4 hours. Avoid alcohol for 24 hours.",
  },
  "im-iv-drip-therapy": {
    about: "Intramuscular (IM) shots and intravenous (IV) drips deliver vitamins, minerals and antioxidants directly into the body, bypassing the digestive system for near-100% bioavailability.",
    science: "Oral supplements are subject to gut absorption — often less than 20% reaches the bloodstream. IV/IM bypasses this entirely, allowing therapeutic doses of B vitamins, vitamin C, glutathione, amino acids and minerals to support energy, immunity, skin and recovery.",
    process: "After a wellness consultation, IM shots are delivered into the deltoid in seconds. IV drips are administered via a small cannula in the arm, with the infusion running over 30–60 minutes in a comfortable reclined chair.",
    duration: "IM shots: 5 minutes. IV drips: 30 – 60 minutes.",
    downtime: "None — return to your day immediately. Effects often felt within hours.",
    method: "IM injection or IV cannula infusion.",
    aftercare: "Hydrate well and avoid heavy alcohol the same day for best results.",
  },
  "prp-therapy": {
    about: "Platelet-Rich Plasma uses a concentrated portion of your own blood, rich in growth factors, to trigger natural healing and regeneration in skin and scalp.",
    science: "Platelets release PDGF, VEGF, TGF-β and other growth factors that stimulate fibroblasts to produce new collagen and elastin, recruit stem cells, and improve microcirculation — leading to thicker hair, brighter skin and reduced pigmentation.",
    process: "A small blood sample is drawn, spun in a centrifuge to isolate the platelet layer, then either injected via fine needle or applied topically with microneedling into the target area.",
    duration: "60 minutes",
    downtime: "Mild redness and swelling for 24–48 hours. Tiny pinpoint marks settle within 1–3 days.",
    method: "Fine needle injection or microneedling delivery.",
    aftercare: "No makeup for 12 hours, no active skincare or sun exposure for 48 hours, no strenuous exercise for 24 hours.",
  },
  "wet-cupping-therapy": {
    about: "Wet cupping (Hijama) is an ancient therapy where suction cups are applied to the skin, followed by tiny superficial scratches that draw out a small amount of stagnant blood.",
    science: "The negative pressure improves microcirculation, lymphatic drainage and oxygenation in tissues. The controlled extraction is believed to remove inflammatory mediators and metabolic waste, supporting recovery, pain relief and detoxification.",
    process: "Skin is cleaned and sterilised. Cups are applied for a few minutes to draw blood to the surface, removed, and a sterile blade is used to make superficial scratches before re-cupping to extract.",
    duration: "30 – 45 minutes",
    downtime: "Circular marks may remain for 3–7 days. No restrictions on activity.",
    method: "Sterile single-use cups and blades.",
    aftercare: "Keep treated areas clean and covered for 24 hours. Avoid swimming pools, saunas and heavy exercise for 48 hours.",
  },
  "smpu": {
    about: "Semi-Permanent Makeup is a cosmetic tattoo technique that deposits pigment into the upper dermis to enhance brows, eyes and lips with natural, long-lasting results.",
    science: "Unlike traditional tattoos, SPMU pigments are formulated to fade gradually over 12–24 months as the skin's natural cell turnover breaks them down — allowing trends and features to evolve.",
    process: "After mapping and colour matching, the area is numbed and a digital machine or manual blade is used to implant pigment in delicate strokes or shaded layers. A top-up session at 6–8 weeks perfects the result.",
    duration: "2 – 3 hours, plus a 6–8 week top-up.",
    downtime: "Slight swelling and darker appearance for 5–7 days. Light scabbing as it heals over 10–14 days.",
    method: "Digital cosmetic tattoo machine or manual microblade.",
    aftercare: "Keep dry for the first 7 days. No makeup, sweating, swimming or sun exposure on the area until fully healed.",
  },
  "skin-care": {
    about: "Our clinical skincare menu combines manual exfoliation, advanced devices and bio-stimulating injectables to address tone, texture, hydration and visible ageing.",
    science: "Treatments such as microneedling create controlled micro-channels that trigger collagen induction; polynucleotides stimulate fibroblast activity; exosomes deliver signalling molecules; Profhilo and skin boosters hydrate and bio-remodel from within.",
    process: "Each session is bespoke. Skin is cleansed, treatment is delivered (manual blade, microneedling pen, or injection of boosters), and finished with calming masks, LED therapy and SPF.",
    duration: "45 – 75 minutes",
    downtime: "Most facials: none. Microneedling and injectables: redness for 24–48 hours.",
    method: "Manual, device-based or injectable depending on protocol.",
    aftercare: "SPF 50 daily, no actives (retinol, acids) for 5–7 days post-microneedling, gentle cleanser only.",
  },
  "fat-dissolve": {
    about: "Injectable fat dissolving treatments use a deoxycholic acid based solution to break down stubborn pockets of subcutaneous fat in localised areas.",
    science: "Deoxycholic acid is a naturally occurring molecule that disrupts the membrane of fat cells (adipocytes), causing them to rupture. The released fat is then metabolised and cleared by the body's lymphatic system over the following weeks.",
    process: "After marking the treatment grid, multiple small injections are delivered using a fine needle across the area. 2–4 sessions, spaced 4–6 weeks apart, are usually required for visible reduction.",
    duration: "30 – 45 minutes per session",
    downtime: "Significant swelling, tenderness and firmness for 7–14 days. Mild bruising possible.",
    method: "Fine needle injection grid.",
    aftercare: "Wear compression where advised, avoid heat (sauna, sunbeds) for 2 weeks, and stay well hydrated to support lymphatic clearance.",
  },
  "laser-hair-removal": {
    about: "Medical-grade laser hair removal delivers targeted light energy that's absorbed by the pigment in the hair follicle, disabling future growth.",
    science: "The laser uses selective photothermolysis: a specific wavelength of light is absorbed by melanin in the follicle and converted to heat, damaging the follicle's growth cells without harming surrounding skin. Effective only on hair in the active growth (anagen) phase — which is why a course is required.",
    process: "Skin is cleansed and shaved. Cooling gel or contact cooling is applied. The handpiece glides over the area, delivering rapid pulses of light. A course of 6–8 sessions, 4–6 weeks apart, is recommended.",
    duration: "10 – 60 minutes depending on area",
    downtime: "None. Mild redness and warmth settle within hours.",
    method: "Medical-grade diode / Nd:YAG laser system.",
    aftercare: "No sun exposure or fake tan for 2 weeks before and after. SPF 50 daily on treated areas. No hot showers or exercise for 24 hours.",
  },
  "threading": {
    about: "Threading is a centuries-old hair removal technique using a doubled, twisted cotton thread to trap and lift unwanted hair directly from the follicle.",
    science: "Because threading removes hair at the follicle (not just cutting it), regrowth is finer and slower than shaving. There are no chemicals, heat or adhesives — making it ideal for sensitive skin and acne-prone areas.",
    process: "The thread is twisted between the technician's fingers and mouth, then rolled across the skin to grasp rows of hair and remove them with precision — perfect for sculpting brows.",
    duration: "5 – 20 minutes",
    downtime: "None. Slight redness for under an hour.",
    method: "100% cotton thread, single-use.",
    aftercare: "Avoid touching the area, makeup or active skincare for a few hours. Cool compress if sensitive.",
  },
  "lashes": {
    about: "From a natural lift of your own lashes to full Hollywood volume sets, our lash treatments are tailored to your eye shape, lifestyle and desired drama.",
    science: "Lash lifts use a gentle keratin-based perming solution to set your natural lashes upward. Extensions are individual synthetic or silk fibres bonded to each natural lash with medical-grade cyanoacrylate adhesive — never to the skin.",
    process: "You relax with eyes closed for the duration. Lashes are isolated one by one with tweezers and bonded — typically 80–150 extensions per eye depending on the style.",
    duration: "Lift: 45 minutes. Full set: 90 – 150 minutes.",
    downtime: "None. Avoid water and steam for 24 hours.",
    method: "Hand-applied with isolation tweezers and medical-grade adhesive.",
    aftercare: "No oil-based products around the eye, brush daily with a spoolie, sleep on your back where possible. Infills every 2–3 weeks.",
  },
  "hair-makeup": {
    about: "Bridal, editorial and event hair and makeup designed to photograph beautifully and last all day — in studio or mobile to your venue.",
    science: "We use long-wear, HD-friendly products formulated to withstand tears, dancing and changes in lighting. Skin prep is treated as seriously as the makeup itself.",
    process: "A pre-event consultation and trial (recommended for bridal) ensures the look is perfected. On the day, we work to a clear timeline with full skin prep, base, sculpting and finishing.",
    duration: "60 – 120 minutes per person.",
    downtime: "None.",
    method: "Professional kit, hygienic single-use applicators.",
    aftercare: "Setting spray and touch-up kit provided on request.",
  },
  "piercings": {
    about: "Professional needle piercings performed in a sterile clinical environment by trained technicians, with quality implant-grade jewellery.",
    science: "We use a single-use sterile cannula needle (never a piercing gun, which crushes tissue and can't be sterilised). Implant-grade titanium or 14k gold is used to minimise reaction during healing.",
    process: "The site is cleansed, marked and approved with you. The needle creates a clean channel and the jewellery is inserted in one smooth motion. Healing times vary by location (lobe ~6 weeks, cartilage 6–12 months).",
    duration: "10 – 20 minutes",
    downtime: "Tenderness for several days. Full healing varies by site.",
    method: "Single-use sterile cannula needle.",
    aftercare: "Saline spray twice daily, no twisting or changing jewellery until fully healed, no swimming pools or hot tubs.",
  },
};
