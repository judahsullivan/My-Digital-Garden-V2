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
      bg={useColorModeValue("blackAlpha.900", "blackAlpha.50")}
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
        <Box>
          <Text
            textTransform="capitalize"
            fontWeight={"bold"}
            fontSize={{ base: "5xl", md: "6xl" }}
          >
            Lets create a new Experience
          </Text>
          <chakra.hr
            my={5}
            maxW="3xl"
            w="full"
            borderColor={"whiteAlpha.800"}
          />
        </Box>
      </Stack>

      <Flex direction="column">
        <chakra.hr w="full" borderColor={"whiteAlpha.800"} />

        <Flex w="full" align="center" fontSize="lg" justify="space-between">
          <VStack textAlign="center">
            <chakra.p
              fontSize="sm"
              letterSpacing="widest"
              fontWeight={"bold"}
              color="whiteAlpha.700"
            >
              Year created
            </chakra.p>

            <chakra.p position="relative" fontSize={"lg"}>
              {new Date().getFullYear()}
              <chakra.span position="absolute" fontSize="xs" ml={1.5}>
                ©️
              </chakra.span>
            </chakra.p>
          </VStack>
          <VStack textAlign="center">
            <chakra.p
              fontSize="sm"
              letterSpacing="widest"
              fontWeight={"bold"}
              color="whiteAlpha.700"
            >
              Socials
            </chakra.p>
            <HStack spacing={2}>
              <Icon as={SiInstagram} />
              <Icon as={SiLinkedin} />
              <Icon as={SiIndeed} />
              <Icon as={SiYoutube} />
              <Icon as={SiTwitter} />
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
