"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  ArrowUp,
  Bell,
  ChevronDown,
  Eye,
  Flag,
  Heart,
  Menu,
  Scale,
  Search,
  Share2,
  ShoppingCart,
  Star,
  Wallet,
  X,
} from "lucide-react";
import { products, type NuronProduct } from "./data";

/* Brand icons (lucide-react no longer ships brand glyphs) — simple-icons paths. */
function BrandIcon({ d, size = 16 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon size={size} d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
);
const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon size={size} d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
);
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon size={size} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
);
const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon size={size} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
);
const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <BrandIcon size={size} d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
);

/* ------------------------------------------------------------------ */
/* Cart (local state, persisted — the demo has no checkout backend)    */
/* ------------------------------------------------------------------ */

export type CartItem = { slug: string; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartCtx>({
  items: [],
  count: 0,
  add: () => {},
  remove: () => {},
  setQty: () => {},
  clear: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // Hydrate persisted cart after mount (client-only; avoids SSR mismatch).
    const id = requestAnimationFrame(() => {
      try {
        const raw = localStorage.getItem("nuron-cart");
        if (raw) setItems(JSON.parse(raw) as CartItem[]);
      } catch {
        /* ignore */
      }
      setHydrated(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("nuron-cart", JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);
  const add = useCallback((slug: string) => {
    setItems((prev) => {
      const found = prev.find((i) => i.slug === slug);
      if (found)
        return prev.map((i) => (i.slug === slug ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { slug, qty: 1 }];
    });
  }, []);
  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);
  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, qty } : i)),
    );
  }, []);
  const clear = useCallback(() => setItems([]), []);
  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);
  const value = useMemo(
    () => ({ items, count, add, remove, setQty, clear }),
    [items, count, add, remove, setQty, clear],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV: NavItem[] = [
  {
    label: "Home",
    children: [
      { label: "NFT Marketplace", href: "/" },
      { label: "Vintage Electronics Auction", href: "/vintage-electronics-auction" },
      { label: "Arts Auctions", href: "/arts-auctions" },
      { label: "Antique & Collectible", href: "/antique-collectible" },
      { label: "Automotive Auctions", href: "/automotive-auctions" },
      { label: "Books & Comics", href: "/books-and-comics" },
      { label: "Coins Auctions", href: "/coins-auctions" },
      { label: "Artistry Collection", href: "/artistry-collection" },
      { label: "NFT Auction", href: "/nft-auction" },
      { label: "Crypto Auction Market", href: "/crypto-auction-market" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Explore",
    children: [
      { label: "Explore Simple", href: "/explore-simple" },
      { label: "Explore Isotop", href: "/explore-isotop" },
      { label: "Explore Carousel", href: "/explore-carousel" },
      { label: "Explore Place Bid", href: "/explore-place-bid" },
      { label: "Explore List Style", href: "/explore-list-style" },
      { label: "Explore List Two-Col", href: "/explore-list-two-col" },
      { label: "Explore Left Filter", href: "/explore-left-filter" },
      { label: "Live Explore", href: "/live-explore" },
      { label: "Live Explore Carousel", href: "/live-explore-carousel" },
      { label: "Live With Place Bid", href: "/live-with-place-bid" },
      { label: "Place Bid With Filter", href: "/place-bid-with-filter" },
      { label: "Place Bid With Isotop", href: "/place-bid-with-isotop" },
      { label: "Place Bid With Carousel", href: "/place-bid-with-carousel" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Shop", href: "/shop" },
      { label: "Product Details", href: "/product/crypto-dragon-78" },
      { label: "Cart", href: "/cart" },
      { label: "Checkout", href: "/checkout" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Services", href: "/services" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Process", href: "/process" },
      { label: "Key Features", href: "/key-features" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Logo Showcase", href: "/logo-showcase" },
      { label: "Video Showcase", href: "/video-showcase" },
      { label: "Statistics", href: "/statistics" },
      { label: "Call To Action", href: "/call-to-action" },
    ],
  },
  {
    label: "Creators",
    children: [
      { label: "Creators With Filter", href: "/creators-with-filter" },
      { label: "Creators Ranking", href: "/creators-ranking" },
      { label: "Best Sellers", href: "/best-sellers" },
      { label: "Our Collections", href: "/our-collections" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "Blog List", href: "/blog" },
      { label: "Blog Grid", href: "/blog-grid" },
      { label: "Standard Post", href: "/blog/top-image-resources-for-great-artists-and-nfts" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (showSearch) searchRef.current?.focus();
  }, [showSearch]);

  const results =
    query.trim().length > 0
      ? Object.values(products).filter((p) =>
          p.name.toLowerCase().includes(query.trim().toLowerCase()),
        )
      : [];

  return (
    <>
      <header className={`rn-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nuron-container">
          <div className="header-inner">
            <div className="header-logo">
              <Link href="/" aria-label="Nuron home">
                <img
                  src="/sites/nuron/wp-content/uploads/2023/01/logo-white.png"
                  alt="Nuron"
                  width={200}
                  height={66}
                />
              </Link>
            </div>

            <nav aria-label="Main navigation">
              <ul className="mainmenu">
                {NAV.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <span className="nav-link">
                        {item.label}
                        <ChevronDown size={14} />
                        <ul className="submenu">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href}>{c.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </span>
                    ) : (
                      <Link href={item.href ?? "/"}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-right">
              <div className="header-search" style={{ display: showSearch ? "flex" : undefined }}>
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Products search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                />
                <button type="button" aria-label="Search" onClick={() => setShowSearch(true)}>
                  <Search size={17} />
                </button>
                {query.trim().length > 0 && (
                  <div
                    className="share-btn-setting"
                    style={{ top: "calc(100% + 10px)", minWidth: 260 }}
                  >
                    {results.length === 0 && (
                      <button type="button">No products found</button>
                    )}
                    {results.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/product/${p.slug}`}
                        style={{ display: "flex", gap: 10, padding: "9px 12px", alignItems: "center" }}
                      >
                        <img src={p.img} alt="" width={36} height={36} style={{ borderRadius: 6, objectFit: "cover" }} />
                        <span style={{ fontSize: 14 }}>{p.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button type="button" className="header-icon-btn" aria-label="Notifications">
                <Bell size={17} />
              </button>

              <Link href="/cart" className="header-icon-btn" aria-label="Cart">
                <ShoppingCart size={17} />
                {count > 0 && <span className="count-badge">{count}</span>}
              </Link>

              <button
                type="button"
                className="btn btn-primary btn-small"
                onClick={() => setWalletOpen(true)}
              >
                <Wallet size={16} />
                <span className="btn-label">Connect Wallet</span>
              </button>

              <button
                type="button"
                className="header-icon-btn mobile-menu-btn"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile popup menu */}
      <div className={`popup-mobile-menu ${mobileOpen ? "open" : ""}`} role="dialog" aria-label="Menu">
        <div className="inner">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img
              src="/sites/nuron/wp-content/uploads/2023/01/logo-white.png"
              alt="Nuron"
              width={140}
              height={46}
            />
            <button type="button" className="close-btn" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <ul className="mobile-nav">
            {NAV.flatMap((item) =>
              item.children
                ? item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setMobileOpen(false)}>
                        {c.label}
                      </Link>
                    </li>
                  ))
                : [
                    <li key={item.href}>
                      <Link href={item.href ?? "/"} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    </li>,
                  ],
            )}
          </ul>
          <div style={{ marginTop: 24 }}>
            <button type="button" className="btn btn-primary" style={{ width: "100%" }} onClick={() => { setMobileOpen(false); setWalletOpen(true); }}>
              <Wallet size={16} /> Connect Wallet
            </button>
          </div>
        </div>
      </div>

      {walletOpen && (
        <WalletModal onClose={() => setWalletOpen(false)} />
      )}
    </>
  );
}

function WalletModal({ onClose }: { onClose: () => void }) {
  const [connected, setConnected] = useState(false);
  const wallets = ["MetaMask", "Coinbase Wallet", "WalletConnect", "Trust Wallet"];
  return (
    <div className="rn-modal-backdrop" onClick={onClose}>
      <div className="rn-modal" role="dialog" aria-label="Connect wallet" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          <X size={16} />
        </button>
        <h5>Connect your wallet</h5>
        <p>Connect with one of our available wallet providers or create a new one.</p>
        {connected ? (
          <p style={{ color: "#3EB75E", fontWeight: 500 }}>Wallet connected (demo — no real connection made).</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {wallets.map((w) => (
              <button key={w} type="button" className="btn btn-primary-alta" style={{ justifyContent: "flex-start" }} onClick={() => setConnected(true)}>
                <Wallet size={16} /> {w}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const RECENT_SOLD: { slug: string; cats: string }[] = [
  { slug: "the-abandoned-asylum", cats: "CryptoLand, NFT" },
  { slug: "the-enchanted-castle", cats: "CryptoLand, NFT" },
  { slug: "crypto-dragon-78", cats: "CryptoAvatar, NFT" },
];

export function Footer() {
  return (
    <footer className="rn-footer">
      <div className="nuron-container">
        <div className="footer-grid">
          <div className="footer-widget">
            <div className="logo">
              <Link href="/">
                <img
                  src="/sites/nuron/wp-content/uploads/2023/01/logo-white.png"
                  alt="Nuron"
                  width={200}
                  height={66}
                />
              </Link>
            </div>
            <p>
              Created with the collaboration of over 60 of the world&apos;s best Nuron
              Artists.
            </p>
            <ul className="footer-social">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon size={16} /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterIcon size={16} /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={16} /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={16} /></a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><YoutubeIcon size={16} /></a></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4>Marketplace</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/key-features">Key Features</Link></li>
              <li><Link href="/nft">NFT</Link></li>
              <li><Link href="/our-collections">Our Collections</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/vendor-register">Vendor Registration</Link></li>
              <li><Link href="/about">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/blog">Protocol</Link></li>
              <li><Link href="/explore-simple">Explore</Link></li>
              <li><Link href="/blog">System Token</Link></li>
              <li><Link href="/blog">Visual Checking</Link></li>
              <li><Link href="/blog">Activity Log</Link></li>
              <li><Link href="/blog">System Auto</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4>Recent Sold Out</h4>
            {RECENT_SOLD.map((r) => {
              const p = products[r.slug];
              if (!p) return null;
              return (
                <Link key={r.slug} href={`/product/${r.slug}`} className="footer-soldout">
                  <img src={p.img} alt={p.name} />
                  <span>
                    <h6>{p.name}</h6>
                    <span>{r.cats}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="copyright-area">
          <div className="copyright-inner">
            <p style={{ margin: 0 }}>
              © 2026. All rights reserved by{" "}
              <a href="https://themeforest.net/user/rainbow-themes" target="_blank" rel="noreferrer">
                Rainbow-Themes
              </a>
              .
            </p>
            <ul>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Breadcrumb                                                          */
/* ------------------------------------------------------------------ */

export function Breadcrumb({ title, crumbs }: { title: string; crumbs: { label: string; href?: string }[] }) {
  return (
    <div className="rn-breadcrumb">
      <div className="nuron-container">
        <h2>{title}</h2>
        <ul className="breadcrumb">
          {crumbs.map((c, i) => (
            <li key={i} className={i === crumbs.length - 1 ? "active" : ""}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Modals: share / report / place bid                                 */
/* ------------------------------------------------------------------ */

export function ShareModal({ product, onClose }: { product: NuronProduct; onClose: () => void }) {
  return (
    <div className="rn-modal-backdrop" onClick={onClose}>
      <div className="rn-modal" role="dialog" aria-label="Share this NFT" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          <X size={16} />
        </button>
        <h5>Share this NFT</h5>
        <p>{product.name} — share it with your friends and followers.</p>
        <div className="share-options">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://rainbowthemes.net/themes/nuron/product/${product.slug}/`)}`} target="_blank" rel="noreferrer"><FacebookIcon size={15} /> Facebook</a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer"><TwitterIcon size={15} /> Twitter</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://rainbowthemes.net/themes/nuron/product/${product.slug}/`)}`} target="_blank" rel="noreferrer"><LinkedinIcon size={15} /> LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export function ReportModal({ product, onClose }: { product: NuronProduct; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [reason, setReason] = useState("Copyright infringement");
  return (
    <div className="rn-modal-backdrop" onClick={onClose}>
      <div className="rn-modal" role="dialog" aria-label="Report this NFT" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          <X size={16} />
        </button>
        <h5>Why are you reporting?</h5>
        <p>{product.name}</p>
        {sent ? (
          <p style={{ color: "#3EB75E", fontWeight: 500 }}>Thanks — your report has been received (demo).</p>
        ) : (
          <form
            className="rn-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label htmlFor="report-reason">Your Message</label>
            <select id="report-reason" value={reason} onChange={(e) => setReason(e.target.value)}>
              <option>Copyright infringement</option>
              <option>Spam or misleading</option>
              <option>Violent or prohibited content</option>
              <option>Other</option>
            </select>
            <textarea rows={4} placeholder="Describe the issue…" defaultValue="" />
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              <Flag size={15} /> Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function PlaceBidModal({ product, onClose }: { product: NuronProduct; onClose: () => void }) {
  const { add } = useCart();
  const [amount, setAmount] = useState("");
  const [done, setDone] = useState(false);
  const isAuction = product.endTimestamp !== null;
  return (
    <div className="rn-modal-backdrop" onClick={onClose}>
      <div className="rn-modal" role="dialog" aria-label="Place a bid" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          <X size={16} />
        </button>
        <h5>Place a Bid</h5>
        <p>{product.name} — {product.bidLabel}</p>
        {done ? (
          <p style={{ color: "#3EB75E", fontWeight: 500 }}>
            {isAuction ? "Your bid has been placed (demo)." : "Added to your cart (demo)."}
          </p>
        ) : product.expired ? (
          <>
            <p>Auction has Expired! This auction ended on {product.endingOn ?? "the listed date"}.</p>
            <button type="button" className="btn btn-primary-alta" style={{ width: "100%" }} onClick={onClose}>
              Close
            </button>
          </>
        ) : (
          <form
            className="rn-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!isAuction) add(product.slug);
              setDone(true);
            }}
          >
            {isAuction ? (
              <>
                <label htmlFor="bid-amount">Your bid amount (USD)</label>
                <input
                  id="bid-amount"
                  type="number"
                  min={1}
                  step="any"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter bid amount"
                />
              </>
            ) : (
              <p>Price: <b style={{ color: "#fff" }}>{product.bidLabel}</b></p>
            )}
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              {isAuction ? "Place Bid" : "Add to Cart"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Misc shared bits                                                    */
/* ------------------------------------------------------------------ */

export function LikeButton({ product }: { product: NuronProduct }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(product.likes);
  return (
    <>
      <button
        type="button"
        className={`favorites-box ${liked ? "liked" : ""}`}
        aria-label="Like"
        title="Like"
        onClick={() => {
          setLiked((v) => !v);
          setCount((c) => (liked ? c - 1 : c + 1));
        }}
      >
        <Heart size={15} fill={liked ? "currentColor" : "none"} />
      </button>
      <div className="like-count">{count > 0 ? count : ""}</div>
    </>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="rating">
      <Star size={13} fill="currentColor" /> {rating}
    </span>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={20} />
    </button>
  );
}

export function QuickActions({ product }: { product: NuronProduct }) {
  const [shared, setShared] = useState(false);
  const [reported, setReported] = useState(false);
  const [wished, setWished] = useState(false);
  return (
    <>
      <div className="rbt-quick-action--btns">
        <button type="button" className="qa-btn" title="Quick View" aria-label="Quick view" onClick={() => setShared(true)}>
          <Eye size={15} />
        </button>
        <button
          type="button"
          className={`qa-btn ${wished ? "active" : ""}`}
          title="Wishlist"
          aria-label="Add to wishlist"
          onClick={() => setWished((v) => !v)}
        >
          <Heart size={15} fill={wished ? "currentColor" : "none"} />
        </button>
        <button type="button" className="qa-btn" title="Compare" aria-label="Compare">
          <Scale size={15} />
        </button>
        <button type="button" className="qa-btn" title="Share" aria-label="Share" onClick={() => setShared(true)}>
          <Share2 size={15} />
        </button>
      </div>
      {shared && <ShareModal product={product} onClose={() => setShared(false)} />}
      {reported && <ReportModal product={product} onClose={() => setReported(false)} />}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Site shell                                                          */
/* ------------------------------------------------------------------ */

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <BackToTop />
    </CartProvider>
  );
}
