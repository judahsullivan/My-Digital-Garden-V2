import { Flex, Text, Stack, Heading, chakra, Button, Box, Divider } from '@chakra-ui/react';
import AnimatedButton from '@/components/globals/animatedButton';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { MotionBox, MotionFlex } from '@/components/globals/chakraMotion';
import DescriptionAnimations from '../animations/description';

export default function DescriptionSection() {
  const descref = DescriptionAnimations();
  const title = 'Enhancing Digital Prescense';
  const description =
    'Empowering innovation by skillfully shaping the digital landscape through expert front-end craftsmanship, bringing to life a beautifully crafted UI that redefines user experience.';
  const about =
    'My fervent dedication to pixel-perfect design, pristine code, and immersive user interaction empowers me to elevate the web design sphere to unprecedented heights, crafting experiences that redefine excellence.';

  return (
    <MotionFlex
      mx="auto"
      pb={12}
      pt={'10rem'}
      maxW={1200}
      display={'flex'}
      minH="100dvh"
      align="center"
      justify="center"
      w={'full'}
    >
      <MotionBox className="descbutton" h="100%" placeSelf={'end'}>
        <AnimatedButton href="/about" width="120px" height="120px">
          About Me
        </AnimatedButton>
      </MotionBox>
    </MotionFlex>
  );
}
