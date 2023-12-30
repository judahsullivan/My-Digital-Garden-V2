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
    <Box minH="100dvh" bg="blackAlpha.900" w="full" p={5}>
      <Box maxW={1200} mx="auto">
        <VStack w={'100%'} display="column" gap={4} textAlign={'left'}>
          <Heading fontSize={'2xl'} textDecoration={'underline'} fontWeight={700}>
            {title}
          </Heading>
          <Text fontSize={'lg'} maxW="lg" textColor="white">
            {subtitle}
          </Text>
        </VStack>
        <Tabs w={'100%'} align="center">
          <TabList display={'flex'} flexDirection={['column', 'row']} w={'fit-content'}>
            <Tab color={'white'}></Tab>
          </TabList>
          <TabPanels mt={5}>
            <TabPanel p={0}>
              <MotionBox
                variants={container}
                initial={'hidden'}
                whileInView={'visible'}
                w={'full'}
                mx={'auto'}
              >
                <SimpleGrid w="full" columns={[2, 3]} spacing={5} mx="auto">
                  {techstacks.map((techstack, index) => (
                    <Fragment key={index}>
                      <AnimatedButton href={techstack.link} width="200px" height="50px">
                        {techstack.name}
                      </AnimatedButton>
                    </Fragment>
                  ))}
                </SimpleGrid>
              </MotionBox>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
