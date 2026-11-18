import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { allProducts, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Live Explore Carousel" crumbs={[{ label: "Home", href: "/" }, { label: "Live Explore Carousel" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <ProductCarousel items={auctionProducts} title="Live Explore Carousel" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
