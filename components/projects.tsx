"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <motion.section
      className='mb-28 max-w-[100%] text-center leading-8 sm:mb-40 mt-10 sm:mt-5'
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

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  return (
    <section className=' bg-gray-100 hover:bg-gray-200 hover:scale-[1.05] transition max-w-[42rem] border border-black/5 rounded-3xl overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0'>
      <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-row sm:flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-blue-950'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
              key={index}
            >
              {' '}
              {tag}
            </li>
          ))}
        </ul>

        <Image
          src={imageUrl}
          alt='Projects i worked on'
          quality={95}
          className='absolute top-4 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl'
        />
      </div>
    </section>
  );
}