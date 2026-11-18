import {
  collections,
  productCategories,
  products,
  type NuronProduct,
} from "./data";

export const allProducts: NuronProduct[] = Object.values(products);

export const auctionProducts: NuronProduct[] = allProducts.filter(
  (p) => p.endTimestamp !== null,
);

export const allCategories: string[] = Array.from(
  new Set(allProducts.flatMap((p) => p.categories)),
).sort();

export function priceOf(p: NuronProduct): string {
  return `$${(parseInt(p.priceUSD, 10) / 100).toFixed(2)}`;
}

/** Featured image for each blog post, mapped from the original blog list page.
 *  Files verified to exist under public/sites/nuron/wp-content/uploads/2023/03/. */
export const BLOG_IMAGES: Record<string, string> = {
  "top-image-resources-for-great-artists-and-nfts":
    "/sites/nuron/wp-content/uploads/2023/03/nuron-blog-image-10.jpg",
  "nfts-are-too-important-for-the-best-artists":
    "/sites/nuron/wp-content/uploads/2023/03/nuron-blog-image-0.jpg",
  "best-wp-theme-provider-in-nft-market":
    "/sites/nuron/wp-content/uploads/2023/03/nuron-blog-image-1.jpg",
  "rare-art-from-the-best-artists":
    "/sites/nuron/wp-content/uploads/2023/03/nuron-blog-image-3.jpg",
  "canada-is-a-great-fact-for-nfts":
    "/sites/nuron/wp-content/uploads/2023/03/nuron-blog-image-5.jpg",
  "invalid-purpose-classes-motivation":
    "/sites/nuron/wp-content/uploads/2023/03/nrb-11.jpg",
  "important-skills-for-designers":
    "/sites/nuron/wp-content/uploads/2023/03/nuron-blog-image-2.jpg",
  "the-services-provide-for-the-design":
    "/sites/nuron/wp-content/uploads/2023/03/blog-02.jpg",
  "have-you-heard-agency-is-your-best-bet-to-grow":
    "/sites/nuron/wp-content/uploads/2020/04/nuron-blog-image-4.jpg",
  "agency-works-only-under-these-conditions":
    "/sites/nuron/wp-content/uploads/2023/03/nrb-8.jpg",
  "top-10-tips-to-grow-your-agency":
    "/sites/nuron/wp-content/uploads/2020/04/nuron-blog-image-5.jpg",
  "there-are-many-variations-of-passages-of-lorem-ipsum-available":
    "/sites/nuron/wp-content/uploads/2023/03/nrb-6.jpg",
  "getting-tickets-to-the-big-show":
    "/sites/nuron/wp-content/uploads/2020/04/nuron-blog-image-6.jpg",
  "revolutionize-your-agency-with-these-easy-peasy-tips":
    "/sites/nuron/wp-content/uploads/2020/04/nuron-blog-image-0.jpg",
  "link-post-example":
    "/sites/nuron/wp-content/uploads/2023/03/nrb-1.jpg",
};

/** Collection collage images (same mapping as TopCollections in sections.tsx). */
export const COLLECTION_COLLAGE: Record<string, string[]> = {
  art: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-7.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-2.jpg",
  ],
  music: [
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-2.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-4.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-5.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-6.jpg",
  ],
  collectible: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-3.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-4.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-5.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-6.jpg",
  ],
  games: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-8.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-9.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-3-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-7.jpg",
  ],
  photography: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-5.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-9.jpg",
  ],
};

export function collectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}

/** Products in a WooCommerce category slug, including descendant sub-categories. */
export function productsInCategory(slug: string): NuronProduct[] {
  const root = productCategories.find((c) => c.slug === slug);
  if (!root) return [];
  const ids = new Set<number>([root.id]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const c of productCategories) {
      if (ids.has(c.parent) && !ids.has(c.id)) {
        ids.add(c.id);
        grew = true;
      }
    }
  }
  const names = new Set(
    productCategories.filter((c) => ids.has(c.id)).map((c) => c.name),
  );
  return allProducts.filter((p) => p.categories.some((cat) => names.has(cat)));
}

export function categoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}
