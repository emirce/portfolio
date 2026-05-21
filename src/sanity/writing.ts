import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import { defineQuery } from "groq";

export interface WritingEntry {
	_id: string;
	title: string;
	slug: string;
	publishedAt: string;
	summary: string;
	body: PortableTextBlock[];
}

const writingFields = /* groq */ `
	_id,
	title,
	"slug": slug.current,
	publishedAt,
	summary,
	body
`;

const writingIndexQuery = defineQuery(/* groq */ `
	*[
		_type == "writing"
		&& status == "published"
		&& defined(slug.current)
		&& defined(publishedAt)
	] | order(publishedAt desc, _id asc) {
		${writingFields}
	}
`);

const writingSlugsQuery = defineQuery(/* groq */ `
	*[
		_type == "writing"
		&& status == "published"
		&& defined(slug.current)
	].slug.current
`);

const writingBySlugQuery = defineQuery(/* groq */ `
	*[
		_type == "writing"
		&& status == "published"
		&& slug.current == $slug
	][0] {
		${writingFields}
	}
`);

export async function getWritingEntries() {
	return sanityClient.fetch<WritingEntry[]>(writingIndexQuery);
}

export async function getWritingSlugs() {
	return sanityClient.fetch<string[]>(writingSlugsQuery);
}

export async function getWritingEntry(slug: string) {
	return sanityClient.fetch<WritingEntry | null>(writingBySlugQuery, { slug });
}

export function getWritingDate(entry: Pick<WritingEntry, "publishedAt">) {
	return new Date(`${entry.publishedAt}T00:00:00`);
}
