"use client";



import React from 'react'
import Image from 'next/image'
import portrait from '@/public/portrait3.jpg'
import logo from '@/public/logot.png'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from'react-icons/bs'
import { HiDownload } from'react-icons/hi'

export default function Intro() {
    return (
        <section>
            <div className='flex items-center justify-center flex-col sm:flex-row gap-10'>
                <div className='flex flex-col items-center'>
                    <motion.h1 className='mb-10 mt-4 text-2x1 font-medium !leading-[1.5] sm:text-4x1 flex flex-col items-center justify-start'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}>
                        <span className='text-[1rem] font-medium text-gray-600'>Hello, I'm</span>
                        <span className='text-[2rem] font-[1000] mt-3 text-blue-900'>Fethallah Mohamed Racim</span>
                        <span className='text-[1.3rem] text-blue-950 font-[800] mt-3'>Ingénieur logiciel junior</span>
                    </motion.h1>
                    <motion.div className='flex items-center justify-center flex-col sm:flex-row gap-3 px-4'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{delay:0.1,}}
                    >
                        <Link href='#contact' className='group bg-blue-950 text-white font-[600] px-7 py-3 flex items-center gap-2 rounded-full border-[0.1rem] border-white shadow-xl outline-none focus:scale-110 active:scale-105 hover:scale-110 transition '>
                            <span>
                            <Image src={logo} alt="Image Alt Text" quality={95} width={30} className="" />
                            </span>
                            Contact <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' /> </Link>
                        <a href="/CV(FR).pdf" download className='group bg-white font-[600] px-7 py-3 flex items-center gap-2 rounded-full border-[0.1rem] border-black shadow-xl outline-none focus:scale-110 active:scale-100 hover:scale-110 hover:bg-blue-950 hover:text-white hover:border-white transition'>Télécharger CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition'/></a>
                    </motion.div>
                    <motion.div className='flex items-center justify-center flex-col sm:flex-row gap-3 px-4 mt-3'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{delay:0.1,}}
                    >
                        <a target="_blank" href="http://www.linkedin.com/in/racimfethallah" className='bg-blue-100 p-4  flex items-center rounded-full border-[0.2rem] border-white shadow-xl outline-none focus:scale-110 active:scale-105 hover:scale-110 hover:bg-blue-950 hover:text-white hover:border-white transition'><BsLinkedin /></a>
                        <a target="_blank" href="https://github.com/RacimFethallah" className='bg-blue-100 p-4  flex items-center rounded-full border-[0.2rem] border-white shadow-xl outline-none focus:scale-110 active:scale-105 hover:scale-110 hover:bg-blue-950 hover:text-white hover:border-white transition'><BsGithub /></a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.2, }}
                    className='mt-4 sm:ml-8'>
                    <div className='flex items-center justify-center'>
                        <Image src={portrait} alt='Racim portrait' width={192} height={192} quality={95} className='h-[20rem] w-[20rem] rounded-full border-[0.5rem] border-white object-cover shadow-xl ' />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
