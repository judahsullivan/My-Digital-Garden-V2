import { Flex, Text, Stack, Heading, chakra, Button } from '@chakra-ui/react';
import ScrollImage from '@/components/globals/scrollingImage'; // Replace this with your actual component for scrolling images
import AnimatedButton from '@/components/globals/animatedButton';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import AboutHeroAnimations from '../animations/hero';

export default function AboutIndex() {

  const description =
    'Enhancing brand presence through front-end expertise and elegant design. Collaboratively shaping digital experiences, and setting a fresh standard in the development world.';
  const father =
    'Beyond professional endeavors, I embrace the role of a father, cherishing values that extend beyond boundaries. Just as a father nurtures, I foster an environment of support, mentorship, and growth.';
  const about =
    'I’m a developer with a passion for design and a knack for problem-solving. Whether it’s crafting beautiful user interfaces for the web or developing innovative mobile applications, I am always eager to push myself and expand my skillset. With a focus on continual, learning and growth I strive to stay up-to-date with the latest technologies and best practices ensuring that my work is always top-notch.';

  return (
    <Flex
      maxW="1200"
      mx="auto"
      pt={24}
      pb={12}
      px={2}
      display={'flex'}
      justify="center"
      direction={'column'}
      w="full"
      textAlign="center"
    >
      <Stack w="full" direction="column" maxW={'fit-content'}>
        <Heading fontSize={'4xl'} color={'accent.100'} lineHeight="none" w="full" mx="auto">
          About Me
        </Heading>
        <chakra.hr borderColor="blackAlpha.800" border="1" w="full" />
      </Stack>

      <Flex
        maxW={1000}
        mx="auto"
        pt={24}
        pb={12}
        px={2}
        display={'flex'}
        justify="center"
        direction={'column'}
        w="full"
        textAlign="center"
      >
        <Flex
          mx={'auto'}
          pt={10}
          gap={20}
          justify="center"
          align="center"
          className="parallax-content"
          direction={{ base: 'column-reverse', md: 'row' }}
          style={{
            overflow: 'hidden'
          }}
        >
          <Flex
            w={{ base: 'full', md: '60%' }}
            justify="center"
            direction="column"
            align="center"
            textAlign="center"
          >
            <ScrollImage
              src="https://judahsullivan.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.01b991c2.jpg&w=640&q=75"
              width={'400px'}
              height={'600px'}
            />
          </Flex>

          <Stack w={{ base: 'full', md: '40%' }} direction="column" spacing={6}>
            <Stack spacing={2} textAlign={'left'} w="fit-content" direction="column">
              <Stack spacing={0} textAlign={'left'} w="fit-content" direction="column">
                <Text fontSize={'2xl'} fontWeight={700}>
                  Digital CraftsMan
                </Text>
                <chakra.hr borderColor="blackAlpha.800" border="1" w="full" />
              </Stack>

              <Text maxW="md" fontSize={'lg'}>
                {description}
              </Text>
            </Stack>
          </Stack>
        </Flex>

        <Flex
          pt={10}
          pb={20}
          gap={20}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          className="parallax-content"
          style={{
            overflow: 'hidden'
          }}
        >
          <Stack w={{ base: 'full', md: '40%' }} direction="column" spacing={6}>
            <Stack spacing={2} textAlign={'left'} w="fit-content" direction="column">
              <Stack spacing={0} textAlign={'left'} w="fit-content" direction="column">
                <Text fontSize={'2xl'} fontWeight={700}>
                  Devoted Father
                </Text>
                <chakra.hr borderColor="blackAlpha.800" border="1" w="full" />
              </Stack>

              <Text maxW="md" fontSize={'lg'}>
                {father}
              </Text>
            </Stack>
          </Stack>
          <Flex
            w={{ base: 'full', md: '40%' }}
            justify="center"
            direction="column"
            align="center"
            position="relative"
            textAlign="center"
          >
            <ScrollImage
              src="https://avatars.githubusercontent.com/u/106212053?v=4"
              width={'400px'}
              height={'500px'}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}