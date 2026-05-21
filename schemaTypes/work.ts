import { RocketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const work = defineType({
	name: "work",
	title: "Work",
	type: "document",
	icon: RocketIcon,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required().max(120),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (rule) =>
				rule.required().custom((slug) => {
					if (!slug?.current) {
						return "Required";
					}

					return /^[a-z0-9-]+$/.test(slug.current)
						? true
						: "Slug must be lowercase with hyphens only";
				}),
		}),
		defineField({
			name: "number",
			title: "Display number",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "role",
			title: "Role",
			type: "string",
		}),
		defineField({
			name: "year",
			title: "Year",
			type: "number",
			validation: (rule) => rule.required().integer().min(2000).max(2100),
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [defineArrayMember({ type: "string" })],
			initialValue: [],
			validation: (rule) => rule.unique(),
		}),
		defineField({
			name: "summary",
			title: "Summary",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required().max(180),
		}),
		defineField({
			name: "link",
			title: "Primary link",
			type: "url",
			validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
		}),
		defineField({
			name: "repo",
			title: "Source link",
			type: "url",
			validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
		}),
		defineField({
			name: "status",
			title: "Project status",
			type: "string",
			initialValue: "live",
			options: {
				list: [
					{ title: "Live", value: "live" },
					{ title: "Archived", value: "archived" },
					{ title: "Upcoming", value: "upcoming" },
				],
				layout: "radio",
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "order",
			title: "Sort order",
			type: "number",
			initialValue: 0,
			validation: (rule) => rule.required().integer(),
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [
				defineArrayMember({
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "Heading 2", value: "h2" },
						{ title: "Heading 3", value: "h3" },
						{ title: "Quote", value: "blockquote" },
					],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{ title: "Code", value: "code" },
						],
						annotations: [
							{
								name: "link",
								title: "Link",
								type: "object",
								fields: [
									defineField({
										name: "href",
										title: "URL",
										type: "url",
										validation: (rule) =>
											rule.uri({
												allowRelative: true,
												scheme: ["http", "https", "mailto"],
											}),
									}),
								],
							},
						],
					},
				}),
			],
			hidden: ({ document }) => document?.status === "upcoming",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "status",
		},
	},
});
