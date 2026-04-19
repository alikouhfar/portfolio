import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      priority: 1,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      url: 'https://alikouhfar.runflare.run',
      alternates: {
        languages: {
          en: 'https://alikouhfar.runflare.run/en',
          de: 'https://alikouhfar.runflare.run/de',
          fa: 'https://alikouhfar.runflare.run/fa',
        },
      },
    },
  ]
}
