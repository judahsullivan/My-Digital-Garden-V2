import {
  chakra,
  HStack,
  Flex,
  Text,
  Image,
  Heading,
  Stack,
  Tag,
  Button,
  TagLabel,
  Box,
  useColorModeValue,
  Skeleton,
  AspectRatio,
  VStack
} from '@chakra-ui/react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MotionBox, MotionImage } from '../chakraMotion';
import MagnetLink from '../magneticLink';

const MdCard = () => {
  return (
    <Stack w="fit-content" maxW={{ base: 'full', md: 500 }} spacing={5}>
      <Image
        objectFit={'cover'}
        rounded={'md'}
        boxShadow={'2xl'}
        src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <Heading>Title</Heading>
      <chakra.hr w="full" borderColor="black" />
      <Stack w="full" direction="row" px={5} justify="space-between" align="center">
        <Text fontWeight={'bold'}>Category</Text>
        <Text fontWeight={600} color={'blackAlpha.600'}>
          Jan 2, 2022
        </Text>
      </Stack>
    </Stack>
  );
};

const RightProjectCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <Flex width="full" gap={2}>
      <MotionBox
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.600', 'gray.700')}
        w="70%"
        h="24rem"
        textAlign="left"
        align="start"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        spacing={4}
        style={{
          rotateY,
          rotateX,
          transformStyle: 'preserve-3d',
          perspective: '200px'
        }}
        shadow="lg"
        p={2}
        _hover={{ shadow: 'dark-lg' }}
        overflow="hidden"
        position="relative"
      >
        <MotionBox
          as={AspectRatio}
          ratio={1.85 / 1}
          w="100%"
          h="100%"
          style={{
            transform: 'translateZ(75px) ',
            transformStyle: 'perserve-3d'
          }}
          shadow="md"
          _hover={{ shadow: '2xl' }}
          rounded="xl"
        >
          <MotionImage
            src={
              'https://media.istockphoto.com/id/615505700/photo/digital-oil-painting-of-oak-tree-at-sunset.jpg?s=1024x1024&w=is&k=20&c=DCOf6EJgLzhmqLu6cicURW_tRm7VnOdstC0b_KeyJtM='
            }
            fallback={<Skeleton />}
            width={'full'}
            alt="project Image"
            height={'full'}
            position="absolute"
            rounded="xl"
            objectFit="cover"
            opacity={0.5}
            _hover={{ opacity: 1, shadow: 'dark-lg' }}
          />
        </MotionBox>
      </MotionBox>
      <Flex direction="column" top={0} bottom={0} right={0} rounded="lg" p={4} h={300} w="25%">
        <Box w="fit-content">
          <Text fontWeight={700} fontSize="2xl" color="accent.100">
            Title
          </Text>
          <chakra.hr w="full" />
        </Box>
        <Stack px={2} justify="space-between" py={5} h="full" w="fit-content">
          <Flex justify="space-between">
            <chakra.p>Category</chakra.p>
            <chakra.p>May - 2022</chakra.p>
          </Flex>
          <chakra.p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </chakra.p>
          <HStack>
            <Tag colorScheme="facebook">
              <TagLabel>Tags</TagLabel>
            </Tag>
          </HStack>
        </Stack>

        <Button
          _hover={{
            bg: 'transparent'
          }}
          variant="ghost"
          placeSelf={'end'}
          w="fit-content"
        >
          <MagnetLink href="" text="Read Case Study" />
        </Button>
      </Flex>
    </Flex>
  );
};

export { RightProjectCard };
