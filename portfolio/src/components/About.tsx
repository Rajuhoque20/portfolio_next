'use client'
import Image from "next/image"
import { Title, TitleBrake } from "./mainPage"
import { useShow } from "./hooks/useShow"

export const About=()=>{
    useShow("el-hidden", "el-show")
    return(
        <div className='w-full p-5 sm:p-30 flex flex-col sm:flex-row gap-5 sm:gap-20 about scroll-animation'  id="About">
            <div className=' w-full sm:w-2/3 flex gap-5 sm:gap-8 flex-col'>
           <Title>Hey, I&apos;m Raju.</Title>
            <TitleBrake/>
            <span className='leading-[2] el-hidden'>
                I am a frontend Developer with a strong passion for building accessible, pixel-perfect user interfaces that harmonize design and engineering. I thrive at the intersection of aesthetics and functionality—crafting experiences that are visually refined, technically robust, and optimized for both performance and usability
            </span>
            <span className='leading-[2] el-hidden'>
                Currently, I work as a frontend Engineer at Brigosha, where I focus on accessibility and inclusive design. I help develop and maintain the UI component library that powers our platform, ensuring every interface meets modern web accessibility standards and delivers a seamless experience for all users.
            </span>
            </div>
            <div className='flex relative p-5 mx-auto w-[350px] h-[350px] my-photo el-hidden'>
                <Image
                src={'/profile_image.jpg'}
                alt='Raju Hoque Profile'
                fill={true}
                style={{objectFit:"contain"}}
                className="transition-all duration-300 rounded-md prof-image"
              
                />
            </div>

        </div>
    )
}