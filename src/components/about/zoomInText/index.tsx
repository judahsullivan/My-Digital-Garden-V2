import { useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion';
import { Flex, Heading, Text, chakra } from '@chakra-ui/react';
import { MotionBox, MotionFlex, MotionText } from '@/components/globals/chakraMotion';
import AboutHeroAnimations from '../animations/hero';
import { useRef } from 'react';
import { MotionValue } from 'framer-motion/dom';

export default function ZoomInText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40
  });

  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 300]);
  const textX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  const textXScale = useMotionTemplate`max(0px, calc(${textX}% + calc(${textX}vw - 1000px)))`;

  return (
    <Flex
      ref={ref}
      minH="150dvh"
      w="full"
      position="relative"
      align="center"
      overflow="clip"
      pb={'15rem'}
      justify="center"
    >
      <MotionBox
        style={{ scale }}
        transformOrigin={{
          base: '20.3% 27.5%',
          sm: '23.3% 20.5%',
          md: '47.7% 29%',
          lg: '47.7% 29%',
          xl: '39.4% 17%'
        }}
        h="100dvh"
        position="sticky"
        left={0}
        top={0}
      >
        <MotionText
          style={{ translateY: '-10%', translateX: '0%' }} // Apply the textXScale transformation here
          noOfLines={1.3}
          textAlign="center"
          textColor="blackAlpha.900"
          fontSize={{ base: '6xl', md: '8xl' }}
        >
          {'Here is a Little bit about me and my Philsophy'.split('  ').map((word, index) => (
            <chakra.span display="inline-block" mr={2} overflow="hidden" key={index}>
              <chakra.span className="title" display="inline-block">
                {word}
              </chakra.span>
            </chakra.span>
          ))}
        </MotionText>
      </MotionBox>
    </Flex>
  );
}
