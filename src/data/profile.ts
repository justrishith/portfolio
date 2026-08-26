/**
 * Static profile data.
 *
 * Every fact here traces to LifeOS context files or Rishith's LinkedIn
 * profile (provided 2026-08-26). Nothing invented; placeholders are
 * clearly decorative (avatar initials, stock cover image).
 */

import type { Profile } from "@/features/profile";

export const profileData: Profile = {
  id: "me",
  name: "Rishith Karnati",
  handle: "justrishith",
  title: "Software Developer",
  avatarUrl: "/avatar.svg",
  coverUrl: "/cover.svg",
  bio: "High-school builder shipping small products with AI.",
  location: "Fremont, California",
  verified: false,
  about: [
    "I'm Rishith — a high-school software developer at Irvington High School (class of 2029) interested in computer science, artificial intelligence, and building useful technology.",
    "I learn software by shipping small, understandable products instead of generating code I can't explain. That philosophy produced Threadline, an open-source AI-workspace template, and LinkUp, a web app for friend groups built with Next.js and Supabase.",
    "Outside technical work I serve as an AI/ML Club Officer and as a Senior Patrol Leader in Scouts BSA, leading about 50 Scouts and running 15+ troop events — experience in leadership, organization, teaching, and collaboration.",
    "Currently working through Harvard's CS50 and strengthening my Python and front-end foundations. I'm open to internships and learning opportunities with early-stage teams.",
  ],
  skills: [
    { name: "Software Development", category: "Core" },
    { name: "Artificial Intelligence", category: "AI" },
    { name: "Prompt Engineering", category: "AI" },
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
    { name: "JavaScript", category: "Web" },
    { name: "Next.js", category: "Web" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
  ],
  experiences: [
    {
      id: "aiml-officer",
      company: "AI/ML Club — Irvington High School",
      role: "AI/ML Club Officer",
      employmentType: "Leadership",
      location: "Fremont, California",
      startDate: "2026-08-01",
      endDate: null,
      description:
        "Helping organize and support an AI/ML-focused student community.",
      bullets: [
        "Collaborate with students interested in artificial intelligence and machine learning.",
        "Help plan activities and learning opportunities around AI/ML.",
        "Explore practical applications of emerging AI technologies.",
      ],
      tags: ["AI/ML", "Teaching", "Community"],
    },
    {
      id: "senior-patrol-leader",
      company: "Boy Scouts of America",
      role: "Senior Patrol Leader",
      employmentType: "Leadership",
      location: "Fremont, California",
      startDate: "2026-02-01",
      endDate: null,
      description:
        "Top youth leadership role in the troop — running the program week to week.",
      bullets: [
        "Lead weekly troop meetings and coordinate activities for ~50 Scouts.",
        "Planned and executed 15+ troop events, including camping and backpacking trips.",
        "Delegated responsibilities and coordinated logistics across Scouts and adult leadership.",
        "Helped create and run activities that develop younger Scouts' leadership and outdoor skills.",
      ],
      tags: ["Leadership", "Logistics", "Mentoring"],
    },
  ],
};
