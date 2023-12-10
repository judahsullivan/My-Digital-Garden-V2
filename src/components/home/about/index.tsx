import { Box, Flex, Text } from "@chakra-ui/react";

export default function About() {
  const description = [
    "Enhancing brand presence through front-end expertise and leadership. Collaboratively shaping innovative digital experiences, setting a fresh standard.",
  ];
  return (
    <Box minH={"100dvh"} maxW={1200} mx={"auto"}>
      <Text fontSize={"70px"}>{description}</Text>
    </Box>
  );
}
