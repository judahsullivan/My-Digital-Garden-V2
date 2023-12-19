import { motion, useAnimate, animate, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Flex, Box, Heading, chakra } from '@chakra-ui/react';
import { MotionFlex, MotionText } from '../globals/chakraMotion';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 }
  }
};

const words = ['Hello', 'Bonjour', 'Ciao', 'Olà', 'やあ', 'Hallå', 'Guten tag', 'Hallo'];

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const sequence = [
      [
        '.overlay',
        { y: ['0dvh', '-100dvh'] },
        { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      ]
    ];

    animate([...sequence], {
      delay: 1.5,
      easing: [0.22, 1, 0.36, 1],
      onComplete: () => {
        onLoadingComplete();
      }
    });
  }, [onLoadingComplete]);

  return (
    <MotionFlex
      justify="center"
      overflow="hidden"
      align="center"
      className="overlay"
      bgColor="black"
      color={'white'}
      position="fixed"
      top={0}
      border={'0 0 50% 50%'}
      bottom={0}
      left={0}
      w="full"
      minH={'100dvh'}
      zIndex={99}
    >
    </MotionFlex>
  );
}
