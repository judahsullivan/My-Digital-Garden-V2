import {
  Button,
  Heading,
  chakra,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Badge,
  Icon,
  VStack,
  Box,
} from "@chakra-ui/react";
import { FiArrowDownCircle, FiArrowRight } from "react-icons/fi";
import NextLink from "next/link";

export default function Home() {
  const name = "Judah Sullivan";
  const fullstack = "FullStack";
  const enthusiast = "enthusiast";
  const location = "New Orleans, Louisiana";
  const description =
    "With design focus and love for code. I am driven to set new heights in the development world!";

  return (
    <Flex
      justify={"center"}
      minHeight="100dvh"
      display="flex"
      direction="column"
      align="center"
      pos="relative"
      p={4}
      textAlign="center"
      width="full"
    >
      <Flex
        // maxW={{ base: "full", md: 1200 }}
        mx="auto"
        gap={[5, 8, 0]}
        w="full"
        justify="center"
        direction="column"
        align="center"
      >
        <Stack w="full" direction="column">
          <Heading
            fontWeight={"extrabold"}
            letterSpacing="tight"
            textTransform="uppercase"
            fontSize={{ base: "5xl", md: "25dvh" }}
            lineHeight="none"
            w="full"
          >
            {fullstack}
          </Heading>
          <Heading
            fontWeight={"extrabold"}
            fontSize={{ base: "5xl", md: "25dvh" }}
            letterSpacing="tight"
            textTransform="uppercase"
            lineHeight="none"
            w="full"
            mx="auto"
          >
            {enthusiast}
          </Heading>
          <chakra.hr borderColor="blackAlpha.800" border="1" w="full" />
        </Stack>

        <Flex
          align="center"
          textAlign="start"
          p={{ base: 5, md: 5 }}
          gap={{ base: 5, md: 6 }}
          direction={["column", "column", "row", "row"]}
          w="full"
          justify="space-between"
        >
          <chakra.p
            fontSize={{ base: "xl", md: "xl", lg: "xl" }}
            maxW={{ base: "full", md: "md" }}
            lineHeight="1.3"
            fontWeight={300}
          >
            {description}
          </chakra.p>

          <Button
            rightIcon={<Icon as={FiArrowRight} />}
            placeSelf={"start"}
            variant="ghost"
            as={NextLink}
            href="/projects"
          >
            View My Projects
          </Button>
        </Flex>
        <Flex
          align="center"
          gap={"2"}
          bottom={["5%"]}
          right={["0%"]}
          pos="absolute"
        >
          <chakra.p>{location}</chakra.p>
          <chakra.hr
            borderColor={useColorModeValue("black", "white")}
            w="40px"
          />
        </Flex>
      </Flex>

      <Flex bottom={["5%"]} left={["2%"]} gap="2" align="center" pos="absolute">
        <Icon fontSize={"4xl"} as={FiArrowDownCircle} />
      </Flex>
    </Flex>
  );
}
