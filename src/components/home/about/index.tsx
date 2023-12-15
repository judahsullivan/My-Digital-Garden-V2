import {
  Icon,
  Box,
  Image,
  chakra,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Stack,
  HStack,
  IconButton
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

import { FiArrowRight } from 'react-icons/fi';
import { SiChakraui, SiFramer, SiNextdotjs, SiReact, SiSanity, SiVercel } from 'react-icons/si';

interface iconProps {
  ico: IconType;
}
const socials: iconProps[] = [
  {
    ico: SiNextdotjs
  },
  {
    ico: SiVercel
  },
  {
    ico: SiChakraui
  },
  {
    ico: SiFramer
  },
  {
    ico: SiReact
  },
  {
    ico: SiSanity
  }
];

export default function About() {
  const description = [
    'Enhancing brand presence through front-end expertise and elegant design. Collaboratively shaping digital experiences, and setting a fresh standard in the development world.'
  ];
  const about =
    'I’m a developer with a passion for design and a knack for problem-solving. Whether it’s crafting beautiful user interfaces for the web or developing innovative mobile applications, I am always eager to push myself and expand my skillset. With a focus on continual, learning and growth I strive to stay up-to-date with the latest technologies and best practices ensuring that my work is always top-notch.';

  return (
    <Flex
      pt={24}
      pb={12}
      px={2}
      display={'flex'}
      justify="center"
      direction={'column'}
      maxW={1200}
      w="full"
      textAlign="start"
      mx={'auto'}
    >
      <Stack w="full" direction="column" maxW={'fit-content'}>
        <Heading fontWeight={'extrabold'} fontSize={'5xl'} lineHeight="none" w="full" mx="auto">
          About Me
        </Heading>
        <chakra.hr borderColor="blackAlpha.800" border="1" w="full" />
      </Stack>
      <Flex gap={20} justify="space-between">
        <Flex
          w="full"
          align="center"
          gap={{ base: 10 }}
          pt={14}
          pb={8}
          justify="center"
          direction={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row'
          }}
        >
          <Flex
            justify="center"
            h={{ base: 'full', md: '500px' }}
            align="center"
            bg="whiteAlpha.600"
          >
            <Image
              src="https://judahsullivan.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.01b991c2.jpg&w=640&q=75"
              alt=""
              objectFit={'contain'}
              shadow={'xl'}
              borderRadius={'xl'}
              w="full"
            />
          </Flex>
          <Flex direction="column" w="full" h="full" justify="space-between" p="5" gap={10}>
            <Flex direction="column" gap="5">
              <Stack w="full" direction="column" maxW={'fit-content'}>
                <Text fontSize={'4xl'} fontWeight={800}>
                  Crafting Digital Experiences
                </Text>
                <chakra.hr borderColor="blackAlpha.800" border="1" w="full" />
              </Stack>
              <Text fontSize={'xl'}>{about}</Text>
              <Stack spacing={5}>
                <Box fontSize={'2xl'} w="fit-content" fontWeight={700}>
                  {' '}
                  <Text>Favorite Stack</Text>
                  <chakra.hr borderColor="blackAlpha.800" w="full" />
                </Box>
                <HStack spacing={5} align={'center'}>
                  {socials.map((social, i) => (
                    <Icon
                      key={i}
                      as={social.ico}
                      width={{ base: '30px' }}
                      height={{ base: '30px' }}
                    />
                  ))}
                </HStack>
              </Stack>
            </Flex>
            <Button
              rightIcon={<Icon as={FiArrowRight} />}
              variant="ghost"
              placeSelf={'start'}
              as={NextLink}
              href="/about"
              fontSize="xl"
            >
              More About Me
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
