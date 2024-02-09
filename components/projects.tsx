"use client";
import React, { useEffect, useState } from 'react';
import Project from '@/components/project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import { client, getProjects } from '@/client';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


interface ProjectItem {
  title: string;
  description: string;
  technology: Array<string>;
  type: string;
  image: SanityImageSource;
  githubUrl: string;
}

export default function Projects() {
  const { ref } = useSectionInView('Projets', 0);
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await getProjects();
        setProjects(projects);
        console.log(projects);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchProject();
  }, []);

  return (
    <motion.section
      ref={ref}
      id='projects'
      className='mb-8 max-w-full text-center leading-8 sm:mb-10 mt-5 sm:mt-0 sm:scroll-mt-32'

      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className='text-3xl font-medium capitalize mb-16'>Projets</h2>

      <div className='flex flex-wrap justify-center gap-10'>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}

