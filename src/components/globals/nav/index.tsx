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
        <Flex >
          <MenuButton toggled={() => console.log("toggled")} />
        </Flex>
      </Flex>
    </Flex>
  );
}
