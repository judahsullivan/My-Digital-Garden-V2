import { Box, useColorModeValue } from '@chakra-ui/react';
import AnimatedButton from '../../animatedButton';

export default function MenuButton({ toggled }: { toggled: () => void }) {
  const borderColor = useColorModeValue('whiteAlpha.900', 'black');
  return (
    <Box
      gap={2}
      rounded="full"
      onClick={toggled}
      cursor="pointer"
      position="absolute"
      top={'.1'}
      right={'5'}
      p={2}
      alignItems="center"
      justifyContent={'center'}
      display="flex"
      flexDirection="column"
      w={'60px'}
      mt={2}
      h={'60px'}
    >
      <Box className="hamburger line1" placeSelf="start" border="1px" borderColor={borderColor} />
      <Box className="hamburger line2" border="1px" borderColor={borderColor} />
      <Box className="hamburger line3" border="1px" borderColor={borderColor} placeSelf="end" />
    </Box>
  );
}
