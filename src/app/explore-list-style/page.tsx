import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { ListProductRow } from "@/components/sites/nuron/subpages";
import { allProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Explore List Style" crumbs={[{ label: "Home", href: "/" }, { label: "Explore List Style" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Explore Product</span><h3 className="title">Explore List Style</h3><p>NFT products in list layout.</p></div>
        {allProducts.map((p) => (
          <ListProductRow key={p.slug} product={p} />
        ))}
        </div>
      </section>
    </>
  );
}
