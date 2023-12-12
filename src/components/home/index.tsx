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
  const heading = "Full-Stack Enthusiast";
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
      mx={"auto"}
      textAlign="center"
      my="auto"
      width="full"
    >
      <Flex
        maxW={1200}
        mx="auto"
        gap={[5, 8, 0]}
        p={2}
        direction="column"
        align="center"
      >
        <Heading w="full" textAlign={["center", "center", "left", "left"]}>
          {name}
        </Heading>
        <Heading
          as="h1"
          fontWeight={"bold"}
          lineHeight="none"
          letterSpacing="tighter"
          w="full"
          fontSize={["45px", "50px", "80px", "110px"]}
          textAlign="center"
          mx="auto"
        >
          {heading}
        </Heading>
        <chakra.hr w="full" borderColor={useColorModeValue("black", "white")} />
        <Flex
          align="center"
          gap={{ base: 5, md: 6 }}
          direction={["column", "column", "row", "row"]}
          w="full"
          justify="space-between"
        >
          <chakra.p
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            maxW={["full", "lg"]}
            lineHeight="1.3"
            fontWeight={300}
          >
            {description}
          </chakra.p>

          <Button
            rightIcon={<Icon as={FiArrowRight} />}
            variant="ghost"
            as={NextLink}
            href="/projects"
            fontSize="xl"
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
