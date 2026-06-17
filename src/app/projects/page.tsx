import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsContent } from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Glass Ivoire",
  description: "Browse premium glass installations and architectural glazing projects delivered by Glass Ivoire.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsContent />
      </main>
      <Footer />
    </>
  );
}
