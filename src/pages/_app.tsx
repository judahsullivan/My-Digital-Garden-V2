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

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();
  const isStudioPage =
    router.route.startsWith('/studio'); /* seperates the studio route from the appLayout*/

  return (
    <ChakraProvider theme={theme}>
      <FontsGlobal />
      {isLoading ? (
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode="wait">
          <Preloader onLoadingComplete={() => setisLoading(false)} />
        </AnimatePresence>
      ) : (
        <Fragment>
          {isStudioPage ? (
            <Component {...pageProps} />
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </Fragment>
      )}
    </ChakraProvider>
  );
}
