import { Flex, Text, Stack, Heading, chakra, Button, Box, Divider } from '@chakra-ui/react';
import AnimatedButton from '@/components/globals/animatedButton';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { MotionBox, MotionFlex } from '@/components/globals/chakraMotion';
import DescriptionAnimations from '../animations/description';

export default function DescriptionSection() {
  const descref = DescriptionAnimations();
  const description =
    'Empowering innovation by skillfully shaping the digital landscape through expert front-end craftsmanship, bringing to life a beautifully crafted UI that redefines user experience.';
  const about =
    'My fervent dedication to pixel-perfect design, pristine code, and immersive user interaction empowers me to elevate the web design sphere to unprecedented heights, crafting experiences that redefine excellence.';

  return (
    <MotionFlex
      mx="auto"
      pb={12}
      pt={'10rem'}
      px={2}
      maxW={1000}
      display={'flex'}
      minH="100dvh"
      justify="space-between"
      direction={{ base: 'column', md: 'column', lg: 'row' }}
      w={'full'}
    >
      <Stack ref={descref} textAlign="left" w={{ base: 'ful', md: '60%' }} direction="column">
        <Flex direction="column" w="fit-content">
          <Text fontSize={'2xl'} fontWeight={600} lineHeight="none" w="full" mx="auto">
            {'Enhancing Digital Presence'.split(' ').map((discover, index) => (
              <chakra.span
                key={index}
                overflow="hidden"
                display="inline-block"
                pl={1}
                maxW="md"
                fontSize={'2xl'}
              >
                <chakra.span className="desctitle" display="inline-block">
                  {discover}{' '}
                </chakra.span>
              </chakra.span>
            ))}
          </Text>
          <chakra.hr borderColor="blackAlpha.800" className="deschr" border="1" w="full" />
        </Flex>

        <Text fontSize="lg" h="fit-content" lineHeight="1.3" maxW="md">
          {description.split(' ').map((desc, index) => (
            <chakra.span key={index} pl={1} overflow="hidden" display="inline-block">
              <chakra.span className="desc" display="inline-block">
                {desc}{' '}
              </chakra.span>
            </chakra.span>
          ))}
        </Text>
      </Stack>
      <Stack
        spacing={10}
        h="full"
        fontSize="2xl"
        mt={{ base: '4rem', md: '14rem' }}
        width={{ base: 'full', md: '40%' }}
      >
        <Stack textAlign="left" w="full" direction="column" maxW={'fit-content'}>
          <Flex direction="column" w="fit-content">
            <Text fontSize={'2xl'} fontWeight={600} lineHeight="none" w="full" mx="auto">
              {'Enhancing Digital Presence'.split(' ').map((discover, index) => (
                <chakra.span
                  key={index}
                  overflow="hidden"
                  display="inline-block"
                  pl={1}
                  maxW="md"
                  fontSize={'2xl'}
                >
                  <chakra.span className="desctitle" display="inline-block">
                    {discover}{' '}
                  </chakra.span>
                </chakra.span>
              ))}
            </Text>
            <chakra.hr borderColor="blackAlpha.800" className="deschr" border="1" w="full" />
          </Flex>

          <Text fontSize="lg" h="fit-content" lineHeight="1.3" maxW="md">
            {description.split(' ').map((desc, index) => (
              <chakra.span key={index} pl={1} overflow="hidden" display="inline-block">
                <chakra.span className="desc" display="inline-block">
                  {desc}{' '}
                </chakra.span>
              </chakra.span>
            ))}
          </Text>
        </Stack>

        <MotionBox className="descbutton" h="100%" placeSelf={'end'}>
          <AnimatedButton href="/about" width="120px" height="120px">
            About Me
          </AnimatedButton>
        </MotionBox>
      </Stack>
    </MotionFlex>
  );
}
