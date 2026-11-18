import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { productsInCategory } from "@/components/sites/nuron/subpages-data";

// Source home variant (Memorabilia Auctions): "The Ultimate Memorabilia Auction Extravaganza".
export default function Page() {
  const items = productsInCategory("memorabilia-auctions");
  return (
    <>
      <Breadcrumb title="Memorabilia Auctions" crumbs={[{ label: "Home", href: "/" }, { label: "Memorabilia Auctions" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
          <div className="slider-content" style={{ marginBottom: 40 }}>
            <h2 className="title" style={{ fontSize: 44 }}>The Ultimate Memorabilia Auction Extravaganza</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita beatae exercitationem quasi ullam esse?</p>
            <p style={{ marginTop: 16 }}><Link href="/explore-simple" className="btn btn-primary">Get Started</Link></p>
          </div>
          <ProductCarousel items={items} title="Memorabilia Auctions" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
