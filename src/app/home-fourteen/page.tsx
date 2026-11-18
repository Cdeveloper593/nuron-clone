import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCarousel } from "@/components/sites/nuron/subpages";
import { productsInCategory } from "@/components/sites/nuron/subpages-data";

// Source home variant (Home Fourteen): "Nuron marketplace NFT Names To
// Transform Your Art Into A Digital Empire" — live bidding on the source's
// handmade auction products.
export default function Page() {
  const items = productsInCategory("handmade-auction");
  return (
    <>
      <Breadcrumb title="Home Fourteen" crumbs={[{ label: "Home", href: "/" }, { label: "Home Fourteen" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
          <div className="slider-content" style={{ marginBottom: 40 }}>
            <span className="subtitle">Nuron marketplace</span>
            <h2 className="title" style={{ fontSize: 44 }}>NFT Names To Transform Your Art Into A Digital Empire</h2>
            <p>Unit of data stored on a digital ledger called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.</p>
            <p style={{ marginTop: 16 }}><Link href="/explore-simple" className="btn btn-primary">Explore Live Bidding</Link></p>
          </div>
          <ProductCarousel items={items} title="Home Fourteen" subtitle="Live Bidding" />
        </div>
      </section>
    </>
  );
}
