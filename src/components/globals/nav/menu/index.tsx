import { MouseEventHandler, useEffect } from 'react';
import { MotionBox, MotionFlex } from '../../chakraMotion';
import MenuButton from '../menuButton';

import { Flex, Icon, chakra, Heading, Link, Text, Stack, HStack } from '@chakra-ui/react';
import { linkData } from '@/utils/data';

const menuContainer = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      ease: 'linear',
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: (width = '30px') => ({
    clipPath: `circle(${width} at calc(100% - 50px) 40px)`,
    transition: {
      ease: 'linear',
      type: 'spring',
      stiffness: 30
    }
  })
};

export default function Menu({ toggled }: { toggled: MouseEventHandler }) {
  return (
    <MotionBox
      variants={menuContainer}
      z={20}
      backdropFilter="auto"
      color="whiteAlpha.900"
      backdropBlur="lg"
      overflow="hidden"
      overscroll="hidden"
      w="full"
      h="100dvh"
      bgColor="blackAlpha.800"
      position="absolute"
      top={0}
      bottom={0}
      right={0}
    >
      <MenuButton toggled={toggled} />
      <MotionFlex
        maxW={1200}
        mx="auto"
        p={2}
        direction="column"
        h="full"
        w="full"
        justify="space-between"
      >
        <MotionBox w="fit-content">
          <Text fontSize={{ base: '4xl', md: '2xl' }} fontWeight={700}>
            Menu
          </Text>
          <chakra.hr border="1" w="full" />
        </MotionBox>

        <MotionFlex gap={5} direction="column">
          <Stack w="fit-content" gap={0}>
            <Text fontSize={{ base: '2xl', md: 'xl' }} fontWeight={600}>
              Navigation
            </Text>
            <chakra.hr border="1" w="full" />
          </Stack>
          <Stack>
            {linkData.map((links, index) => (
              <Link key={index}>
                <Heading fontSize={{ base: '7xl', md: '5xl' }} fontWeight={500}>
                  {links.title.split('').map((link, index) => (
                    <chakra.span key={index} display={'inline-block'} overflow="hidden">
                      <chakra.span display={'inline-block'}>{link}</chakra.span>
                    </chakra.span>
                  ))}
                </Heading>
              </Link>
            ))}
          </Stack>
        </MotionFlex>
        <MotionFlex gap={5} direction="column">
          <chakra.hr border="1" w="full" />
          <Text>Socials</Text>
          <HStack>
            <Icon />
          </HStack>
        </MotionFlex>
      </MotionFlex>
    </MotionBox>
  );
}
