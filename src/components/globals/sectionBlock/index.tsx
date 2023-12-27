import { Stack, Flex, chakra, Text } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { MotionHr } from '@/components/globals/chakraMotion';

export default function SectionBlock({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  const lineControls = useAnimation();
  const textControls = useAnimation();

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: '20%' },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  return (
    <Stack textAlign="left" w="full" direction="column" maxW={'fit-content'}>
      <Flex direction="column" w="fit-content">
        <Text fontSize={'2xl'} fontWeight={600} lineHeight="none" w="full" mx="auto">
          {title.split(' ').map((titleWord, index) => (
            <chakra.span
              key={index}
              overflow="hidden"
              display="inline-block"
              pl={1}
              maxW="md"
              fontSize={'2xl'}
            >
              <motion.span
                ref={lineRef}
                initial="hidden"
                animate={lineControls}
                variants={lineVariants}
              >
                {titleWord}{' '}
              </motion.span>
            </chakra.span>
          ))}
        </Text>
        <MotionHr
          ref={lineRef}
          borderColor="blackAlpha.800"
          className="hr"
          border="1"
          w="full"
          initial="hidden"
          animate={lineControls}
          variants={lineVariants}
        />
      </Flex>

      <Text fontSize="lg" h="fit-content" lineHeight="1.3" maxW="md">
        {description.split(' ').map((desc, index) => (
          <chakra.span key={index} pl={1} overflow="hidden" display="inline-block">
            <motion.span
              ref={textRef}
              initial="hidden"
              animate={textControls}
              variants={textVariants}
            >
              {desc}{' '}
            </motion.span>
          </chakra.span>
        ))}
      </Text>
    </Stack>
  );
}
