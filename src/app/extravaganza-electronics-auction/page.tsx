import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { productsInCategory } from "@/components/sites/nuron/subpages-data";

// Source home variant: "Launch your own Electronics Marketplace or
// Electronics Store in Minutes" — hero + electronics category tiles +
// live bidding on the source's electronics products.
const TILES = [
  "Smart Tv", "Mobile Phone", "Headphone", "Camera", "Laptop",
  "Gaming Console", "Graphics Card", "Video camera", "Bluetooth Device",
  "Smart Watch", "Audio accessories", "Headset", "Monitor", "Portable Power",
];

export default function Page() {
  const items = productsInCategory("electronics");
  return (
    <>
      <Breadcrumb title="Extravaganza Electronics Auction" crumbs={[{ label: "Home", href: "/" }, { label: "Extravaganza Electronics Auction" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
          <div className="slider-content" style={{ marginBottom: 40 }}>
            <h2 className="title" style={{ fontSize: 44 }}>Launch your own Electronics Marketplace or Electronics Store in Minutes</h2>
            <p>Grow your NFT brand with zero technical expertise, creator &amp; enterprise friendly features, complete customisation, and tons of integrations</p>
            <p style={{ marginTop: 16 }}><Link href="/explore-simple" className="btn btn-primary">Get Started</Link></p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            {TILES.map((t) => (
              <Link key={t} href="/product-category/electronics" className="btn btn-primary-alta btn-small">{t}</Link>
            ))}
          </div>
          <ProductCarousel items={items} title="Extravaganza Electronics Auction" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
