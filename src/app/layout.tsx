import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import FilmGrain from "@/components/ui/FilmGrain";
import Preloader from "@/components/ui/Preloader";
import { PreloaderProvider } from "@/context/PreloaderContext";

import { SoundProvider } from "@/context/SoundContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jehanzaib007.com"),
  title: "Jehan Zaib — Elite Digital Platform Architect & Brand Strategist",
  description:
    "High-converting bespoke digital platforms engineered for industry leaders. Top Rated full-stack architect with over 3,300+ successful deployments globally.",
  keywords: [
    "Digital platform architect",
    "Full-stack web developer",
    "Fiverr Top Rated",
    "Enterprise web design",
    "Shopify developer",
    "Brand identity design",
    "Custom software development",
  ],
  authors: [{ name: "Jehan Zaib" }],
  creator: "Jehan Zaib",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jehanzaib007.com",
    title: "Jehan Zaib — Elite Digital Platform Architect",
    description:
      "High-converting bespoke digital platforms engineered for industry leaders. Over 3,300+ successful deployments globally.",
    siteName: "Jehan Zaib Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jehan Zaib — Elite Digital Platform Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jehan Zaib — Elite Digital Platform Architect",
    description:
      "High-converting bespoke digital platforms engineered for industry leaders.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jehanzaib007.com/#person",
        name: "Jehan Zaib",
        jobTitle: "Elite Digital Platform Architect",
        description:
          "Top Rated digital platform architect on Fiverr with a 5.0 rating and over 2,277 reviews.",
        url: "https://jehanzaib007.com",
        sameAs: ["https://www.fiverr.com/jehanzaib_007"],
        knowsAbout: [
          "Full-Stack Web Development",
          "Shopify & E-Commerce",
          "Brand Identity & Graphics",
          "Custom Software Engineering",
          "Conversion Rate Optimization",
          "Enterprise Web Architecture",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://jehanzaib007.com/#service",
        name: "Jehan Zaib — Bespoke Digital Platforms",
        url: "https://jehanzaib007.com",
        provider: { "@id": "https://jehanzaib007.com/#person" },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Architecture Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "The Standard",
              },
              price: "800",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "The Premium",
              },
              price: "2000",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "The Enterprise",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "2277",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="ssr-blocker" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100vw", height: "100vh", backgroundColor: "#060606", zIndex: 99998 }} />
        <PreloaderProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-full focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <SoundProvider>
            <LenisProvider>
              <Preloader />
              <FilmGrain />
              <CustomCursor />
              <main id="main" style={{ opacity: 0, transition: "opacity 0.4s ease-in-out" }}>{children}</main>
            </LenisProvider>
          </SoundProvider>
        </PreloaderProvider>
      </body>
    </html>
  );
}
