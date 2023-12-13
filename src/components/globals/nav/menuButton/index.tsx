import { Button, Box } from "@chakra-ui/react";

export default function MenuButton({ toggled }: { toggled: boolean }) {
  return (
    <Button
      gap={2}
      onClick={toggled}
      alignItems="center"
      justifyContent={"center"}
      _hover={{
        _focus: "none",
      }}
      display="flex"
      flexDirection="column"
      w={16}
      variant={"ghost"}
    >
      <Box
        w="50%"
        placeSelf="start"
        border="1px"
        borderColor="blackAlpha.800"
      />
      <Box w="full" border="1px" borderColor="blackAlpha.800" />
      <Box w="50%" border="1px" borderColor="blackAlpha.800" placeSelf="end" />
    </Button>
  );
}
