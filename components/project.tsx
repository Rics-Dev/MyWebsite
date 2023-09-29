"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { BsGithub, BsPlayFill, BsPlay } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { HiPlay } from 'react-icons/hi';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (

        <motion.div
            ref={ref} style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <section className='bg-gray-100 hover:bg-gray-200  max-w-[40rem] border-[0.1rem] border-black rounded-3xl overflow-hidden relative mb-2 sm:mb-6 last:mb-0 sm:h-[28rem] hover:scale-[1.05] transition'>
                <div className='flex'>
                    <div className='w-[50%] flex flex-col justify-between'>
                        <div className='pt-4 pb-6 px-5 sm:pl-5 sm:pr-2 sm:pt-8 h-full'>
                            <h3 className='text-2xl font-semibold'>{title}</h3>
                            <p className='mt-2 leading-relaxed text-blue-950'>{description}</p>
                        </div>
                        <ul className='flex flex-wrap mt-4 mb-4 ml-4 gap-2'>
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
                    <div className='flex flex-col items-center bg-white rounded-3xl shadow-2xl h-[25rem] w-[17rem] my-5 mx-6 border-gray-950 border-[0.1rem] '>


                        <Image
                            src={imageUrl}
                            alt='Projects I worked on'
                            quality={95}
                            className='flex-grow rounded-lg border-black border-[0.1rem] w-[12rem] h-5 mt-3 mb-3'
                        />
                        <div className='flex flex-row gap-1.5 h-[4rem] mx-2'>
                            <a href="" className='bg-gray-100 font-[600] px-4 flex items-center gap-1.5 rounded-full border-[0.1rem] border-black shadow-xl outline-none focus:scale-110 active:scale-100 hover:scale-105 hover:bg-blue-950 hover:text-white hover:border-white transition mb-3'><BsGithub /> Github</a>
                            <a href="" className='bg-gray-100 font-[600] px-3 flex items-center gap-1.5 rounded-full border-[0.1rem] border-black shadow-xl outline-none focus:scale-110 active:scale-100 hover:scale-105 hover:bg-blue-950 hover:text-white hover:border-white transition mb-3'><HiPlay /> Live demo</a>
                        </div>

                    </div>

                </div>



            </section>



        </motion.div>



    );
}