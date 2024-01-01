import PageLayout from '@/components/layout/pageLayout';
import { Flex, Heading, Text } from '@chakra-ui/react';

export default function Article() {
  return (
    <PageLayout>
      <Flex minH="100dvh" w="full" align="center" direction="column" justify="center">
        <Heading>Article Page </Heading>
        <Text>Still Under Construction</Text>
      </Flex>
    </PageLayout>
  );
}
