import { useAnimate } from 'framer-motion';
import { stagger } from 'framer-motion/dom';
import { useEffect } from 'react';

export default function AboutHeroAnimations() {
  const [ref, animate] = useAnimate();
  useEffect(() => {
    animate(
      '.title',
      {
        y: ['100%', '0%'],
        opacity: [0, 1]

      },
      {
        duration: 0.875,
        delay: stagger(0.0585),
        ease: 'easeInOut'
      }
    );
  }, [animate]);

  return ref;
}
