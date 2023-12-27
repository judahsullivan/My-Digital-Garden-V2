import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Flex,
  Text,
  Stack,
  Heading,
  chakra,
  Box,
  TableCaption,
  Tbody,
  SimpleGrid
} from '@chakra-ui/react';
import AnimatedButton from '@/components/globals/animatedButton';
import { Fragment, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { ProjectPayLoad } from '../../../../types';
import { ColumnCard, TableCard } from '@/components/globals/card/projectCard';
import RecentProjectsAnimation from '../animations/recentProjects';
import { useResize } from '@/lib/useResize';

export default function RecentProjects({ projects }: { projects: ProjectPayLoad[] }) {
  const container = RecentProjectsAnimation();
  const { viewMode } = useResize();

  const description =
    'A testament to innovation and design finesse. Each project encapsulates vision, precision, and the essence of digital transformation, shaping today and defining tomorrow.';
  const about =
    'I’m a developer with a passion for design and a knack for problem-solving. Whether it’s crafting beautiful user interfaces for the web or developing innovative mobile applications, I am always eager to push myself and expand my skillset. With a focus on continual, learning and growth I strive to stay up-to-date with the latest technologies and best practices ensuring that my work is always top-notch.';

  return (
    <Flex
      ref={container}
      mx="auto"
      pt={24}
      pb={12}
      px={2}
      display={'flex'}
      maxW={1200}
      justify="center"
      direction={'column'}
      w="full"
      textAlign="center"
    >
      <Stack textAlign="left" w="full" direction="column" maxW={'fit-content'}>
        <Flex direction="column" w="fit-content">
          <Text fontSize={'2xl'} fontWeight={600} lineHeight="none" w="full" mx="auto">
            {'Discover my latest Ventures'.split(' ').map((discover, index) => (
              <chakra.span
                key={index}
                overflow="hidden"
                display="inline-block"
                pl={1}
                maxW="md"
                fontSize={'2xl'}
              >
                <chakra.span className="title" display="inline-block">
                  {discover}{' '}
                </chakra.span>
              </chakra.span>
            ))}
          </Text>
          <chakra.hr borderColor="blackAlpha.800" className="hr" border="1" w="full" />
        </Flex>

        <Text fontSize="lg" h="fit-content" lineHeight="1.3" maxW="md">
          {description.split(' ').map((desc, index) => (
            <chakra.span key={index} pl={1} overflow="hidden" display="inline-block">
              <chakra.span className="descr" display="inline-block">
                {desc}{' '}
              </chakra.span>
            </chakra.span>
          ))}
        </Text>
      </Stack>

      <Flex pt={24} pb={12} gap={10} direction={'column'} w="full">
        {viewMode === 'grid' ? (
          <Fragment>
            <Heading textColor="accent.100" fontSize="lg" textAlign="left" w="full">
              Recent Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
              {projects.map((project, index) => (
                <Fragment key={index}>
                  <ColumnCard
                    title={project.title}
                    src={project.mainImage}
                    category={project.projectCategory.title}
                  />
                </Fragment>
              ))}
            </SimpleGrid>
          </Fragment>
        ) : (
          <TableContainer w={'60%'} placeSelf="end">
            <Heading textColor="accent.100" fontSize="lg" textAlign="left" w="full">
              Recent Projects
            </Heading>

            <Table mt={5} colorScheme="black" variant="unstyled">
              <Thead>
                <Tr>
                  <Th w="50%">Title</Th>
                  <Th>Category</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projects.map((project, index) => (
                  <Fragment key={index}>
                    <TableCard
                      src={project.mainImage}
                      title={project.title}
                      category={project.projectCategory.title}
                    />
                  </Fragment>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}

        <Box placeSelf={'center'}>
          <AnimatedButton href="/projects" width={'165px'} height={'60px'}>
            View All Projects
          </AnimatedButton>
        </Box>
      </Flex>
    </Flex>
  );
}
