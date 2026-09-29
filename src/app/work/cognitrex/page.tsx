import type { Metadata } from "next";
import CognitrexClient from "./CognitrexClient";

const title = "Cognitrex & Hana Dhanji Case Study — 26-Page WordPress Build | Jehan Zaib";
const description =
  "Two complete websites delivered against a hard press-release deadline — a 26-page enterprise WordPress platform and a locked-to-spec executive personal brand site.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return <CognitrexClient />;
}
