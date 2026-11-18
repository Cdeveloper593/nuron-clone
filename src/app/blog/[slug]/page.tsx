import { notFound } from "next/navigation";
import { blogPosts } from "@/components/sites/nuron/data";
import { BlogPostArticle } from "@/components/sites/nuron/BlogPost";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostArticle post={post} />;
}
