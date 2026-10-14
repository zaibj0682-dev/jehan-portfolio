import type { Metadata } from "next";
import Skinecht from "./Skinecht";

const title = "Skinecht Studio Case Study — Luxury Beauty & Aesthetics Website | Jehan Zaib";
const description =
  "A premium WordPress website for a luxury skincare and aesthetics studio — editorial layout, treatment showcases, and booking-focused UX that turns visitors into paying clients.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return <Skinecht />;
}
