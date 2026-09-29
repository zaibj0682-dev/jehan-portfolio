import type { Metadata } from "next";
import LotusLedgerClient from "./LotusLedgerClient";

const title = "Lotus Ledger Case Study — WordPress to Next.js Rebuild | Jehan Zaib";
const description =
  "A SaaS marketing site that outgrew WordPress — rebuilt from scratch as a custom Next.js application deployed on the client's own Vercel infrastructure.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return <LotusLedgerClient />;
}
