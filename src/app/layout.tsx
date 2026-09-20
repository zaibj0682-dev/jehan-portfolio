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
  metadataBase: new URL("https://jehanzaib.com"),
  title: "Jehan Zaib — WordPress Designer & Developer",
  description:
    "Top Rated WordPress designer and developer on Fiverr with 5.0 rating and 2,277+ reviews. Landing pages, business sites, WooCommerce stores, and care plans — delivered fast, built to convert.",
  keywords: [
    "WordPress designer",
    "WordPress developer",
    "Fiverr Top Rated",
    "WooCommerce",
    "Elementor",
    "landing page",
    "business website",
    "web design Pakistan",
  ],
  authors: [{ name: "Jehan Zaib" }],
  creator: "Jehan Zaib",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jehanzaib.com",
    title: "Jehan Zaib — WordPress Designer & Developer",
    description:
      "Top Rated WordPress designer and developer on Fiverr. 5.0 rating, 2,277+ reviews, 3,300+ projects delivered.",
    siteName: "Jehan Zaib Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jehan Zaib — WordPress Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jehan Zaib — WordPress Designer & Developer",
    description:
      "Top Rated WordPress designer and developer on Fiverr. 5.0 rating, 2,277+ reviews.",
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
        "@id": "https://jehanzaib.com/#person",
        name: "Jehan Zaib",
        jobTitle: "WordPress Designer & Developer",
        description:
          "Top Rated WordPress designer and developer on Fiverr with a 5.0 rating and over 2,277 reviews.",
        url: "https://jehanzaib.com",
        sameAs: ["https://www.fiverr.com/jehanzaib_007"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Okara",
          addressCountry: "PK",
        },
        knowsAbout: [
          "WordPress",
          "Elementor",
          "WooCommerce",
          "Web Design",
          "Web Development",
          "Landing Page Design",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://jehanzaib.com/#service",
        name: "Jehan Zaib — WordPress Design & Development",
        url: "https://jehanzaib.com",
        provider: { "@id": "https://jehanzaib.com/#person" },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "WordPress Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Landing Page Design",
              },
              price: "180",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Website",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce Store",
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
