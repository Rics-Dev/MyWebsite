import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";




export const client = createClient({
    projectId: process.env.NEXT_SANITY_PROJECT_ID ?? "",
    dataset: process.env.NEXT_SANITY_DATASET ?? "",
    apiVersion: process.env.NEXT_SANITY_API_VERSION ?? "2024-02-08",
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