import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function AnimatedButton({ children }: { children: ReactNode }) {
  return (
    <Box position={'relative'}>
      {children}
      <Box
        // bg="accent.100"
        position="absolute"
        h={'60px'}
        w={'60px'}
        rounded="full"
        textColor="white"
      />
    </Box>
  );
}
