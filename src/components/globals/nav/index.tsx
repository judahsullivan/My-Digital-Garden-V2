import { useEffect, Fragment } from 'react';
import { Text, chakra, Link, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import Menu from './menu';
import { MotionFlex } from '../chakraMotion';
import { AnimatePresence, useCycle } from 'framer-motion';
import MenuAnimations from './animations';
import MagnetLink from '../magneticLink';
import { linkData } from '@/utils/data';
import AnimatedNavLink from '../links/animatedNavLink';

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
      align="center"
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
        <AnimatedNavLink href="/">Judah Sullivan</AnimatedNavLink>
        <Flex display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }} align="center">
          <Flex w="fit-content" fontSize="xl" gap={5} align="center">
            {linkData.map((links, index) => (
              <Fragment key={index}>
                <AnimatedNavLink href={links.link}>{links.title}</AnimatedNavLink>
              </Fragment>
            ))}
          </Flex>
        </Flex>
        <Flex display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
          <Menu toggled={() => setIsToggled()} containerRef={containerRef} />
        </Flex>
      </MotionFlex>
    </MotionFlex>
  );
}
