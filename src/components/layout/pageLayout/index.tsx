import { Box, Heading } from '@chakra-ui/react';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import LenisProvider from '../providers';
import {
  AnimatePresence,
  useAnimate,
  useAnimation,
  useAnimationControls,
  usePresence
} from 'framer-motion';
import { MotionBox } from '@/components/globals/chakraMotion';
import { useRouter } from 'next/router';

export default function PageLayout({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {}, []);

  return (
    <>
      <LenisProvider
        options={{
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
          lerp: 0.1,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
          wheelMultiplier: 0.8,
          smoothWheel: true
        }}
      >
        <MotionBox
          position="fixed"
          bgColor="black"
          minH="100dvh"
          w="full"
          top={'100dvh'}
          left={0}
          zIndex={9999}
        />

        {children}
      </LenisProvider>
    </>
  );
}
