import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import SkillCard from '@/components/globals/card/skillCard';
import Lenis from '@studio-freight/react-lenis';

interface SkillProps {
  number: string;
  title: string;
  description: string;
}
const skills: SkillProps[] = [
  {
    number: '01',
    title: 'Frontend Mastery',
    description:
      'Expertise in crafting captivating handcrafted designs using various frontend frameworks (Astro, Next.js, React, Svelte, Vue) tailored to diverse client needs.'
  },
  {
    number: '02',
    title: 'Backend Proficiency',
    description:
      'Adept in Node.js, Prisma, and Firebase, capable of creating robust backend solutions to complement frontend development.'
  },
  {
    number: '03',
    title: 'CMS Expertise',
    description:
      'Proficient in utilizing headless CMS platforms (Sanity, Strapi, TinaCMS) and deploying on Netlify for seamless content management.'
  },
  {
    number: '04',
    title: 'Animation Enthusiast',
    description:
      'Passionate about implementing engaging micro animations and interactions, enhancing user experience and retention.'
  },
  {
    number: '05',
    title: 'Dedicated Work Ethic',
    description:
      'Committed to maintaining high standards, investing 100% effort into every project, irrespective of its scope.'
  },
  {
    number: '06',
    title: 'Adaptability  ',
    description:
      'Skilled at adapting to new technologies and innovating solutions to meet evolving customer demands.'
  }
];

export default function Skills() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100dvh"
      bgColor={'blackAlpha.900'}
      width="full"
      p={2}
    >
      <Heading textColor="white">My Skills</Heading>
    </Box>
  );
}
