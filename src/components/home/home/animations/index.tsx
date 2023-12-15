import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export default function HomeAnimations() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence: any[] = [
      [
        '.heading',
        {
          y: ['100%', '0%']
        },
        {
          duration: 0.875,
          delay: stagger(0.0185),
          ease: 'easeInOut'
        }
      ],
      [
        '.line',
        {
          width: ['0%', '100%']
        },
        {
          duration: 0.5,

          ease: 'easeInOut'
        }
      ],
      [
        '.content',
        {
          opacity: [0, 1],
          y: ['100%', '0%']
        },
        {
          duration: 0.875,
          ease: 'easeInOut'
        }
      ]
    ];
    animate(sequence);
  }, [animate]);

  return scope;
}
