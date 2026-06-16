import { Hero } from './Hero';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { OurSolutions } from './OurSolutions';
import { FeaturedProducts } from './FeaturedProductsSection';
import { SustainabilitySection } from './SustainabilitySection';
import { TrustSection } from './TrustProofSection';
import { FinalCTASection } from './FinalCTASection';
import { MarqueeStrip } from './MarqueeStrip';

export function HomeContent() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <OurSolutions />
        <FeaturedProducts />
        <SustainabilitySection />
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
