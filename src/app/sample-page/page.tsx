import { Breadcrumb } from "@/components/sites/nuron/chrome";

// WordPress default sample page — the source's exact text.
export default function Page() {
  return (
    <>
      <Breadcrumb title="Sample Page" crumbs={[{ label: "Home", href: "/" }, { label: "Sample Page" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <article className="blog-article">
          <h1>Sample Page</h1>
          <div className="article-body">
            <p>This is an example page. It’s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>
            <blockquote>Hi there! I’m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like piña coladas. (And gettin’ caught in the rain.)</blockquote>
            <p>…or something like this:</p>
            <blockquote><p>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</p></blockquote>
            <p>As a new WordPress user, you should go to your dashboard to delete this page and create new pages for your content. Have fun!</p>
          </div>
        </article>
      </div></section>
    </>
  );
}
