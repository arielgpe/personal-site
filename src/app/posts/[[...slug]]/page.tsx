import { FrozenRouter } from '@/components/FrozenRouter';
import { PostsContainer } from '@/components/Posts/PostsContainer';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export async function generateMetadata(
  {params}: Props,
): Promise<Metadata> {

  if (isNaN(Number(params?.slug ? params?.slug[0] : 0))) {
    const url = new URL(`${STRAPI_URL}/api/posts`);
    url.searchParams.append('fields[0]', 'title');
    url.searchParams.append('filters[slug][$eq]', params.slug[0]);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_TOKEN}`
      }
    });

    const posts = await response.json() as any;
    if (posts.data[0]) {
      return {
        title: posts.data[0]?.attributes.title ?? '404 - Not Found',
        description: posts.data[0]?.attributes.description
      };
    } else {
      return {
        title: {
          absolute: '404 - Not Found',
        },
        description: 'Page not found'
      };
    }
  }
  return {
    title: 'Posts',
  };
}

const Posts = ({params}: Props) => {
  return (
    <FrozenRouter>
      <PostsContainer params={params}/>
    </FrozenRouter>
  );
};


export default Posts;
