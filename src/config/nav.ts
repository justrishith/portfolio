/**
 * Navigation configuration.
 * Single source of truth so every shell, sitemap, and breadcrumb
 * derives from the same data.
 */

import {
  type LucideIcon,
  House,
  User,
  FolderKanban,
  Mail,
} from "lucide-react";

export type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
  readonly external?: boolean;
};

export const sidebarNav: readonly NavItem[] = [
  { label: "Home", href: "/", icon: House },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Contact", href: "/contact", icon: Mail },
] as const;
