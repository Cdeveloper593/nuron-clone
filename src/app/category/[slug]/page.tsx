import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { blogPosts } from "@/components/sites/nuron/data";
import { BlogListItem } from "@/components/sites/nuron/BlogList";
import { blogCategories, blogCategoryBySlug } from "@/components/sites/nuron/taxonomy-data";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = blogCategoryBySlug(slug);
  if (!category) notFound();
  const posts = category.posts
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  return (
    <>
      <Breadcrumb title={category.name} crumbs={[{ label: "Home", href: "/" }, { label: category.name }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Category</span><h3 className="title">{category.name}</h3><p>{posts.length} post{posts.length === 1 ? "" : "s"} in this category.</p></div>
        {posts.map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
        </div>
      </section>
    </>
  );
}
