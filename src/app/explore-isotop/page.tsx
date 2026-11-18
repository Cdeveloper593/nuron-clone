"use client";

import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { FilterableGrid } from "@/components/sites/nuron/subpages";
import { allCategories, allProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Explore Isotop" crumbs={[{ label: "Home", href: "/" }, { label: "Explore Isotop" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Explore Product</span><h3 className="title">Explore Isotop</h3><p>Filter the collection by category — the grid updates instantly.</p></div>
        <FilterableGrid items={allProducts} categories={allCategories} />
      </div></section>
    </>
  );
}
