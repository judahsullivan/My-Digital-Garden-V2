import { Flex, Text, Stack, Heading, chakra, Button, Box, Divider } from '@chakra-ui/react';
import AnimatedButton from '@/components/globals/animatedButton';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { MotionBox } from '@/components/globals/chakraMotion';
import DescriptionAnimations from '../animations/description';

export default function DescriptionSection() {
  const ref = DescriptionAnimations();
  const description =
    'Empowering innovation by skillfully shaping the digital landscape through expert front-end craftsmanship, bringing to life a beautifully crafted UI that redefines user experience.';
  const about =
    'My fervent dedication to pixel-perfect design, pristine code, and immersive user interaction empowers me to elevate the web design sphere to unprecedented heights, crafting experiences that redefine excellence.';

  return (
    <Flex
      mx="auto"
      pt={'12rem'}
      pb={12}
      px={2}
      display={'flex'}
      justify="center"
      direction={{ base: 'column', md: 'column', lg: 'row' }}
      w="full"
    >
      <Stack h="full" overflow={'hidden'} width={{ base: 'full', md: '50%' }} align="center"  direction="row">
        <Text ref={ref} h="fit-content" pl="2" lineHeight="1.3" maxW="lg">
          {description.split(' ').map((about, index) => (
            <chakra.span
              pl={2}
              key={index}
              overflow="hidden"
              display="inline-block"
              maxW="lg"
              fontSize={'2xl'}
            >
              <chakra.span className="desc" display="inline-block">
                {about}{' '}
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
        width={{ base: 'full', md: '30%' }}
      >

      <Stack h="full"  align="center"  direction="row">
        <Text ref={ref} pl="2px" lineHeight={'shorter'} h="fit-content" >
          {about.split(' ').map((about, index) => (
            <chakra.span
              pl={2}
              key={index}
              overflow="hidden"
              display="inline-block"
              maxW="lg"
              fontSize={'lg'}
            >
              <chakra.span className="desc" display="inline-block">
                {about}{' '}
              </chakra.span>
            </chakra.span>
          ))}
        </Text>  
        </Stack>
 
        <MotionBox className="button" h="100%" placeSelf={'end'}>
          <AnimatedButton href="/about" width="120px" height="120px">
            About Me
          </AnimatedButton>
        </MotionBox>
      </Stack>
    </Flex>
  );
}
