import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { allProducts, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Live With Place Bid" crumbs={[{ label: "Home", href: "/" }, { label: "Live With Place Bid" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Live Bidding</span><h3 className="title">Live With Place Bid</h3><p>Auction products with bidding — hover a card and choose “Place a Bid”. Note: the original auctions ended in 2023, so the countdowns show “Auction Expired”.</p></div>
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
