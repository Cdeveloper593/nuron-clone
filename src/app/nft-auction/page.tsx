import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="NFT Auction" crumbs={[{ label: "Home", href: "/" }, { label: "NFT Auction" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>NFT Auction</h2><p>NFT auctions — unique digital collectibles verified on the blockchain.</p></div>
        <ProductCarousel items={auctionProducts} title="NFT Auction" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
