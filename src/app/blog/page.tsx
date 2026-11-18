import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { blogPosts } from "@/components/sites/nuron/data";
import { BLOG_PER_PAGE, BlogListItem, Pagination } from "@/components/sites/nuron/BlogList";

/** Source /blog/ shows 10 posts per page (15 posts → pages 1–2). */

export default function Page() {
  const totalPages = Math.ceil(blogPosts.length / BLOG_PER_PAGE);
  return (
    <>
      <Breadcrumb title="Blog List" crumbs={[{ label: "Home", href: "/" }, { label: "Blog List" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <div className="section-title"><span className="subtitle">Our Blog</span><h3 className="title">Blog List</h3><p>News, guides and stories from the Nuron marketplace.</p></div>
        {blogPosts.slice(0, BLOG_PER_PAGE).map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
        <Pagination base="/blog" page={1} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}
