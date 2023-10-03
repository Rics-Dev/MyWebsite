"use client"

import React, { useEffect, useState } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { motion } from 'framer-motion'


type Theme = "light" | "dark";

export default function DarkMode() {
  const [theme, setTheme] = React.useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <motion.button
      className={` fixed right-5 my-custom-position-class p-3 rounded-full shadow-lg duration-300 outline-none  hover:scale-110 transition border-[0.2rem] border-white ${theme === "light" ? 'bg-blue-950 text-white' : 'bg-[#EBF8FF] text-blue-950'}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={toggleTheme}
    >
      {
        theme === "light" ? (
          <BsMoonStars className='text-[1.5rem]' />
        ) : (
          <BsSun className='text-[1.5rem]' />
        )
      }

    </motion.button>
  )
}
