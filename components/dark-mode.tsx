import React from 'react'
import { BiUpArrow } from 'react-icons/bi'
import { BsMoonStars } from 'react-icons/bs'

export default function DarkMode() {
  return (
    <button
      className={` fixed top-5 right-5 p-3 bg-[#EBF8FF] text-blue-950 rounded-full shadow-md duration-300 outline-none focus:scale-110 active:scale-100 hover:scale-110 hover:bg-blue-950 hover:text-white
      border-blue-950 hover:border-white transition border-[0.1rem]`}
    //   onClick={}
    >
      <BsMoonStars className='text-[1.5rem]' />
    </button>
  )
}
