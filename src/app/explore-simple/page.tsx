import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { allProducts, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Explore Simple" crumbs={[{ label: "Home", href: "/" }, { label: "Explore Simple" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Explore Product</span><h3 className="title">Explore Simple</h3><p>NFT products in a simple grid.</p></div>
        <div className="product-grid">
          {allProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
