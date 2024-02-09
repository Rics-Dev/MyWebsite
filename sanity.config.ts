import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';  // Import structureTool
import { schemaTypes } from './backend_sanity/schemas';
import { sanityApiVersion, sanityDataset, sanityProjectId, sanityToken } from './lib/environement';

const config = defineConfig({
  title: "RicPortfolio",
  projectId: sanityProjectId || "",
  dataset: sanityDataset || "",
  apiVersion: sanityApiVersion || "2024-02-08",
  token: sanityToken || "",
  basePath: "/admin",
  useCdn: false,
  
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()], // Use structureTool plugin
});


export default config;
