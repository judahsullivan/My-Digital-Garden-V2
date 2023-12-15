import { MouseEventHandler, useEffect } from 'react';
import { MotionBox } from '../../chakraMotion';

export default function MenuButton({ toggled }: { toggled: MouseEventHandler }) {
  return (
    <MotionBox
      gap={2}
      rounded="full"
      onClick={toggled}
      z={10}
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
      <MotionBox
        variants={{
          open: {
            width: '100%',
            y: '10px',
            rotate: '45deg'
          },
          closed: {
            width: '50%',
            rotate: '0deg'
          }
        }}
        transition={{
          open: {
            duration: 0.5
          },
          closed: {
            duration: 0.5
          }
        }}
        className="line"
        w="50%"
        placeSelf="start"
        border="1px"
        borderColor="whiteAlpha.900"
      />
      <MotionBox
        variants={{
          open: {
            width: ['100%', '0%']
          },
          closed: {
            width: ['0%', '100%']
          }
        }}
        transition={{
          open: {
            duration: 0.5
          },
          closed: {
            duration: 0.5
          }
        }}
        className="line"
        w="full"
        border="1px"
        borderColor="whiteAlpha.900"
      />
      <MotionBox
        variants={{
          open: {
            width: '100%',
            y: '-10px',
            rotate: '-45deg'
          },
          closed: {
            width: '50%',
            rotate: '0deg'
          }
        }}
        transition={{
          open: {
            duration: 0.5
          },
          closed: {
            duration: 0.5
          }
        }}
        className="line"
        w="50%"
        border="1px"
        borderColor="whiteAlpha.900"
        placeSelf="end"
      />
    </MotionBox>
  );
}
