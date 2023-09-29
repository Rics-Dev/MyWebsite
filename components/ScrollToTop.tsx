// ScrollToTopButton.js
"use client";

import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect, useState } from 'react';
import { BiUpArrow } from 'react-icons/bi'

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    // Add scroll event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setActiveSection("Acceuil");
    setTimeOfLastClick(Date.now());
  };

  return (
    <button
      className={`${showButton ? 'block' : 'hidden'
        } fixed bottom-5 left-5 p-3 bg-blue-950 text-white rounded-full shadow-md duration-300 outline-none focus:scale-110 active:scale-100 hover:scale-110 hover:bg-[#EBF8FF] hover:text-blue-950 hover:border-white transition border-[0.2rem]`}
      onClick={scrollToTop}
    >
      <BiUpArrow className='text-[1.5rem]' />
    </button>
  );
}

export default ScrollToTopButton;
