import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";
import { ProductCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Glass Ivoire",
  description: "Browse glass installations and architectural glazing projects delivered by Glass Ivoire.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8 pt-32">
        <section className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue">Projects</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Showcase of architectural and housing projects.
            </h1>
            <p className="text-lg leading-8 text-white/60">
              Explore our curated gallery of glass façades, partitions, doors, mirrors, and balustrades crafted for modern buildings in Abidjan.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {siteConfig.projects.map((project, i) => (
              <ProductCard
                key={project.title}
                product={{ id: i + 1, name: project.title, image: project.image || '', description: project.description, accent: 'accent-teal' }}
                index={i}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
