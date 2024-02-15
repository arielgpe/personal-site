import Rss from 'rss';
import { ContentType } from '@/interfaces/Strapi';
import { Post } from '@/interfaces/Posts';

const VERCEL_URL = process.env.VERCEL_URL || '';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || '';
const STRAPI_URL = process.env.STRAPI_URL || '';

export const GET = async () => {

  try {
    const feed = new Rss({
      title: 'Ariel Guzman',
      description: 'Developer, gamer.',
      feed_url: `${VERCEL_URL}/api/blog/feed.xml`,
      site_url: VERCEL_URL,
      language: 'en',
    });

    const response = await fetch(`${STRAPI_URL}/api/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_TOKEN}`
      }
    });
    const posts = await response.json();

    posts.data.forEach((post: ContentType<Post>) => {
      feed.item({
        title: post.attributes.title,
        description: post.attributes.description,
        url: `${VERCEL_URL}/posts/${post.attributes.slug}`,
        date: post.attributes.publishedAt,
      });
    });

    return new Response(feed.xml(), {
      status: 200,
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating RSS feed', {status: 500});
  }
};
