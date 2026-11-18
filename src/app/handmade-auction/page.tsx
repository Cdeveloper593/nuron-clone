import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { productsInCategory } from "@/components/sites/nuron/subpages-data";

// Source home variant (Handmade Auction): "Handmade Auction".
export default function Page() {
  const items = productsInCategory("handmade-auction");
  return (
    <>
      <Breadcrumb title="Handmade Auction" crumbs={[{ label: "Home", href: "/" }, { label: "Handmade Auction" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
          <div className="slider-content" style={{ marginBottom: 40 }}>
            <h2 className="title" style={{ fontSize: 44 }}>Handmade Auction</h2>
            <p>Unique handmade home decor, artisan crafts and luxuries — auctioned live on Nuron.</p>
            <p style={{ marginTop: 16 }}><Link href="/explore-simple" className="btn btn-primary">Get Started</Link></p>
          </div>
          <ProductCarousel items={items} title="Handmade Auction" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
