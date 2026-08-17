export interface ClientSite {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  screenshot: string;
  live?: string;
  status: "Live" | "Case Study";
}

export const clientSites: ClientSite[] = [
  {
    slug: "smartpath-ai",
    name: "SmartPath AI",
    tagline: "Enterprise AI consultancy platform",
    description:
      "Corporate site for an enterprise AI consultancy spanning 8 service lines and 8 industry verticals — independently designed, built, and deployed end to end, including hosting and domain management.",
    role: "Own product — full-stack build & deployment",
    screenshot: "/screenshots/smartpath-ai.jpg",
    live: "https://smpathai.com",
    status: "Live",
  },
  {
    slug: "smartpath-healthcare",
    name: "SmartPath AI — Healthcare",
    tagline: "HIPAA-aligned front-office automation for clinics",
    description:
      "The healthcare-vertical product site: AI scheduling, 24/7 phone answering, patient intake automation, and no-show prediction for clinics — a separate design and positioning from the corporate site above.",
    role: "Own product — full-stack build & deployment",
    screenshot: "/screenshots/smartpath-healthcare.jpg",
    live: "https://healthcare.smpathai.com",
    status: "Live",
  },
  {
    slug: "compare-window-tint",
    name: "Compare Window Tint",
    tagline: "Window tint comparison & education site",
    description:
      "A comparison-driven marketing site breaking down ceramic vs. dyed vs. hybrid window tint by heat rejection, UV protection, and durability, with deep-dive matchup pages.",
    role: "Freelance client work for ProLayers",
    screenshot: "/screenshots/compare-window-tint.jpg",
    status: "Case Study",
  },
  {
    slug: "cut-the-heat",
    name: "CutHeat",
    tagline: "Residential, commercial & automotive window film",
    description:
      "A service-led site for a heat-reduction window film business, covering residential, commercial, and automotive use cases with a live heat-analysis visual and an expert-guides blog.",
    role: "Freelance client work for ProLayers",
    screenshot: "/screenshots/cut-the-heat.jpg",
    status: "Case Study",
  },
  {
    slug: "smart-window-films",
    name: "Smart Window Films",
    tagline: "Window film technology & product site",
    description:
      "A product-education site explaining the science behind ceramic window film technology, with a film-type comparison table and a 3-step installation process.",
    role: "Freelance client work for ProLayers",
    screenshot: "/screenshots/smart-window-films.jpg",
    status: "Case Study",
  },
  {
    slug: "fmax-fashion",
    name: "F Max Fashion",
    tagline: "Kids' clothing e-commerce catalog",
    description:
      "A product-catalog e-commerce site for a real Karachi-based kids' clothing brand, with category browsing, a full product grid, and a contact/location page.",
    role: "Client work",
    screenshot: "/screenshots/fmax-fashion.jpg",
    status: "Case Study",
  },
];
