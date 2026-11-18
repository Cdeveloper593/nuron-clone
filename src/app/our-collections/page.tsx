import { Breadcrumb } from "@/components/sites/nuron/chrome";
import Link from "next/link";
import { ourCollections } from "@/components/sites/nuron/taxonomy-data";

/**
 * The source /our-collections/ page shows these four collections (Art 9,
 * Smart Devices 9, Ancient Coins 8, Laboratory Efficiency 8) — not the five
 * homepage Top Collection entries.
 */
export default function Page() {
  return (
    <>
      <Breadcrumb title="Our Collections" crumbs={[{ label: "Home", href: "/" }, { label: "Our Collections" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Top Collection</span><h3 className="title">Our Collections</h3><p>Browse the marketplace collections.</p></div>
        <div className="collection-grid">
          {ourCollections.map((c) => (
            <Link key={c.slug} href={`/collection/${c.slug}`} className="collection-card">
              <span className="collage">
                {c.images.map((src) => (<img key={src} src={src} alt="" loading="lazy" />))}
              </span>
              <span className="collection-info"><h6>{c.name}</h6><span className="items">{c.items} Items</span></span>
            </Link>))}
        </div>
        </div>
      </section>
    </>
  );
}
