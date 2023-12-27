import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MotionBox } from '../chakraMotion';

interface FramerProps {
  children: React.ReactNode;
}

export default function Magnet({ children }: FramerProps): JSX.Element {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState<boolean>(true); // Initially enabling animation

  useEffect(() => {
    const handleResize = () => {
      setIsAnimationEnabled(window.innerWidth >= 1010); // Adjust the width threshold as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || {
      height: 0,
      width: 0,
      left: 0,
      top: 0
    };
    const middleX = clientX - (left + width / 3);
    const middleY = clientY - (top + height / 3);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <MotionBox
      position="relative"
      w="fit-content"
      ref={ref}
      onMouseMove={isAnimationEnabled ? handleMouse : undefined} // Disable mouse movement when animation is disabled
      onMouseLeave={isAnimationEnabled ? reset : undefined} // Disable reset when animation is disabled
      animate={isAnimationEnabled ? { x, y } : { x: 0, y: 0 }} // Animate only if animation is enabled
      transition={
        isAnimationEnabled ? { type: 'spring', stiffness: 150, damping: 15, mass: 0.085 } : {}
      }
    >
      {children}
    </MotionBox>
  );
}
