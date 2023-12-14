import {
  SiIndeed,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import {
  Box,
  Stack,
  Heading,
  HStack,
  VStack,
  Link,
  Flex,
  Divider,
  Text,
  Button,
  chakra,
  LinkProps,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

const Footer = () => {
  return (
    <Flex
      bg={"blackAlpha.900"}
      direction="column"
      justify={"space-between"}
      p={5}
      minH="100dvh"
      color={"whiteAlpha.900"}
      w="full"
      marginInline="auto"
    >
      <Stack
        my={10}
        w="full"
        mx="auto"
        maxW={1200}
        spacing={[8, 12]}
        justifyContent="space-evenly"
        direction={{ base: "column" }}
      >
        <Box maxW="fit-content">
          <Heading
            textTransform="capitalize"
            fontWeight={"bold"}
            fontSize={{ base: "5xl", md: "6xl" }}
          >
            Lets create a new Experience
          </Heading>
          <chakra.hr w="full" borderColor={"whiteAlpha.800"} />
        </Box>
        <Stack
          w="full"
          maxW="5xl"
          mx="auto"
          align="center"
          direction={{ base: "column", md: "column", lg: "row", xl: "row" }}
          justify="space-between"
        >
          <VStack>
            <Text fontSize="2xl" fontWeight={500}>
              Newsletter Coming Soon
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight={500}>
              Pages
            </Text>

            <chakra.hr w="full" borderColor={"whiteAlpha.800"} />
            <Link></Link>
          </VStack>
          <VStack>
            <Text fontSize="2xl" fontWeight={500}>
              Socials
            </Text>
            <chakra.hr w="full" borderColor={"whiteAlpha.800"} />
          </VStack>
        </Stack>
      </Stack>

      <Flex direction="column">
        <chakra.hr w="full" borderColor={"whiteAlpha.800"} />

        <Flex
          w="full"
          px={[0, 0, 5, 5]}
          align="center"
          fontSize="lg"
          justify="space-between"
        >
          <VStack textAlign="center">
            <chakra.p
              fontSize="sm"
              letterSpacing="widest"
              fontWeight={"bold"}
              color="whiteAlpha.700"
            >
              Authored By
            </chakra.p>
            <chakra.p fontSize={"lg"}>Judah Sullivan</chakra.p>
          </VStack>
          <VStack textAlign="center">
            <chakra.p
              fontSize="sm"
              letterSpacing="widest"
              fontWeight={"bold"}
              color="whiteAlpha.700"
            >
              Local Time
            </chakra.p>
          </VStack>
          <VStack textAlign="center">
            <chakra.p
              fontSize="sm"
              letterSpacing="widest"
              fontWeight={"bold"}
              color="whiteAlpha.700"
            >
              Year Created
            </chakra.p>

            <chakra.p position="relative" fontSize={"lg"}>
              {new Date().getFullYear()}
              <chakra.span position="absolute" fontSize="xs" ml={1.5}>
                ©️
              </chakra.span>
            </chakra.p>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
