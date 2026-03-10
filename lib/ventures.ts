/**
 * Feeshnet Portfolio — Three-tier system
 *
 * VENTURES  → Has paying external customers or is the primary business
 * LABS      → Built and functional, being validated — no external revenue yet
 * SIDE      → Shipped for fun/curiosity, not actively pursuing revenue
 *
 * Graduation path:
 *   Side Project → Labs    (when you start seriously pursuing it as a business)
 *   Labs → Venture         (when it has a paying external customer)
 */

export type Tier = "venture" | "lab" | "side";

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tier: Tier;
  status: string;
  category: string;
  url?: string;
  color: string;
}

export const projects: Project[] = [
  // ── Ventures ──────────────────────────────────────────
  {
    name: "Haven at Home",
    tagline: "AI-powered home healthcare operations",
    description:
      "An AI operations assistant for independent physiotherapists — handles scheduling, billing, documentation, and agency coordination so the PT focuses on clinical care.",
    tier: "venture",
    status: "Primary Business",
    category: "Healthcare",
    url: "https://havenathome.ca",
    color: "#10B981",
  },
  {
    name: "eVisa Liberia",
    tagline: "Digital visa processing for West Africa",
    description:
      "Streamlined electronic visa application platform for Liberia. Processing real applications and generating revenue.",
    tier: "venture",
    status: "Revenue Active",
    category: "GovTech",
    url: "https://evisaliberia.com",
    color: "#3B82F6",
  },

  // ── Labs ──────────────────────────────────────────────
  {
    name: "SignSeal",
    tagline: "PHIPA-compliant e-signatures for healthcare",
    description:
      "Healthcare-grade electronic signature infrastructure with Ed25519 cryptographic sealing, RFC 3161 timestamps, audit trails, and full Ontario PHIPA compliance.",
    tier: "lab",
    status: "Validating",
    category: "Healthcare / Legal",
    color: "#8B5CF6",
  },

  // ── Side Projects ─────────────────────────────────────
  {
    name: "BookLinks",
    tagline: "Discover books referenced inside your favorite reads",
    description:
      "Interactive reference graph visualization. Search a book, see every book it references, and explore the web of ideas connecting them.",
    tier: "side",
    status: "Shipped",
    category: "Books",
    url: "https://www.booklinks.co",
    color: "#F59E0B",
  },
  {
    name: "Qorum",
    tagline: "AI-generated activities where strangers meet up — no host required",
    description:
      "An activities platform where AI creates events (tennis, karaoke, board games), strangers RSVP, and when the threshold is met — it happens. Removing the host as the friction point.",
    tier: "side",
    status: "Built",
    category: "Social",
    color: "#EC4899",
  },
  {
    name: "Daily Connect",
    tagline: "A simple way to let your loved ones know you're okay, every day",
    description:
      "Lightweight daily check-in app for families. One tap to say you're okay — peace of mind without the awkward \"just checking in\" text.",
    tier: "side",
    status: "Built",
    category: "Family",
    color: "#EF4444",
  },
  {
    name: "Universal Tip Tool",
    tagline: "AI-powered explanations for any UI element on the web",
    description:
      "Chrome extension that explains any element you hover over. Hover 1.5 seconds, get an intelligent tooltip powered by GPT-4o-mini. Built for making the web more accessible.",
    tier: "side",
    status: "Built",
    category: "Developer Tools",
    color: "#06B6D4",
  },
  {
    name: "Team Photo Tool",
    tagline: "Themed AI photo generators for creative teams",
    description:
      "Generate styled team photos — action figure packaging, neon portraits, reggaeton album covers. A fun creative tool for branding and social content.",
    tier: "side",
    status: "Built",
    category: "Creative",
    color: "#A855F7",
  },
];

export const ventures = projects.filter((p) => p.tier === "venture");
export const labs = projects.filter((p) => p.tier === "lab");
export const sideProjects = projects.filter((p) => p.tier === "side");
