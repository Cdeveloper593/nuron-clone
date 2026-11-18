import { Breadcrumb } from "@/components/sites/nuron/chrome";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Statistics" crumbs={[{ label: "Home", href: "/" }, { label: "Statistics" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Nuron Statistics</span><h3 className="title">Statistics</h3><p>Marketplace numbers from the original site.</p></div>
        <div className="stat-grid">
          <div className="stat-card"><b>309</b><span>Nuron All NFT&apos;s</span></div>
          <div className="stat-card"><b>508</b><span>All Creators</span></div>
          <div className="stat-card"><b>1032</b><span>Nuron Earning</span></div>
          <div className="stat-card"><b>650</b><span>Level One Seller</span></div>
          <div className="stat-card"><b>$309 Billion</b><span>24h trading volume on Nuron marketplace</span></div>
          <div className="stat-card"><b>600+</b><span>Listed Cryptocurrencies</span></div>
          <div className="stat-card"><b>1,000 Million</b><span>Registered users who trust Nuron</span></div>
          <div className="stat-card"><b>801 K</b><span>Open market auctions in 24 hours</span></div>
        </div>
        </div>
      </section>
    </>
  );
}
