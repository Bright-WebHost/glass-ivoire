import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsContent } from "@/components/ProductsContent";

export const metadata: Metadata = {
  title: "Products | Glass Ivoire",
  description: "Explore our premium glass categories: tempered glass, partitions, façades, double glazing, and more.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsContent />
      </main>
      <Footer />
    </>
  );
}
