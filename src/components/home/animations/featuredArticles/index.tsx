import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function FeaturedArticlesAnimation() {
  const featuredContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(featuredContainer, { once: true });

  useEffect(() => {}, [isInView]);
  return featuredContainer;
}
