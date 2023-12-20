import { Link, Box, chakra } from '@chakra-ui/react';
import { useAnimate } from 'framer-motion'; // Import useAnimation instead of useAnimate
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function MagnetLink({ text, href, ...chakraProps }: { text: string; href: string }) {
  const [scope, animate] = useAnimate();

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
          y: 0
        },
        {
          type: 'spring',

          duration: 0.5,
          ease: 'easeIn'
        }
      ]
    ]);
  };

  return (
    <chakra.span
      ref={scope}
      onMouseEnter={Enter}
      as="span"
      display="flex"
      overflowY={'hidden'}
      onMouseLeave={Exit}
      position="relative"
      className="description"
      {...chakraProps}
    >
      <Link
        _after={{
          content: `'${text}'`,
          position: 'absolute',
          borderRadius: 'full',
          textColor: 'accent.100',
          top: '100%',
          left: 0,
          right: 0
        }}
        position="relative"
        as={NextLink}
        _hover={{
          textDecoration: 'none'
        }}
        display="block"
        href={href}
        className="link"
      >
        {text}
      </Link>
    </chakra.span>
  );
}
