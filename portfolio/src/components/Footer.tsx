import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div  className='w-full p-10 flex flex-col gap-8  h-full w-full items-center bg-linear-to-r from-cyan-500 to-blue-500'>
      <div className="flex gap-5">
         <a
        href="https://www.linkedin.com/in/rajuhoque97"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className='transition-transform hover:scale-120'
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/rajuhoque20"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
         className='transition-transform hover:scale-120'
      >
        <FaGithub size={30} />
      </a>
    </div>
        <span>@ Raju Hoque 2025</span>
    </div>
  )
}
