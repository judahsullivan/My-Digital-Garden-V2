import { Text, Flex, chakra, Link, Divider, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import MenuButton from "./menuButton";
import ThemeToggleButton from "./themeToggle";

export default function Navigation() {
  return (
    <Flex
      as="header"
      zIndex={10}
      position="fixed"
      backdropFilter="auto"
      backdropBlur="6px"
      w="full"
      px={[5, 10]}
      h={16}
    >
      <Flex h="full" justify="space-between" w={"full"} align="center">
        <Link passHref as={NextLink} href="/">
          <Text fontWeight="thin">
            coded by{" "}
            <chakra.span fontWeight="800" fontSize={["md", "lg"]}>
              Judah Sullivan
            </chakra.span>
          </Text>
        </Link>
        <Flex
          display={["none", "none", "flex", "flex"]}
          gap={10}
          align={"center"}
        >
          <Flex as="nav" gap={5} fontSize={["lg"]}>
            <Link passHref href="/about" as={NextLink}>
              About
            </Link>
            <Link passHref href="/projects" as={NextLink}>
              Projects
            </Link>
            <Link href="/blog" passHref as={NextLink}>
              Blog
            </Link>
            <Link passHref href="/contact" as={NextLink}>
              Contact
            </Link>
          </Flex>
          |
          <ThemeToggleButton />
        </Flex>
        <Flex display={["flex", "flex", "none", "none"]}>
          <MenuButton toggled={() => console.log("toggled")} />
        </Flex>
      </Flex>
    </Flex>
  );
}
