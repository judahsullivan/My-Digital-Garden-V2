import {
  Icon,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { FiArrowRight } from "react-icons/fi";

export default function About() {
  const description = [
    "Enhancing brand presence through front-end expertise and elegant design. Collaboratively shaping digital experiences, and setting a fresh standard in the development world.",
  ];
  return (
    <Flex
      pt={24}
      pb={12}
      px={2}
      display={"flex"}
      align={"center"}
      justify="center"
      minH="100dvh"
      direction={"column"}
      maxW={1200}
      mx={"auto"}
    >
      <Flex gap={20} direction={"column"} justify="space-between">
        <Flex
          w="full"
          align="center"
          gap={{ base: 10 }}
          justify="center"
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
        >
          <Text fontSize={{ base: "2xl", md: "3xl" }}>{description}</Text>
          <Flex direction="column" w="full" gap={10} maxW={{ base: "full" }}>
            <Text fontSize={"xl"}>{description}</Text>
            <Button
              rightIcon={<Icon as={FiArrowRight} />}
              variant="ghost"
              placeSelf={"start"}
              as={NextLink}
              href="/about"
              fontSize="xl"
            >
              More About Me
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
