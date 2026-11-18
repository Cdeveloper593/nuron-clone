// Taxonomy archives for the Nuron clone — built 2026-11-13 from the live source
// (rainbowthemes.net/themes/nuron). Collection archives: 52 terms, product-tag
// archives: 59 terms, blog categories: 13, blog tags: 12. Membership lists are
// the exact products/posts each source archive page lists (several source
// archives are genuinely empty — "No products were found" on the live site).

export interface CollectionArchive {
  slug: string;
  name: string;
  /** Parent collection term slug, from the source breadcrumb (null for top-level terms). */
  parent: string | null;
  /** Product slugs the source /collection/<slug>/ archive lists, in source order. */
  products: string[];
}

export const collectionArchives: CollectionArchive[] = [
  { slug: "ancient-coins", name: "Ancient Coins", parent: "coins", products: [] },
  { slug: "antiques", name: "Antiques", parent: null, products: ["records-and-turntables"] },
  { slug: "art", name: "Art", parent: null, products: [] },
  { slug: "audio-equipment", name: "Audio Equipment", parent: "electronics", products: [] },
  { slug: "automotive", name: "Automotive", parent: null, products: ["automotive-memorabilia-and-collectibles"] },
  { slug: "automotive-artistry", name: "Automotive Artistry", parent: "automotive", products: ["automotive-memorabilia-and-collectibles"] },
  { slug: "books-and-comics", name: "Books and comics", parent: null, products: ["childrens-storybook-adventures", "graphic-non-fiction", "graphic-novels-galore", "superhero-chronicles"] },
  { slug: "children-book", name: "Children Book", parent: "books-and-comics", products: ["childrens-storybook-adventures", "graphic-non-fiction", "graphic-novels-galore", "superhero-chronicles"] },
  { slug: "classic", name: "Classic", parent: "automotive", products: ["automotive-memorabilia-and-collectibles"] },
  { slug: "coins", name: "Coins", parent: null, products: [] },
  { slug: "collectible", name: "Collectible", parent: "antiques", products: ["records-and-turntables"] },
  { slug: "collectibles", name: "Memorabilia Collectibles", parent: "memorabilia", products: ["classic-movie-posters", "political-memorabilia"] },
  { slug: "colonial-coins", name: "Colonial Coins", parent: "coins", products: [] },
  { slug: "commercial-vehicles", name: "Commercial Vehicles", parent: "machinery-auctions", products: [] },
  { slug: "electronics", name: "Electronics", parent: null, products: [] },
  { slug: "farm-machinery", name: "Farm Machinery", parent: "machinery-auctions", products: [] },
  { slug: "fiction", name: "Fiction", parent: "books-and-comics", products: ["childrens-storybook-adventures", "graphic-non-fiction", "superhero-chronicles"] },
  { slug: "games", name: "Games", parent: null, products: ["cryptoart-the-last-supper", "the-enchanted-castle"] },
  { slug: "gold-coins", name: "Gold Coins", parent: "coins", products: [] },
  { slug: "handmade-artisan", name: "Handmade Artisan", parent: "handmade-auction", products: [] },
  { slug: "handmade-auction", name: "Handmade Auction", parent: null, products: [] },
  { slug: "handmade-jewelry", name: "Handmade Jewelry", parent: "handmade-auction", products: [] },
  { slug: "handmade-luxuries", name: "Handmade Luxuries", parent: "handmade-auction", products: [] },
  { slug: "handmade-textiles", name: "Handmade Textiles", parent: "handmade-auction", products: [] },
  { slug: "heavy-equipment", name: "Heavy Equipment", parent: "machinery-auctions", products: [] },
  { slug: "heritage", name: "Heritage", parent: "antiques", products: [] },
  { slug: "historical", name: "Memorabilia Historical", parent: "memorabilia", products: ["classic-movie-posters", "political-memorabilia"] },
  { slug: "historical-coins", name: "Historical Coins", parent: "coins", products: [] },
  { slug: "lab-auction", name: "Lab-auction", parent: null, products: [] },
  { slug: "lab-design", name: "Lab Design", parent: "lab-auction", products: [] },
  { slug: "lab-glassware", name: "Lab Glassware", parent: "lab-auction", products: [] },
  { slug: "laboratory-efficiency", name: "Laboratory Efficiency", parent: "lab-auction", products: [] },
  { slug: "laboratory-safety", name: "Laboratory Safety", parent: "lab-auction", products: [] },
  { slug: "luxury-vehicles", name: "Luxury Vehicles", parent: "automotive", products: [] },
  { slug: "machinery-auctions", name: "Machinery Auctions", parent: null, products: [] },
  { slug: "memorabilia", name: "Memorabilia", parent: null, products: ["classic-movie-posters", "navigate-the-past-through-cartography", "political-memorabilia"] },
  { slug: "muscle-machines", name: "Muscle Machines", parent: "automotive", products: [] },
  { slug: "music", name: "Music", parent: null, products: ["the-abandoned-asylum", "the-lost-temple"] },
  { slug: "non-fiction", name: "Non-Fiction", parent: "books-and-comics", products: ["graphic-novels-galore"] },
  { slug: "nostalgia", name: "Nostalgia", parent: "antiques", products: [] },
  { slug: "pc-components", name: "PC components", parent: "electronics", products: [] },
  { slug: "photography", name: "Photography", parent: null, products: ["lamborghini-aventador"] },
  { slug: "precision-machine", name: "Precision Machine", parent: "machinery-auctions", products: [] },
  { slug: "rare", name: "Memorabilia Rare", parent: "memorabilia", products: ["classic-movie-posters", "navigate-the-past-through-cartography", "political-memorabilia"] },
  { slug: "rarity", name: "Rarity", parent: "antiques", products: ["records-and-turntables"] },
  { slug: "science-fiction", name: "Science Fiction", parent: "books-and-comics", products: ["graphic-novels-galore"] },
  { slug: "smart-devices", name: "Smart devices", parent: "electronics", products: [] },
  { slug: "story", name: "Story", parent: "books-and-comics", products: ["graphic-non-fiction", "superhero-chronicles"] },
  { slug: "treasures", name: "Treasures", parent: "antiques", products: ["records-and-turntables"] },
  { slug: "vintage", name: "Vintage", parent: "antiques", products: [] },
  { slug: "vintage-electronics", name: "Vintage Electronics", parent: "electronics", products: [] },
  { slug: "vintage-memorabilia", name: "Memorabilia Vintage", parent: "memorabilia", products: ["navigate-the-past-through-cartography"] },
];

export function collectionArchiveBySlug(slug: string) {
  return collectionArchives.find((c) => c.slug === slug);
}

/** Collections shown on each product card (source `product--collection` line).
 *  Mapped from the source shop / related-product cards; 8 products never appear
 *  on any source card, so their collections are unknown and render no line. */
export const productCollections: Record<string, { slug: string; name: string }[]> = {
  "4k-tv-and-audio-equipment": [{ slug: "pc-components", name: "PC components" }, { slug: "smart-devices", name: "Smart devices" }, { slug: "vintage-electronics", name: "Vintage Electronics" }],
  "adornments-of-a-bygone-antique-jewellery": [{ slug: "nostalgia", name: "Nostalgia" }, { slug: "rarity", name: "Rarity" }, { slug: "treasures", name: "Treasures" }, { slug: "vintage", name: "Vintage" }],
  "ancient-coin": [{ slug: "music", name: "Music" }],
  "antique-auto-elegance": [{ slug: "automotive-artistry", name: "Automotive Artistry" }, { slug: "luxury-vehicles", name: "Luxury Vehicles" }, { slug: "muscle-machines", name: "Muscle Machines" }],
  "antique-porcelain-dolls": [{ slug: "treasures", name: "Treasures" }],
  "antique-ship-models": [{ slug: "collectible", name: "Collectible" }],
  "art-deco-silverware-sets": [{ slug: "antiques", name: "Antiques" }],
  "artisanal-jewelry-extravaganza": [{ slug: "handmade-jewelry", name: "Handmade Jewelry" }, { slug: "handmade-textiles", name: "Handmade Textiles" }],
  "auctioning-aviation-excellence": [{ slug: "heavy-equipment", name: "Heavy Equipment" }, { slug: "precision-machine", name: "Precision Machine" }],
  "automotive-artistry": [{ slug: "automotive-artistry", name: "Automotive Artistry" }],
  "automotive-memorabilia-and-collectibles": [{ slug: "automotive-artistry", name: "Automotive Artistry" }, { slug: "classic", name: "Classic" }],
  "banknote-and-coin": [{ slug: "colonial-coins", name: "Colonial Coins" }, { slug: "historical-coins", name: "Historical Coins" }],
  "black-lotus": [{ slug: "art", name: "Art" }],
  "california-gold-coin": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "gold-coins", name: "Gold Coins" }],
  "camera-and-lens-auction": [{ slug: "smart-devices", name: "Smart devices" }, { slug: "vintage-electronics", name: "Vintage Electronics" }],
  "camping-and-adventure-gear": [{ slug: "vintage-electronics", name: "Vintage Electronics" }],
  "candlemaking-artistry-auction": [{ slug: "handmade-artisan", name: "Handmade Artisan" }, { slug: "handmade-luxuries", name: "Handmade Luxuries" }],
  "capturing-moments-in-time": [{ slug: "collectible", name: "Collectible" }, { slug: "heritage", name: "Heritage" }, { slug: "nostalgia", name: "Nostalgia" }],
  "capturing-natures-beauty": [{ slug: "art", name: "Art" }],
  "celebrity-autographs": [{ slug: "rare", name: "Memorabilia Rare" }],
  "ceramic-tea-sets-with-a-twist": [{ slug: "art", name: "Art" }],
  "charting-the-course-of-exploration": [{ slug: "collectible", name: "Collectible" }, { slug: "heritage", name: "Heritage" }, { slug: "nostalgia", name: "Nostalgia" }, { slug: "rarity", name: "Rarity" }],
  "childrens-storybook-adventures": [{ slug: "children-book", name: "Children Book" }, { slug: "fiction", name: "Fiction" }],
  "chromatography-equipment-showcase": [{ slug: "lab-glassware", name: "Lab Glassware" }, { slug: "laboratory-efficiency", name: "Laboratory Efficiency" }],
  "civil-rights-movement-coin": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "colonial-coins", name: "Colonial Coins" }],
  "classic-car-extravaganza": [{ slug: "classic", name: "Classic" }, { slug: "luxury-vehicles", name: "Luxury Vehicles" }],
  "classic-movie-posters": [{ slug: "collectibles", name: "Memorabilia Collectibles" }, { slug: "historical", name: "Memorabilia Historical" }, { slug: "rare", name: "Memorabilia Rare" }],
  "colonial-coins": [{ slug: "colonial-coins", name: "Colonial Coins" }, { slug: "historical-coins", name: "Historical Coins" }],
  "crypto-dragon-78": [{ slug: "music", name: "Music" }],
  "cryptoart-the-last-supper": [{ slug: "games", name: "Games" }],
  "cryptobook-signed-first-edition": [{ slug: "games", name: "Games" }],
  "cryptokitty-56789": [{ slug: "art", name: "Art" }],
  "cryptomemorabilia-autographed-baseball": [{ slug: "music", name: "Music" }],
  "cryptomovie-sci-fi-classic": [{ slug: "art", name: "Art" }],
  "diy-electronics-playground": [{ slug: "pc-components", name: "PC components" }, { slug: "smart-devices", name: "Smart devices" }, { slug: "vintage-electronics", name: "Vintage Electronics" }],
  "dystopian-dilemmas": [{ slug: "fiction", name: "Fiction" }, { slug: "science-fiction", name: "Science Fiction" }],
  "embroidered-storytelling-quilts": [{ slug: "art", name: "Art" }],
  "epic-fantasy-chronicles": [{ slug: "non-fiction", name: "Non-Fiction" }, { slug: "science-fiction", name: "Science Fiction" }],
  "ethereal-garden": [{ slug: "art", name: "Art" }],
  "european-luxury-and-classics": [{ slug: "classic", name: "Classic" }, { slug: "luxury-vehicles", name: "Luxury Vehicles" }],
  "expanding-brain": [{ slug: "games", name: "Games" }],
  "farm-machinery-bonanza": [{ slug: "commercial-vehicles", name: "Commercial Vehicles" }, { slug: "farm-machinery", name: "Farm Machinery" }, { slug: "heavy-equipment", name: "Heavy Equipment" }],
  "gothic-fairy": [{ slug: "photography", name: "Photography" }],
  "graphic-non-fiction": [{ slug: "children-book", name: "Children Book" }, { slug: "fiction", name: "Fiction" }, { slug: "story", name: "Story" }],
  "graphic-novels-galore": [{ slug: "children-book", name: "Children Book" }, { slug: "non-fiction", name: "Non-Fiction" }, { slug: "science-fiction", name: "Science Fiction" }],
  "handcrafted-leather-goods-showcase": [{ slug: "handmade-jewelry", name: "Handmade Jewelry" }, { slug: "handmade-textiles", name: "Handmade Textiles" }],
  "heavy-equipment-extravaganza": [{ slug: "commercial-vehicles", name: "Commercial Vehicles" }, { slug: "heavy-equipment", name: "Heavy Equipment" }],
  "high-end-pc-components": [{ slug: "pc-components", name: "PC components" }, { slug: "smart-devices", name: "Smart devices" }],
  "high-fidelity-bliss": [{ slug: "audio-equipment", name: "Audio Equipment" }, { slug: "smart-devices", name: "Smart devices" }],
  "historical-documents": [{ slug: "collectibles", name: "Memorabilia Collectibles" }, { slug: "historical", name: "Memorabilia Historical" }, { slug: "rare", name: "Memorabilia Rare" }],
  "historical-fiction-chronicles": [{ slug: "fiction", name: "Fiction" }, { slug: "science-fiction", name: "Science Fiction" }, { slug: "story", name: "Story" }],
  "home-automation-extravaganza": [{ slug: "audio-equipment", name: "Audio Equipment" }, { slug: "smart-devices", name: "Smart devices" }],
  "hot-rods-and-custom-cruisers": [{ slug: "classic", name: "Classic" }, { slug: "luxury-vehicles", name: "Luxury Vehicles" }, { slug: "muscle-machines", name: "Muscle Machines" }],
  "knights-and-castles-coin": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "colonial-coins", name: "Colonial Coins" }],
  "lab-automation-and-robotics": [{ slug: "lab-design", name: "Lab Design" }, { slug: "laboratory-efficiency", name: "Laboratory Efficiency" }],
  "lab-glassware-and-consumables-extravaganza": [{ slug: "lab-glassware", name: "Lab Glassware" }, { slug: "laboratory-efficiency", name: "Laboratory Efficiency" }],
  "lab-refrigeration-and-freezer-expo": [{ slug: "laboratory-efficiency", name: "Laboratory Efficiency" }, { slug: "laboratory-safety", name: "Laboratory Safety" }],
  "lab-software-and-data-management-solutions": [{ slug: "lab-glassware", name: "Lab Glassware" }, { slug: "laboratory-safety", name: "Laboratory Safety" }],
  "laboratory-furniture-and-design-showcase": [{ slug: "lab-design", name: "Lab Design" }, { slug: "laboratory-efficiency", name: "Laboratory Efficiency" }],
  "laboratory-safety-and-ppe-expo": [{ slug: "laboratory-efficiency", name: "Laboratory Efficiency" }, { slug: "laboratory-safety", name: "Laboratory Safety" }],
  "laboratory-water-purification-showcase": [{ slug: "lab-design", name: "Lab Design" }, { slug: "laboratory-safety", name: "Laboratory Safety" }],
  "lamborghini-aventador": [{ slug: "photography", name: "Photography" }],
  "laptop-and-portable-tech": [{ slug: "pc-components", name: "PC components" }, { slug: "smart-devices", name: "Smart devices" }],
  "lost-civilization-coins": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "historical-coins", name: "Historical Coins" }],
  "maritime-coin-collection": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "gold-coins", name: "Gold Coins" }],
  "medical-equipment-innovation-showcase": [{ slug: "commercial-vehicles", name: "Commercial Vehicles" }, { slug: "farm-machinery", name: "Farm Machinery" }],
  "metalwork-marvels-showcase": [{ slug: "handmade-artisan", name: "Handmade Artisan" }, { slug: "handmade-luxuries", name: "Handmade Luxuries" }],
  "microscope-marvels-auction": [{ slug: "lab-glassware", name: "Lab Glassware" }, { slug: "laboratory-efficiency", name: "Laboratory Efficiency" }],
  "molecular-biology-equipment-bonanza": [{ slug: "lab-glassware", name: "Lab Glassware" }, { slug: "laboratory-efficiency", name: "Laboratory Efficiency" }],
  "mystery-thriller-masterpieces": [{ slug: "fiction", name: "Fiction" }, { slug: "story", name: "Story" }],
  "mystical-forest": [{ slug: "games", name: "Games" }],
  "navigate-the-past-through-cartography": [{ slug: "rare", name: "Memorabilia Rare" }, { slug: "vintage-memorabilia", name: "Memorabilia Vintage" }],
  "numismatic-treasures": [{ slug: "antiques", name: "Antiques" }, { slug: "heritage", name: "Heritage" }, { slug: "rarity", name: "Rarity" }, { slug: "treasures", name: "Treasures" }],
  "oil-gas-equipment-extravaganza": [{ slug: "farm-machinery", name: "Farm Machinery" }, { slug: "precision-machine", name: "Precision Machine" }],
  "paper-crafting-extravaganza": [{ slug: "handmade-artisan", name: "Handmade Artisan" }, { slug: "handmade-textiles", name: "Handmade Textiles" }],
  "political-memorabilia": [{ slug: "collectibles", name: "Memorabilia Collectibles" }, { slug: "historical", name: "Memorabilia Historical" }, { slug: "rare", name: "Memorabilia Rare" }],
  "pottery-and-ceramics-gallery": [{ slug: "handmade-artisan", name: "Handmade Artisan" }, { slug: "handmade-luxuries", name: "Handmade Luxuries" }],
  "precision-machine-tools-showcase": [{ slug: "heavy-equipment", name: "Heavy Equipment" }, { slug: "precision-machine", name: "Precision Machine" }],
  "rare-coin-collection": [{ slug: "collectibles", name: "Memorabilia Collectibles" }, { slug: "historical", name: "Memorabilia Historical" }, { slug: "rare", name: "Memorabilia Rare" }],
  "rare-exotics-and-supercars": [{ slug: "classic", name: "Classic" }, { slug: "luxury-vehicles", name: "Luxury Vehicles" }],
  "rare-roman-coin": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "gold-coins", name: "Gold Coins" }],
  "records-and-turntables": [{ slug: "collectible", name: "Collectible" }, { slug: "rarity", name: "Rarity" }, { slug: "treasures", name: "Treasures" }],
  "remarkable-silver-coin": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "colonial-coins", name: "Colonial Coins" }],
  "romantic-escapes": [{ slug: "non-fiction", name: "Non-Fiction" }, { slug: "story", name: "Story" }],
  "smartphone-upgrade-fiesta": [{ slug: "audio-equipment", name: "Audio Equipment" }, { slug: "smart-devices", name: "Smart devices" }, { slug: "vintage-electronics", name: "Vintage Electronics" }],
  "soapmaking-and-bath-luxuries": [{ slug: "handmade-luxuries", name: "Handmade Luxuries" }, { slug: "handmade-textiles", name: "Handmade Textiles" }],
  "solar-wind-equipment-auction": [{ slug: "farm-machinery", name: "Farm Machinery" }, { slug: "precision-machine", name: "Precision Machine" }],
  "space-exploration-collectibles": [{ slug: "historical", name: "Memorabilia Historical" }, { slug: "rare", name: "Memorabilia Rare" }, { slug: "vintage-memorabilia", name: "Memorabilia Vintage" }],
  "sports-legends-memorabilia": [{ slug: "collectibles", name: "Memorabilia Collectibles" }, { slug: "historical", name: "Memorabilia Historical" }, { slug: "rare", name: "Memorabilia Rare" }],
  "stamps-of-the-world": [{ slug: "collectible", name: "Collectible" }, { slug: "nostalgia", name: "Nostalgia" }, { slug: "rarity", name: "Rarity" }, { slug: "treasures", name: "Treasures" }],
  "superhero-chronicles": [{ slug: "children-book", name: "Children Book" }, { slug: "fiction", name: "Fiction" }, { slug: "story", name: "Story" }],
  "tech-innovations-in-electronics-manufacturing": [{ slug: "heavy-equipment", name: "Heavy Equipment" }, { slug: "precision-machine", name: "Precision Machine" }],
  "textile-artistry-collection": [{ slug: "handmade-jewelry", name: "Handmade Jewelry" }, { slug: "handmade-textiles", name: "Handmade Textiles" }],
  "the-abandoned-asylum": [{ slug: "music", name: "Music" }],
  "the-days-of-storm-painting": [{ slug: "art", name: "Art" }],
  "the-enchanted-castle": [{ slug: "games", name: "Games" }],
  "the-future-city": [{ slug: "photography", name: "Photography" }],
  "the-lost-city": [{ slug: "art", name: "Art" }],
  "the-lost-temple": [{ slug: "music", name: "Music" }],
  "transportation-fleet-overhaul": [{ slug: "commercial-vehicles", name: "Commercial Vehicles" }],
  "tropical-paradise": [{ slug: "music", name: "Music" }],
  "unique-handmade-home-decor": [{ slug: "handmade-artisan", name: "Handmade Artisan" }, { slug: "handmade-luxuries", name: "Handmade Luxuries" }],
  "vintage-electronics": [{ slug: "audio-equipment", name: "Audio Equipment" }, { slug: "smart-devices", name: "Smart devices" }, { slug: "vintage-electronics", name: "Vintage Electronics" }],
  "vintage-muscle-machines": [{ slug: "luxury-vehicles", name: "Luxury Vehicles" }, { slug: "muscle-machines", name: "Muscle Machines" }],
  "vintage-poster-789": [{ slug: "music", name: "Music" }],
  "vintage-toys-and-games": [{ slug: "historical", name: "Memorabilia Historical" }],
  "vintage-vinyl-456": [{ slug: "photography", name: "Photography" }],
  "vintage-vinyl-records": [{ slug: "collectibles", name: "Memorabilia Collectibles" }, { slug: "historical", name: "Memorabilia Historical" }, { slug: "vintage-memorabilia", name: "Memorabilia Vintage" }],
  "woodworking-wonderland": [{ slug: "heavy-equipment", name: "Heavy Equipment" }, { slug: "precision-machine", name: "Precision Machine" }],
  "woodworking-wonders-auction": [{ slug: "handmade-luxuries", name: "Handmade Luxuries" }, { slug: "handmade-textiles", name: "Handmade Textiles" }],
  "worlds-finest-coin-portraits": [{ slug: "ancient-coins", name: "Ancient Coins" }, { slug: "gold-coins", name: "Gold Coins" }, { slug: "historical-coins", name: "Historical Coins" }],
};

export interface ProductTagArchive {
  slug: string;
  name: string;
  products: string[];
}

export const productTagArchives: ProductTagArchive[] = [
  { slug: "18th-century-product", name: "18th century product", products: [] },
  { slug: "19th-century-pocket-watches", name: "19th Century Pocket Watches", products: [] },
  { slug: "americanclassics", name: "AmericanClassics", products: [] },
  { slug: "antique-electronics", name: "antique electronics", products: [] },
  { slug: "archaeological-coins", name: "archaeological coins", products: [] },
  { slug: "art", name: "Art", products: ["lamborghini-aventador"] },
  { slug: "artisanal", name: "Artisanal", products: [] },
  { slug: "artisanal-candlemaking", name: "Artisanal Candlemaking", products: [] },
  { slug: "automotivememorabilia", name: "AutomotiveMemorabilia", products: ["automotive-memorabilia-and-collectibles"] },
  { slug: "childrensbooks", name: "ChildrensBooks", products: ["childrens-storybook-adventures"] },
  { slug: "classic-gadgets", name: "classic gadgets", products: [] },
  { slug: "classiccarauction", name: "ClassicCarAuction", products: ["automotive-memorabilia-and-collectibles"] },
  { slug: "collectible", name: "Collectible", products: ["records-and-turntables"] },
  { slug: "customcars", name: "CustomCars", products: [] },
  { slug: "digital-art", name: "Digital Art", products: ["the-abandoned-asylum", "the-enchanted-castle", "the-lost-temple"] },
  { slug: "documentaryartifacts", name: "DocumentaryArtifacts", products: [] },
  { slug: "electronics", name: "Electronics", products: [] },
  { slug: "epicfantasy", name: "EpicFantasy", products: ["classic-movie-posters", "graphic-novels-galore", "navigate-the-past-through-cartography", "superhero-chronicles"] },
  { slug: "fantasybooks", name: "FantasyBooks", products: ["graphic-novels-galore", "superhero-chronicles"] },
  { slug: "games", name: "Games", products: ["cryptoart-the-last-supper"] },
  { slug: "gold-pocket-watches", name: "Gold Pocket Watches", products: [] },
  { slug: "graphicnovels", name: "GraphicNovels", products: ["graphic-novels-galore"] },
  { slug: "handmade", name: "Handmade", products: [] },
  { slug: "handmade-jewelry", name: "Handmade Jewelry", products: [] },
  { slug: "healthcare", name: "Healthcare", products: [] },
  { slug: "highfantasy", name: "HighFantasy", products: ["childrens-storybook-adventures", "graphic-non-fiction", "superhero-chronicles"] },
  { slug: "historical", name: "Historical", products: [] },
  { slug: "historicalfiction", name: "HistoricalFiction", products: [] },
  { slug: "industrial-machinery", name: "Industrial Machinery", products: [] },
  { slug: "laboratory", name: "Laboratory", products: [] },
  { slug: "moviememorabilia", name: "MovieMemorabilia", products: ["classic-movie-posters", "navigate-the-past-through-cartography"] },
  { slug: "musclecars", name: "MuscleCars", products: [] },
  { slug: "music", name: "Music", products: ["cryptoart-the-last-supper"] },
  { slug: "mysterybooks", name: "MysteryBooks", products: [] },
  { slug: "nonfictioncomics", name: "NonFictionComics", products: ["graphic-non-fiction"] },
  { slug: "nostalgia", name: "Nostalgia", products: ["records-and-turntables"] },
  { slug: "numismatic", name: "numismatic", products: [] },
  { slug: "open-faced-pocket-watches", name: "Open-Faced Pocket Watches", products: [] },
  { slug: "paint", name: "Paint", products: [] },
  { slug: "pcb", name: "PCB", products: [] },
  { slug: "photography", name: "Photography", products: ["lamborghini-aventador"] },
  { slug: "politicalcollectibles", name: "PoliticalCollectibles", products: ["political-memorabilia"] },
  { slug: "precious-metals", name: "precious metals", products: [] },
  { slug: "rarity", name: "Rarity", products: ["automotive-memorabilia-and-collectibles", "records-and-turntables"] },
  { slug: "research", name: "Research", products: [] },
  { slug: "romancenovels", name: "RomanceNovels", products: [] },
  { slug: "sciencefiction", name: "ScienceFiction", products: [] },
  { slug: "scientific", name: "Scientific", products: [] },
  { slug: "scifibooks", name: "SciFiBooks", products: [] },
  { slug: "slider-full", name: "Slider Full", products: [] },
  { slug: "smart-home-devices", name: "Smart home devices", products: [] },
  { slug: "superheroes", name: "Superheroes", products: ["classic-movie-posters", "navigate-the-past-through-cartography", "superhero-chronicles"] },
  { slug: "transportation", name: "Transportation", products: [] },
  { slug: "vintage-tools", name: "Vintage Tools", products: [] },
  { slug: "vintage-toys", name: "Vintage Toys", products: [] },
  { slug: "vintageautomobiles", name: "VintageAutomobiles", products: [] },
  { slug: "vintagemotorcycles", name: "VintageMotorcycles", products: [] },
  { slug: "vinylrecords", name: "VinylRecords", products: ["classic-movie-posters", "navigate-the-past-through-cartography"] },
  { slug: "waltham-pocket-watches", name: "Waltham Pocket Watches", products: [] },
];

export function productTagArchiveBySlug(slug: string) {
  return productTagArchives.find((t) => t.slug === slug);
}

export interface BlogTaxArchive {
  slug: string;
  name: string;
  /** Post slugs in the source archive, newest first (WP REST order). */
  posts: string[];
}

export const blogCategories: BlogTaxArchive[] = [
  { slug: "crypto", name: "Crypto", posts: ["canada-is-a-great-fact-for-nfts"] },
  { slug: "design", name: "Design", posts: ["the-services-provide-for-the-design"] },
  { slug: "development", name: "Development", posts: ["agency-works-only-under-these-conditions", "getting-tickets-to-the-big-show", "have-you-heard-agency-is-your-best-bet-to-grow", "top-10-tips-to-grow-your-agency"] },
  { slug: "gallery", name: "Gallery", posts: ["agency-works-only-under-these-conditions"] },
  { slug: "gif-image", name: "Gif Image", posts: ["top-image-resources-for-great-artists-and-nfts"] },
  { slug: "lifestyle", name: "Lifestyle", posts: ["revolutionize-your-agency-with-these-easy-peasy-tips"] },
  { slug: "link", name: "Link", posts: ["link-post-example"] },
  { slug: "marketing", name: "Marketing", posts: ["invalid-purpose-classes-motivation"] },
  { slug: "nft-artist", name: "NFT Artist", posts: ["nfts-are-too-important-for-the-best-artists"] },
  { slug: "nft-theme", name: "NFT Theme", posts: ["best-wp-theme-provider-in-nft-market"] },
  { slug: "quote", name: "Quote", posts: ["there-are-many-variations-of-passages-of-lorem-ipsum-available"] },
  { slug: "rare-art", name: "Rare Art", posts: ["rare-art-from-the-best-artists"] },
  { slug: "skills", name: "Skills", posts: ["important-skills-for-designers"] },
];

export const blogTags: BlogTaxArchive[] = [
  { slug: "audio", name: "Audio", posts: ["getting-tickets-to-the-big-show"] },
  { slug: "beauty", name: "Beauty", posts: ["agency-works-only-under-these-conditions"] },
  { slug: "design", name: "Design", posts: ["have-you-heard-agency-is-your-best-bet-to-grow", "revolutionize-your-agency-with-these-easy-peasy-tips"] },
  { slug: "development", name: "Development", posts: ["have-you-heard-agency-is-your-best-bet-to-grow", "top-10-tips-to-grow-your-agency"] },
  { slug: "gallery", name: "Gallery", posts: ["agency-works-only-under-these-conditions"] },
  { slug: "life-style", name: "Life Style", posts: ["link-post-example", "revolutionize-your-agency-with-these-easy-peasy-tips"] },
  { slug: "link", name: "Link", posts: ["link-post-example"] },
  { slug: "quote", name: "Quote", posts: ["there-are-many-variations-of-passages-of-lorem-ipsum-available"] },
  { slug: "rainbow-themes", name: "Rainbow-Themes", posts: ["there-are-many-variations-of-passages-of-lorem-ipsum-available"] },
  { slug: "trending", name: "Trending", posts: ["there-are-many-variations-of-passages-of-lorem-ipsum-available"] },
  { slug: "trydo", name: "TryDo", posts: ["there-are-many-variations-of-passages-of-lorem-ipsum-available"] },
  { slug: "video", name: "Video", posts: ["getting-tickets-to-the-big-show"] },
];

export function blogCategoryBySlug(slug: string) {
  return blogCategories.find((c) => c.slug === slug);
}

export function blogTagBySlug(slug: string) {
  return blogTags.find((t) => t.slug === slug);
}

/** The four collections the source /our-collections/ page shows (name + item count
 *  as printed on the source cards), with their collage artwork (local files). */
export const ourCollections = [
  { slug: "art", name: "Art", items: 9, images: ["/sites/nuron/wp-content/uploads/2023/09/nuron-art-demo-image-2.png", "/sites/nuron/wp-content/uploads/2023/09/nuron-art-demo-image-6.png", "/sites/nuron/wp-content/uploads/2023/09/nuron-art-demo-image-1.png", "/sites/nuron/wp-content/uploads/2023/09/nuron-art-demo-image-4.png"] },
  { slug: "smart-devices", name: "Smart devices", items: 9, images: ["/sites/nuron/wp-content/uploads/2023/09/electronics-product-01.jpg", "/sites/nuron/wp-content/uploads/2023/09/electronics-product-07.jpg", "/sites/nuron/wp-content/uploads/2023/09/electronics-product-03.jpg", "/sites/nuron/wp-content/uploads/2023/09/electronics-product-04.jpg"] },
  { slug: "ancient-coins", name: "Ancient Coins", items: 8, images: ["/sites/nuron/wp-content/uploads/2023/09/coin-auction-demo-product-10.jpg", "/sites/nuron/wp-content/uploads/2023/09/coin-auction-demo-product-04.jpg", "/sites/nuron/wp-content/uploads/2023/09/coin-auction-demo-product-06.jpg", "/sites/nuron/wp-content/uploads/2023/09/coin-auction-demo-product-07.jpg"] },
  { slug: "laboratory-efficiency", name: "Laboratory Efficiency", items: 8, images: ["/sites/nuron/wp-content/uploads/2023/09/lab-product-10.jpg", "/sites/nuron/wp-content/uploads/2023/09/lab-product-01.jpg", "/sites/nuron/wp-content/uploads/2023/09/lab-product-07.jpg", "/sites/nuron/wp-content/uploads/2023/09/lab-product-05.jpg"] },
];

/** Blog categories per post slug, in the source's order (first = breadcrumb category). */
export const postCategories: Record<string, string[]> = {
  "agency-works-only-under-these-conditions": ["development", "gallery"],
  "best-wp-theme-provider-in-nft-market": ["nft-theme"],
  "canada-is-a-great-fact-for-nfts": ["crypto"],
  "getting-tickets-to-the-big-show": ["development"],
  "have-you-heard-agency-is-your-best-bet-to-grow": ["development"],
  "important-skills-for-designers": ["skills"],
  "invalid-purpose-classes-motivation": ["marketing"],
  "link-post-example": ["link"],
  "nfts-are-too-important-for-the-best-artists": ["nft-artist"],
  "rare-art-from-the-best-artists": ["rare-art"],
  "revolutionize-your-agency-with-these-easy-peasy-tips": ["lifestyle"],
  "the-services-provide-for-the-design": ["design"],
  "there-are-many-variations-of-passages-of-lorem-ipsum-available": ["quote"],
  "top-10-tips-to-grow-your-agency": ["development"],
  "top-image-resources-for-great-artists-and-nfts": ["gif-image"],
};

/** Blog tags per post slug. */
export const postTags: Record<string, string[]> = {
  "agency-works-only-under-these-conditions": ["beauty", "gallery"],
  "best-wp-theme-provider-in-nft-market": [],
  "canada-is-a-great-fact-for-nfts": [],
  "getting-tickets-to-the-big-show": ["audio", "video"],
  "have-you-heard-agency-is-your-best-bet-to-grow": ["design", "development"],
  "important-skills-for-designers": [],
  "invalid-purpose-classes-motivation": [],
  "link-post-example": ["life-style", "link"],
  "nfts-are-too-important-for-the-best-artists": [],
  "rare-art-from-the-best-artists": [],
  "revolutionize-your-agency-with-these-easy-peasy-tips": ["design", "life-style"],
  "the-services-provide-for-the-design": [],
  "there-are-many-variations-of-passages-of-lorem-ipsum-available": ["quote", "rainbow-themes", "trending", "trydo"],
  "top-10-tips-to-grow-your-agency": ["development"],
  "top-image-resources-for-great-artists-and-nfts": [],
};
