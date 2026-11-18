import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { sellers } from "@/components/sites/nuron/data";
import { SellerCard } from "@/components/sites/nuron/subpages";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Best Sellers" crumbs={[{ label: "Home", href: "/" }, { label: "Best Sellers" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Top Seller</span><h3 className="title">Best Sellers</h3><p>Our top sellers, ordered by rating — highest first.</p></div>
        <div className="seller-grid">
          {[...sellers].sort((a, b) => b.rating - a.rating).map((s, i) => (<SellerCard key={s.store} seller={s} rank={i + 1} />))}
        </div>
        </div>
      </section>
    </>
  );
}
