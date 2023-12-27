import { Link, Box, chakra } from '@chakra-ui/react';
import { useAnimate } from 'framer-motion'; // Import useAnimation instead of useAnimate
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MotionBox, MotionText } from '../chakraMotion';

export default function MagnetLink({ text, href, ...chakraProps }: { text: string; href: string }) {
  const [scope, animate] = useAnimate();
  const [active, isActive] = useState(false);
  const router = useRouter();

  const Active = () => {
    animate([
      [
        '.link',
        {
          y: '-110%'
        },
        {
          type: 'spring',
          duration: 0.5,
          ease: 'easeIn'
        }
      ]
    ]);
  };
  const inActive = () => {
    animate([
      [
        '.link',
        {
          y: -10
        },
        {
          type: 'spring',

          duration: 0.5,
          ease: 'easeIn'
        }
      ]
    ]);
  };
  useEffect(() => {
    isActive(router.pathname === href); // Check if the link is active based on current route
  }, [router.pathname, href]);

  return (
    <MotionBox
      ref={scope}
      // onMouseEnter={Active}
      display="flex"
      as={NextLink}
      overflowY={'hidden'}
      // onMouseLeave={inActive}
      position="relative"
      href={href}
      className="description"
      // animate={active ? Active : inActive}
      layout
      {...chakraProps}
    >
      <MotionText
        position="relative"
        _hover={{
          textDecoration: 'none'
        }}
        display="block"
        className="link"
      >
        {text}
      </MotionText>
      <MotionText
        position="absolute"
        borderRadius="full"
        textColor="accent.100"
        top="100%"
        left={0}
        right={0}
      >
        {text}
      </MotionText>
    </MotionBox>
  );
}
