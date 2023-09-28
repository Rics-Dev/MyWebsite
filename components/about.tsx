"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-12 mt-10 sm:mt-0'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <h2 className='text-3xl font-medium capitalize mb-8'>À propos</h2>
            <p className='mb-3 border-[0.1rem] border-blue-950  rounded-full px-20 py-10'>
                Actuellement étudiant en première année de master en informatique à l'Université Abderrahmane Mira de Béjaïa, avec une spécialité en Systèmes d'Information Avancés, mon parcours académique est motivé par une passion pour la technologie et le développement de logiciels sur diverses plateformes, notamment mobiles, desktop et web. Je cherche à perfectionner mes compétences afin de devenir un professionnel accompli dans le domaine de l'informatique.
            </p>
        </motion.section>
    )
}
