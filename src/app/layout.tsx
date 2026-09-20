import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import FilmGrain from "@/components/ui/FilmGrain";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jehanzaib007.com"),
  title: "Jehan Zaib — Elite WordPress Architect & Developer",
  description:
    "High-converting bespoke web experiences engineered for industry leaders. Top Rated WordPress architect with over 3,300+ successful deployments globally.",
  keywords: [
    "WordPress architect",
    "WordPress developer",
    "Fiverr Top Rated",
    "Enterprise web design",
    "Elementor Pro",
    "high-conversion design",
    "bespoke business website",
  ],
  authors: [{ name: "Jehan Zaib" }],
  creator: "Jehan Zaib",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jehanzaib007.com",
    title: "Jehan Zaib — Elite WordPress Architect",
    description:
      "High-converting bespoke web experiences engineered for industry leaders. Over 3,300+ successful deployments globally.",
    siteName: "Jehan Zaib Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jehan Zaib — Elite WordPress Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jehan Zaib — Elite WordPress Architect",
    description:
      "High-converting bespoke web experiences engineered for industry leaders.",
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
        jobTitle: "Elite WordPress Architect",
        description:
          "Top Rated WordPress designer and developer on Fiverr with a 5.0 rating and over 2,277 reviews.",
        url: "https://jehanzaib007.com",
        sameAs: ["https://www.fiverr.com/jehanzaib_007"],
        knowsAbout: [
          "WordPress",
          "Elementor Pro",
          "Web Architecture",
          "Conversion Rate Optimization",
          "Enterprise Web Development",
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
          name: "WordPress Services",
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-full focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <Preloader />
          <FilmGrain />
          <CustomCursor />
          <main id="main">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
