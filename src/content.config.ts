import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const idFromPath = ({ entry }: { entry: string }) =>
  entry.replace(/\.md$/, '').replace(/\//g, '__');

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: idFromPath,
  }),
  schema: z.object({
    slug: z.string(),
    lang: z.enum(['en', 'de']),
    number: z.string(),
    title: z.string(),
    role: z.string().optional(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    status: z.enum(['live', 'archived', 'upcoming']).default('live'),
    order: z.number().default(0),
  }),
});

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/posts',
    generateId: idFromPath,
  }),
  schema: z.object({
    slug: z.string(),
    lang: z.enum(['en', 'de']),
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
