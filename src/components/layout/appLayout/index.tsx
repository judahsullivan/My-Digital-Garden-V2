import { Box } from '@chakra-ui/react';
import { Fragment, ReactNode, useRef } from 'react';
import Navigation from '@/components/globals/nav';
import Footer from '@/components/globals/footer';
import LenisProvider from '../providers';
import styles from './appLayout.module.css';
import { useScroll, useTransform } from 'framer-motion';
import { MotionBox } from '@/components/globals/chakraMotion';

export default function AppLayout({ children }: { children: ReactNode }) {
  const pageContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageContainer,
    offset: ['start end', 'end start']
  });

  const height = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <Box overflow="hidden">
      <Navigation />
      <Box ref={pageContainer} overflow="hidden" minH="100dvh" w="full">
        {children}
      </Box>
      <MotionBox className={styles.circleContainer} style={{ height }}>
        <Box bgColor={' #f9f9f9'} className={styles.circle} />
      </MotionBox>
      <Footer />
    </Box>
  );
}
