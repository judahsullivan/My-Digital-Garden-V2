import Navigation from "@/components/globals/nav";
import { Fonts } from "@/styles/fonts";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
