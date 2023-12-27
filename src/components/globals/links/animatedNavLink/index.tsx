import { MotionBox } from '../../chakraMotion';
import { useAnimate } from 'framer-motion';
import { Text } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Magnet from '../../Magnet';

export default function AnimatedNavLink({ children, href }: { children: ReactNode; href: string }) {
  const [scope, animate] = useAnimate();
  const [isActiveLink, setActiveLink] = useState(false);
  const router = useRouter();

  const Enter = () => {
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
  const Exit = () => {
    animate([
      [
        '.link',
        {
          y: '-10%'
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
    setActiveLink(router.pathname === href); // Check if the link is active based on current route
  }, [router.pathname, href]);

  const shouldAnimate = !isActiveLink; // Only animate if the link is not active

  return (
    <Magnet>
      <MotionBox
        ref={scope}
        as={NextLink}
        display="flex"
        onMouseEnter={shouldAnimate ? Enter : undefined}
        onMouseLeave={shouldAnimate ? Exit : undefined}
        href={href}
        animate={shouldAnimate ? Exit : Enter} // Apply animation only if the link is not active
        position="relative"
        overflow="hidden"
        passHref
        layout
        className="description"
      >
        <MotionBox
          _after={{
            content: `'${children}'`,
            position: 'absolute',
            borderRadius: 'full',
            textColor: 'accent.100',
            top: '100%',
            left: 0,
            right: 0
          }}
          position="relative"
          _hover={{
            textDecoration: 'none'
          }}
          display="block"
          className="link"
        >
          {children}
        </MotionBox>
      </MotionBox>
    </Magnet>
  );
}
