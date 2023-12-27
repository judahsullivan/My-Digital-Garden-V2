import { Box } from '@chakra-ui/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { MotionImage } from '@/components/globals/chakraMotion';

export default function ScrollImage({
  src,
  width,
  height
}: {
  src: string;
  width: string;
  height: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <Box
      ref={ref}
      as="div"
      overflow="hidden"
      height={height}
      width={width}
      position="relative"
      inset={'2px'}
      zIndex={2}
    >
      <MotionImage
        src={src}
        position="absolute"
        height="110%"
        width="110%"
        objectFit="cover"
        style={{
          translateY: translateY
        }}
      />
    </Box>
  );
}
