import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Glass Ivoire",
  description:
    "Glass Ivoire is a leading manufacturer and distributor of high-quality architectural glass and aluminum systems in Abidjan, Côte d'Ivoire.",
};

export default function AboutPage() {
  return <AboutContent />;
}
