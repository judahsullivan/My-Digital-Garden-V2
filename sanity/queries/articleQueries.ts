import { groq } from 'next-sanity';
import { client } from '../lib/client';
import { PostPayLoad, Slug } from '../../types';

const postFields = groq`
_type,
  title,
heading,
    description,
featured,
  "mainImage": mainImage.asset -> url,
  publishedAt,
    body,
      "tags": tags[]->{
        title
      },
  'category': categories->{
        title,
          description
        },
      "author": author->{
          name,
      },

      "slug": slug.current,


`;

const featuredArticlesQuery = groq`
*[_type == "post"] | order(publishedAt desc) | order(featured)[0..4]{
${postFields}
}
`;

const articleQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`;

const articleAndMoreArticlesQueries = groq`
{
  "article": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    body,
    ${postFields}
  },
  "moreArticles": *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...2] {
    body,
    ${postFields}
  }
}`;

const articleSlugQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

const articleBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export async function getFeaturedArticles(): Promise<{
  articles: PostPayLoad[];
}> {
  const data = await client.fetch(featuredArticlesQuery);
  return data;
}

export async function getAllArticles(): Promise<{
  articles: PostPayLoad[];
}> {
  const data = await client.fetch(articleQuery);
  return data;
}

export async function getAllArticlesSlug(): Promise<Slug[]> {
  const slugs = (await client.fetch<string[]>(articleSlugQuery)) || [];
  return slugs.map((slug) => ({ _type: 'slug', current: slug }));
}

export async function getArticleBySlug(slug: Slug) {
  return (await client.fetch(articleBySlugQuery, { slug })) || {}; // Handle response types appropriately
}

export async function getArticleAndMoreArticles(slug: Slug): Promise<{
  article: PostPayLoad;
  morePost: PostPayLoad[];
}> {
  const data = await client.fetch(articleAndMoreArticlesQueries, { slug });
  return data;
}
