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
import AnimatedButton from '@/components/globals/animatedButton';

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
      textAlign="center"
      width="full"
    >
      <Flex mx="auto" gap={[5, 8, 0]} w="full" justify="center" direction="column" align="center">
        <Stack w="fit-content" direction="column">
          <Box>
            <Heading
              fontWeight={'extrabold'}
              letterSpacing="tight"
              textTransform="uppercase"
              fontSize={{ base: '54px', lg: '12dvw' }}
              textColor="accent.100"
              px={0}
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
              textColor="accent.100"
              letterSpacing="tight"
              textTransform="uppercase"
              fontSize={{ base: '54px', lg: '12dvw' }}
              lineHeight="none"
              w="full"
            >
              {enthusiast.split('').map((heading, index) => (
                <chakra.span key={index} display="inline-block" overflow="hidden">
                  <chakra.span className="headingtwo" display="inline-block">
                    {heading}
                  </chakra.span>
                </chakra.span>
              ))}
            </Heading>

            <chakra.hr
              className="line"
              w="full"
              borderColor={useColorModeValue('black', 'white')}
            />
          </Box>
          <Flex
            className="content"
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
              lineHeight="1.3"
              fontWeight={400}
            >
              {description}
            </chakra.p>
            <AnimatedButton href={'/contact'} width="120px" height="60px">
              Get In Touch
            </AnimatedButton>
          </Flex>
          <Flex
            className="content"
            align="center"
            gap={'2'}
            bottom={['5%']}
            right={['0%']}
            pos="absolute"
          >
            <chakra.p textColor="gray.600">{location}</chakra.p>
            <chakra.hr borderColor="gray.600" w="40px" />
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}
