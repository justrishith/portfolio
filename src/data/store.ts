/**
 * Static store catalogue.
 *
 * The store is not used in this deployment — arrays are kept (empty
 * items, taxonomy intact) so feature internals still type-check. Add
 * entries here to bring the store back, then re-add the `/store`
 * routes from upstream next-folio history.
 */

import type { StoreCategory, StoreItem } from "@/features/store";

export const storeCategoriesData: readonly StoreCategory[] = [
  {
    id: "cat-source-code",
    slug: "source-code",
    name: "Source Code",
    description: "Repositories, templates, and ready-to-use code.",
  },
  {
    id: "cat-ebook",
    slug: "ebook",
    name: "E-books",
    description: "Long-form reads in PDF or EPUB.",
  },
  {
    id: "cat-design",
    slug: "design",
    name: "Design",
    description: "UI kits, icons, and design assets.",
  },
  {
    id: "cat-tools",
    slug: "tools",
    name: "Tools",
    description: "Small utilities and ready-to-use snippets.",
  },
];

const byCategorySlug = new Map(
  storeCategoriesData.map((c) => [c.slug, c] as const),
);

function categoriesBySlugs(
  slugs: readonly string[],
): readonly StoreCategory[] {
  return slugs
    .map((slug) => byCategorySlug.get(slug))
    .filter((c): c is StoreCategory => c !== undefined);
}

export const storeData: readonly StoreItem[] = [];

void categoriesBySlugs;
