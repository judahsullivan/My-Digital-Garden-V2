import React, { useState } from 'react';
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  Link,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from '@chakra-ui/react';
import { MotionAvatar, MotionBox } from '../../chakraMotion';
import NextLink from 'next/link';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

interface StackCardProps {
  title: string;
  image: string;
  link: string;
  description: string;
}
const StackCard = ({ title, image, link, description }: StackCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const text = useColorModeValue('#f0e7db', '#202023');

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>
        <HStack
          bg={'whiteAlpha.800'}
          align={'center'}
          textColor={'white'}
          p={4}
          rounded="xl"
          borderWidth="1px"
          maxH={'100px'}
          borderColor={useColorModeValue('gray.100', 'gray.700')}
          w="100%"
          textAlign="left"
          spacing={4}
          _hover={{ shadow: 'md' }}
          onClick={handleCardClick}
        >
          <Image src={image} height={26} alt="stack image" width={26} rounded="md" />
          <VStack align="start" justify="flex-start" spacing={1} maxW="lg" h="100%">
            <VStack spacing={0} align="start" flexGrow={1}>
              <Text fontWeight="800" fontSize="sm" noOfLines={2}>
                {title}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </MotionBox>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <VStack>
              <Text fontWeight="800" fontSize="sm">
                {title}
              </Text>
              <Link as={NextLink} href={link} target="_blank">
                <MotionAvatar whileHover={{ scale: 1.12 }} src={image} size={'xl'} />
              </Link>
            </VStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default StackCard;
