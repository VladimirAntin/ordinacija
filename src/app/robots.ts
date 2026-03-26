import type {MetadataRoute} from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://ordinacija.hok.rs/sitemap.xml',
    host: 'https://ordinacija.hok.rs',
  };
}
