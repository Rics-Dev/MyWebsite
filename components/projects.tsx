"use client";
import React from 'react';
import Project from '@/components/project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'

export default function Projects() {
  const { ref } = useSectionInView('Projets', 0);

  return (
    <motion.section
      ref={ref}
      id='projects'
      className='mb-28 max-w-[100%] text-center leading-8 sm:mb-34 mt-10 sm:mt-5 scroll-mt-32'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className='text-3xl font-medium capitalize mb-16'>Projets</h2>

      <div className='flex flex-wrap justify-center gap-10'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}

