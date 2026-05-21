// @ts-check
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
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
	integrations: [
		sanity({
			projectId: "ldnf243e",
			dataset: "production",
			useCdn: false,
			studioBasePath: "/admin",
			logClientRequests: "dev",
		}),
		react(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
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
