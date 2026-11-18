import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { allProducts, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Place Bid With Carousel" crumbs={[{ label: "Home", href: "/" }, { label: "Place Bid With Carousel" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <ProductCarousel items={auctionProducts} title="Place Bid With Carousel" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
