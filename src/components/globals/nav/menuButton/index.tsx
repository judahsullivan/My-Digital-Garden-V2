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
      <Box w="full" border="1px" borderColor="white" />
      <Box w="full" border="1px" borderColor="white" />
      <Box w="full" border="1px" borderColor="white" />
    </Button>
  );
}
