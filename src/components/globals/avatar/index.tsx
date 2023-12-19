import { Avatar, Box, Image, Skeleton, keyframes, useColorModeValue } from '@chakra-ui/react';
import { MotionFlex } from '../chakraMotion';

export default function AvatarWithRipple({ image, props }: any) {
  const bgColor = useColorModeValue('#f9f9f9', '#2E2C2F');
  const size = '96px';
  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <MotionFlex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      style={{ display: 'inline-block' }}
    >
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bg: bgColor,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`
        }}
      >
        <Image
          src={image}
          bg={bgColor}
          position="absolute"
          top={0}
          rounded={'full'}
          left={0}
          w="full"
          h="full"
          alt={'avatar image'}
          fallback={<Skeleton />}
          {...props}
        />
      </Box>
    </MotionFlex>
  );
}
