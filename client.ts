import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


// export async function client() {
//     const client = createClient({
//         projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
//         dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
//         apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-02-08",
//     });

//     // Fetch the about section content and experiences from Sanity
//     const about = await client.fetch('*[_type == "about"][0].paragraph');
//     const experiences = await client.fetch('*[_type == "experiences"]');
//     const projects = await client.fetch('*[_type == "projects"]');

//     // Return both about section content and experiences as an array
//     return [about, experiences, projects];
// }



export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-02-08",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN ?? "",
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