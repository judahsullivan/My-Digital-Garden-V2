import React, { useState, useEffect, useRef, Fragment } from 'react';
import {
  Image,
  Flex,
  Text,
  Box,
  chakra,
  Tbody,
  Tr,
  Td,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { MotionBox } from '../../chakraMotion';

interface CardProps {
  title: string;
  category: string;
  src?: string;
}

const ColumnCard = ({ title, category, src }: CardProps) => {
  return (
    <Stack w="full" p={2}>
      <Stack h="300px" bg="blackAlpha.800" align="center" justify="center">
        <Stack px={2}>
          <Image src={src} w="100%" h="100%" objectFit={'cover'} alt={title} />
        </Stack>
      </Stack>
      <Flex gap={5} direction="column" w="Full">
        <Text fontSize="xl" px={2} textAlign="left" fontWeight={700}>
          {title}
        </Text>
        <chakra.hr w="full" borderColor="black" />
        <Flex px={2} justify="space-between" align="center" w="full">
          <Text>{category}</Text>
          <Text>2023</Text>
        </Flex>
      </Flex>
    </Stack>
  );
};

const scaleAnimation = {
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
  }
};

interface ModalState {
  active: boolean;
  index: number;
}

const TableCard = ({ title, category, src }: CardProps) => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    if (active) {
      setHoveredIndex(index); // Update the hovered index
      setModalPosition({ x, y });
    } else {
      setHoveredIndex(null); // Reset the hovered index when mouse leaves
    }
    setModal({ active, index });
  };

  return (
    <Fragment>
      <Tr
        onMouseMove={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        position="relative"
        h="100px"
        cursor="pointer"
        w="fit-content"
        overflow="hidden"
        m="auto"
        p={0}
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
      >
        <Td fontSize="2xl" fontWeight={'bold'}>
          {title}
        </Td>
        <Td>{category}</Td>
        <Td>2023</Td>
        <Td>
          <MotionBox
            ref={modalContainer}
            variants={scaleAnimation}
            initial="closed"
            animate={active || hoveredIndex !== null ? 'enter' : 'closed'}
            height="300px"
            position="fixed"
            width={'300px'}
            top={`${modalPosition.y - (hoveredIndex !== null ? hoveredIndex * 150 : 0)}px`}
            left={`${modalPosition.x}px`}
            bg="blackAlpha.800"
            pointerEvents="none"
            overflow="hidden"
            zIndex={3}
            className="modalContainer"
            style={{
              transformOrigin: 'center',
              position: 'fixed',
              top: `${modalPosition.y - (hoveredIndex !== null ? hoveredIndex * 150 : 0)}px`,
              left: `${modalPosition.x}px`,
              ...scaleAnimation[active || hoveredIndex !== null ? 'enter' : 'closed']
            }}
          >
            <MotionBox
              height="100%"
              width="100%"
              style={{
                top: `${index} * -100 + '%'`,
                transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1);' // Slide up effect
              }}
              p={5}
              position="relative"
            >
              <Box
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="MODAL"
              >
                <Image src={src} alt="" objectFit="cover" h="auto" />
              </Box>
            </MotionBox>
          </MotionBox>
        </Td>
      </Tr>
    </Fragment>
  );
};

export { ColumnCard, TableCard };
