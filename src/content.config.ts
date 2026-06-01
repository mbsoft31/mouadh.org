import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false)
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: baseSchema.extend({
    evidence: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: baseSchema.extend({
    status: z.string(),
    repo: z.url().optional(),
    links: z.array(z.object({
      label: z.string(),
      href: z.url()
    })).default([])
  })
});

const evidence = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/evidence' }),
  schema: baseSchema.extend({
    sources: z.array(z.string()).default([])
  })
});

export const collections = { writing, projects, evidence };
