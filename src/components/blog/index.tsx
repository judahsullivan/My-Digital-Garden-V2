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
  SimpleGrid,
  HStack,
  Button,
  Icon
} from '@chakra-ui/react';
import { ColumnCard, TableCard } from '@/components/globals/card/projectCard';
import { Fragment } from 'react';
import { useResize } from '@/lib/useResize';
import { ArticleProps } from '@/pages/blog';
import { FiGrid, FiTable } from 'react-icons/fi';

export default function BlogIndex({ articles }: ArticleProps) {
  const { viewMode } = useResize();

  const pageTitle = 'My Articles';
  const pageDescription = 'Elevating Perspectives by Exploring the Future of the Digital World';

  return (
    <Flex minH="100dvh" direction="column" p={2} pt={'12rem'} w="full" maxW={1200} mx="auto">
      <Flex justify="space-between" direction="column">
        <Stack spacing={10}>
          <Flex
            justify="space-between"
            align="center"
            w="full"
            direction={{ base: 'column', md: 'row' }}
          >
            <Heading textColor="accent.100" fontSize={{ base: '6xl', md: '8xl' }} maxW="2xl">
              {pageTitle}
            </Heading>
            <Text fontSize={{ base: '3xl', md: '5xl' }} maxW="xl">
              {pageDescription}
            </Text>
          </Flex>

          <chakra.hr borderColor="blackAlpha.900" />
          <HStack w="full" justify="space-between" align={'center'} px="10">
            <HStack>
              <Button>Categories</Button>
            </HStack>
            <HStack display={{ base: 'none', lg: 'flex' }}>
              <Button rounded="full">
                <Icon as={FiGrid} />
              </Button>
              <Button rounded="full">
                <Icon as={FiTable} />
              </Button>
            </HStack>
          </HStack>
        </Stack>
      </Flex>
      <Flex pt={{ base: '5rem' }} direction={'column'} w="full" align={'center'} justify={'center'}>
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
          <Box w="full" h="full">
            <TableContainer>
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
      </Flex>
    </Flex>
  );
}
