import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { products, type NuronProduct } from "@/components/sites/nuron/data";
import {
  productTagArchiveBySlug,
  productTagArchives,
} from "@/components/sites/nuron/taxonomy-data";

export function generateStaticParams() {
  return productTagArchives.map((t) => ({ slug: t.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tag = productTagArchiveBySlug(slug);
  if (!tag) notFound();
  const items: NuronProduct[] = tag.products
    .map((s) => products[s])
    .filter((p): p is NuronProduct => Boolean(p));
  const resultText =
    items.length === 0
      ? ""
      : items.length === 1
        ? "Showing the single result"
        : `Showing all ${items.length} results`;
  return (
    <>
      <Breadcrumb
        title={tag.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: `Products tagged “${tag.name}”` },
        ]}
      />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Product Tag</span><h3 className="title">{tag.name}</h3><p>{resultText || "No products carry this tag on the source site."}</p></div>
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
