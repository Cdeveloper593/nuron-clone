import { Breadcrumb } from "@/components/sites/nuron/chrome";

// The source page renders no main content (empty plugin/shortcode page) —
// header and footer only. This page mirrors that faithfully.
export default function Page() {
  return (
    <>
      <Breadcrumb title="Services List" crumbs={[{ label: "Home", href: "/" }, { label: "Services List" }]} />
      <section className="rn-section-gap"><div className="nuron-container"></div></section>
    </>
  );
}
