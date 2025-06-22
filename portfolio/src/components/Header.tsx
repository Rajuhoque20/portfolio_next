
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { HiArrowCircleUp } from "react-icons/hi";
const navLinks=[
    "About",
     "Skills",
    "Experience",
    "Projects",
    "Contact",
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
useEffect(() => {
  const target = headerRef.current;

  if (!target) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsInView(entry.isIntersecting);
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(target);

  return () => {
    observer.unobserve(target);
  };
}, []);


  const getScrollView=(index:number)=>{
  const sectionId=navLinks[index];
  const targetElement=document.getElementById(sectionId);
  if(targetElement)
  {
    targetElement.scrollIntoView({
      behavior:"smooth",
      block:"start",
    })
  }
}

  return (
    <div className='w-full h-1/3 sm:h-screen bakground-image-header' id="header" >
      <div className='header-container h-full w-full flex flex-col place-items-center' >
        <div className='flex items-center justify-between w-full p-8' ref={headerRef}>
              <div 
                  className="text-3xl w-[40px] h-[40px] inline-flex items-center justify-center rounded-sm letter-icon">
                    <span >R</span>
                </div>
              
            <div className='hidden sm:flex items-center justify-center gap-10'>
                {navLinks?.map((item,index)=>{
                    return(
                        <div key={item} className='flex items-center justify-center gap-2 cursor-pointer' onClick={()=>{
                          getScrollView(index);
                        }}>
                            <span style={{color:"#64ffda"}}>{index+1}.</span>
                            <span className='nav-item'>{item}</span>
                        </div>
                    )
                })}

            </div>
        </div>
        <div className='mt-10 sm:mt-55 flex flex-col items-center justify-center gap-6'>
            <h1 className=' text-4xl sm:text-8xl font-bold'>Raju Hoque</h1>
            <span className='text-xl sm:text-3xl' style={{color:"#06112e", fontWeight:"600"}}>FRONTEND SOFTWARE ENGINEER</span>
        </div>
        <div className='mt-10 sm:mt-auto mb-10 flex flex-col gap-3 justify-center items-center cursor-pointer' onClick={()=>{
          getScrollView(0);
        }}>
            <span className='nav-item'>LEARN MORE</span>
            <svg width={20} height={20}  viewBox='0 0 20 20'>
               <polyline
               stroke='#64ffda'
               strokeWidth={2}
               points='0,0 10,10 20,0'
               fill='none'
               />
            </svg>

        </div>
        
      </div>
      {!isInView&&<div style={{position:"fixed", right:"20px", bottom:"20px", zIndex:60000}} className='cursor-pointer' onClick={()=>
        {
          const targetElement=document.getElementById("header");
        if(targetElement)
        {
          targetElement.scrollIntoView({
            behavior:"smooth",
            block:"start",
          })
        }
        }
      }>
       <HiArrowCircleUp size={60} color='#fff'/>
    </div>}
    </div>
  )
}


