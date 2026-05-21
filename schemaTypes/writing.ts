import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const writing = defineType({
	name: "writing",
	title: "Writing",
	type: "document",
	icon: DocumentTextIcon,
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
			name: "publishedAt",
			title: "Published date",
			type: "date",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "summary",
			title: "Summary",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required().max(180),
		}),
		defineField({
			name: "status",
			title: "Status",
			type: "string",
			initialValue: "draft",
			options: {
				list: [
					{ title: "Draft", value: "draft" },
					{ title: "Published", value: "published" },
				],
				layout: "radio",
			},
			validation: (rule) => rule.required(),
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
			validation: (rule) => rule.required().min(1),
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "publishedAt",
		},
	},
});
