import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { allProducts, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Explore Carousel" crumbs={[{ label: "Home", href: "/" }, { label: "Explore Carousel" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <ProductCarousel items={allProducts} title="Explore Carousel" subtitle="Explore Product" />
        </div>
      </section>
    </>
  );
}
