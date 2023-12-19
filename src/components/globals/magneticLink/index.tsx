import { Link, Box } from '@chakra-ui/react';
import { useAnimate } from 'framer-motion'; // Import useAnimation instead of useAnimate

export default function MagnetLink({ text, href, ...chakraProps }: { text: string; href: string }) {
  const [scope, animate] = useAnimate();

  const Enter = () => {
    animate([
      [
        '.link',
        {
          y: '-110%'
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
        }
      ]
    ]);
  };

  return (
    <Box
      ref={scope}
      onMouseEnter={Enter}
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
        _hover={{
          textDecoration: 'none'
        }}
        display="block"
        href={href}
        className="link"
      >
        {text}
      </Link>
    </Box>
  );
}
