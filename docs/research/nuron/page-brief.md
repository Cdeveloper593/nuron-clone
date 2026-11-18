# Nuron NFT Marketplace clone — page brief

Source: https://rainbowthemes.net/themes/nuron/nft-marketplace/ (WordPress + WooCommerce + Ultimate WooCommerce Auction, Elementor, Nuron theme v2.1.0 / nuron-core). Demo verified live 2026-11-12 ~10:45 AM EST (HTTP 200, title "NFT Marketplace – Nuron").
Evidence: source HTML of the homepage + 18 subpages + 15 product pages (saved under /tmp/nuron-home.html, /tmp/nuron-pages/, /tmp/nuron-products/), theme CSS assets/css/style.css v2.1.0 (/tmp/nuron-style.css), WooCommerce Store API (/tmp/nuron-products.json, 119 products) and WP REST API pages/posts (/tmp/nuron-pages.json, /tmp/nuron-posts-full.json). No live-browser visual check available (cloud browser can't reach localhost); comparisons are source/CSS-based, not pixel-perfect.

## Route map (source → local)

| Source | Local |
|---|---|
| `/nft-marketplace/` (home) | `/` |
| `/explore-simple/` | `/explore-simple` |
| `/explore-isotop/` | `/explore-isotop` |
| `/explore-carousel/` | `/explore-carousel` |
| `/explore-place-bid/` | `/explore-place-bid` |
| `/explore-list-style/` | `/explore-list-style` |
| `/explore-list-two-col/` | `/explore-list-two-col` |
| `/explore-left-filter/` | `/explore-left-filter` |
| `/live-explore/` | `/live-explore` |
| `/live-explore-carousel/` | `/live-explore-carousel` |
| `/live-with-place-bid/` | `/live-with-place-bid` |
| `/place-bid-with-filter/` | `/place-bid-with-filter` |
| `/place-bid-with-isotop/` | `/place-bid-with-isotop` |
| `/place-bid-with-carousel/` | `/place-bid-with-carousel` |
| `/product/<slug>/` × 15 | `/product/<slug>` |
| `/about/` | `/about` |
| `/contact/` | `/contact` |
| `/blog/` | `/blog` |
| `/blog-grid/` | `/blog-grid` |
| `/blog/<slug>/` × 8 | `/blog/<slug>` |
| `/creators-ranking/` | `/creators-ranking` |
| `/creators-with-filter/` | `/creators-with-filter` |
| `/best-sellers/` | `/best-sellers` |
| `/our-collections/` | `/our-collections` |
| `/collection/<slug>/` (art, music, collectible, games, photography) | `/collection/<slug>` |
| `/services/` | `/services` |
| `/shop/` | `/shop` |
| `/cart/`, `/checkout/`, `/wishlist/`, `/my-account/` | same |
| `/terms/`, `/privacy-policy/` | same |
| `/store/<slug>/` × 10 sellers | `/store/<slug>` |
| Home-variant auction pages + `/process/`, `/key-features/`, `/newsletter/`, `/logo-showcase/`, `/video-showcase/`, `/statistics/`, `/call-to-action/`, `/vendor-register/`, `/nft/` | same slugs (simple pages) |

## Design tokens (from style.css :root)

- Fonts: Roboto (body + headings; `--font-primary`/`--font-secondary` both Roboto). Loaded via next/font.
- Colors: `--color-primary: #00a3ff`; gradient `linear-gradient(to right bottom, #2899d8, #00a3ff)`; page bg `#13131d`; card bg `#242435`; section bg `#151521`; heading `#ffffff`; body text `#acacac`; border `#ffffff14`; subtitle pink `#f9004d`; success `#3EB75E`.
- Type scale: h1 44px, h2 36px, h3 30px, h4 24px, h5 18px, h6 16px; hero h2 60px/80px line-height.
- Radius 10px on cards/buttons; container max 1320px; section gap 100px top/bottom.
- Icons: Feather (source) — replaced with lucide-react equivalents + inline SVG brand icons (lucide v1.6 in this template ships no brand glyphs).

## Homepage section order

1. Header (sticky, dark `#13131d`, border + shadow on scroll): logo-white.png, nav Home (dropdown: 10 home variants) / About / Explore (13 variants) / Pages (15) / Creators (4) / Blog (3) / Contact; search input with live product results; notification bell; cart with count badge; "Connect Wallet" button → wallet modal (MetaMask/Coinbase/WalletConnect/Trust Wallet, demo connect state); mobile hamburger → slide-in popup menu.
2. Hero (slider-style-6): "Discover Digital Art, Collect and Sell Your Specific NFTs." (gradient on "Specific NFTs."), sub "Partner with one of the world's largest retailers to showcase your brand and products.", buttons "Get Started" → /explore-simple, "Create" → /vendor-register; right slider-1.png (1000×1013) with float animation; floating shape-1/5/7 PNGs.
3. Live Bidding: horizontal scroll-snap carousel (5 visible desktop, prev/next arrows), 6 products: Crypto Dragon #78, Ethereal Wolf, The Lost Monkey, Mystical Forest, The Lost Temple, Vintage Vinyl #456.
4. Create and sell your NFTs: 4 steps — Step-01 Set up your wallet ("Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable."), Step-02 Create your collection ("A great collection of beautiful website templates for your need. Choose the best suitable template."), Step-03 Add your NFT's ("We've made the template fully responsive, so it looks great on all devices: desktop, tablets and."), Step-04 Sell your NFT's ("I throw myself down among the tall grass by the stream as I lie close to the earth NFT's.").
5. Newest Items: carousel, 5 products: The Abandoned Asylum, The Enchanted Castle, Crypto Dragon #78, Vintage Poster #789, The Future City.
6. Top Seller: 10 sellers (William 3.7, Orko 4.3, Nipa 4.8, Joseph 4, Isabella 5, Emily 3.8, Devmahbub 4.8, Ava Garcia 4.4, Amelia Harris 3.2, Alexander 4.8; all sales "$0" in the source), rank + avatar (client-*.png) + star rating + sales; "SHOT BY" (Best Seller / Top Rated / Recent / Oldest) and "SELL IN" (7 Day's / Month / Last Month / Year) selects that re-sort.
7. Explore Product: grid of 10: Vintage Vinyl #456, The Lost Temple, Mystical Forest, The Lost Monkey, Ethereal Wolf, Ancient Coin, Expanding Brain, Black Lotus, Tropical Paradise, Art – The Last Suppers.
8. Top Collection: Art 9 Items, Music 7, Collectible 5, Games 5, Photography 5 — collage cards (collage images are product artwork from the site; exact per-collection collage composition is approximate — see gaps).
9. Newsletter: "Get The Latest Nuron Updates" + "Created with the collaboration of over 60 of the world's best Nuron Artists." + email form (local success state) + "Email is safe. We don't spam."
10. Footer: logo + "Created with the collaboration of over 60 of the world's best Nuron Artists." + socials; Marketplace links; Resources links; Recent Sold Out (The Abandoned Asylum, The Enchanted Castle, Crypto Dragon #78 — listed as "CryptoLand, NFT"); copyright "© 2026. All rights reserved by Rainbow-Themes" + Terms/Privacy/Contact.

## Product cards (product-style-one)

- Thumbnail 1:1, hover zoom (scale 1.06) + card lift + border highlight; countdown badge bottom-center (dark glass) ticking to the product's real auction end timestamp; hover reveals centered bid button ("Place a Bid" / "Buy Now" / "Expired") and right-side quick actions (quick view, wishlist heart, compare, share).
- Below: bidder avatars + "N+ Place Bit" (N = real bid-history count), 3-dot share dropdown (Share → share modal with Facebook/Twitter/LinkedIn; Report → report modal with reason select), product name, bid row: "Auction Expired" (red) for expired auctions, "Winning Bid: $ X" for won auctions (Ancient Coin $660.00, Expanding Brain $220.00, Black Lotus $3,200.00, Tropical Paradise $440.00), or plain price for simple products (The Lost Temple $250.00, The Abandoned Asylum $350.00, The Enchanted Castle $250.00, Art – The Last Suppers $510.00). Like button toggles with count (source counts: 0–3).
- Real auction end timestamps from product pages (all expired in 2023): crypto-dragon-78 1679642753 (Mar 24, 2023), ethereal-garden 1687588888, the-lost-city 1692168833, mystical-forest 1674716324, vintage-vinyl-456 1680160168, vintage-poster-789 1681975163, the-future-city 1674717282, ancient-coin 1695279154, expanding-brain 1695881255, black-lotus 1685080002, tropical-paradise 1684990376. Simple products (no auction): the-lost-temple, the-abandoned-asylum, the-enchanted-castle, cryptoart-the-last-supper.
- Bid history (real, from product pages): 2–6 bids per auction product; shown on product detail pages.

## Animations kept

- Scroll reveals via IntersectionObserver replicating SAL (`data-sal` slide-up/down/left/right, zoom-in, fade; delay/duration honoured).
- Hero image + decorative shapes: 6–7s float loop.
- Slick carousels reimplemented as scroll-snap carousels with smooth-scroll prev/next arrows (same 5-visible desktop layout).
- Countdowns tick every second from the real end timestamps; expired state renders "Auction Expired" exactly as the live source does now.
- Hover states: product card lift/zoom, quick-action buttons slide in, bid button fades in, collection/blog cards lift, buttons translate.
- Header shadow/border on scroll; back-to-top button appears after 400px; share/report/place-bid/wallet modals animate in.
- Top-seller filters re-sort live; explore filters/sort work client-side; cart persists in localStorage.

## Assets

All under `public/sites/nuron/` (191 files, ~14 MB), preserving the source's `wp-content/uploads/...` and `wp-content/themes/nuron/assets/...` paths: product artwork Group-1*.jpg, product-image-*.jpg, slider-1.png, logo-white.png, logo-dark.png, cropped-logo-white.png, shape-*.png, client-*.png avatars, badge.png, bg images, icons (sun-01.svg, vector.svg), 2023/09 demo images, 2023/10 feature icons. All verified real files (JPEG/PNG magic + dimensions checked); no zero-byte files.

## Build outcome (2026-11-12)

- `npm run check` passes (lint: 0 errors, 39 warnings — all deliberate `<img>` usage, same pattern as OneClick; typecheck + build clean). 89 pages generated (86 routes + `/_not-found` + 2 dynamic shells).
- Production server running on port 3400; all 86 routes verified HTTP 200 locally with key section strings present; sampled assets serve 200 with correct content types.
- Fixed during integration: 2 lint errors (cart hydration setState-in-effect → requestAnimationFrame; `let` → `const` in shop), unused imports in subpages.tsx, seller avatar paths corrected to `wp-content/uploads/...` (subagent's report flagged this from a stale read — already fixed before its handoff).

## Phase A completion (2026-11-12 evening, final pass)

Source inventory built from WP REST (`?rest_route=/wp/v2/pages` + `/wp/v2/posts`) and the WooCommerce Store API: **69 WP pages, 15 posts, 119 products, 61 product categories — all cloned, nothing missing.**
- Products: all 104 missing products added to `data.ts` from the Store API + per-product page HTML (real auction end timestamps, "Ending On" dates, real bid history, gallery images in source order, original images downloaded to `public/sites/nuron/`). 94 expired, 2 live auctions (automotive-memorabilia-and-collectibles ends Mar 31, 2027; records-and-turntables ends Mar 27, 2027 — countdowns tick live). 27 products have real bids (26 "Winning Bid", 1 live "Current Bid"). 308 asset files total (was 191). Shop now lists all 119 with working sort/category filter.
- Blog: all 7 missing 2020 posts added with full WP content and real featured images (downloaded, URLs rewritten to local paths); blog list/grid now show all 15.
- Pages: all 17 missing WP pages added — contact-info (real Quick Contact blocks), sample-page (exact WP text), vendor-membership (4-step Plans/Registration/Confirmation/Thank You flow), yith-compare (empty compare table, as on source), store-manager (Dokan dashboard demo shell with real menu/stats copy), home-seven / home-eight / home-fourteen / extravaganza-electronics-auction (home variants with real hero copy + category-filtered carousels), and 8 empty-body plugin pages (activity, creators, forum-and-community, new-creators, services-list, support, top-rated-creators, user — the source renders no main content on these, so the clone mirrors that). Plus 4 home variants the first pass had missed entirely: handmade-auction, laboratory-auction, machinery-auctions, memorabilia-auctions (real hero copy from the source + category carousels).
- New dynamic route `/product-category/[slug]` covers all 61 WooCommerce category archives (incl. sub-categories). `productsInCategory()` / `categoryBySlug()` in subpages-data.ts; `productCategories` (61, with term ids) in data.ts.
- `npm run check` passes (0 errors, 39 warnings — same deliberate `<img>` warnings); 282 static pages generated. Production server restarted on port 3400; 215 routes verified HTTP 200 locally (all 119 products, all 15 posts, all 21 new/added pages, all 61 category archives, plus spot-checked pre-existing routes). Two original bidLabels preserved from the product pages' displayed prices (the-lost-temple $250.00, cryptoart-the-last-supper $510.00 — both on sale vs Store API price).

## Re-check (2026-11-13 ~07:00 EST, after the 05:42 deadline)

Independent re-audit rebuilt the source inventory fresh from the live site (WP REST
`?rest_route=/wp/v2/pages|posts`, WooCommerce Store API products/categories, plus a
crawl of internal links from the homepage, /our-collections/, /creators-ranking/,
/blog/ and /shop/, plus all 119 product pages and all 44+9 collection archive pages).
Phase A's core counts verified exactly: 69 WP pages, 15 posts, 119 products,
61 product categories, 10 stores — all present, no extras. But Phase A had missed
the taxonomy archives entirely:

- **Collections: 52 terms on the source, clone had 5** — 47 missing archive pages
  added (`/collection/<slug>/`), with exact source membership (21 archives list
  products, 31 are genuinely empty — "No products were found" on the source,
  including /collection/art/ despite the homepage's "Art 9 Items" widget text).
  Parent terms included (Automotive, Coins, Electronics, Memorabilia, Antiques,
  Books and comics, Handmade Auction, Machinery Auctions, Lab-auction) with the
  source's breadcrumb parent links. The old artwork-filename approximation
  (MAP) is gone; /collection/art|music|games|photography|collectible now list
  exactly what the source lists (e.g. music = The Abandoned Asylum +
  The Lost Temple; photography = Lamborghini Aventador only).
- **Product tags: 59 terms, clone had 0** — all 59 `/product-tag/<slug>/`
  archives added (20 list products, 39 empty on the source).
- **Blog categories (13) and tags (12), clone had 0** — all 25 archives added
  (`/category/<slug>/`, `/tag/<slug>/`) with exact post membership from WP REST.
- **Pagination: /blog/page/2, /blog-grid/page/2, /blog-grid/page/3** — /blog now
  shows 10 posts/page (10+5) and /blog-grid 6/page (6+6+3), as on the source.
- **Post URLs: source posts live at /<slug>/, clone only had /blog/<slug>/** —
  root-level post routes added (15); /blog/<slug>/ still works. Post breadcrumb
  now uses the post's category (Home / Category / Title) as on the source.
- **Product cards lacked the source's `product--collection` line** — added to
  ProductCard (111/119 products mapped; 8 products never appear on any source
  card, so their collections are unknown and render no line).
- **/our-collections/ showed the wrong set** — source shows Art 9, Smart Devices 9,
  Ancient Coins 8, Laboratory Efficiency 8 (with real collage artwork); fixed.
- New data in `src/components/sites/nuron/taxonomy-data.ts`; shared
  `BlogList.tsx` / `BlogPost.tsx` components; CSS for `.product--collection`,
  pagination and WooCommerce notices in `nuron.css`.
- Result: 431 static pages (was 282), `npm run check` passes (0 errors, 39
  pre-existing warnings), server restarted on port 3400, all 431 routes verified
  200 locally, live tunnel verified 200 (incl. a new route).
- Known deviations left as-is: /shop and explore pages list all 119 products
  where the source shows a curated 10–15 (deliberate Phase A superset, kept);
  no /shop/page/2 route (source shop paginates 12+3); no live visual side-by-side;
  cart/checkout/wallet are local demos.

## Known gaps

- No live visual side-by-side comparison (cloud browser can't reach localhost); geometry/typography taken from the theme's declared CSS values, not rendered screenshots. Not claimed pixel-perfect.
- All demo auctions expired in 2023, so countdowns render the "Auction Expired" state (faithful to the live source today); the ticking countdown logic is live and would show for future end dates.
- Homepage Top Collection collage images are product artwork from the site, composed per collection — the exact collage composition per collection on the source was not fully mapped.
- Shop page covers the 15 NFT products; the source shop lists 119 products (mostly other auction verticals) — out of scope for this pass.
- Cart/checkout/wishlist/my-account are local-state demos (no WooCommerce backend); contact/newsletter forms show local success only; wallet connect is a demo modal (no real provider connection).
- Home-variant auction pages (Vintage Electronics, Arts, Antique, etc.) are simple pages reusing the NFT Marketplace pattern, not full separate homepages — the source has 14 distinct home demos sharing the same theme.
- Feather icons replaced with lucide equivalents (same 16px glyphs, near-identical shapes); brand icons are inline SVGs.
- Blog post featured images: posts use text cards where no featured image was downloaded (see subpage report).
