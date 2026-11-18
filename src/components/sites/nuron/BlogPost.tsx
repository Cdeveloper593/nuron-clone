import Link from "next/link";
import { Breadcrumb } from "./chrome";
import { blogPosts } from "./data";
import { BLOG_IMAGES } from "./subpages-data";
import {
  blogCategoryBySlug,
  postCategories,
} from "./taxonomy-data";

export type BlogPost = (typeof blogPosts)[number];

function sanitize(html: string): string {
  return html.replace(/<script[\s\S]*?<\/script>/gi, "");
}

/** Breadcrumb matching the source post page: Home / <first category> / <title>. */
export function postCrumbs(post: BlogPost) {
  const catSlug = (postCategories[post.slug] ?? [])[0];
  const cat = catSlug ? blogCategoryBySlug(catSlug) : undefined;
  return [
    { label: "Home", href: "/" },
    ...(cat ? [{ label: cat.name, href: `/category/${cat.slug}` }] : []),
    { label: post.title },
  ];
}

export function BlogPostArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <Breadcrumb title={post.title} crumbs={postCrumbs(post)} />
      <section className="rn-section-gap"><div className="nuron-container">
        <article className="blog-article">
          <h1>{post.title}</h1>
          <p style={{ color: "var(--color-body)" }}>{post.date}</p>
          <img src={BLOG_IMAGES[post.slug]} alt={post.title} style={{ borderRadius: 12, marginBottom: 24 }} />
          <div className="article-body" dangerouslySetInnerHTML={{ __html: sanitize(post.content) }} />
          <p style={{ marginTop: 32 }}><Link href="/blog" className="btn btn-primary-alta">← Back to Blog</Link></p>
        </article>
      </div></section>
    </>
  );
}
