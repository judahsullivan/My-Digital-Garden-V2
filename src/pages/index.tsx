import Home from '@/components/home/home';
import RecentProjects from '@/components/home/recentProjects';
import { Fragment } from 'react';
import { getRecentProjects } from '../../sanity/queries/projectQueries';
import { PostPayLoad, ProjectPayLoad } from '../../types';
import DescriptionSection from '@/components/home/description';
import FeaturedArticles from '@/components/home/featuredArticles';
import { getFeaturedArticles } from '../../sanity/queries/articleQueries';
import PageLayout from '@/components/layout/pageLayout';

interface HomeProps {
  projects: ProjectPayLoad[];
  articles: PostPayLoad[];
}

export default function Main({ projects, articles }: HomeProps) {
  return (
    <PageLayout>
      <Home />
      <DescriptionSection />
      <RecentProjects projects={projects} />
      <FeaturedArticles articles={articles} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const projects = await getRecentProjects();
  const articles = await getFeaturedArticles();

  return {
    props: {
      projects,
      articles
    },
    revalidate: 300
  };
}
