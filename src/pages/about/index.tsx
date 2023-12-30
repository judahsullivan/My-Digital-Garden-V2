import AboutIndex from '@/components/about/about';
import { Fragment } from 'react';
import ZoomInText from '@/components/about/zoomInText';
import Skills from '@/components/about/skills';
import TechStack from '@/components/about/techStack';
import ZoomOut from '@/components/about/zoomSection/zoomOut';
import Experience from '@/components/about/expierience';
import { techstacks } from '@/utils/data';
import { TechStackProps } from '../../../types';

interface StackProps {
  techstacks: TechStackProps;
}

export default function About({ techstacks }: StackProps) {
  return (
    <Fragment>
      <AboutIndex />
      <ZoomInText />
      <Skills />
      <TechStack techstacks={techstacks} />
      <ZoomOut />
      <Experience />
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      techstacks
    }
  };
}
