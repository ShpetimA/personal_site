import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date()
  }),
});

export const collections = {
  'blog': blogCollection,
};