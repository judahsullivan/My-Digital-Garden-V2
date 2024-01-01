import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import MagnetLink from '@/components/globals/magneticLink';
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
import { Fragment, useState } from 'react';
import AnimatedButton from '@/components/globals/animatedButton';
import { PostPayLoad } from '../../../../types';
import { useResize } from '@/lib/useResize';
import { ColumnCard, TableCard } from '@/components/globals/card/projectCard';
import RecentProjectsAnimation from '../animations/recentProjects';
import FeaturedArticlesAnimation from '../animations/featuredArticles';

export default function FeaturedArticles({ articles }: { articles: PostPayLoad[] }) {
  const featuredContainer = FeaturedArticlesAnimation();
  const { viewMode } = useResize();
  const [hovered, setIsHovered] = useState();
  const title = 'Journey of my Thoughtful Explorations';

  const description =
    "Embark on a voyage through my mind's depths. Each entry a revelation, weaving curiosity and introspection. Explore diverse musings and insightful reflections. Join me in navigating the maze of thoughts, seeking meaning together.";
  return (
    <Flex
      pt={24}
      pb={12}
      ref={featuredContainer}
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
              {title.split(' ').map((title, index) => (
                <chakra.span
                  key={index}
                  overflow="hidden"
                  display="inline-block"
                  pl={1}
                  maxW="md"
                  fontSize={'2xl'}
                >
                  <chakra.span className="" display="inline-block">
                    {title}{' '}
                  </chakra.span>
                </chakra.span>
              ))}
            </Text>
            <chakra.hr borderColor="blackAlpha.800" className="" border="1" w="full" />
          </Box>

          <Text fontSize="lg" h="fit-content" textAlign={'left'} lineHeight="1.3" maxW="lg">
            {description.split(' ').map((desc, index) => (
              <chakra.span key={index} pl={1} overflow="hidden" display="inline-block">
                <chakra.span className="" display="inline-block">
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
              Featured Articles
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
              {articles.map((article, index) => (
                <Fragment key={index}>
                  <ColumnCard
                    title={article.title}
                    src={article.mainImage}
                    category={article.category.title}
                  />
                </Fragment>
              ))}
            </SimpleGrid>
          </Fragment>
        ) : (
          <Box w="full">
            <TableContainer justifySelf={'start'}>
              <Heading textColor="accent.100" fontSize="lg" textAlign="left" w="full">
                Featured Articles
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
                  {articles.map((article, index) => (
                    <Fragment key={index}>
                      <TableCard
                        src={article.mainImage}
                        title={article.title}
                        category={article.category.title}
                      />
                    </Fragment>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}

        <Box pt={5} placeSelf={'center'}>
          <AnimatedButton href="/blog" width={'165px'} height={'60px'}>
            View All Articles
          </AnimatedButton>
        </Box>
      </Flex>
    </Flex>
  );
}
