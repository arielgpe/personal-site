import type { MetadataRoute } from 'next';

const VERCEL_URL = process.env.VERCEL_URL;
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Mediapartners-Google',
        disallow: [''],
      },
      {
        userAgent: '*',
        allow: ['/*.html'],
        disallow: ['/search*'],
      },
    ],
    sitemap: `${VERCEL_URL}/sitemap.xml`,
  };
}
