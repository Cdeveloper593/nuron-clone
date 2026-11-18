import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Crypto Auction Market" crumbs={[{ label: "Home", href: "/" }, { label: "Crypto Auction Market" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Crypto Auction Market</h2><p>The crypto auction market — live bidding on digital assets and NFTs.</p></div>
        <ProductCarousel items={auctionProducts} title="Crypto Auction Market" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
