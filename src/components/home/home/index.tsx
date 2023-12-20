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
import { FiArrowDown, FiArrowDownCircle, FiArrowRight } from 'react-icons/fi';
import NextLink from 'next/link';
import HomeAnimation from './animations';
import MagnetLink from '@/components/globals/magneticLink';

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
        <Stack pt={{ base: 0, md: 5 }} w="fit-content" direction="column">
          <Heading
            fontWeight={'extrabold'}
            letterSpacing="tight"
            textTransform="uppercase"
            fontSize={{ base: '6xl', md: '25dvh' }}
            textColor="accent.100"
            noOfLines={1}
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
            textColor="accent.100"
            noOfLines={1}
            display={'block'}
            letterSpacing="tight"
            textTransform="uppercase"
            textAlign="left"
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

          <chakra.hr className="line" borderColor="accent.100" w="full" />

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
              fontWeight={400}
            >
              {description}
            </chakra.p>

            <Button
              placeSelf={'start'}
              className="content"
              display="flex"
              gap="2"
              variant="ghost"
              _hover={{
                bgColor: 'transparent'
              }}
            >
              <MagnetLink href="/projects" text="Get In touch" />
              <Icon as={FiArrowRight} />
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
            <chakra.p textColor="muted.900">{location}</chakra.p>
            <chakra.hr color={useColorModeValue('muted.900', 'muted.100')} w="40px" />
          </Flex>
        </Stack>
      </Flex>
      <Flex
        className="content"
        textColor={'muted.900'}
        bottom={['5%']}
        left={['2%']}
        gap="2"
        align="center"
        pos="absolute"
      >
        <Icon fontSize={'4xl'} as={FiArrowDown} />
      </Flex>
    </Flex>
  );
}
