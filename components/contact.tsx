'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
    const { ref } = useSectionInView('Contact', 0);



    return (
        <motion.section
            ref={ref}
            id='contact'
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            className='flex flex-col justify-center items-center scroll-mt-32 mb-28 sm:mb-40 text-center w-[min(100%,38rem)]'
        >

            <h2 className='text-3xl font-medium capitalize '>Contact</h2>


            <a href="mailto:fethallahracim@outlook.com"
                className='flex text-[1rem] gap-2 text-center justify-center items-center bg-white border-[0.1rem] border-blue-950 rounded-xl px-5 py-4 mb-14 mt-24 w-[23rem] font-[600] shadow-xl hover:bg-blue-950 hover:text-white hover:border-white outline-none focus:scale-100 active:scale-100 hover:scale-105 transition dark:text-blue-950 dark:bg-white dark:hover:text-white dark:hover:bg-blue-950'>
                <HiMail className='text-[1.5rem]' /> fethallahracim@outlook.com</a>


            <form className='flex flex-col w-[min(100%,38rem)]'
                action={async (formData) => {
                    await sendEmail(formData);
                }}>
                <input type="email" name='senderEmail' required placeholder='Votre Email' className='px-4 h-12 rounded-lg border-[0.1rem] border-blue-950 focus:shadow-xl focus:border-[0.15rem] outline-none dark:bg-white dark:text-blue-950' />
                <textarea required maxLength={5000} name='message' placeholder='Votre Message' className='h-52 my-3 rounded-lg border-blue-950 border-[0.1rem] p-4 focus:shadow-xl focus:border-[0.15rem] outline-none dark:bg-white dark:text-blue-950' />
                <div className='flex justify-center items-center mt-2'>
                    <button
                        type='submit'
                        className='group flex justify-center items-center gap-4 h-[3rem] w-[10rem] bg-blue-950 text-white
                    font-[500] rounded-full shadow-xl outline-none transition-all border-white border-[0.1rem]  hover:scale-105 focus:scale-110 active:scale-105 hover:text-blue-950 hover:bg-white hover:border-blue-950'
                    >
                        Envoyer <PiPaperPlaneRightFill className='transition-all group-hover:translate-x-5' />

                    </button>
                </div>


            </form>





        </motion.section>
    )
}
