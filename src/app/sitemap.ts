import { MetadataRoute } from 'next';

const PROD_URL = process.env.PROD_URL || '';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PROD_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${PROD_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${PROD_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${PROD_URL}/tags`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ];
}
