import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { allProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="NFT" crumbs={[{ label: "Home", href: "/" }, { label: "NFT" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">NFT Marketplace</span><h3 className="title">NFT</h3><p>NFTs are virtual tokens that represent ownership of something inherently distinct and scarce — artwork, a soundtrack, a collectible, an in-game item or real estate. Every product below is tagged NFT.</p></div>
        <div className="product-grid cols-4">
          {allProducts.filter((p) => p.categories.includes("NFT")).map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
        </div>
      </section>
    </>
  );
}
