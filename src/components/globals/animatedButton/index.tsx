import { Button, Box, useColorModeValue } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import NextLink from 'next/link';
import React, { ReactNode, useState } from 'react';
import { MotionBox } from '../chakraMotion';
import Magnet from '../Magnet';

export default function AnimatedButton({
  width,
  href,
  height,
  children
}: {
  width: number | string;
  height: number | string;
  children: ReactNode;
  href: string;
}) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = async () => {
    setIsHovered(true);
    await controls.start({
      y: ['0%', '-100%'],
      transition: { duration: 0.3 }
    });
  };

  const handleUnhover = async () => {
    setIsHovered(false);
    await controls.start({
      y: ['-100%', '-200%'],
      transition: { duration: 0.3 }
    });
  };

  return (
    <Magnet>
      <Button
        as={NextLink}
        href={href}
        passHref
        width={width}
        _hover={{}}
        bgColor={useColorModeValue('blackAlpha.800', 'whiteAlpha.700')}
        height={height}
        textColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.900')}
        position="relative"
        rounded="full"
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="50%"
          fontSize=""
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={isHovered ? 1 : 2}
          color={isHovered ? 'white' : 'inherit'} // Change text color based on hover
        >
          {children}
        </Box>
        <MotionBox
          layout
          rounded="full"
          bg={'accent.100'}
          width={width}
          position="absolute"
          top="100%"
          height={height}
          className="circle"
          initial={{ y: '0%' }}
          animate={controls}
          style={{ zIndex: 1 }}
        />
      </Button>
    </Magnet>
  );
}
