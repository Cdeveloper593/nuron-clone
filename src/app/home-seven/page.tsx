import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { productsInCategory } from "@/components/sites/nuron/subpages-data";

// Source home variant (Home Seven): "Discover Rare Digital art & collect
// NFT's" — live bidding on the source's handmade auction products.
export default function Page() {
  const items = productsInCategory("handmade-auction");
  return (
    <>
      <Breadcrumb title="Home Seven" crumbs={[{ label: "Home", href: "/" }, { label: "Home Seven" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
          <div className="slider-content" style={{ marginBottom: 40 }}>
            <span className="subtitle">More Than 25K</span>
            <h2 className="title" style={{ fontSize: 44 }}>Discover Rare Digital art &amp; collect NFT&rsquo;s</h2>
            <p>The term fungible means something that can be replaced by something similar. So, by the name Non Fungible Tokens, we can easily understand.</p>
            <p style={{ marginTop: 16 }}><Link href="/explore-simple" className="btn btn-primary">Create &amp; Sell Your NFT</Link></p>
          </div>
          <ProductCarousel items={items} title="Home Seven" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
