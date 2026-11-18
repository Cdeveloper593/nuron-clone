"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Plus,
  Tag,
  Wallet,
} from "lucide-react";
import {
  collections,
  exploreSlugs,
  liveBiddingSlugs,
  newestSlugs,
  products,
  sellers,
} from "./data";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";
import { Stars } from "./chrome";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="slider-area slider-style-6">
      <img
        className="slider-shape"
        src="/sites/nuron/wp-content/uploads/2023/01/shape-1.png"
        alt=""
        style={{ top: "12%", left: "4%", width: 90 }}
      />
      <img
        className="slider-shape"
        src="/sites/nuron/wp-content/uploads/2023/01/shape-5.png"
        alt=""
        style={{ bottom: "10%", left: "42%", width: 60, animationDelay: "1s" }}
      />
      <img
        className="slider-shape"
        src="/sites/nuron/wp-content/uploads/2023/01/shape-7.png"
        alt=""
        style={{ top: "8%", right: "6%", width: 70, animationDelay: "0.5s" }}
      />
      <div className="nuron-container">
        <div className="two-col">
          <Reveal sal="slide-up">
            <div className="slider-content">
              <h2 className="title">
                Discover Digital Art, Collect and Sell Your{" "}
                <span className="gradient-text">Specific NFTs.</span>
              </h2>
              <p>
                Partner with one of the world&rsquo;s largest retailers to showcase
                your brand and products.
              </p>
              <div className="slider-btn-group">
                <Link href="/explore-simple" className="btn btn-primary">
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link href="/vendor-register" className="btn btn-primary-alta">
                  Create
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal sal="zoom-in" delay={150}>
            <div className="slider-thumbnail">
              <img
                src="/sites/nuron/wp-content/uploads/2023/01/slider-1.png"
                alt="NFT artwork showcase"
                width={1000}
                height={1013}
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Carousel (replaces the source's Slick slider)                       */
/* ------------------------------------------------------------------ */

function Carousel({
  children,
  title,
  subtitle,
  link,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  link?: { label: string; href: string };
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const w = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir * w * 2, behavior: "smooth" });
  };
  return (
    <div className="rn-section-gapTop">
      <div className="nuron-container">
        <div className="section-head-row">
          <Reveal sal="slide-up">
            <div className="section-title">
              <span className="subtitle">{subtitle}</span>
              <h3 className="title">{title}</h3>
            </div>
          </Reveal>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {link && (
              <Link href={link.href} className="title-link">
                {link.label} <ArrowRight size={15} />
              </Link>
            )}
            <div className="rn-carousel-nav">
              <button type="button" aria-label="Previous" onClick={() => scrollBy(-1)}>
                <ChevronLeft size={18} />
              </button>
              <button type="button" aria-label="Next" onClick={() => scrollBy(1)}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="rn-carousel">
          <div className="rn-carousel-track" ref={trackRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LiveBidding() {
  return (
    <Carousel title="Live Bidding" subtitle="Live Bidding" link={{ label: "View All", href: "/live-explore" }}>
      {liveBiddingSlugs.map((slug, i) => (
        <Reveal key={slug} sal="slide-up" delay={i * 80}>
          <ProductCard product={products[slug]} />
        </Reveal>
      ))}
    </Carousel>
  );
}

export function NewestItems() {
  return (
    <Carousel title="Newest Items" subtitle="Newest Items" link={{ label: "View All", href: "/explore-simple" }}>
      {newestSlugs.map((slug, i) => (
        <Reveal key={slug} sal="slide-up" delay={i * 80}>
          <ProductCard product={products[slug]} />
        </Reveal>
      ))}
    </Carousel>
  );
}

/* ------------------------------------------------------------------ */
/* Create steps                                                        */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    num: "Step-01",
    icon: <Wallet size={28} />,
    title: "Set up your wallet",
    text: "Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.",
  },
  {
    num: "Step-02",
    icon: <ImageIcon size={28} />,
    title: "Create your collection",
    text: "A great collection of beautiful website templates for your need. Choose the best suitable template.",
  },
  {
    num: "Step-03",
    icon: <Plus size={28} />,
    title: "Add your NFT's",
    text: "We've made the template fully responsive, so it looks great on all devices: desktop, tablets and.",
  },
  {
    num: "Step-04",
    icon: <Tag size={28} />,
    title: "Sell your NFT's",
    text: "I throw myself down among the tall grass by the stream as I lie close to the earth NFT's.",
  },
];

export function CreateSteps() {
  return (
    <section className="rn-section-gapTop">
      <div className="nuron-container">
        <Reveal sal="slide-up">
          <div className="section-title" style={{ textAlign: "center" }}>
            <span className="subtitle">Create and sell</span>
            <h3 className="title">Create and sell your NFTs</h3>
          </div>
        </Reveal>
        <div className="create-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} sal="slide-up" delay={i * 100}>
              <div className="create-step">
                <span className="step-num">{s.num}</span>
                <div className="step-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Top sellers                                                         */
/* ------------------------------------------------------------------ */

export function TopSellers() {
  const [shotBy, setShotBy] = useState("Best Seller");
  const [sellIn, setSellIn] = useState("7 Day's");
  const ordered = [...sellers];
  if (shotBy === "Top Rated") ordered.sort((a, b) => b.rating - a.rating);
  if (shotBy === "Recent") ordered.reverse();
  if (shotBy === "Oldest") ordered.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="rn-section-gapTop rn-top-seller--section">
      <div className="nuron-container">
        <div className="section-head-row">
          <Reveal sal="slide-up">
            <div className="section-title">
              <span className="subtitle">Top Seller</span>
              <h2 className="title rn-top-seller-section-title" style={{ fontSize: 36 }}>
                Top Seller
              </h2>
            </div>
          </Reveal>
          <div className="seller-filters">
            <select aria-label="Shot by" value={shotBy} onChange={(e) => setShotBy(e.target.value)}>
              <option>Best Seller</option>
              <option>Top Rated</option>
              <option>Recent</option>
              <option>Oldest</option>
            </select>
            <select aria-label="Sell in" value={sellIn} onChange={(e) => setSellIn(e.target.value)}>
              <option>7 Day&apos;s</option>
              <option>Month</option>
              <option>Last Month</option>
              <option>Year</option>
            </select>
          </div>
        </div>
        <div className="seller-grid">
          {ordered.map((s, i) => (
            <Reveal key={s.store} sal="slide-up" delay={(i % 5) * 80}>
              <Link href={`/store/${s.store}`} className="top-seller-single">
                <span className="rank">{i + 1}</span>
                <span className="thumb">
                  <img src={s.avatar} alt={s.name} width={52} height={52} loading="lazy" />
                </span>
                <span>
                  <h6>{s.name}</h6>
                  <span className="seller-meta">
                    <Stars rating={s.rating} />
                  </span>
                </span>
                <span className="seller-sales">
                  <b>{s.sales}</b>
                  Sales
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Explore products                                                    */
/* ------------------------------------------------------------------ */

export function ExploreProducts() {
  return (
    <section className="rn-section-gapTop">
      <div className="nuron-container">
        <div className="section-head-row">
          <Reveal sal="slide-up">
            <div className="section-title">
              <span className="subtitle">Explore Product</span>
              <h3 className="title">Explore Product</h3>
            </div>
          </Reveal>
          <Link href="/explore-simple" className="title-link">
            Explore <ArrowRight size={15} />
          </Link>
        </div>
        <div className="product-grid">
          {exploreSlugs.map((slug, i) => (
            <Reveal key={slug} sal="slide-up" delay={(i % 5) * 80}>
              <ProductCard product={products[slug]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Top collections                                                     */
/* ------------------------------------------------------------------ */

const COLLAGE: Record<string, string[]> = {
  art: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-7.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-2.jpg",
  ],
  music: [
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-2.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-4.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-5.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-1-6.jpg",
  ],
  collectible: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-3.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-4.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-5.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-6.jpg",
  ],
  games: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-8.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-9.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/product-image-3-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-7.jpg",
  ],
  photography: [
    "/sites/nuron/wp-content/uploads/2023/01/Group-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-1.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-5.jpg",
    "/sites/nuron/wp-content/uploads/2023/01/Group-1-9.jpg",
  ],
};

export function TopCollections() {
  return (
    <section className="rn-section-gapTop">
      <div className="nuron-container">
        <div className="section-head-row">
          <Reveal sal="slide-up">
            <div className="section-title">
              <span className="subtitle">Top Collection</span>
              <h3 className="title">Top Collection</h3>
            </div>
          </Reveal>
          <Link href="/our-collections" className="title-link">
            View All <ArrowRight size={15} />
          </Link>
        </div>
        <div className="collection-grid">
          {collections.map((c, i) => (
            <Reveal key={c.slug} sal="slide-up" delay={i * 80}>
              <Link href={`/collection/${c.slug}`} className="collection-card">
                <span className="collage">
                  {(COLLAGE[c.slug] ?? COLLAGE.art).map((src) => (
                    <img key={src} src={src} alt="" loading="lazy" />
                  ))}
                </span>
                <span className="collection-info">
                  <h6>{c.name}</h6>
                  <span className="items">{c.items} Items</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Newsletter                                                          */
/* ------------------------------------------------------------------ */

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="rn-section-gap">
      <div className="nuron-container">
        <Reveal sal="slide-up">
          <div className="newsletter-area">
            <h3>Get The Latest Nuron Updates</h3>
            <p>
              Created with the collaboration of over 60 of the world&apos;s best
              Nuron Artists.
            </p>
            {done ? (
              <p style={{ color: "#3EB75E", fontWeight: 500, margin: 0 }}>
                Thanks for subscribing — check your inbox (demo).
              </p>
            ) : (
              <form
                className="newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setDone(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            )}
            <p className="newsletter-note">Email is safe. We don&apos;t spam.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
