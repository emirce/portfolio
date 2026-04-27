import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/projects",
	}),
	schema: z.object({
		slug: z.string(),
		number: z.string(),
		title: z.string(),
		role: z.string().optional(),
		year: z.number(),
		tags: z.array(z.string()).default([]),
		summary: z.string(),
		link: z.string().url().optional(),
		repo: z.string().url().optional(),
		status: z.enum(["live", "archived", "upcoming"]).default("live"),
		order: z.number().default(0),
	}),
});

const posts = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/posts",
	}),
	schema: z.object({
		slug: z.string(),
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		draft: z.boolean().default(false),
	}),
});

const art = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/art",
	}),
	schema: z.object({
		slug: z.string(),
		number: z.string(),
		title: z.string(),
		year: z.number(),
		medium: z.string().optional(),
		key: z.string(),
		alt: z.string(),
		width: z.number().int().positive(),
		height: z.number().int().positive(),
		order: z.number().default(0),
	}),
});

export const collections = { projects, posts, art };
