import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { allProducts, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Live Explore" crumbs={[{ label: "Home", href: "/" }, { label: "Live Explore" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Live Bidding</span><h3 className="title">Live Explore</h3><p>Auction products only — {auctionProducts.length} live or ended auctions from the collection.</p></div>
        <div className="product-grid cols-4">
          {auctionProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
