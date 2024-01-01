import Footer from '@/components/globals/footer';
import Navigation from '@/components/globals/nav';
import theme from '@/styles/theme';
import { FontsGlobal } from '@/styles/fonts';
import { ChakraProvider, Box } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import Preloader from '@/components/loader';
import { AnimatePresence } from 'framer-motion';
import AppLayout from '@/components/layout/appLayout';
import { useRouter } from 'next/router';
import { MotionBox } from '@/components/globals/chakraMotion';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();
  const isStudioPage =
    router.route.startsWith('/studio'); /* seperates the studio route from the appLayout*/

  return (
    <ChakraProvider theme={theme}>
      <FontsGlobal />
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
    </ChakraProvider>
  );
}
