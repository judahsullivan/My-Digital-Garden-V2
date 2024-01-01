import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { FontsGlobal } from '@/styles/fonts';
import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode, useEffect } from 'react';

export default function Providers({
  children,
  options,
  ...props
}: {
  children: ReactNode;
  options: any;
}) {
  return (
    <ChakraProvider theme={theme}>
      <ReactLenis root {...props}>
        <FontsGlobal />
        {children}
      </ReactLenis>
    </ChakraProvider>
  );
}
