"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { sellers } from "@/components/sites/nuron/data";
import { SellerCard } from "@/components/sites/nuron/subpages";

export default function Page() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Top Rated");
  const filtered = sellers.filter((s) => s.name.toLowerCase().includes(query.trim().toLowerCase()));
  const ordered = [...filtered];
  if (sort === "Top Rated") ordered.sort((a, b) => b.rating - a.rating);
  if (sort === "Lowest Rated") ordered.sort((a, b) => a.rating - b.rating);
  if (sort === "Name A–Z") ordered.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <Breadcrumb title="Creators With Filter" crumbs={[{ label: "Home", href: "/" }, { label: "Creators With Filter" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Creators</span><h3 className="title">Creators With Filter</h3><p>Search creators by name and sort by rating.</p></div>
        <div className="explore-toolbar">
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search creators by name…" aria-label="Search creators" style={{ background: "var(--background-color-4)", border: "1px solid var(--color-border)", borderRadius: 10, color: "#fff", padding: "12px 16px", fontSize: 15, minWidth: 280 }} />
          <select className="sort-select" aria-label="Sort creators" value={sort} onChange={(e) => setSort(e.target.value)}><option>Top Rated</option><option>Lowest Rated</option><option>Name A–Z</option></select>
        </div>
        <p>Showing {ordered.length} of {sellers.length} creators</p>
        <div className="seller-grid">
          {ordered.map((s, i) => (<SellerCard key={s.store} seller={s} rank={i + 1} />))}
        </div>
        {ordered.length === 0 && (<div className="empty-state"><h3>No creators found</h3><p>Try a different name.</p></div>)}
      </div></section>
    </>
  );
}
