import AboutIndex from '@/components/about/about';
import Skills from '@/components/about/skills';
import TechStack from '@/components/about/techStack';
import Experience from '@/components/about/expierience';
import { techstacks } from '@/utils/data';
import { TechStackProps } from '../../../types';
import PageLayout from '@/components/layout/pageLayout';
import Philosphy from '@/components/about/philosphy';

interface StackProps {
  techstacks: TechStackProps[];
}

export default function About({ techstacks }: StackProps) {
  return (
    <PageLayout>
      <AboutIndex />
      {/* <Philosphy /> */}
      {/* <Skills /> */}
      {/* <TechStack techstacks={techstacks} /> */}
      {/* <Experience /> */}
    </PageLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      techstacks
    }
  };
}
