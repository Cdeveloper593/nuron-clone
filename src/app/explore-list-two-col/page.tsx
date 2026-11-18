import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ListProductRow } from "@/components/sites/nuron/subpages";
import { allProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Explore List Two Col" crumbs={[{ label: "Home", href: "/" }, { label: "Explore List Two-Col" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Explore Product</span><h3 className="title">Explore List Two-Col</h3><p>NFT products in a two-column list layout.</p></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {allProducts.map((p) => (
            <ListProductRow key={p.slug} product={p} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
