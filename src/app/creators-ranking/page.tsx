"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb, Stars } from "@/components/sites/nuron/chrome";
import { sellers } from "@/components/sites/nuron/data";

export default function Page() {
  const [sort, setSort] = useState("Top Rated");
  const ordered = [...sellers];
  if (sort === "Top Rated") ordered.sort((a, b) => b.rating - a.rating);
  if (sort === "Lowest Rated") ordered.sort((a, b) => a.rating - b.rating);
  if (sort === "Name A–Z") ordered.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <Breadcrumb title="Creators Ranking" crumbs={[{ label: "Home", href: "/" }, { label: "Creators Ranking" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Creators</span><h3 className="title">Creators Ranking</h3><p>Ranked by creator rating. Sales figures on the original are all $0, as listed there.</p></div>
        <div className="explore-toolbar"><span style={{ fontSize: 14 }}>10 creators</span>
          <select className="sort-select" aria-label="Sort creators" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>Top Rated</option><option>Lowest Rated</option><option>Name A–Z</option>
          </select></div>
        <table className="shop-table"><thead><tr><th>Rank</th><th>Creator</th><th>Rating</th><th>Sales</th><th></th></tr></thead><tbody>
          {ordered.map((s, i) => (
            <tr key={s.store}>
              <td><b style={{ color: "#fff" }}>{i + 1}</b></td>
              <td><Link href={`/store/${s.store}`} style={{ display: "flex", alignItems: "center", gap: 12 }}><img src={s.avatar} alt={s.name} width={44} height={44} style={{ borderRadius: "50%", objectFit: "cover" }} /><span style={{ color: "#fff", fontWeight: 500 }}>{s.name}</span></Link></td>
              <td><Stars rating={s.rating} /></td>
              <td>{s.sales}</td>
              <td><Link href={`/store/${s.store}`} className="btn btn-primary-alta btn-small">View Store</Link></td>
            </tr>))}
        </tbody></table>
      </div></section>
    </>
  );
}
