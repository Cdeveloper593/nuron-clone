import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { productsInCategory } from "@/components/sites/nuron/subpages-data";

// Source home variant (Laboratory Auction): "Explore Laboratory Equipment with a Product Auction".
export default function Page() {
  const items = productsInCategory("laboratory-auction");
  return (
    <>
      <Breadcrumb title="Laboratory Auction" crumbs={[{ label: "Home", href: "/" }, { label: "Laboratory Auction" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
          <div className="slider-content" style={{ marginBottom: 40 }}>
            <h2 className="title" style={{ fontSize: 44 }}>Explore Laboratory Equipment with a Product Auction</h2>
            <p>Ensure precision in industrial testing and calibration with our auction. Bid on calibration equipment, hardness testers, to maintain the accuracy.</p>
            <p style={{ marginTop: 16 }}><Link href="/explore-simple" className="btn btn-primary">Get Started</Link></p>
          </div>
          <ProductCarousel items={items} title="Laboratory Auction" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
