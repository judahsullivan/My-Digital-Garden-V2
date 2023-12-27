import { useAnimate, useInView, animate } from 'framer-motion';
import { stagger } from 'framer-motion/dom';
import { useEffect, useRef } from 'react';

export default function DescriptionAnimations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    animate([
      [
        '.desc',
        {
          y: inView ? '0%' : '100%'     ,
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ],
      [
        '.button',
        {
          y: inView ? ['100%', '0%'] : ['0%', '100%'],
          opacity: inView ? [0, 1] : [1, 0]
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ]
    ]);
  }, [inView]);

  return ref;
}
