import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    description: z.string(),
    navLabel: z.string().optional(),
    order: z.number()
  })
});

const chapterSchema = z.object({
  title: z.string(),
  summary: z.string(),
  concepts: z.array(z.string()),
  link: z.string()
});

const volumes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    subtitle: z.string(),
    description: z.string(),
    order: z.number(),
    chapters: z.array(chapterSchema)
  })
});

const book = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    volume: z.string(),
    volumeSlug: z.string().optional(),
    chapterNumber: z.number(),
    summary: z.string(),
    keywords: z.array(z.string()),
    order: z.number().optional(),
    language: z.enum(['zh-Hans', 'en']).default('zh-Hans')
  })
});

export const collections = { pages, volumes, book };
