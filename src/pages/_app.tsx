import Footer from '@/components/globals/footer';
import Navigation from '@/components/globals/nav';
import { ChakraProvider, Box } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import Preloader from '@/components/loader';
import { AnimatePresence } from 'framer-motion';
import AppLayout from '@/components/layout/appLayout';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { MotionBox } from '@/components/globals/chakraMotion';
import Providers from '@/components/layout/providers';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();
  const isStudioPage =
    router.route.startsWith('/studio'); /* seperates the studio route from the appLayout*/

  return (
    <Providers
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
      {isLoading ? (
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <Preloader onLoadingComplete={() => setisLoading(false)} />
        </AnimatePresence>
      ) : (
        <Fragment>
          {isStudioPage ? (
            <Component {...pageProps} />
          ) : (
            <AppLayout>
              <Analytics />
              <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Component key={router.route} {...pageProps} />
              </AnimatePresence>
            </AppLayout>
          )}
        </Fragment>
      )}
    </Providers>
  );
}
