import { useAnimate } from 'framer-motion';
import { stagger } from 'framer-motion/dom';
import { useEffect } from 'react';

export default function AboutHeroAnimations() {
  const [ref, animate] = useAnimate();
  useEffect(() => {}, []);

  return ref;
}
