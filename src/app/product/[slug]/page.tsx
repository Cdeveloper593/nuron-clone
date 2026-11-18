import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { products } from "@/components/sites/nuron/data";
import { ProductDetail } from "@/components/sites/nuron/subpages";

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();
  return (
    <>
      <Breadcrumb title={product.name} crumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: product.name }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <ProductDetail product={product} />
      </div></section>
    </>
  );
}
