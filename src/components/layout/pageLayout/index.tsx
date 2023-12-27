import { Box } from '@chakra-ui/react'; import { ReactNode } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Box>{children}</Box>
    </Box>
  );
}
