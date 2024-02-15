import { MetadataRoute } from 'next';
import { ContentType } from '@/interfaces/Strapi';
import { Post } from '@/interfaces/Posts';

const VERCEL_URL = process.env.VERCEL_URL;
const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export async function generateSitemaps() {
  const url = new URL(`${STRAPI_URL}/api/posts`);
  url.searchParams.append('fields', 'id');
  url.searchParams.append('sort', 'publishedAt:desc');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`
    }
  });
  const posts = await response.json();
  return posts.data.map((post: ContentType<Post>) => ({id: post.id}));
}

export default async function sitemap({
                                        id,
                                      }: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const start = id * 50000
  const end = start + 50000

  const url = new URL(`${STRAPI_URL}/api/posts`);
  url.searchParams.append('fields', 'id');
  url.searchParams.append('fields', 'slug');
  url.searchParams.append('sort', 'publishedAt:desc');
  url.searchParams.append('filters[id][$between][0]', id.toString());
  url.searchParams.append('filters[id][$between][1]', end.toString());

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`
    }
  });
  const posts = await response.json();

  return posts.data.map((post: ContentType<Post>) => ({
    url: `${VERCEL_URL}/posts/${post.attributes.slug}`,
    lastModified: post.attributes.updatedAt,
  }))
}
