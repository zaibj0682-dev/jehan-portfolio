import type { Metadata } from "next";
import FashionablyFabClient from "./FashionablyFabClient";

const title = "FashionablyFab Case Study — WordPress Editorial Design | Jehan Zaib";
const description =
  "How a premium editorial lifestyle site was built from a Figma file with no animation specs — custom scroll effects, a custom cursor, and a true mobile experience, delivered on a fixed $1,500 budget.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return <FashionablyFabClient />;
}
