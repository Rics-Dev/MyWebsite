"use client";

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import React from 'react'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
}

export default function Skills() {
    const { ref } = useSectionInView('Compétences', 0.5);


    return (
        <motion.section
            ref={ref}
            className='scroll-mt-32 mb-28 max-w-[55rem] text-center sm:mb-40'
            id='skills'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h2 className='text-3xl font-medium capitalize mb-28'>Compétences</h2>

            <ul className='flex flex-wrap justify-center gap-3 text-lg font-[500] text-blue-950'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        className='bg-white border-[0.1rem] border-gray-500 rounded-xl px-5 py-3 shadow-xl hover:bg-gray-100 mb-10 flex flex-col items-center justify-center gap-2'
                    ><skill.icon className='text-[2rem]' /> {skill.name}</motion.li>
                ))}
            </ul>

        </motion.section>
    )
}
