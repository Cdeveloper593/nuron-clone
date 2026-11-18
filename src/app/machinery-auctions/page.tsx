import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { productsInCategory } from "@/components/sites/nuron/subpages-data";

// Source home variant (Machinery Auctions): "Discover Precision and Sell Your Specific Machinery".
export default function Page() {
  const items = productsInCategory("machinery");
  return (
    <>
      <Breadcrumb title="Machinery Auctions" crumbs={[{ label: "Home", href: "/" }, { label: "Machinery Auctions" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
          <div className="slider-content" style={{ marginBottom: 40 }}>
            <h2 className="title" style={{ fontSize: 44 }}>Discover Precision and Sell Your Specific Machinery</h2>
            <p>Join us for our Precision Machine Tools Showcase, featuring a curated collection of high-precision machinery and tools.</p>
            <p style={{ marginTop: 16 }}><Link href="/explore-simple" className="btn btn-primary">Get Started</Link></p>
          </div>
          <ProductCarousel items={items} title="Machinery Auctions" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
