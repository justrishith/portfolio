/**
 * Single source of truth for site copy + outbound links.
 * Every fact here is from Rishith directly. No hardcoded
 * handles or URLs in components — import from here.
 */

export const site = {
  name: "Rishith Karnati",
  role: "Grade 10 · Irvington High, Bay Area",
  tagline: "AI, robots, trails. Filmed.",
  description:
    "Rishith Karnati. Grade 10, Irvington High. FTC robotics, Sentinel Hacks, Troop 199, trail film.",
  url: "https://justrishith.vercel.app",
  coords: "37.5485°N, 121.9886°W",
  status: "SHIPPING",
  version: "V2 RAW",
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
  "JAN 9 2027",
  "TROOP 199",
  "DAVINCI RESOLVE",
  "BERKELEY BOUND",
  "BUILT RAW",
  "NO TEMPLATE",
] as const;

export const facts = [
  { label: "TEAM №", value: "32678", note: "FTC Sentinels" },
  { label: "TROOP", value: "199", note: "Senior Patrol Leader" },
  { label: "SHIPPED", value: "04", note: "Projects" },
  { label: "HACKATHON", value: "JAN 9 27", note: "Sentinel Hacks" },
] as const;

export type Project = {
  readonly name: string;
  readonly year: string;
  readonly stack: string;
  readonly blurb: string;
  readonly open: string;
};

export const projects: readonly Project[] = [
  {
    name: "Sentinel Hacks",
    year: "2027",
    stack: "ORGANIZER",
    blurb: "Free student hackathon. Bay Area. Through FTC 32678.",
    open: links.sentinelHacks,
  },
  {
    name: "Numa",
    year: "2026",
    stack: "VOICE AI",
    blurb: "Ambient voice agent inside the OpenCode desktop app.",
    open: links.github,
  },
  {
    name: "LinkUp",
    year: "2026",
    stack: "NEXT.JS",
    blurb: "Friend group space. Events, ideas, expenses.",
    open: "https://linkup-vjvg.vercel.app",
  },
  {
    name: "Threadline",
    year: "2026",
    stack: "MARKDOWN",
    blurb: "Plain text memory for AI coding agents.",
    open: "https://justrishith.github.io/threadline/",
  },
];

export const leadership = [
  {
    role: "Programmer + Outreach",
    org: "Sentinels FTC #32678",
    detail: "Java. Robots. Sponsors.",
  },
  {
    role: "Organizer",
    org: "Sentinel Hacks",
    detail: "Sponsors. Venue. Event day.",
  },
  {
    role: "Senior Patrol Leader",
    org: "Troop 199",
    detail: "50 Scouts. Camping. Teaching.",
  },
  {
    role: "Science Volunteer",
    org: "Fridays",
    detail: "Science for younger kids.",
  },
] as const;

export const photos = [
  {
    src: "/photos/shasta.jpg",
    alt: "Mount Shasta above a forested ridge",
    caption: "SHASTA",
  },
  {
    src: "/photos/lake-log.jpg",
    alt: "Sitting on a log at the edge of an alpine lake",
    caption: "ALPINE AM",
  },
  {
    src: "/photos/trail-friends.jpg",
    alt: "Two hikers looking out over a granite-ringed lake",
    caption: "ON TRAIL",
  },
  {
    src: "/photos/lake-trees.jpg",
    alt: "A lake seen through pine trees",
    caption: "TREES",
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
