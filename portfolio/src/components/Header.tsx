
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { HiArrowCircleUp } from "react-icons/hi";
import "./Header.css";
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
        <div className='flex items-center justify-between w-full p-8 navbar' ref={headerRef}>
              <div 
                  className="text-3xl w-[40px] h-[40px] inline-flex items-center justify-center rounded-sm letter-icon">
                    <span style={{'--nav-item':1} as React.CSSProperties }>R</span>
              </div>
              
              <div className='flex  items-center gap-10'>
                <div className='hidden sm:flex items-center justify-center gap-10'>
                    {navLinks?.map((item,index)=>{
                        return(
                            <div key={item} className='flex items-center justify-center gap-2 cursor-pointer' onClick={()=>{
                              getScrollView(index);
                            }}>
                                <span style={{color:"#64ffda",'--nav-item':index+2} as React.CSSProperties }>{index+1}.</span>
                                <span className='nav-item' style={{'--nav-item':index+2} as React.CSSProperties }>{item}</span>
                            </div>
                        )
                    })}

                </div>
                <button style={{'--nav-item':7} as React.CSSProperties } className='resume-button outline-none rounded-md px-3 py-2 cursor-pointer'
                onClick={()=>{
                  window.open('/CV_Raju_Hoque_2025.pdf','_blank')
                }}
                >Resume</button>
            </div>
        </div>
        <div className='w-9/10 sm:w-2/5 mt-10 sm:mt-auto flex flex-col  justify-center gap-6 name-wrapper'>
          <h3 className='text-xl' style={{'--i':1} as React.CSSProperties}>Hello, I am</h3>
            <h1 className=' text-4xl sm:text-5xl font-bold text-shadow-lg/20' style={{'--i':2} as React.CSSProperties}>Raju Hoque</h1>
            <h2 className='text-xl' style={{'--i':3} as React.CSSProperties}>And I am a  <span className='text-xl sm:text-2xl font-medium intro'> Frontend Developer crafting smooth, responsive, and user-focused web experiences with clean code and a calm mind.</span>
            </h2>
        </div>
        <div className='mt-10 sm:mt-auto mb-10 flex flex-col gap-3 justify-center items-center cursor-pointer learn-more' style={{'--i':4} as React.CSSProperties}  onClick={()=>{
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


