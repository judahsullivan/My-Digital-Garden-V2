import { Text, Flex, chakra, Link, Divider, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import MenuButton from "./menuButton";
import ThemeToggleButton from "./themeToggle";

export default function Navigation() {
  return (
    <Flex as="header" w="full" px={[5, 10]} h={16}>
      <Flex h="full" justify="space-between" w={"full"} align="center">
        <Link passHref as={NextLink} href="/">
          <Text fontWeight="thin">
            coded by{" "}
            <chakra.span fontFamily={"basement"} fontSize={["md", "lg"]}>
              Judah Sullivan
            </chakra.span>
          </Text>
        </Link>
        <Flex display={["none", "flex"]} gap={10} align={"center"}>
          <Flex fontFamily={"basement"} as="nav" gap={5} fontSize={["lg"]}>
            <Link passHref href="/projects" as={NextLink}>
              Projects
            </Link>
            <Link href="/blog" passHref as={NextLink}>
              Blog
            </Link>
          </Flex>
          |
          <ThemeToggleButton />
        </Flex>
        <Flex display={["flex", "none"]}>
          <MenuButton toggled={() => console.log("toggled")} />
        </Flex>
      </Flex>
    </Flex>
  );
}
