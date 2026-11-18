import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { CreateSteps } from "@/components/sites/nuron/sections";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Services" crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Services</span><h3 className="title">Services</h3><p>$309 Billion 24h trading volume on Nuron marketplace. 250 Billion people visit Nuron per month.</p></div>
        <div className="stat-grid">
          <div className="stat-card"><b>600+</b><span>listed Cryptocurrencies who stay up to date for the latest news, read articles about currencies.</span></div>
          <div className="stat-card"><b>1,000 Million</b><span>Registered users who trust Nuron &amp; Invest for coin &amp; get profit from their investment.</span></div>
          <div className="stat-card"><b>801 K</b><span>Open market auction 24 hour. Nuron provide Live trading Option using cheap currency.</span></div>
          <div className="stat-card"><b>$309 Billion</b><span>24h trading volume on Nuron marketplace.</span></div>
        </div>
        <div className="rn-section-gapTop"><div className="section-title"><span className="subtitle">What we do</span><h3 className="title">Create and sell your NFTs</h3></div><CreateSteps /></div>
        </div>
      </section>
    </>
  );
}
