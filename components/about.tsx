// about.tsx
"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { client } from '@/client';


export default function About() {
    const { ref } = useSectionInView('À propos', 0.5);
    const [aboutParagraph, setAboutParagraph] = useState<string>('');

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const [about, experiences] = await client();
                setAboutParagraph(about);
            } catch (error) {
                console.error('Error fetching about section content:', error);
            }
        };

        fetchAbout();
    }, []);
    
    

    return (
        <motion.section
            ref={ref}
            id='about'
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-12 mt-10 sm:mt-0 scroll-mt-32'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <h2 className='text-3xl font-medium capitalize mb-8'>À propos</h2>
            <p className='mb-3 border-[0.1rem] border-blue-950  rounded-full px-20 py-10'>
                {aboutParagraph}
            </p>
        </motion.section>
    );
}

