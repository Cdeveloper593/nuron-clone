import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { blogPosts } from "@/components/sites/nuron/data";
import { BLOG_GRID_PER_PAGE, BlogGridItem, Pagination } from "@/components/sites/nuron/BlogList";

/** Source /blog-grid/ shows 6 posts per page (15 posts → pages 1–3). */
export default function Page() {
  const totalPages = Math.ceil(blogPosts.length / BLOG_GRID_PER_PAGE);
  return (
    <>
      <Breadcrumb title="Blog Grid" crumbs={[{ label: "Home", href: "/" }, { label: "Blog Grid" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Our Blog</span><h3 className="title">Blog Grid</h3><p>News, guides and stories from the Nuron marketplace.</p></div>
        <div className="blog-grid">
          {blogPosts.slice(0, BLOG_GRID_PER_PAGE).map((post) => (
            <BlogGridItem key={post.slug} post={post} />
          ))}
        </div>
        <Pagination base="/blog-grid" page={1} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}
