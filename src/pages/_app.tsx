import Footer from '@/components/globals/footer';
import Navigation from '@/components/globals/nav';
import theme from '@/styles/theme';
import { FontsGlobal } from '@/styles/fonts';
import { ChakraProvider, Box } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import Preloader from '@/components/loader';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setisLoading] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <FontsGlobal />

      {isLoading ? (
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode="wait">
          <Preloader onLoadingComplete={() => setisLoading(false)} />
        </AnimatePresence>
      ) : (
        <Box
          overflowY={'auto'}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none'
            },
            '&::-webkit-scrollbar': {
              width: '2px'
            },
            '&::-webkit-scrollbar-track': {
              width: '2px'
            }
          }}
        >
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </Box>
      )}
    </ChakraProvider>
  );
}
