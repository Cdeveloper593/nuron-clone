"use client";

import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { FilterableGrid } from "@/components/sites/nuron/subpages";
import { allCategories, auctionProducts } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Place Bid With Isotop" crumbs={[{ label: "Home", href: "/" }, { label: "Place Bid With Isotop" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Live Bidding</span><h3 className="title">Place Bid With Isotop</h3><p>Isotope-style category filtering over the auction products.</p></div>
        <FilterableGrid items={auctionProducts} categories={allCategories} />
      </div></section>
    </>
  );
}
