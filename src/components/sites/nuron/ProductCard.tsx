"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MoreHorizontal, Flag, Share2 } from "lucide-react";
import { sellers, type NuronProduct } from "./data";
import { productCollections } from "./taxonomy-data";
import {
  LikeButton,
  PlaceBidModal,
  QuickActions,
  ReportModal,
  ShareModal,
} from "./chrome";

function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

export function Countdown({ endTimestamp }: { endTimestamp: number }) {
  const now = useNow();
  const diff = Math.max(0, endTimestamp * 1000 - now);
  if (diff <= 0) {
    return (
      <div className="rbt-count--down">
        <span className="cd-expired">Auction Expired</span>
      </div>
    );
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="rbt-count--down">
      <span className="cd-box">
        <span className="cd-num">{pad(days)}</span>
        <span className="cd-label">Days</span>
      </span>
      <span className="cd-box">
        <span className="cd-num">{pad(hours)}</span>
        <span className="cd-label">Hours</span>
      </span>
      <span className="cd-box">
        <span className="cd-num">{pad(minutes)}</span>
        <span className="cd-label">Mins</span>
      </span>
      <span className="cd-box">
        <span className="cd-num">{pad(seconds)}</span>
        <span className="cd-label">Secs</span>
      </span>
    </div>
  );
}

export function ProductCard({ product }: { product: NuronProduct }) {
  const [shareOpen, setShareOpen] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [bidModal, setBidModal] = useState(false);
  const isAuction = product.endTimestamp !== null;
  const bidCount = product.bidHistory.length;

  return (
    <div className="product-style-one with-placeBid no-overlay">
      <div className="card-thumbnail">
        <Link href={`/product/${product.slug}`}>
          <img src={product.img} alt={product.name} width={640} height={640} loading="lazy" />
        </Link>

        <div className="add-to--cart absolute--center">
          <button type="button" className="button" onClick={() => setBidModal(true)}>
            {product.expired ? "Expired" : isAuction ? "Place a Bid" : "Buy Now"}
          </button>
        </div>

        {isAuction && product.endTimestamp !== null && (
          <Countdown endTimestamp={product.endTimestamp} />
        )}

        <QuickActions product={product} />
      </div>

      <div className="card-contents">
        <div className="product-share-wrapper">
          <div className="profile-share">
            {sellers.slice(0, 3).map((s) => (
              <Link key={s.store} href={`/creators-ranking`} title={s.name}>
                <img src={s.avatar} alt={s.name} width={30} height={30} loading="lazy" />
              </Link>
            ))}
            {bidCount > 0 && <span className="more-author-text">{bidCount}+ Place Bit</span>}
          </div>

          <div className="share-btn">
            <button
              type="button"
              className="icon"
              aria-label="More options"
              aria-expanded={shareOpen}
              onClick={() => setShareOpen((v) => !v)}
            >
              <MoreHorizontal size={16} />
            </button>
            {shareOpen && (
              <div className="share-btn-setting">
                <button
                  type="button"
                  onClick={() => {
                    setShareOpen(false);
                    setShareModal(true);
                  }}
                >
                  <Share2 size={14} /> Share
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShareOpen(false);
                    setReportModal(true);
                  }}
                >
                  <Flag size={14} /> Report
                </button>
              </div>
            )}
          </div>
        </div>

        {(productCollections[product.slug] ?? []).length > 0 && (
          <div className="product--collection">
            {(productCollections[product.slug] ?? []).map((c, i, arr) => (
              <span key={c.slug}>
                <Link href={`/collection/${c.slug}`} rel="tag">{c.name}</Link>
                {i < arr.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        )}

        <h4 className="product-name">
          <Link href={`/product/${product.slug}`}>
            <span className="product-name pso--title">{product.name}</span>
          </Link>
        </h4>

        <div className="bid-react-area">
          <div className="last-bid pso--price">
            {product.expired || product.bidLabel.startsWith("Winning Bid") ? (
              <span className={product.expired ? "woo-ua-winned-for expired" : ""}>
                {product.bidLabel}
              </span>
            ) : (
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">$</span>{" "}
                  {product.bidLabel.replace("$ ", "")}
                </bdi>
              </span>
            )}
          </div>
          <div className="react-area">
            <div className="user-favorites single-favorites d-flex">
              <LikeButton product={product} />
            </div>
          </div>
        </div>
      </div>

      {shareModal && <ShareModal product={product} onClose={() => setShareModal(false)} />}
      {reportModal && <ReportModal product={product} onClose={() => setReportModal(false)} />}
      {bidModal && <PlaceBidModal product={product} onClose={() => setBidModal(false)} />}
    </div>
  );
}
