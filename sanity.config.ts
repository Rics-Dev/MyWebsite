import { defineConfig } from 'sanity';

import { structureTool } from 'sanity/structure';  // Import structureTool
import { schemaTypes } from './backend_sanity/schemas';

const config = defineConfig({
  projectId: process.env.NEXT_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_SANITY_DATASET ?? "",
  title: "RicPortfolio",
  apiVersion: process.env.NEXT_SANITY_API_VERSION ?? "2024-02-08",
  basePath: "/admin",
  useCdn: false,
  token: process.env.NEXT_SANITY_TOKEN ?? "",
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()], // Use structureTool plugin
});


export default config;
