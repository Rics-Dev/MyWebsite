import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityApiVersion, sanityDataset, sanityProjectId, sanityToken } from "./lib/environement";


export const client = createClient({
    projectId: sanityProjectId || "",
    dataset: sanityDataset || "",
    apiVersion: sanityApiVersion || "2024-02-08",
    token: sanityToken || "",
    useCdn: true,
});


export async function getAbout() {
    const about = await client.fetch('*[_type == "about"][0].paragraph');
    return about
}

export async function getExperiences() {
    const experiences = await client.fetch('*[_type == "experiences"]');
    return experiences
}

export async function getProjects() {
    const projects = await client.fetch('*[_type == "projects"]');
    return projects
}

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source)
} 