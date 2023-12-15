import { MouseEventHandler, useEffect } from 'react';
import Cartoon from '@/public/assets/toon.png';
import { MotionBox, MotionFlex } from '../../chakraMotion';
import MenuButton from '../menuButton';
import {
  Flex,
  Icon,
  chakra,
  Heading,
  Link,
  Text,
  Stack,
  HStack,
  useDisclosure,
  Avatar
} from '@chakra-ui/react';
import { linkData, socialData } from '@/utils/data';
import AvatarWithRipple from '../../avatar';

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
      layout
      variants={menuContainer}
      backdropFilter="auto"
      color="whiteAlpha.900"
      backdropBlur="lg"
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
        pt={{ base: 5 }}
        pb={{ base: 5 }}
        maxW={1200}
        mx="auto"
        direction="column"
        h="full"
        w="full"
        justify="space-between"
      >
        <MotionBox w="fit-content">
          <Heading fontSize={{ base: '4xl', md: '2xl' }} fontWeight={700}>
            Menu
          </Heading>
          <chakra.hr border="1" w="full" />
        </MotionBox>

        <MotionFlex h="full" pt={{ base: 5 }} justify="center" gap={5} direction="column">
          <Flex
            direction={['column', 'column', 'row', 'row']}
            maxW="6xl"
            w="full"
            align="center"
            h="full"
            mx="auto"
            justify="space-between"
          >
            <Flex
              direction={['column', 'column']}
              w="full"
              h="100%"
              justify="space-between"
              display={{ base: 'none', md: 'flex' }}
            >
              <Flex direction="column" w="fit-content">
                <Text fontSize={{ base: '2xl', md: 'xl' }} fontWeight={600}>
                  Developing a Purpose
                </Text>
                <chakra.hr border="1" w="full" />
              </Flex>
              <AvatarWithRipple
                image={
                  'https://cdn.sanity.io/images/berh8gtg/production/2753b3cbab3ef145f59a5355a443ee6898bb6a04-420x420.png'
                }
              />
              <Text maxW="lg" fontSize="2xl" fontWeight={'thin'} lineHeight="1.3">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
                culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
                cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
              </Text>
            </Flex>
            <Flex direction={['column', 'column']} w="full" h="100%" justify="space-between">
              <Flex direction="column" w="fit-content">
                <Text fontSize={{ base: '2xl', md: 'xl' }} fontWeight={600}>
                  Navigation
                </Text>
                <chakra.hr border="1" w="full" />
              </Flex>
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
            </Flex>
          </Flex>
          <MotionFlex gap={2} pb={{ base: 0, md: 10 }} direction="column">
            <chakra.hr border="1" w="full" />
            <Text>Socials</Text>
            <HStack px={2} justify="space-between">
              {socialData.map((social, index) => (
                <Text key={index}>
                  {social.title.split('').map((s, index) => (
                    <chakra.span
                      fontSize="sm"
                      letterSpacing={'wide'}
                      fontWeight="normal"
                      key={index}
                      textTransform="uppercase"
                      display={'inline-block'}
                      overflow="hidden"
                    >
                      <chakra.span display={'inline-block'}>{s}</chakra.span>
                    </chakra.span>
                  ))}
                </Text>
              ))}
            </HStack>
          </MotionFlex>
        </MotionFlex>
      </MotionFlex>
    </MotionBox>
  );
}
