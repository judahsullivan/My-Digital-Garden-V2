import { useScroll, useSpring, useTransform } from 'framer-motion';
import { Box, Heading, Text, chakra } from '@chakra-ui/react';
import { MotionFlex } from '@/components/globals/chakraMotion';
import AboutHeroAnimations from '../animations/hero';

export default function AboutHero() {
  const ref = AboutHeroAnimations();
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const scrollYProgressSpring = useSpring(scrollY, {
    stiffness: 400,
    damping: 40
  });

  const scale = useTransform(scrollYProgressSpring, [0, 1000], [1, 300]); // Adjust the scroll range and scaling factor

  const heading = ['Here is a Little bit about me and my Philsophy'];

  return (
    <Box as="main" h={'300dvh'} w="full">
      <Box
        ref={ref}
        textAlign="center"
        position="relative"
        bgColor={'blackAlpha.900'}
        zIndex={10}
        h="200dvh"
        overflow="clip"
      >
        <MotionFlex
          flexDirection={{ base: 'column', md: 'row' }}
          bg="white"
          minH="100dvh"
          transformOrigin={{ base: '13.3% 65.5%', md: '54% 55%' }}
          align="center"
          color={'blackAlpha.900'}
          justify="center"
          p={6}
          style={{
            scale
          }}
          pt={12}
          position="sticky"
          left={0}
          top={0}
        >
          <Heading noOfLines={1.3} fontSize={{ base: '6xl', md: '8xl' }}>
            {'Here is a Little bit about me and my Philsophy'.split('  ').map((word, index) => (
              <chakra.span display="inline-block" mr={2} overflow="hidden" key={index}>
                <chakra.span className="title" display="inline-block">
                  {word}
                </chakra.span>
              </chakra.span>
            ))}
          </Heading>
        </MotionFlex>
      </Box>
      <Box
        h="200dvh"
        bgColor={'blackAlpha.900'}
        textColor="white"
        fontSize={['md', null, null, '3xl']}
      >
        {/* Additional content */}
        {/* <Skills /> */}
        <Text>So theres</Text>
        <Text>Some room</Text>
        <Text>To scroll...</Text>
      </Box>
    </Box>
  );
}
