export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Rat Lab Wiki",
  shortName: "Rat Lab",
  logoText: "RL",
  tagline: "Laboratory Escape Guides, Mutations & Codes",
  description: "Rat Lab Wiki provides Roblox Rat Lab guides, mutation tips, gameplay information, role explanations, updates, and everything players need to explore the laboratory.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ratlab.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ratlab.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/105904727825849/Rat-Lab",
  heroVideoId: "YeQwtwyEpCs",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
