import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Stars } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { sellers } from "@/components/sites/nuron/data";
import { allProducts } from "@/components/sites/nuron/subpages-data";

export function generateStaticParams() {
  return sellers.map((s) => ({ slug: s.store }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seller = sellers.find((s) => s.store === slug);
  if (!seller) notFound();
  return (
    <>
      <Breadcrumb title={`${seller.name} — Store`} crumbs={[{ label: "Home", href: "/" }, { label: "Creators Ranking", href: "/creators-ranking" }, { label: seller.name }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="info-card" style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 32 }}>
          <img src={seller.avatar} alt={seller.name} width={88} height={88} style={{ borderRadius: "50%", objectFit: "cover" }} />
          <div>
            <h2 style={{ margin: "0 0 6px" }}>{seller.name}</h2>
            <p style={{ margin: 0 }}><Stars rating={seller.rating} /> · Sales: {seller.sales}</p>
          </div>
        </div>
        <div className="section-title"><span className="subtitle">Store</span><h3 className="title">Listings by {seller.name}</h3><p>The source store pages list that vendor’s products, but no vendor-to-product mapping is exposed in the fetched data, so all 15 marketplace products are shown here as this store’s listings.</p></div>
        <div className="product-grid cols-4">
          {allProducts.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
        <p style={{ marginTop: 24 }}><Link href="/creators-ranking" className="btn btn-primary-alta">← Back to Creators</Link></p>
      </div></section>
    </>
  );
}
