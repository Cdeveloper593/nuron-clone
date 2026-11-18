import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { blogPosts } from "@/components/sites/nuron/data";
import { BlogListItem, BLOG_PER_PAGE, Pagination } from "@/components/sites/nuron/BlogList";

export function generateStaticParams() {
  const totalPages = Math.ceil(blogPosts.length / BLOG_PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = parseInt(page, 10);
  const totalPages = Math.ceil(blogPosts.length / BLOG_PER_PAGE);
  if (Number.isNaN(n) || n < 2 || n > totalPages) notFound();
  const posts = blogPosts.slice((n - 1) * BLOG_PER_PAGE, n * BLOG_PER_PAGE);
  return (
    <>
      <Breadcrumb title={`Blog List — Page ${n}`} crumbs={[{ label: "Home", href: "/" }, { label: "Blog List", href: "/blog" }, { label: `Page ${n}` }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Our Blog</span><h3 className="title">Blog List</h3><p>News, guides and stories from the Nuron marketplace.</p></div>
        {posts.map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
        <Pagination base="/blog" page={n} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}
