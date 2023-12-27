import { groq } from 'next-sanity';
import { client } from '../lib/client';
import { ProjectPayLoad, Slug } from '../../types';

const projectFields = groq`
_type,
  title,
heading,
    description,
  "mainImage": mainImage.asset -> url,
  publishedAt,
    body,
      "projectTags": projectTags[]->{
        title
      },
  'projectCategory': projectCategory->{
        title,
          description
        },
      "slug": slug.current,
      "author": author->{
          name,
      } 
`;

const recentProjectsQuery = groq`
*[_type == "project"] | order(publishedAt desc) [0..4]{
${projectFields}
}
`;

const projectCaseQueries = groq`
*[_type == "project"] | order(publishedAt desc) {
  ${projectFields}
}`;

const projectsAndMoreProjectQueries = groq`
{
  "project": *[_type == "project" && slug.current == $slug] | order(publishedAt desc) [0] {
    body,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(publishedAt desc) [0...2] {
    body,
    ${projectFields}
  }
}`;

const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;

const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`;

export async function getRecentProjects() {
  const data = await client.fetch(recentProjectsQuery);
  return data;
}

export async function getAllProjects() {
  const data = await client.fetch(projectCaseQueries);
  return data;
}

export async function getAllArticlesSlug(): Promise<Slug[]> {
  const slugs = (await client.fetch<string[]>(projectSlugsQuery)) || [];
  return slugs.map((slug) => ({ _type: 'slug', current: slug }));
}

export async function getArticleBySlug(slug: Slug) {
  return (await client.fetch(projectBySlugQuery, { slug })) || {}; // Handle response types appropriately
}

export async function getArticleAndMoreArticles(slug: Slug): Promise<{
  article: ProjectPayLoad;
  morePost: ProjectPayLoad[];
}> {
  const data = await client.fetch(projectsAndMoreProjectQueries, { slug });
  return data;
}
