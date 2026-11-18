import { Breadcrumb } from "@/components/sites/nuron/chrome";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Video Showcase" crumbs={[{ label: "Home", href: "/" }, { label: "Video Showcase" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Watch</span><h3 className="title">Video Showcase</h3><p>Discover digital art, collect and sell your specific NFTs.</p></div>
        <div className="info-card"><img src="/sites/nuron/wp-content/uploads/2023/01/slider-1.png" alt="Nuron NFT artwork showcase" style={{ borderRadius: 12 }} /><p style={{ marginTop: 16 }}>No video file was included in the fetched source pages for this section, so the showcase uses the marketplace’s hero artwork instead. Explore the live marketplace below.</p><p><Link href="/explore-simple" className="btn btn-primary">Explore NFTs</Link></p></div>
        </div>
      </section>
    </>
  );
}
