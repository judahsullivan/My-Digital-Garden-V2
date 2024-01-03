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
import FeaturedArticlesAnimation from '../animations/featuredArticles';

export default function FeaturedArticles({ articles }: { articles: PostPayLoad[] }) {
  const featuredContainer = FeaturedArticlesAnimation();
  const { viewMode } = useResize();
  const [hovered, setIsHovered] = useState();
  const title = 'Featured Articles';

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
