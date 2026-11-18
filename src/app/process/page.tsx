import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { CreateSteps } from "@/components/sites/nuron/sections";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Process" crumbs={[{ label: "Home", href: "/" }, { label: "Process" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">How it works</span><h3 className="title">Our Process</h3><p>Four simple steps take you from wallet to sale on Nuron.</p></div>
        <CreateSteps />
        </div>
      </section>
    </>
  );
}
