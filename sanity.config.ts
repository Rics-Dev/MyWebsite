import { defineConfig } from 'sanity';

import imageUrlBuilder from "@sanity/image-url";

import { structureTool } from 'sanity/structure';  // Import structureTool
import { schemaTypes } from './backend_sanity/schemas';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  title: "RicPortfolio",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-02-08",
  basePath: "/admin",
  useCdn: false,
 token: process.env.NEXT_PUBLIC_SANITY_TOKEN ?? "",
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()], // Use structureTool plugin
});

const builder = imageUrlBuilder(config);

export const urlFor = (source: any) => builder.image(source);

export default config;
