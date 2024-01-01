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
  const contentContainer = RecentProjectsAnimation();
  const { viewMode } = useResize();

  const description =
    'A testament to innovation and design finesse. Each project encapsulates vision, precision, and the essence of digital transformation, shaping today and defining tomorrow.';
  const about =
    'I’m a developer with a passion for design and a knack for problem-solving. Whether it’s crafting beautiful user interfaces for the web or developing innovative mobile applications, I am always eager to push myself and expand my skillset. With a focus on continual, learning and growth I strive to stay up-to-date with the latest technologies and best practices ensuring that my work is always top-notch.';

  return (
    <Flex
      ref={contentContainer}
      pt={24}
      pb={12}
      px={2}
      gap={20}
      mx="auto"
      display="flex"
      direction="column"
      maxW={1200}
      w="full"
      minH="100dvh"
    >
      <Box w="100%" display="flex">
        <Flex gap={5} w="fit-content" direction="column">
          <Box w="fit-content">
            <Text fontSize={'2xl'} textAlign="left" fontWeight={600} lineHeight="none">
              {'Discover my Latest Creations'.split(' ').map((title, index) => (
                <chakra.span
                  key={index}
                  overflow="hidden"
                  display="inline-block"
                  pl={1}
                  maxW="md"
                  fontSize={'2xl'}
                >
                  <chakra.span className="contenttitle" display="inline-block">
                    {title}{' '}
                  </chakra.span>
                </chakra.span>
              ))}
            </Text>
            <chakra.hr borderColor="blackAlpha.800" className="contenthr" border="1" w="full" />
          </Box>

          <Text fontSize="lg" h="fit-content" textAlign={'left'} lineHeight="1.3" maxW="lg">
            {description.split(' ').map((desc, index) => (
              <chakra.span key={index} pl={1} overflow="hidden" display="inline-block">
                <chakra.span className="contentdescription" display="inline-block">
                  {desc}{' '}
                </chakra.span>
              </chakra.span>
            ))}
          </Text>
        </Flex>
      </Box>
      <Flex direction={'column'} w="full" align={'center'} justify={'center'}>
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
          <Box w="full">
            <TableContainer justifySelf={'start'}>
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
                <Tbody
                  _groupHover={{
                    bgColor: 'accent.100'
                  }}
                >
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
          </Box>
        )}

        <Box pt={5} placeSelf={'center'}>
          <AnimatedButton href="/projects" width={'165px'} height={'60px'}>
            View All Projects
          </AnimatedButton>
        </Box>
      </Flex>
    </Flex>
  );
}
