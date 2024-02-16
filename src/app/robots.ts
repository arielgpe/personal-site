import type { MetadataRoute } from 'next';

const PROD_URL = process.env.PROD_URL;
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
    sitemap: `${PROD_URL}/sitemap.xml`,
  };
}
