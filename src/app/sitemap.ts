import type {MetadataRoute} from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://ordinacija.hok.rs';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
