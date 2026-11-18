import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Books & Comics" crumbs={[{ label: "Home", href: "/" }, { label: "Books & Comics" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="slider-content" style={{ marginBottom: 40 }}><h2 className="title" style={{ fontSize: 44 }}>Books & Comics</h2><p>Rare books, comics and graphic novels — bid on stories worth keeping.</p></div>
        <ProductCarousel items={auctionProducts} title="Books & Comics" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
