import {
  Button,
  Heading,
  chakra,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const role = "Full-Stack Enthusiast";

  return (
    <Flex
      justify={"center"}
      minHeight="100dvh"
      display="flex"
      align="center"
      mx={"auto"}
      width="full"
    >
      <Heading fontWeight={"bold"} fontSize="120px">
        {role}
      </Heading>
    </Flex>
  );
}
