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

  const title = 'Recent Projects';
  const description =
    'A testament to innovation and design finesse. Each project encapsulates vision, precision, and the essence of digital transformation, shaping today and defining tomorrow.';
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
      <Box w="100%" display="flex" alignItems="center" flexDirection="column">
        <Flex
          justify="space-between"
          w="full"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Heading textColor="accent.100" fontSize={{ base: '6xl', md: '8xl' }} maxW="2xl">
            {title}
          </Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="xl">
            {description}
          </Text>
        </Flex>

        <chakra.hr borderColor="blackAlpha.900" w="full" />
      </Box>
      <Flex direction={'column'} w="full" align={'center'} justify={'center'}>
        {viewMode === 'grid' ? (
          <Fragment>
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
              <Table mt={5} colorScheme="black" variant="unstyled">
                <Thead>
                  <Tr>
                    <Th w="60%">Title</Th>
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
