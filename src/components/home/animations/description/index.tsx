import { useAnimate, useInView, animate, useAnimation } from 'framer-motion';
import { stagger } from 'framer-motion/dom';
import { useEffect, useRef } from 'react';

export default function DescriptionAnimations() {
  const descref = useRef<HTMLDivElement>(null);
  const isInView = useInView(descref, { once: true });

  useEffect(() => {
    const sequence: any[] = [
      [
        '.deschr',
        {
          width: isInView ? ['0%', '100%'] : ['100%', '0%']
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ],
      [
        '.desctitle',
        {
          y: isInView ? ['100%', '0%'] : ['0%', '100%']
        },
        {
          duration: 0.875,
          delay: stagger(0.0485),
          ease: 'easeInOut'
        }
      ],
      [
        '.desc',
        {
          y: isInView ? ['100%', '0%'] : ['0%', '100%']
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ],
      [
        '.descbutton',
        {
          y: isInView ? ['100%', '0%'] : ['0%', '100%'],
          opacity: isInView ? [0, 1] : [1, 0]
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ]
    ];
    animate(sequence, { delay: 1 });
  }, [isInView]);

  return descref;
}
