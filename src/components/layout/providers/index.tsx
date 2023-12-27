import { ChakraProvider } from '@chakra-ui/react';
import { FontsGlobal } from '@/styles/fonts';
import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode, useEffect } from 'react';
import theme from '@/styles/theme';

export default function LenisProvider({
  children,
  options,
  ...props
}: {
  children: ReactNode;
  options: any;
}) {
  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  );
}
