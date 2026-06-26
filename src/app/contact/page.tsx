import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Glass Ivoire",
  description: "Contact Glass Ivoire in Abidjan for glass manufacturing and distribution projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}
