"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import {
  sellers,
  type NuronProduct,
} from "./data";
import { Countdown, ProductCard } from "./ProductCard";
import { PlaceBidModal, Stars, useCart } from "./chrome";

/* ------------------------------------------------------------------ */
/* Shared helpers (data lives in subpages-data.ts so server pages can
   import plain values — a "use client" module cannot export them)    */
/* ------------------------------------------------------------------ */

import {
  allProducts,
} from "./subpages-data";

export {
  allProducts,
  auctionProducts,
  BLOG_IMAGES,
  COLLECTION_COLLAGE,
  collectionBySlug,
  priceOf,
} from "./subpages-data";

export function cleanBidDate(raw: string): string {
  const cut = raw.split("Reviews")[0].split("Add a review")[0].trim();
  return cut;
}

/* ------------------------------------------------------------------ */
/* Product carousel (horizontal scroll with prev/next)                 */
/* ------------------------------------------------------------------ */

export function ProductCarousel({
  items,
  title,
  subtitle,
}: {
  items: NuronProduct[];
  title: string;
  subtitle: string;
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
    <div>
      <div className="section-head-row">
        <div className="section-title">
          <span className="subtitle">{subtitle}</span>
          <h3 className="title">{title}</h3>
        </div>
        <div className="rn-carousel-nav">
          <button type="button" aria-label="Previous" onClick={() => scrollBy(-1)}>
            <ChevronLeft size={18} />
          </button>
          <button type="button" aria-label="Next" onClick={() => scrollBy(1)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="rn-carousel">
        <div className="rn-carousel-track" ref={trackRef}>
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Filter tabs (client-side category filter)                           */
/* ------------------------------------------------------------------ */

export function FilterableGrid({
  items,
  categories,
}: {
  items: NuronProduct[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? items : items.filter((p) => p.categories.includes(active));
  return (
    <div>
      <div className="explore-toolbar">
        <div className="filter-tabs" role="tablist" aria-label="Filter by category">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              className={active === c ? "active" : ""}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <span style={{ fontSize: 14 }}>
          Showing {shown.length} of {items.length} products
        </span>
      </div>
      <div className="product-grid cols-4">
        {shown.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      {shown.length === 0 && (
        <div className="empty-state">
          <h3>No products in this category</h3>
          <p>Try another filter.</p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* List-style product row                                              */
/* ------------------------------------------------------------------ */

export function ListProductRow({ product }: { product: NuronProduct }) {
  const [bidOpen, setBidOpen] = useState(false);
  const isAuction = product.endTimestamp !== null;
  return (
    <article className="list-product">
      <Link href={`/product/${product.slug}`} className="thumb">
        <img src={product.img} alt={product.name} loading="lazy" />
      </Link>
      <div className="list-content">
        <h4>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h4>
        <p>{product.shortDescription}</p>
        <p style={{ fontSize: 14 }}>
          Categories: {product.categories.join(", ")}
          {product.endingOn ? ` · Ending on ${product.endingOn}` : ""}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: "auto",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>
            {product.bidLabel}
          </span>
          <button
            type="button"
            className="btn btn-primary btn-small"
            onClick={() => setBidOpen(true)}
          >
            {product.expired
              ? "Expired"
              : isAuction
                ? "Place a Bid"
                : "Buy Now"}
          </button>
          <Link href={`/product/${product.slug}`} className="btn btn-primary-alta btn-small">
            View Details
          </Link>
        </div>
      </div>
      {bidOpen && (
        <PlaceBidModal product={product} onClose={() => setBidOpen(false)} />
      )}
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Seller card                                                         */
/* ------------------------------------------------------------------ */

export type Seller = (typeof sellers)[number];

export function SellerCard({ seller, rank }: { seller: Seller; rank?: number }) {
  return (
    <Link href={`/store/${seller.store}`} className="top-seller-single">
      {rank !== undefined && <span className="rank">{rank}</span>}
      <span className="thumb">
        <img src={seller.avatar} alt={seller.name} width={52} height={52} loading="lazy" />
      </span>
      <span>
        <h6>{seller.name}</h6>
        <span className="seller-meta">
          <Stars rating={seller.rating} />
        </span>
      </span>
      <span className="seller-sales">
        <b>{seller.sales}</b>
        Sales
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Product detail (client: gallery switcher, bid form, buy now)        */
/* ------------------------------------------------------------------ */

export function ProductDetail({ product }: { product: NuronProduct }) {
  const [activeImg, setActiveImg] = useState(0);
  const [bidOpen, setBidOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [bidDone, setBidDone] = useState(false);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  const isAuction = product.endTimestamp !== null;
  const related = allProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);
  const bids = product.bidHistory.filter((r) => r[2].trim() !== "");

  return (
    <div>
      <div className="product-detail">
        <div className="product-gallery">
          <div className="main-img">
            <img
              src={product.images[activeImg] ?? product.img}
              alt={product.name}
            />
          </div>
          <div className="thumbs">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={activeImg === i ? "active" : ""}
                aria-label={`View image ${i + 1}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="product-summary">
          <h1>{product.name}</h1>
          <p>{product.shortDescription}</p>
          <div className="price-row">
            <span className="price">{product.bidLabel}</span>
            <span>{product.categories.join(", ")}</span>
          </div>

          <div className="auction-box">
            {isAuction && product.endTimestamp !== null ? (
              <>
                <b style={{ color: "#fff" }}>
                  {product.expired ? "Auction Expired" : "Auction ends in"}
                </b>
                {product.expired ? (
                  <p style={{ margin: "10px 0 0" }}>
                    This auction ended on {product.endingOn ?? "the listed date"}.
                  </p>
                ) : (
                  <div className="countdown-row">
                    <Countdown endTimestamp={product.endTimestamp} />
                  </div>
                )}
              </>
            ) : (
              <b style={{ color: "#fff" }}>Buy this NFT now</b>
            )}
            {bidDone ? (
              <p style={{ color: "#3EB75E", fontWeight: 500, margin: "14px 0 0" }}>
                {isAuction
                  ? "Your bid has been placed (demo)."
                  : "Added to your cart (demo)."}
              </p>
            ) : (
              <form
                className="bid-form"
                style={{ marginTop: 16 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!isAuction) {
                    add(product.slug);
                    setAdded(true);
                  }
                  setBidDone(true);
                }}
              >
                {isAuction && !product.expired ? (
                  <input
                    type="number"
                    min={1}
                    step="any"
                    required
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter your bid amount (USD)"
                    aria-label="Bid amount"
                  />
                ) : null}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={product.expired}
                >
                  {product.expired
                    ? "Auction Expired"
                    : isAuction
                      ? "Place Bid"
                      : "Buy Now"}
                </button>
              </form>
            )}
            {added && !isAuction && (
              <p style={{ marginTop: 12 }}>
                <Link href="/cart" className="title-link">
                  View Cart →
                </Link>
              </p>
            )}
            <p style={{ margin: "14px 0 0", fontSize: 14 }}>
              Or open the full bid dialog:{" "}
              <button
                type="button"
                className="btn btn-primary-alta btn-small"
                onClick={() => setBidOpen(true)}
              >
                Place a Bid
              </button>
            </p>
          </div>

          <ul className="meta-list">
            <li>
              <b>Categories</b>
              <span>{product.categories.join(", ")}</span>
            </li>
            <li>
              <b>Ending On</b>
              <span>{product.endingOn ?? "No auction end date (fixed price)"}</span>
            </li>
            <li>
              <b>Condition</b>
              <span>New</span>
            </li>
            <li>
              <b>Timezone</b>
              <span>UTC 0</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="rn-section-gapTop">
        <div className="section-title">
          <span className="subtitle">Description</span>
          <h3 className="title">About this NFT</h3>
        </div>
        <p style={{ maxWidth: 820 }}>{product.description}</p>
      </div>

      <div className="rn-section-gapTop">
        <div className="section-title">
          <span className="subtitle">Bid History</span>
          <h3 className="title">Bid History</h3>
        </div>
        {bids.length > 0 ? (
          <table className="bid-history">
            <thead>
              <tr>
                <th>Bidder</th>
                <th>Date</th>
                <th>Bid</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((r, i) => (
                <tr key={i}>
                  <td>{r[0]}</td>
                  <td>{cleanBidDate(r[1])}</td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No bids placed yet.</p>
        )}
      </div>

      <div className="rn-section-gapTop">
        <div className="section-title">
          <span className="subtitle">Related Products</span>
          <h3 className="title">Related Products</h3>
        </div>
        <div className="product-grid cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>

      {bidOpen && (
        <PlaceBidModal product={product} onClose={() => setBidOpen(false)} />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Wishlist grid (local heart-toggle state)                            */
/* ------------------------------------------------------------------ */

export function WishlistGrid({ items }: { items: NuronProduct[] }) {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const saved = items.filter((p) => liked[p.slug]);
  const toggle = (slug: string) =>
    setLiked((prev) => ({ ...prev, [slug]: !prev[slug] }));
  return (
    <div>
      <p>
        Your wishlist has <b style={{ color: "#fff" }}>{saved.length}</b> item
        {saved.length === 1 ? "" : "s"} saved. Tap the heart on any NFT below
        to add or remove it — saved only in this browser (demo).
      </p>
      {saved.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 22 }}>Saved items</h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {saved.map((p) => (
              <li
                key={p.slug}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <img
                  src={p.img}
                  alt=""
                  width={48}
                  height={48}
                  style={{ borderRadius: 8, objectFit: "cover" }}
                />
                <Link href={`/product/${p.slug}`} style={{ flex: 1 }}>
                  {p.name} — {p.bidLabel}
                </Link>
                <button
                  type="button"
                  className="btn btn-primary-alta btn-small"
                  onClick={() => toggle(p.slug)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="product-grid cols-4">
        {items.map((p) => (
          <div key={p.slug} style={{ position: "relative" }}>
            <ProductCard product={p} />
            <button
              type="button"
              aria-label={liked[p.slug] ? "Remove from wishlist" : "Add to wishlist"}
              onClick={() => toggle(p.slug)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 5,
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                background: liked[p.slug] ? "#f9004d" : "rgba(19,19,29,0.8)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Heart size={16} fill={liked[p.slug] ? "currentColor" : "none"} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
