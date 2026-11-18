import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Automotive Auctions" crumbs={[{ label: "Home", href: "/" }, { label: "Automotive Auctions" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Automotive Auctions</h2><p>Classic and luxury automobiles, supercars and memorabilia up for auction.</p></div>
        <ProductCarousel items={auctionProducts} title="Automotive Auctions" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
