import PageLayout from '@/components/layout/pageLayout';
import ProjectIndex from '@/components/projects';
import { Box } from '@chakra-ui/react';
import { ProjectPayLoad } from '../../../types';
import { getAllProjects } from '../../../sanity/queries/projectQueries';

export interface ProjectProps {
  projects: ProjectPayLoad[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <PageLayout>
      <ProjectIndex projects={projects} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects
    }
  };
}
