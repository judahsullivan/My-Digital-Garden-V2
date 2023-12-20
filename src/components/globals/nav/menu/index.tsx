import MenuButton from '../menuButton';
import {
  Flex,
  VStack,
  chakra,
  Box,
  Heading,
  Text,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { linkData, socialData } from '@/utils/data';
import AvatarWithRipple from '../../avatar';
import ThemeToggleButton from '../themeToggle';
import MagnetLink from '../../magneticLink';
import { useRouter } from 'next/router';
import { isActiveLink } from '@/lib/isActiveLink';
import { MotionBox } from '../../chakraMotion';
import AnimatedNavLink from '../../links/animatedNavLink';

type RefType<T> = React.RefObject<T> | React.MutableRefObject<T>;

export default function Menu({
  toggled,
  containerRef
}: {
  toggled: () => void;
  containerRef: RefType<any>;
}) {
  const router = useRouter();
  const color = useColorModeValue('whiteAlpha.900', 'blackAlpha.800');
  return (
    <Flex
      className="overlay"
      ref={containerRef}
      backdropFilter="auto"
      backdropBlur="10px"
      w="full"
      h="100dvh"
      bgColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
      color={color}
      position="absolute"
      px={5}
      top={0}
      bottom={0}
      right={0}
    >
      <MenuButton toggled={toggled} />
      <Flex
        pt={{ base: 5 }}
        pb={{ base: 5 }}
        maxW={1200}
        mx="auto"
        direction="column"
        h="full"
        w="full"
        justify="space-between"
      >
        <Box w="fit-content">
          <Flex overflow="hidden">
            <Heading fontSize={{ base: '4xl' }} fontWeight={700}>
              {'Menu'.split('').map((heading, index) => (
                <chakra.span key={index} display={'inline-flex'} overflow="hidden">
                  <chakra.span display="inline-flex" className="heading">
                    {heading}{' '}
                  </chakra.span>
                </chakra.span>
              ))}
            </Heading>
            <ThemeToggleButton />
          </Flex>
          <chakra.hr borderColor={color} w="full" className="line" />
        </Box>
        <Flex h="full" pt={{ base: 0, md: 5 }} justify="center" gap={5} direction="column">
          <Flex
            direction={['column', 'column', 'row', 'row']}
            maxW="6xl"
            w="full"
            align="center"
            h="full"
            mx="auto"
          >
            <Flex
              direction={['column', 'column']}
              justify="space-between"
              w="full"
              h="100%"
              display={{ base: 'none', md: 'flex' }}
            >
              <Flex pt={{ lg: 10 }} direction="column" w="fit-content">
                <Heading display="flex" gap={1} fontSize={'2xl'} fontWeight={600}>
                  {'Judah Sullivan'.split('').map((heading, index) => (
                    <chakra.span display={'inline-flex'} overflow="hidden" key={index}>
                      <chakra.span display="inline-flex" className="heading">
                        {heading}{' '}
                      </chakra.span>
                    </chakra.span>
                  ))}
                </Heading>
                <chakra.hr borderColor={color} className="line" />
                <Box className="description">
                  <AvatarWithRipple
                    image={
                      'https://cdn.sanity.io/images/berh8gtg/production/2753b3cbab3ef145f59a5355a443ee6898bb6a04-420x420.png'
                    }
                  />
                </Box>
              </Flex>
              <Text
                fontSize="lg"
                letterSpacing={1}
                maxW="md"
                w="full"
                fontWeight={'normal'}
                textColor={color}
                className="description"
                lineHeight="1.3"
              >
                Connect with me and stay updated by following my blog. Let&apos;s collaborate on
                creating exceptional user experiences and shaping the future of development.
                Together, we can turn ideas into reality and make a lasting impact in the digital
                world! Join me on this exciting journey!
              </Text>
            </Flex>
            <Flex direction={['column', 'column']} w="full" h="100%">
              <Flex letterSpacing="wider" pt={10} direction="column" w="fit-content">
                <Heading display="flex" gap={1} fontSize={'xl'} fontWeight={600}>
                  {'Navigation'.split('').map((heading, index) => (
                    <chakra.span display={'inline-flex'} overflow="hidden" key={index}>
                      <chakra.span display="inline-flex" className="heading">
                        {heading}{' '}
                      </chakra.span>
                    </chakra.span>
                  ))}
                </Heading>
                <chakra.hr borderColor={color} className="line" border="1" w="full" />
              </Flex>
              <Flex w="fit-content" gap={2} direction="column">
                {linkData.map((links, index) => (
                  <Box key={index} fontSize={{ base: '5xl', md: '5xl' }} fontWeight={500}>
                    <AnimatedNavLink text={links.title} href={links.link}>
                      {links.title}
                    </AnimatedNavLink>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={2} pb={{ base: 0, md: 10 }} direction="column">
            <chakra.hr borderColor={color} className="line" w="full" />
            <VStack w="fit-content" spacing="0">
              <Heading display="flex" gap={1} fontSize={'md'} fontWeight={600}>
                {'Socials'.split('').map((heading, index) => (
                  <chakra.span display={'inline-flex'} overflow="hidden" key={index}>
                    <chakra.span display="inline-flex" className="heading">
                      {heading}{' '}
                    </chakra.span>
                  </chakra.span>
                ))}
              </Heading>
              <chakra.hr borderColor={color} className="line" w="full" />
            </VStack>
            <HStack px={2} justify="space-between">
              {socialData.map((social, index) => (
                <Text key={index}>
                  <MagnetLink href={social.link} text={social.title} />
                </Text>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
