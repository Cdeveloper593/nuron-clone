import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { WishlistGrid } from "@/components/sites/nuron/subpages";
import { allProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Wishlist" crumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Your Wishlist</span><h3 className="title">Wishlist</h3><p>Save the NFTs you love and come back to them later. Wishlist state is kept in this browser only (demo).</p></div>
        <WishlistGrid items={allProducts} />
        </div>
      </section>
    </>
  );
}
