import { Box } from '@chakra-ui/react';
import { Fragment, ReactNode } from 'react';
import Navigation from '@/components/globals/nav';
import Footer from '@/components/globals/footer';
import LenisProvider from '../providers';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navigation />
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
        <Box minH="100dvh" w="full">
          {children}
        </Box>
      </LenisProvider>
      <Footer />
    </Fragment>
  );
}
