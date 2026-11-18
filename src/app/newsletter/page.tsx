import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { Newsletter } from "@/components/sites/nuron/sections";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Newsletter" crumbs={[{ label: "Home", href: "/" }, { label: "Newsletter" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <Newsletter />
        </div>
      </section>
    </>
  );
}
