"use client";
import React, { useEffect, useState } from 'react';
import Project from '@/components/project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import { getProjects } from '@/client';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import tw from "tailwind-styled-components";
import AppTypeButton from './AppTypeButton';


interface ProjectItem {
  title: string;
  description: string;
  technology: Array<string>;
  display: string;
  type: string;
  image: SanityImageSource;
  githubUrl: string;
}

export default function Projects() {
  const { ref } = useSectionInView('Projets', 0);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [selectedAppType, setSelectedAppType] = useState('All');

  useEffect(() => {
    const filterProjects = (projects: ProjectItem[]) => {
      if (selectedAppType === 'All') {
        return projects;
      }
      return projects.filter((project) => project.type === selectedAppType);
    };

    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedProjects = await getProjects();
        setProjects(filterProjects(fetchedProjects));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [selectedAppType]);


  

  const handleAppTypeButtonClick = (appType: string) => {
    setSelectedAppType(appType);
  };

  return (
    <motion.section
      ref={ref}
      id='projects'
      className='mb-8 max-w-full text-center leading-8 sm:mb-10 mt-5 sm:mt-0 sm:scroll-mt-32'

      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className='text-3xl font-medium capitalize mb-8'>Projets</h2>

      <div className='flex flex-row items-center  justify-center space-x-48 mb-8'>
        <AppTypeButton onClick={() => handleAppTypeButtonClick('All')}>All</AppTypeButton>
        <AppTypeButton onClick={() => handleAppTypeButtonClick('web app')}>Web App</AppTypeButton>
        <AppTypeButton onClick={() => handleAppTypeButtonClick('mobile app')}>Mobile App</AppTypeButton>
      </div>

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

