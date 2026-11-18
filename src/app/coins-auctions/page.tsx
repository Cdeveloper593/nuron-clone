import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Coins Auctions" crumbs={[{ label: "Home", href: "/" }, { label: "Coins Auctions" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Coins Auctions</h2><p>Ancient, colonial, gold and historical coins — numismatic treasures at auction.</p></div>
        <ProductCarousel items={auctionProducts} title="Coins Auctions" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
