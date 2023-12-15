import { useEffect, useRef } from 'react';
import { Text, chakra, Link, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';
import MenuButton from './menuButton';
import Menu from './menu';
import { MotionFlex } from '../chakraMotion';
import { useCycle } from 'framer-motion';
import { useDimensions } from '@/lib/useDimension';

export default function Navigation() {
  const [toggled, cycleToggled] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (toggled) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [toggled]);
  return (
    <MotionFlex as="header" zIndex={10} position="fixed" w="full" px={[5, 10]} h={16}>
      <MotionFlex
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.875,
          ease: 'easeInOut',
          delay: 1.7
        }}
        h="full"
        justify="space-between"
        w={'full'}
        align="center"
      >
        <Link passHref as={NextLink} href="/">
          <Text fontWeight="thin">
            coded by{' '}
            <chakra.span
              fontFamily={'heading'}
              fontWeight={800}
              letterSpacing={'wide'}
              fontSize={['md', 'lg']}
            >
              Judah Sullivan
            </chakra.span>
          </Text>
        </Link>
        <MotionFlex
          custom={height}
          initial={false}
          ref={containerRef}
          animate={toggled ? 'open' : 'closed'}
        >
          <Menu toggled={() => cycleToggled()} />
        </MotionFlex>
      </MotionFlex>
    </MotionFlex>
  );
}
