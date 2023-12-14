import { Button, Box } from "@chakra-ui/react";

export default function MenuButton({ toggled }: { toggled: boolean }) {
  return (
    <Button
      gap={2}
      bg="blackAlpha.800"
      rounded="full"
      onClick={toggled}
      alignItems="center"
      justifyContent={"center"}
      _hover={{
        _focus: "none",
      }}
      display="flex"
      flexDirection="column"
      w={16}
      mt={2}
      h={16}
      variant={"ghost"}
    >
      <Box
        w="50%"
        placeSelf="start"
        border="1px"
        borderColor="whiteAlpha.900"
      />
      <Box w="full" border="1px" borderColor="whiteAlpha.900" />
      <Box w="50%" border="1px" borderColor="whiteAlpha.900" placeSelf="end" />
    </Button>
  );
}
