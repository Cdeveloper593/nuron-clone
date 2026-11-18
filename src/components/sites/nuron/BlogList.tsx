import Link from "next/link";
import { blogPosts } from "./data";
import { BLOG_IMAGES } from "./subpages-data";

export type BlogPost = (typeof blogPosts)[number];

/** Posts per page on the source: /blog/ shows 10, /blog-grid/ shows 6. */
export const BLOG_PER_PAGE = 10;
export const BLOG_GRID_PER_PAGE = 6;

/** List-style blog card, exactly as the source /blog/ page renders each post. */
export function BlogListItem({ post }: { post: BlogPost }) {
  return (
    <article key={post.slug} className="list-product">
      <Link href={`/${post.slug}`} className="thumb">
        <img src={BLOG_IMAGES[post.slug]} alt={post.title} loading="lazy" />
      </Link>
      <div className="list-content">
        <div className="blog-meta" style={{ fontSize: 13, color: "var(--color-body)", marginBottom: 8 }}>{post.date}</div>
        <h4><Link href={`/${post.slug}`}>{post.title}</Link></h4>
        <p>{post.excerpt}</p>
        <div style={{ marginTop: "auto" }}><Link href={`/${post.slug}`} className="btn btn-primary-alta btn-small">Read More</Link></div>
      </div>
    </article>
  );
}

/** Grid-style blog card, exactly as the source /blog-grid/ page renders each post. */
export function BlogGridItem({ post }: { post: BlogPost }) {
  return (
    <article key={post.slug} className="blog-card">
      <Link href={`/${post.slug}`} className="blog-thumb">
        <img src={BLOG_IMAGES[post.slug]} alt={post.title} loading="lazy" />
      </Link>
      <div className="blog-content">
        <div className="blog-meta"><span>{post.date}</span></div>
        <h4><Link href={`/${post.slug}`}>{post.title}</Link></h4>
        <p>{post.excerpt}</p>
        <Link href={`/${post.slug}`} className="title-link">Read More →</Link>
      </div>
    </article>
  );
}

/** Numbered pagination matching the source (page 1 links to the base path). */
export function Pagination({ base, page, totalPages }: { base: string; page: number; totalPages: number }) {
  if (totalPages <= 1) return null;
  const href = (n: number) => (n === 1 ? base : `${base}/page/${n}`);
  return (
    <nav className="rn-pagination" aria-label="Posts pagination">
      <ul className="page-numbers">
        {page > 1 && (
          <li><Link className="prev page-numbers" href={href(page - 1)} aria-label="Previous page">←</Link></li>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            {n === page ? (
              <span aria-current="page" className="page-numbers current">{n}</span>
            ) : (
              <Link className="page-numbers" href={href(n)}>{n}</Link>
            )}
          </li>
        ))}
        {page < totalPages && (
          <li><Link className="next page-numbers" href={href(page + 1)} aria-label="Next page">→</Link></li>
        )}
      </ul>
    </nav>
  );
}
