import {
  Button,
  Heading,
  chakra,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Badge,
  Icon,
  VStack,
  Box
} from '@chakra-ui/react';
import { FiArrowDownCircle, FiArrowRight } from 'react-icons/fi';
import NextLink from 'next/link';
import HomeAnimation from './animations';

export default function Home() {
  const scope = HomeAnimation();
  const fullstack = 'fullstack';
  const enthusiast = 'enthusiast';
  const location = 'New Orleans, Louisiana';
  const description =
    'With design focus and love for code. I am driven to set new heights in the development world!';

  return (
    <Flex
      ref={scope}
      justify={'center'}
      minHeight="100dvh"
      display="flex"
      direction="column"
      align="center"
      pos="relative"
      p={4}
      textAlign="center"
      width="full"
    >
      <Flex mx="auto" gap={[5, 8, 0]} w="full" justify="center" direction="column" align="center">
        <Stack w="fit-content" direction="column">
          <Heading
            fontWeight={'extrabold'}
            letterSpacing="tight"
            textTransform="uppercase"
            fontSize={{ base: '5xl', md: '25dvh' }}
            lineHeight="none"
            w="full"
          >
            {fullstack.split('').map((heading, index) => (
              <chakra.span key={index} display="inline-block" overflow="hidden">
                <chakra.span key={index} display="inline-block" className="heading">
                  {heading}
                </chakra.span>
              </chakra.span>
            ))}
          </Heading>
          <Heading
            fontWeight={'extrabold'}
            letterSpacing="tight"
            textTransform="uppercase"
            fontSize={{ base: '5xl', md: '25dvh' }}
            lineHeight="none"
            w="full"
          >
            {enthusiast.split('').map((heading, index) => (
              <chakra.span key={index} display="inline-block" overflow="hidden">
                <chakra.span className="heading" display="inline-block">
                  {heading}
                </chakra.span>
              </chakra.span>
            ))}
          </Heading>

          <chakra.hr className="line" borderColor="blackAlpha.800" border="1" w="full" />

          <Flex
            align="center"
            textAlign="start"
            p={{ base: 5, md: 5 }}
            gap={{ base: 5, md: 6 }}
            direction={['column', 'column', 'row', 'row']}
            w="full"
            justify="space-between"
          >
            <chakra.p
              fontSize={{ base: 'xl', md: 'xl', lg: 'xl' }}
              maxW={{ base: 'full', md: 'md' }}
              className="content"
              lineHeight="1.3"
              fontWeight={300}
            >
              {description}
            </chakra.p>

            <Button
              rightIcon={<Icon as={FiArrowRight} />}
              placeSelf={'start'}
              className="content"
              variant="ghost"
              as={NextLink}
              href="/projects"
            >
              View My Projects
            </Button>
          </Flex>
          <Flex
            className="content"
            align="center"
            gap={'2'}
            bottom={['5%']}
            right={['0%']}
            pos="absolute"
          >
            <chakra.p>{location}</chakra.p>
            <chakra.hr borderColor={useColorModeValue('black', 'white')} w="40px" />
          </Flex>
        </Stack>
      </Flex>

      <Flex className="content" bottom={['5%']} left={['2%']} gap="2" align="center" pos="absolute">
        <Icon fontSize={'4xl'} as={FiArrowDownCircle} />
      </Flex>
    </Flex>
  );
}
