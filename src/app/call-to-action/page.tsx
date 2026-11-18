import { Breadcrumb } from "@/components/sites/nuron/chrome";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Call To Action" crumbs={[{ label: "Home", href: "/" }, { label: "Call To Action" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="newsletter-area"><h3>Discover Digital Art, Collect and Sell Your Specific NFTs.</h3><p>Partner with one of the world’s largest retailers to showcase your brand and products.</p><div className="slider-btn-group" style={{ justifyContent: "center" }}><Link href="/explore-simple" className="btn btn-primary">Get Started</Link><Link href="/vendor-register" className="btn btn-primary-alta">Create</Link></div><p className="newsletter-note">Email is safe. We don&apos;t spam.</p></div>
        </div>
      </section>
    </>
  );
}
