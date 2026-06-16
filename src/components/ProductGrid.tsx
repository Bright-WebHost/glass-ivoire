'use client';

import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  accent: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Tempered & Safety Glass',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
    description: 'High-strength safety glass engineered for demanding applications and structural support.',
    accent: 'glass-magenta',
  },
  {
    id: 2,
    name: 'Double Glazing Systems',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80',
    description: 'Advanced thermal and acoustic efficiency in elegant window frames and systems.',
    accent: 'accent-teal',
  },
  {
    id: 3,
    name: 'Architectural Façades',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e3e4e016?w=600&q=80',
    description: 'Bold, custom glass solutions designed for modern buildings and landmark projects.',
    accent: 'glass-green',
  },
];

const accentClasses: Record<string, string> = {
  'glass-magenta': 'bg-glass-magenta',
  'accent-teal': 'bg-accent-teal',
  'glass-green': 'bg-glass-green',
};

export function ProductGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const accentLabels: Record<string, string> = {
    'glass-magenta': 'Premium Choice',
    'accent-teal': 'Best Value',
    'glass-green': 'Innovation',
  };

  return (
    <motion.div
      className="grid gap-6 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {products.map((product) => (
        <ProductCard key={product.id} title={product.name} label={accentLabels[product.accent] || 'Featured'} accentClass={accentClasses[product.accent]} />
      ))}
    </motion.div>
  );
}