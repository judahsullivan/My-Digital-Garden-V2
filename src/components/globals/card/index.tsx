import React from 'react';
import NextLink from 'next/link';
import {
  useColorModeValue,
  chakra,
  Flex,
  Box,
  Text,
  AspectRatio,
  Image,
  Skeleton,
  Badge,
  Link,
  Icon,
  Heading,
  Stack
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';
import { MotionBox, MotionFlex, MotionText } from '../chakraMotion';

export default function GridCard() {
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
}
