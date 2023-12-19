import { useEffect } from 'react';
import { Text, chakra, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Menu from './menu';
import { MotionFlex } from '../chakraMotion';
import { AnimatePresence, useCycle } from 'framer-motion';
import MenuAnimations from './animations';
import MagnetLink from '../magneticLink';

export default function Navigation() {
  const [toggled, setIsToggled] = useCycle(false, true);
  const containerRef = MenuAnimations(toggled);

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
    <MotionFlex
      as="header"
      backdropFilter="auto"
      backdropBlur="6px"
      zIndex={50}
      position="fixed"
      w="full"
      px={[5, 10]}
      h={16}
    >
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
        <Text
          fontFamily={'heading'}
          color="accent.900"
          letterSpacing={'wide'}
          fontSize={['md', 'lg']}
        >
          <MagnetLink text="Judah Sullivan" href="/" />
        </Text>
        <Menu toggled={() => setIsToggled()} containerRef={containerRef} />
      </MotionFlex>
    </MotionFlex>
  );
}
