"use client";
import React from 'react';
import Project from '@/components/project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projets');

  return (
    <section
      ref={ref}
      id='projects'
      className='mb-28 max-w-[100%] text-center leading-8 sm:mb-40 mt-10 sm:mt-5 scroll-mt-32'
    >
      <h2 className='text-3xl font-medium capitalize mb-16'>Projets</h2>

      <div className='flex flex-wrap justify-center gap-10'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

