import BlogIndex from '@/components/blog';
import PageLayout from '@/components/layout/pageLayout';
import { Box } from '@chakra-ui/react';
import { PostPayLoad } from '../../../types';
import { getAllArticles } from '../../../sanity/queries/articleQueries';



export interface ArticleProps{
  articles: PostPayLoad[]
   
}

export default function Blog({articles}: ArticleProps) {
  return (
  <PageLayout>
      <BlogIndex articles={articles}/>
    </PageLayout>
 );
}




export async function getStaticProps(){

const articles = await getAllArticles();
  return{
    props:{
      articles
    }
  }
}
