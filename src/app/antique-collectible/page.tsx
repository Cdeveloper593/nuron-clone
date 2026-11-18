import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Antique & Collectible" crumbs={[{ label: "Home", href: "/" }, { label: "Antique & Collectible" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Antique & Collectible</h2><p>Antiques, collectibles and rare finds — bid on pieces of history.</p></div>
        <ProductCarousel items={auctionProducts} title="Antique & Collectible" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
