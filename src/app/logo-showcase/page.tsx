import { Breadcrumb } from "@/components/sites/nuron/chrome";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Logo Showcase" crumbs={[{ label: "Home", href: "/" }, { label: "Logo Showcase" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Brand</span><h3 className="title">Logo Showcase</h3><p>The Nuron wordmark, as used across the marketplace.</p></div>
        <div className="info-card" style={{ textAlign: "center", padding: 60 }}><img src="/sites/nuron/wp-content/uploads/2023/01/logo-white.png" alt="Nuron logo" width={300} height={99} style={{ margin: "0 auto" }} /><p style={{ marginTop: 24 }}>Created with the collaboration of over 60 of the world’s best Nuron Artists.</p></div>
        </div>
      </section>
    </>
  );
}
