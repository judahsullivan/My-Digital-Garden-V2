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
        { clipPath: `circle(${openWidth * 2}px at calc(100% - 40px) 40px)` },
        {
          duration: 0.45,
          ease: [0.65, 0, 0.35, 1],
          at: 'line1',
          type: 'spring',
          stiffness: 20,
          restDelta: 2
        }
      ],
      ['.line', { width: '100%' }],
      [
        '.heading',
        { y: '0%' },
        { duration: 0.3, delay: stagger(0.0185), at: '-1', ease: 'easeInOut' }
      ],
      ['.description', { opacity: 1, y: 0 }],
      ['.line2', { width: 0 }, { at: '-2' }],
      [
        '.line1',
        {
          y: 10,
          width: '100%',
          at: '-2',
          rotate: 45
        }
      ],
      ['.line3', { y: -10, width: '100%', rotate: -45 }, { at: '-2' }]
    ];

    const exit: any[] = [
      ['.description', { opacity: 0, y: 20 }],
      [
        '.heading',
        { y: '100%' },
        { duration: 0.3, at: '<', delay: stagger(0.0185), ease: 'easeInOut' }
      ],
      ['.line', { width: '0%' }],
      [
        containerRef.current,
        { clipPath: `circle(${closeWidth} at calc(100% - 50px) 38px)` },
        { duration: 0.5, ease: [0.65, 0, 0.35, 1], type: 'spring', stiffness: 30, restDelta: 2 }
      ],
      [
        '.line1, .line3',
        {
          y: 0,
          width: '50%',
          rotate: 0
        },
        {
          at: '-2'
        }
      ],
      ['.line2', { width: '100%' }, { at: '<' }]
    ];

    const sequence = toggled ? [...enter] : [...exit];

    animate(sequence);
  }, [toggled, animate, containerRef]);

  return containerRef;
}
