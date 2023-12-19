import { useAnimate, stagger } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function MenuAnimations(toggled: boolean) {
  const [containerRef, animate] = useAnimate();

  useEffect(() => {
    const closeWidth = '30px';
    const openWidth = 1200; // Width based on window size

    const enter: any[] = [
      [
        containerRef.current,
        { clipPath: `circle(${openWidth * 1.4}px at calc(100% - 40px) 40px)` },
        { duration: 0.85, ease: [0.65, 0, 0.35, 1], type: 'spring', stiffness: 20, restDelta: 2 }
      ],
      ['.line', { width: '100%' }],
      ['.heading', { y: '0%' }, { delay: stagger(0.0185), ease: 'easeInOut' }],
      ['.description', { opacity: 1, y: 0 }]
    ];

    const exit: any[] = [
      ['.description', { opacity: 0, y: 20 }],
      ['.heading', { y: '100%' }, { delay: stagger(0.0185), ease: 'easeInOut' }],
      ['.line', { width: '0%' }],
      [
        containerRef.current,
        { clipPath: `circle(${closeWidth} at calc(100% - 50px) 38px)` },
        { ease: [0.65, 0, 0.35, 1], type: 'spring', stiffness: 30, restDelta: 2 }
      ]
    ];

    const buttonOpen: any[] = [
      ['.line2', { width: '0%' }],
      [
        '.line1',
        {
          y: 10,
          width: '100%',

          rotate: 45
        }
      ],
      ['.line3', { y: -10, width: '100%', rotate: -45 }]
    ];

    const buttonClosed: any[] = [
      [
        '.line1, .line3',
        {
          y: 0,
          width: '50%',
          rotate: 0
        }
      ],
      ['.line2', { width: '100%' }]
    ];

    const sequence = toggled ? [...enter, ...buttonOpen] : [...exit, ...buttonClosed];

    animate(sequence, { delay: 0 });
  }, [toggled, animate, containerRef]);

  return containerRef;
}
