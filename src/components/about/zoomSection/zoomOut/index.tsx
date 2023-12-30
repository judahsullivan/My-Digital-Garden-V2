import { useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion';
import { Flex, chakra } from '@chakra-ui/react';
import { MotionBox, MotionText } from '@/components/globals/chakraMotion';
import { useRef } from 'react';

export default function ZoomOut() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40
  });

  const scale = useTransform(scrollYProgressSpring, [0, 1], [300, 1]);
  const textX = useTransform(scrollYProgressSpring, [0, 1], [0, 50]);
  const textXScale = useMotionTemplate`max(0px, calc(${textX}% + calc(${textX}vw - 1000px)))`;
  // Existing code remains unchanged

  return (
    <Flex
      ref={ref}
      minH="200dvh"
      w="full"
      position="relative"
      align="center"
      overflow="clip"
      justify="center"
    >
      <MotionBox
        style={{ scale }}
        transformOrigin={{
          base: '14% 23.5%',
          lg: '10.2% 32%',
          xl: '7% 21.5%'
        }}
        h="100dvh"
        position="sticky"
        left={0}
        top={0}
      >
        <MotionText
          style={{ translateY: '50%', translateX: '0%' }}
          noOfLines={1.3}
          textAlign="center"
          textColor="blackAlpha.900"
          fontSize={{ base: '6xl', md: '8xl' }}
        >
          {'Stepping into Experience: Unveiling My Journey'.split('  ').map((word, index) => (
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
