import Image from 'next/image';
import { Box, Flex, Text, chakra } from '@chakra-ui/react';
import { MotionFlex } from '../../chakraMotion';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const SkillCard = ({ i, title, description, number, progress, range, targetScale }: any) => {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <Flex
      ref={cardContainer}
      w="full"
      minH="100dvh"
      align="cener"
      justify="center"
      position="sticky"
      right="50%"
      top="20%"
    >
      <MotionFlex
        style={{
          scale,
          top: `${i * 100}px`, // Adjust the positioning along the Y-axis
          left: `calc(100% - ${i * 100}px)` // Adjust the positioning along the X-axis
        }}
        direction="column"
        w="400px"
        backdropFilter="auto"
        backdropBlur="md"
        h="400px"
        p="2"
        rounded="xl"
        bgColor={'whiteAlpha.700'}
        gap={10}
        position="relative"
      >
        <Text fontSize="2xl">{number}</Text>
        <Text fontSize="4xl">{title}</Text>

        <Text fontSize="lg">{description}</Text>
      </MotionFlex>
    </Flex>
  );
};

export default SkillCard;
