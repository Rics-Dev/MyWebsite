"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { BsGithub, BsPlayFill, BsPlay } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { HiPlay } from 'react-icons/hi';
import classNames from 'classnames';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    type,
    githubUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    const containerClassName = classNames(
        'max-w-[42rem]',
        'border-[0.1rem] border-black',
        'rounded-3xl',
        'overflow-hidden',
        'relative',
        'mb-2',
        'sm:mb-6',
        'last:mb-0',
        'sm:h-[36.5rem]',
        'hover:scale-[1.05]',
        'hover:bg-gray-200',
        'dark:bg-white',
        'dark:hover:bg-slate-200',
        'transition'
    );

    return (

        <motion.div
            ref={ref} style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <section className={containerClassName}>
                <div className={`flex ${type === 'landscape' ? 'flex-col' : ''}`}>
                    <div className={`w-[50%] flex flex-col justify-between ${type === 'landscape' ? 'w-full' : ''}`}>
                        <div className='pt-4 pb-0 px-5 sm:pl-5 sm:pr-2 sm:pt-4 h-full'>
                            <h3 className='text-2xl font-semibold dark:text-blue-950'>{title}</h3>
                            <p className={`mt-1 leading-relaxed text-blue-950
                            ${type === 'portrait' ? 'mt-8' : ''}`}>{description}</p>
                        </div>
                        <ul className={`flex flex-wrap mt-3 mb-1 ml-4 gap-2 justify-center
                        ${type === 'portrait' ? 'mb-5' : ''}`}>
                            {tags.map((tag, index) => (
                                <li
                                    className='bg-blue-950 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow-2xl'
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`flex flex-col items-center bg-white dark:bg-blue-950 rounded-3xl shadow-2xl h-[25rem] w-[17rem] mt-3 mb-5 mx-5 border-gray-950 border-[0.1rem]
                     ${type === 'landscape' ? 'w-auto' : 'h-[35rem]'}`}>


                        <Image
                            src={imageUrl}
                            alt='Projects I worked on'
                            quality={95}
                            className={`flex-grow rounded-xl border-black border-[0.1rem]  mt-3 mb-3 mx-3 shadow-xl
                            ${type === 'portrait' ? 'w-[15rem] h-[10rem]' : ''}
                            ${type === 'landscape' ? 'w-[37rem]' : ''}`}
                        />
                        <div className='flex flex-row gap-1.5 h-[3.5rem] mx-2'>
                            <a href={githubUrl} target='_blank' className='bg-gray-100 font-[600] px-4 flex items-center gap-1.5 rounded-full border-[0.1rem] border-black shadow-xl outline-none focus:scale-100 active:scale-100 hover:scale-105 hover:bg-blue-950 hover:text-white hover:border-white transition mb-3 dark:text-blue-950 dark:hover:text-white'><BsGithub /> Github</a>
                            <a href="#" className='bg-gray-100 font-[600] px-3 flex items-center gap-1.5 rounded-full border-[0.1rem] border-black shadow-xl outline-none focus:scale-100 active:scale-100 hover:scale-105 hover:bg-blue-950 hover:text-white hover:border-white transition mb-3 dark:text-blue-950 dark:hover:text-white'><HiPlay /> Demo</a>
                        </div>

                    </div>

                </div>



            </section>



        </motion.div>



    );
}