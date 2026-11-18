"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ProductCard } from "@/components/sites/nuron/ProductCard";
import { allCategories, allProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  const [sort, setSort] = useState("Default");
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? [...allProducts] : allProducts.filter((p) => p.categories.includes(cat));
  if (sort === "Price: Low to High") shown.sort((a, b) => parseInt(a.priceUSD, 10) - parseInt(b.priceUSD, 10));
  if (sort === "Price: High to Low") shown.sort((a, b) => parseInt(b.priceUSD, 10) - parseInt(a.priceUSD, 10));
  if (sort === "Name A–Z") shown.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <Breadcrumb title="Shop" crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Shop</span><h3 className="title">Shop</h3><p>Showing all 119 products from the Nuron marketplace — NFTs, antiques, cars, books, memorabilia, laboratory equipment and more, exactly as on the source shop.</p></div>
        <div className="explore-toolbar">
          <div className="filter-tabs">{["All", ...allCategories].map((c) => (<button key={c} type="button" className={cat === c ? "active" : ""} onClick={() => setCat(c)}>{c}</button>))}</div>
          <select className="sort-select" aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}><option>Default</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Name A–Z</option></select>
        </div>
        <p>Showing {shown.length} of {allProducts.length} products</p>
        <div className="product-grid cols-4">
          {shown.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
      </div></section>
    </>
  );
}
