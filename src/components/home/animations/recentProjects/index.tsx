import { stagger, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function RecentProjectsAnimation() {
  const contentContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentContainer, { margin: '0px 200px -10px 0px' });

  useEffect(() => {
    const sequence: any[] = [
      [
        '.contenthr',
        {
          width: isInView ? ['0%', '100%'] : ['100%', '0%']
        },
        {
          duration: 0.575,
          delay: stagger(0.0185),
          at: '<',
          ease: 'easeInOut'
        }
      ],
      [
        '.contenttitle',
        {
          y: isInView ? ['100%', '0%'] : ['0%', '100%']
        },
        {
          duration: 0.675,
          delay: stagger(0.0485),
          ease: 'easeInOut'
        }
      ],
      [
        '.contentdescription',
        {
          y: isInView ? ['100%', '0%'] : ['0%', '100%']
        },
        {
          duration: 0.675,
          at: '<',
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ]
    ];
    animate(sequence);
  }, [isInView]);
  return contentContainer;
}
