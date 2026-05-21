import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
	name: "portfolio",
	title: "Portfolio",
	projectId: "ldnf243e",
	dataset: "production",
	plugins: [structureTool()],
	schema: {
		types: schemaTypes,
	},
});
