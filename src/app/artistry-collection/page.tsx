import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Artistry Collection" crumbs={[{ label: "Home", href: "/" }, { label: "Artistry Collection" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Artistry Collection</h2><p>A curated collection of artistry — hand-picked works from Nuron creators.</p></div>
        <ProductCarousel items={auctionProducts} title="Artistry Collection" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
