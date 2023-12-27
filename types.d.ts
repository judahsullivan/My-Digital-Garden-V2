import { IconType } from 'react-icons';

interface SanityBody {
  _key?: string;
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _updatedAt?: string;
}

interface HomePageLoad extends SanityBody {
  title: string;
  heading: string;
  role: string[];
  description: string;
  image: string;
}

interface PageLoad extends SanityBody {
  title: string;
  heading: string;
  description: string;
  image?: string;
}

interface ExternalLinks extends SanityBody {
  image: string;
  title: string;
  link: string;
}
interface PageLinks extends SanityBody {
  _type: string;
  title: string;
}

interface SettingsPayload extends SanityBody {
  externalLinks: ExternalLinks[];
  pageLinks: PageLinks[];
  image: string;
}

interface PostPayLoad extends SanityBody {
  _type?: 'post';
  heading: string;
  author?: Author;
  body: Block[];
  category: Category;
  publishedAt: string;
  featured: boolean;
  mainImage?: string;
  slug: Slug;
  title: string;
  tags: Tags[];
  description: string;
}

interface ProjectPayLoad extends SanityBody {
  _type?: 'project';
  heading: string;
  author?: Author;
  tags: Tags[];
  body: Block[];
  projectCategory: Category;
  publishedAt: string;
  mainImage?: string;
  slug: Slug;
  title: string;
  description: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
  split: (separator: string | RegExp) => string[];
}

interface Author extends Base {
  bio: Block[];
  image: string;
  name: string;
  slug: Slug;
}

interface Slug {
  _type: 'slug';
  current: string;
}
interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}
interface Image {
  url(): any;
  _type: 'image';
  asset: Reference;
}
interface Reference {
  [x: string]: string | undefined;
  _ref: 'string';
  _type: 'reference';
}

interface Tags {
  _type: 'tags';
  title: string;
}

interface Category {
  title: string;
  description?: string;
}
