import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { blogPosts } from "@/components/sites/nuron/data";
import { BlogListItem } from "@/components/sites/nuron/BlogList";
import { blogTagBySlug, blogTags } from "@/components/sites/nuron/taxonomy-data";

export function generateStaticParams() {
  return blogTags.map((t) => ({ slug: t.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tag = blogTagBySlug(slug);
  if (!tag) notFound();
  const posts = tag.posts
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  return (
    <>
      <Breadcrumb title={tag.name} crumbs={[{ label: "Home", href: "/" }, { label: tag.name }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Tag</span><h3 className="title">{tag.name}</h3><p>{posts.length} post{posts.length === 1 ? "" : "s"} with this tag.</p></div>
        {posts.map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
        </div>
      </section>
    </>
  );
}
