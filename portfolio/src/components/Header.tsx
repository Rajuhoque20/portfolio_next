import Image from 'next/image'
import React from 'react'

const navLinks=[
    "About",
    "Experience",
    "Work",
    "Contact"
]

export default function Header() {
  return (
    <div className='w-full h-screen bakground-image-header' >
      <div className='header-container h-full w-full flex flex-col place-items-center'>
        <div className='flex items-center justify-between w-full p-8'>
            <div  style={{ color: "#64ffda", border: "2px solid #64ffda" }}
  className="text-3xl w-[40px] h-[40px] inline-flex items-center justify-center rounded-sm">
            <span
 
>
  R
</span>
</div>
            <div className='flex items-center justify-center gap-10'>
                {navLinks?.map((item,index)=>{
                    return(
                        <div key={item} className='flex items-center justify-center gap-2'>
                            <span className='text-violet-950' style={{color:"#64ffda"}}>{index+1}.</span>
                            <span>{item}</span>
                        </div>
                    )
                })}

            </div>
        </div>
        <div className='mt-55 flex flex-col items-center justify-center gap-6'>
            <h1 className='text-8xl font-bold'>Raju Hoque</h1>
            <span className='text-3xl'>Front End Software Engineer</span>
        </div>
        <div className='mt-auto mb-10 flex flex-col gap-3 justify-center items-center'>
            <span>LEARN MORE</span>
            <svg width={20} height={20}  viewBox='0 0 20 20'>
               <polyline
               stroke='#fff'
               strokeWidth={1}
               points='0,0 10,10 20,0'
               fill='none'
               />
            </svg>

        </div>
        
      </div>
    </div>
  )
}


