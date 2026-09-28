/**
 * Single source of truth for site copy + outbound links.
 * Every fact here is from Rishith directly. No hardcoded
 * handles or URLs in components — import from here.
 */

export const site = {
  name: "Rishith Karnati",
  role: "Grade 10 · Irvington High School, Bay Area",
  tagline: "AI, robots, and trails — then I film the whole thing.",
  description:
    "Rishith Karnati — Grade 10 at Irvington High School. FTC robotics, Sentinel Hacks organizer, Scouts SPL, trail film.",
  url: "https://justrishith.vercel.app",
} as const;

export const links = {
  email: "mailto:krishith25@gmail.com",
  emailText: "krishith25@gmail.com",
  github: "https://github.com/justrishith",
  linkedin: "https://www.linkedin.com/in/rishith-karnati-5498bb409/",
  instagram: "https://www.instagram.com/_rishith_k/",
  films: "https://www.instagram.com/rishithfilms_/",
  facebook: "https://www.facebook.com/rishith.karnati/",
  discord: "_rishith_k",
  sentinelHacks: "https://sentinelhacks.tech",
  sentinelsTeam: "https://www.sentinelsftc.tech/",
  siteSource: "https://github.com/justrishith/portfolio",
} as const;

export const tickerItems = [
  "JAVA",
  "FTC 32678",
  "SENTINEL HACKS",
  "JAN 9 · 2027",
  "TROOP 199",
  "DAVINCI RESOLVE",
  "BERKELEY-BOUND",
  "BUILT RAW",
  "NO TEMPLATE",
] as const;

export const facts = [
  { label: "TEAM №", value: "32678", note: "FTC Sentinels — code + outreach" },
  { label: "TROOP", value: "199", note: "Senior Patrol Leader" },
  { label: "SHIPPED", value: "04", note: "Projects and counting" },
  { label: "HACKATHON", value: "JAN 9 27", note: "Sentinel Hacks organizer" },
] as const;

export type Project = {
  readonly name: string;
  readonly year: string;
  readonly stack: string;
  readonly blurb: string;
  readonly open: string;
  readonly source: string;
};

export const projects: readonly Project[] = [
  {
    name: "Sentinel Hacks",
    year: "2027",
    stack: "Organizer · Outreach",
    blurb: "Free student-run Bay Area hackathon through FTC Sentinels #32678.",
    open: links.sentinelHacks,
    source: links.sentinelsTeam,
  },
  {
    name: "Numa",
    year: "2026",
    stack: "Voice AI · OpenCode",
    blurb:
      "Ambient voice agent integrated into the OpenCode desktop app — tuned through OpenCode directly.",
    open: links.github,
    source: links.github,
  },
  {
    name: "LinkUp",
    year: "2026",
    stack: "Next.js · Supabase",
    blurb: "Shared space for friend groups — events, ideas, expenses, memories.",
    open: "https://linkup-vjvg.vercel.app",
    source: "https://github.com/justrishith/linkup",
  },
  {
    name: "Threadline",
    year: "2026",
    stack: "Markdown · AI tooling",
    blurb: "Plain-Markdown workspace so AI coding agents resume work across sessions.",
    open: "https://justrishith.github.io/threadline/",
    source: "https://github.com/justrishith/threadline",
  },
];

export const leadership = [
  {
    role: "Programmer + Outreach Lead",
    org: "Sentinels FTC #32678",
    detail: "Learning Java and robotics software; running sponsorships and outreach.",
  },
  {
    role: "Organizer",
    org: "Sentinel Hacks",
    detail: "Leading a free student hackathon — sponsors, venue, event day.",
  },
  {
    role: "Senior Patrol Leader",
    org: "Scouts BSA · Troop 199",
    detail: "Running the troop week to week; camping, backpacking, teaching younger Scouts.",
  },
  {
    role: "Science Volunteer",
    org: "Friday teaching",
    detail: "Teaching science to younger kids, every week.",
  },
] as const;

export const photos = [
  {
    src: "/photos/shasta.jpg",
    alt: "Mount Shasta above a forested ridge",
    caption: "MOUNT SHASTA, CA",
  },
  {
    src: "/photos/lake-log.jpg",
    alt: "Sitting on a log at the edge of an alpine lake",
    caption: "ALPINE LAKE MORNINGS",
  },
  {
    src: "/photos/trail-friends.jpg",
    alt: "Two hikers looking out over a granite-ringed lake",
    caption: "ON THE TRAIL",
  },
  {
    src: "/photos/lake-trees.jpg",
    alt: "A lake seen through pine trees",
    caption: "THROUGH THE TREES",
  },
] as const;

export type Social = {
  readonly label: string;
  readonly text: string;
  readonly href?: string;
};

export const socials: readonly Social[] = [
  { label: "EMAIL", href: links.email, text: links.emailText },
  { label: "GITHUB", href: links.github, text: "justrishith" },
  { label: "LINKEDIN", href: links.linkedin, text: "rishith-karnati" },
  { label: "INSTAGRAM", href: links.instagram, text: "_rishith_k" },
  { label: "FILM", href: links.films, text: "rishithfilms_" },
  { label: "FACEBOOK", href: links.facebook, text: "rishith.karnati" },
  { label: "DISCORD", text: "_rishith_k" },
] as const;
