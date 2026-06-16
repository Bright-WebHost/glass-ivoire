import { Metadata } from 'next';
import { HomeContent } from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Glass Ivoire — Premium Glass Products in Abidjan',
  description:
    'Glass Ivoire manufactures and distributes high-quality glass products for construction, housing, and architectural projects across Abidjan and Côte d\'Ivoire.',
  keywords: 'glass manufacturer, Abidjan, tempered glass, double glazing, glass façade, architecture',
};

export default function HomePage() {
  return <HomeContent />;
}