import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import {
  Icon,
  Heading,
  chakra,
  Stack,
  VStack,
  useColorModeValue,
  Button,
  Flex
} from '@chakra-ui/react';
import { RightProjectCard, MdCard, LeftProjectCard } from '@/components/globals/card';
import MagnetLink from '@/components/globals/magneticLink';
import { Fragment } from 'react';

export default function RecentProjects() {
  return (
    <Stack display="flex" flexDir="column" w="full" minH="100dvh">
      <Stack
        pt={24}
        pb={12}
        px={2}
        gap={20}
        maxW={{ base: 'full', md: 1200 }}
        mx="auto"
        flexDirection={'column'}
        display="flex"
        w="full"
        minH="100dvh"
        justify="space-between"
      >
        <VStack maxW="fit-content">
          <Heading
            fontWeight={'extrabold'}
            fontSize={'60px'}
            textColor="accent.100"
            lineHeight="none"
            w="full"
            mx="auto"
          >
            Recent Projects
          </Heading>
          <chakra.hr w="full" borderColor={useColorModeValue('black', 'white')} />
        </VStack>
        <Flex gap={5} direction="column">
          {Array.from({ length: 2 }).map((_, index) => (
            <Fragment key={index}>
              <MdCard />
              {index % 2 === 0 ? <RightProjectCard /> : <LeftProjectCard />}
            </Fragment>
          ))}
          <MdCard />
          <RightProjectCard />
        </Flex>
        <Button
          _hover={{
            bg: 'transparent'
          }}
          variant="ghost"
          gap={2}
          placeSelf={'end'}
          fontSize="xl"
        >
          <MagnetLink text="View All Pojects" href="/about" />
          <Icon as={FiArrowRight} />
        </Button>
      </Stack>
    </Stack>
  );
}
