import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { allProducts, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Explore Place Bid" crumbs={[{ label: "Home", href: "/" }, { label: "Explore Place Bid" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Explore Product</span><h3 className="title">Explore Place Bid</h3><p>Every NFT below is ready for bidding — hover a card and choose “Place a Bid” (auction items) or “Buy Now” (fixed-price items).</p></div>
        <div className="product-grid cols-4">
          {allProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
