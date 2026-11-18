import { Breadcrumb } from "@/components/sites/nuron/chrome";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Key Features" crumbs={[{ label: "Home", href: "/" }, { label: "Key Features" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Why Nuron</span><h3 className="title">Key Features</h3><p>The features that make Nuron stand out — taken from the marketplace itself.</p></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div className="info-card"><h4>Set up your wallet</h4><p>Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.</p></div>
          <div className="info-card"><h4>Create your collection</h4><p>A great collection of beautiful website templates for your need. Choose the best suitable template.</p></div>
          <div className="info-card"><h4>Add your NFT’s</h4><p>We’ve made the template fully responsive, so it looks great on all devices: desktop, tablets and mobile.</p></div>
          <div className="info-card"><h4>Sell your NFT’s</h4><p>Live auctions, fixed-price sales and multi-vendor stores — buy, sell and trade NFTs verified on the blockchain.</p></div>
          <div className="info-card"><h4>Live Bidding</h4><p>Real-time auctions with countdowns and bid history on every listing.</p></div>
          <div className="info-card"><h4>Multi-Vendor Marketplace</h4><p>Creators run their own stores, and collectors discover them through rankings and collections.</p></div>
        </div>
        </div>
      </section>
    </>
  );
}
