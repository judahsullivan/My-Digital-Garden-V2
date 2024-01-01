import { Fragment, useState } from 'react';
import { IconType } from 'react-icons';
import { MdDesignServices, MdDeveloperMode, MdLanguage } from 'react-icons/md';
import {
  Box,
  Flex,
  VStack,
  Icon,
  TabPanel,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Text,
  Container
} from '@chakra-ui/react';
import StackCard from '@/components/globals/card/stackCard';
import { FaToolbox } from 'react-icons/fa';
import { MotionBox } from '@/components/globals/chakraMotion';
import { TechStackProps } from '../../../../types';
import AnimatedButton from '@/components/globals/animatedButton';

interface FilterType {
  type: string;
  icon: IconType;
}

const container = {
  initial: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

interface StackProps {
  techstacks: TechStackProps[];
}

const filterTypes: FilterType[] = [
  { type: 'Framework', icon: MdDeveloperMode },
  { type: 'Design', icon: MdDesignServices },
  { type: 'Language', icon: MdLanguage },
  { type: 'Development', icon: FaToolbox }
];

export default function Stack({ techstacks }: StackProps) {
  console.log(techstacks);
  const [activeType, setActiveType] = useState(filterTypes[0].type);
  const title = 'TechStack⚙️';
  const subtitle =
    'Here are all the technologies I have learned on my Journey to Full Stack!📚 I Make it my goal to learn and gain as much knowledge as possible!🧠';

  return (
    <Box
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      minH="100dvh"
      bg="blackAlpha.900"
      w="full"
      p={5}
    >
      <Heading textColor="white">Tech Stack</Heading>
    </Box>
  );
}
