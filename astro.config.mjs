// @ts-check
import { defineConfig } from "astro/config";
import { createCssVariablesTheme } from "shiki";

const cssVariablesTheme = createCssVariablesTheme({
	name: "css-variables",
	variablePrefix: "--shiki-",
	fontStyle: true,
});

export default defineConfig({
	site: "https://emircelovic.com",
	trailingSlash: "always",
	build: {
		inlineStylesheets: "auto",
	},
	markdown: {
		shikiConfig: {
			theme: cssVariablesTheme,
			wrap: false,
		},
	},
});
