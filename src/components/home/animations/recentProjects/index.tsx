import { stagger, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function RecentProjectsAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, { once: true });

  useEffect(() => {
    const sequence: any[] = [
      [
        '.hr',
        {
          width: inView ? '100%' : '0%'
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ],
      [
        '.title',
        {
          y: inView ? '0%' : '100%'
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ],
      [
        '.descr',
        {
          y: inView ? '0%' : '100%'
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ]
    ];
    animate(sequence);
  }, [inView]);
  return container;
}
