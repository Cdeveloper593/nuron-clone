import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Vintage Electronics Auction" crumbs={[{ label: "Home", href: "/" }, { label: "Vintage Electronics Auction" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Vintage Electronics Auction</h2><p>Vintage electronics, classic gadgets and retro devices — auctioned live on Nuron.</p></div>
        <ProductCarousel items={auctionProducts} title="Vintage Electronics Auction" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
