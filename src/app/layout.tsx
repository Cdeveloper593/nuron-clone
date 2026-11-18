import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@/components/sites/nuron/nuron.css";
import { SiteChrome } from "@/components/sites/nuron/chrome";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "NFT Marketplace – Nuron",
  description:
    "Discover Digital Art, Collect and Sell Your Specific NFTs. Nuron — NFT Marketplace.",
  icons: {
    icon: "/sites/nuron/wp-content/uploads/2023/01/cropped-logo-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
