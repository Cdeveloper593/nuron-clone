import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { products, type NuronProduct } from "@/components/sites/nuron/data";
import {
  collectionArchiveBySlug,
  collectionArchives,
} from "@/components/sites/nuron/taxonomy-data";

export function generateStaticParams() {
  return collectionArchives.map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collectionArchiveBySlug(slug);
  if (!collection) notFound();
  const items: NuronProduct[] = collection.products
    .map((s) => products[s])
    .filter((p): p is NuronProduct => Boolean(p));
  const parent = collection.parent
    ? collectionArchiveBySlug(collection.parent)
    : undefined;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/our-collections" },
    ...(parent
      ? [{ label: parent.name, href: `/collection/${parent.slug}` }]
      : []),
    { label: collection.name },
  ];
  const resultText =
    items.length === 0
      ? ""
      : items.length === 1
        ? "Showing the single result"
        : `Showing all ${items.length} results`;
  return (
    <>
      <Breadcrumb title={collection.name} crumbs={crumbs} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Collection</span><h3 className="title">{collection.name}</h3><p>{resultText || "No products in this collection on the source site."}</p></div>
        {items.length > 0 && (
          <p className="woocommerce-result-count">{resultText}</p>
        )}
        <div className="product-grid cols-4">
          {items.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
        {items.length === 0 && (<div className="woocommerce-info">No products were found</div>)}
      </div></section>
    </>
  );
}
