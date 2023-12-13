import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  Icon,
  Heading,
  chakra,
  Stack,
  VStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import GridCard from "@/components/globals/card";

export default function RecentProjects() {
  return (
    <Stack display="flex" flexDir="column" w="full" minH="100dvh">
      <Stack
        pt={24}
        pb={12}
        px={2}
        gap={20}
        maxW={{ base: "full", md: 1200 }}
        mx="auto"
        flexDirection={"column"}
        display="flex"
        w="full"
        minH="100dvh"
        justify="space-between"
      >
        <VStack spacing={5} maxW="fit-content">
          <Heading
            as="h1"
            fontWeight={"extrabold"}
            fontSize={"60px"}
            lineHeight="none"
            w="full"
            mx="auto"
          >
            Recent Projects
          </Heading>
          <chakra.hr
            w="full"
            borderColor={useColorModeValue("black", "white")}
          />
        </VStack>
        <Stack>
          <GridCard />
        </Stack>
        <Button
          rightIcon={<Icon as={FiArrowRight} />}
          variant="ghost"
          placeSelf={"end"}
          as={NextLink}
          href="/about"
          fontSize="xl"
        >
          View all Projects
        </Button>
      </Stack>
    </Stack>
  );
}
