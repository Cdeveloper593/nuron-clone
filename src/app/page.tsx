import {
  CreateSteps,
  ExploreProducts,
  Hero,
  LiveBidding,
  NewestItems,
  Newsletter,
  TopCollections,
  TopSellers,
} from "@/components/sites/nuron/sections";

export default function NuronHomePage() {
  return (
    <>
      <Hero />
      <LiveBidding />
      <CreateSteps />
      <NewestItems />
      <TopSellers />
      <ExploreProducts />
      <TopCollections />
      <Newsletter />
    </>
  );
}
