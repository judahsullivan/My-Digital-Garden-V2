import Footer from "@/components/globals/footer";
import Navigation from "@/components/globals/nav";
import theme from "@/styles/theme";
import { FontsGlobal } from "@/styles/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FontsGlobal />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
