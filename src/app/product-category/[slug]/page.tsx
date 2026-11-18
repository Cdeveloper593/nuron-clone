import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { productCategories } from "@/components/sites/nuron/data";
import { categoryBySlug, productsInCategory } from "@/components/sites/nuron/subpages-data";

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();
  const items = productsInCategory(slug);
  const subcats = productCategories.filter((c) => c.parent === category.id);
  return (
    <>
      <Breadcrumb title={category.name} crumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: category.name }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Product Category</span><h3 className="title">{category.name}</h3><p>{items.length} product{items.length === 1 ? "" : "s"} in this category{category.parent === 0 ? ", including its sub-categories" : ""}.</p></div>
        {subcats.length > 0 && (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
            {subcats.map((s) => (
              <Link key={s.slug} href={`/product-category/${s.slug}`} className="btn btn-primary-alta btn-small">{s.name}</Link>
            ))}
          </div>
        )}
        <div className="product-grid cols-4">
          {items.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
        {items.length === 0 && (<div className="empty-state"><h3>No products here yet</h3><p>This category has no products in the cloned catalogue.</p></div>)}
      </div></section>
    </>
  );
}
