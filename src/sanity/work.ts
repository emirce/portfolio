import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import { defineQuery } from "groq";

export type WorkStatus = "live" | "archived" | "upcoming";

export interface WorkEntry {
	_id: string;
	number: string;
	title: string;
	slug: string;
	role?: string;
	year: number;
	tags: string[];
	summary: string;
	link?: string;
	repo?: string;
	status: WorkStatus;
	order: number;
	body?: PortableTextBlock[];
}

const workFields = /* groq */ `
	_id,
	number,
	title,
	"slug": slug.current,
	role,
	year,
	"tags": coalesce(tags, []),
	summary,
	link,
	repo,
	status,
	"order": coalesce(order, 0),
	body
`;

const workIndexQuery = defineQuery(/* groq */ `
	*[
		_type == "work"
		&& defined(slug.current)
	] | order(order asc, year desc, _id asc) {
		${workFields}
	}
`);

const workSlugsQuery = defineQuery(/* groq */ `
	*[
		_type == "work"
		&& status != "upcoming"
		&& defined(slug.current)
	].slug.current
`);

const workBySlugQuery = defineQuery(/* groq */ `
	*[
		_type == "work"
		&& status != "upcoming"
		&& slug.current == $slug
	][0] {
		${workFields}
	}
`);

export async function getWorkEntries() {
	return sanityClient.fetch<WorkEntry[]>(workIndexQuery);
}

export async function getWorkSlugs() {
	return sanityClient.fetch<string[]>(workSlugsQuery);
}

export async function getWorkEntry(slug: string) {
	return sanityClient.fetch<WorkEntry | null>(workBySlugQuery, { slug });
}
