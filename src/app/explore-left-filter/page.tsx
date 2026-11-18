"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { allCategories, allProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  const [cats, setCats] = useState<string[]>([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const toggle = (c: string) => setCats((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  const shown = allProducts.filter((p) => {
    if (cats.length > 0 && !p.categories.some((c) => cats.includes(c))) return false;
    const price = parseInt(p.priceUSD, 10) / 100;
    if (min !== "" && price < parseFloat(min)) return false;
    if (max !== "" && price > parseFloat(max)) return false;
    return true;
  });
  return (
    <>
      <Breadcrumb title="Explore Left Filter" crumbs={[{ label: "Home", href: "/" }, { label: "Explore Left Filter" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
          <aside className="info-card">
            <h4>Filters</h4>
            <p style={{ fontWeight: 600, color: "#fff" }}>Category</p>
            {allCategories.map((c) => (
              <label key={c} style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 0", cursor: "pointer" }}>
                <input type="checkbox" checked={cats.includes(c)} onChange={() => toggle(c)} /> {c}
              </label>
            ))}
            <p style={{ fontWeight: 600, color: "#fff", marginTop: 16 }}>Price (USD)</p>
            <label style={{ display: "block", fontSize: 14 }}>Min <input type="number" min={0} value={min} onChange={(e) => setMin(e.target.value)} placeholder="0" style={{ width: "100%", background: "var(--background-color-2)", border: "1px solid var(--color-border)", borderRadius: 8, color: "#fff", padding: "10px 12px", marginTop: 4 }} /></label>
            <label style={{ display: "block", fontSize: 14, marginTop: 10 }}>Max <input type="number" min={0} value={max} onChange={(e) => setMax(e.target.value)} placeholder="3200" style={{ width: "100%", background: "var(--background-color-2)", border: "1px solid var(--color-border)", borderRadius: 8, color: "#fff", padding: "10px 12px", marginTop: 4 }} /></label>
            <button type="button" className="btn btn-primary-alta btn-small" style={{ marginTop: 16 }} onClick={() => { setCats([]); setMin(""); setMax(""); }}>Clear Filters</button>
          </aside>
          <div>
            <p>Showing {shown.length} of {allProducts.length} products</p>
            <div className="product-grid cols-3">
              {shown.map((p) => (<ProductCard key={p.slug} product={p} />))}
            </div>
            {shown.length === 0 && (<div className="empty-state"><h3>No products match your filters</h3><p>Try widening the price range or clearing a category.</p></div>)}
          </div>
        </div>
      </div></section>
    </>
  );
}
