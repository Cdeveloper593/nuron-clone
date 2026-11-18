import { Breadcrumb } from "@/components/sites/nuron/chrome";
import Link from "next/link";
import { CreateSteps } from "@/components/sites/nuron/sections";
import { sellers } from "@/components/sites/nuron/data";
import { SellerCard } from "@/components/sites/nuron/subpages";

export default function Page() {
  return (
    <>
      <Breadcrumb title="About" crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="two-col">
          <div><img className="rounded" src="/sites/nuron/wp-content/uploads/2023/01/slider-1.png" alt="Nuron NFT artwork showcase" /></div>
          <div>
            <div className="section-title"><span className="subtitle">Direct Teams. For Your Dedicated Dreams</span><h3 className="title">Why We Do This</h3></div>
            <p>NFTs are virtual tokens that represent ownership of something inherently distinct and scarce, whether it be a physical or digital item, such as artwork, a soundtrack, a collectible, an in-game item or real estate. Unlike regular crypto currencies like Bitcoin or fiat money like the U.S. dollar, each NFT is unique.</p>
            <h3>Helping You Grow In Every Stage.</h3>
            <p>NFTs are virtual tokens that represent ownership of something inherently distinct and scarce, whether it be a physical or digital item, such as artwork, a soundtrack, a collectible, an in-game item or real estate.</p>
            <h3>Create, Sell well &amp; Collect your Wonderful NFTs at Nuron Very Fast</h3>
            <p>The NFTs is a one-trick pony that climbed the ladders of success in recent years. The growth of NFTs is tremendous, and according to Pymnts.com, the total sales volume of NFTs has nearly crossed $2.5 billion in the last six months. Surprisingly, the total sales volume of NFTs was $13.7 million in 2020.</p>
          </div>
        </div>
        <div className="rn-section-gapTop"><div className="section-title" style={{ textAlign: "center" }}><span className="subtitle">Nuron Statistics</span><h3 className="title">Nuron Statistics</h3></div>
        <div className="stat-grid">
          <div className="stat-card"><b>309</b><span>Nuron All NFT&apos;s</span></div>
          <div className="stat-card"><b>508</b><span>All Creators</span></div>
          <div className="stat-card"><b>1032</b><span>Nuron Earning</span></div>
          <div className="stat-card"><b>650</b><span>Level One Seller</span></div>
        </div></div>
        <div className="rn-section-gapTop"><div className="section-title"><span className="subtitle">Our Services</span><h3 className="title">Create and sell your NFTs</h3></div><CreateSteps /></div>
        <div className="rn-section-gapTop"><div className="section-title"><span className="subtitle">Top Creators</span><h3 className="title">Meet our creators</h3></div>
        <div className="seller-grid">
          {sellers.slice(0, 5).map((s, i) => (<SellerCard key={s.store} seller={s} rank={i + 1} />))}
        </div></div>
        </div>
      </section>
    </>
  );
}
