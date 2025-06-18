import React from 'react'
import Header from './Header'
import Image from 'next/image'

export default function MainPage() {
  return (
    <div  className="w-full h-max flex flex-col h-max overflow-y-auto overflow-x-hidden">
        <Header/>
        <About/>
        <MyPasson/>
    </div>
  )
}

export const About=()=>{
    return(
        <div className='w-full p-30 flex gap-20' style={{background: "#0a192f"}}>
            <div className='w-2/3 flex gap-8 flex-col'>
            <h1 className='text-5xl font-bold'>Hey, I'm Raju.</h1>
            
            <TitleBrake/>
            <span className='leading-[2]'>
                I'm a front-end developer with a strong passion for building accessible, pixel-perfect user interfaces that harmonize design and engineering. I thrive at the intersection of aesthetics and functionality—crafting experiences that are visually refined, technically robust, and optimized for both performance and usability
            </span>
            <span className='leading-[2]'>
                Currently, I work as a frontend engineer at Brigosha, where I focus on accessibility and inclusive design. I help develop and maintain the UI component library that powers our platform, ensuring every interface meets modern web accessibility standards and delivers a seamless experience for all users.
            </span>
            </div>
            <div className='flex relative p-5 w-[350px] h-[350px]'>
                <Image
                src={'/profile_image.jpg'}
                alt='raju'
                fill={true}
                style={{objectFit:"contain"}}
                className="filter grayscale hover:grayscale-0 hover:brightness-110 transition-all duration-300"
              
                />
            </div>

        </div>
    )
}

const myPassionData=[
    {
        title:"WEB DEVELOPMENT",
        icon:null,
        content:"With a strong passion for crafting pixel-perfect websites and applications, I specialize in writing semantic, modular, and DRY code using HTML, CSS, JavaScript andTypescipt. Leveraging tools like Sass, I ensure efficient workflows and maintainable codebases."
    },
     {
        title:"UI RESPONSIVENESS",
        icon:null,
        content:"I am fond of building responsive user interfaces that adapt seamlessly across devices and screen sizes. ensuring a smooth and consistent user experience is at the core of my development process"
    },
     {
        title:"UNIT TESTING",
        icon:null,
        content:"I actively write unit tests to ensure the reliability and stability of my code, which helps me catch bugs early and maintain confidence during refactoring. I use tools like Jest and RTL to create fast, automated test coverage for critical functionality."
    },
     {
        title:"CODE INTEGRATION & OPTIMIZATION",
        icon:null,
        content:"I manage code merging workflows to ensure smooth integration across development branches. By following version control best practices, I help maintain a clean and conflict-free codebase. I also create optimized, production-ready builds that are efficient, scalable, and deployment-friendly"
    }
];
export const MyPasson=()=>{
    
    return(
        <div className="my-passon-bg" >
            <div className='my-passon-bg-blur flex flex-col  p-30 gap-8'>
                 <h1 className='text-5xl font-bold'>What I Do</h1>
                 <TitleBrake/>

                 <div className='grid grid-cols-2 passion-wrapper'>
                    {myPassionData?.map((item)=>{
                        return(
                            <div key={item.title} className='p-10 gap-5 flex flex-col'>
                                <h2 className='text-2xl font-semibold'>{item.title}</h2>
                                <span className='leading-[2]'>{item.content}</span>
                            </div>
                        )
                    })}
                 </div>

            </div>

        </div>
    )
}


export const TitleBrake=()=>{
    return(
         <hr className='w-25 h-0.5 bg-linear-to-bl from-violet-500 to-fuchsia-500' style={{border:"0"}}/>
    )
}

