import type { Metadata } from "next";
import LandBeagleClient from "./LandBeagleClient";

const title = "Land Beagle Case Study — Custom Two-Sided Marketplace | Jehan Zaib";
const description =
  "A full custom-coded land marketplace platform built from scratch — vetted seller onboarding, location-based search, APN-indexed listings, and a complete admin console.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return <LandBeagleClient />;
}
