import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { ExploreProducts, LiveBidding, TopCollections, TopSellers } from "@/components/sites/nuron/sections";

// Source home variant (Home Eight). The live page body is near-empty — its
// own menu anchors the homepage sections Top Seller, Live Bidding, Top
// Collection and Explore Product — so this variant renders those sections.
export default function Page() {
  return (
    <>
      <Breadcrumb title="Home Eight" crumbs={[{ label: "Home", href: "/" }, { label: "Home Eight" }]} />
      <div id="live-auction"><LiveBidding /></div>
      <div id="top-seller"><TopSellers /></div>
      <div id="explore-product"><ExploreProducts /></div>
      <div id="top-collection"><TopCollections /></div>
    </>
  );
}
