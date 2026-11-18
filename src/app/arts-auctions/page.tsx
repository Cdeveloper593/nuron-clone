import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Arts Auctions" crumbs={[{ label: "Home", href: "/" }, { label: "Arts Auctions" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Arts Auctions</h2><p>Fine art and digital art auctions from the world’s best Nuron artists.</p></div>
        <ProductCarousel items={auctionProducts} title="Arts Auctions" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
