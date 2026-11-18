import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";

// Source: YITH WooCommerce Compare table shortcode. With nothing compared
// the source renders an empty compare table; this page mirrors that state
// and links back to the shop.
export default function Page() {
  return (
    <>
      <Breadcrumb title="Compare" crumbs={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Compare</span><h3 className="title">Compare Products</h3></div>
        <div className="info-card" style={{ padding: 32, textAlign: "center" }}>
          <p>No products added to the compare.</p>
          <p style={{ marginTop: 16 }}><Link href="/shop" className="btn btn-primary">Browse Products →</Link></p>
        </div>
      </div></section>
    </>
  );
}
