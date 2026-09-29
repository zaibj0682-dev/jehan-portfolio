import type { Metadata } from "next";
import VelisseClient from "./VelisseClient";

const title = "Velisse Labs Case Study — Custom WooCommerce Build | Jehan Zaib";
const description =
  "A premium WooCommerce store built beyond the platform's limits — custom account-gating, tiered bundle pricing, and per-SKU Certificate of Analysis verification.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return <VelisseClient />;
}
