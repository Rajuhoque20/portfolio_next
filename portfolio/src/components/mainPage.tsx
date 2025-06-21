import React, { ReactNode } from 'react'
import Header from './Header'
import Image from 'next/image'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function MainPage() {
  return (
    <div  className="w-full h-max flex flex-col h-max overflow-y-auto overflow-x-hidden">
        <Header/>
        <About/>
        <MyPassion/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export const About=()=>{
    return(
        <div className='w-full p-30 flex gap-20' style={{background: "#0a192f"}} id="About">
            <div className='w-2/3 flex gap-8 flex-col'>
           <Title>Hey, I&apos;m Raju.</Title>

            
            <TitleBrake/>
            <span className='leading-[2]'>
                I am a front-end developer with a strong passion for building accessible, pixel-perfect user interfaces that harmonize design and engineering. I thrive at the intersection of aesthetics and functionality—crafting experiences that are visually refined, technically robust, and optimized for both performance and usability
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
export const MyPassion=()=>{
    
    return(
        <div className="my-passon-bg" id="passion">
            <div className='my-passon-bg-blur flex flex-col  p-30 gap-8' >
                 <Title>What I Do</Title>
                 <TitleBrake/>

                 <div className='grid grid-cols-2 passion-wrapper'>
                    {myPassionData?.map((item)=>{
                        return(
                            <div key={item.title} className='p-10 gap-5 flex flex-col'>

                                <SubTitle1>{item.title}</SubTitle1>
                                <span className='leading-[2]'>{item.content}</span>
                            </div>
                        )
                    })}
                 </div>

            </div>

        </div>
    )
}

const developmentSkills=[
    "JavaScript",
    "React",
    "TypeScript",
    "Next",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Ant Design",
    "Redux",
    "Zustand",
    "Webpack",
    "RTL",
    "Jest"
];

const tools=[
    "Git/Github",
    "Postman",
    "MongoDB Compass",
    "Redux Toolkit",
    "Chrome Dev Tools"
];

const knowledges=[
     "Angular",
    "Node Js",
    "MongoDB",
    "Bootsrap",
    "ECMAScript 6"
];

export const Skills=()=>{
    return(
        <div className='w-full p-30 flex flex-col gap-8' style={{background: "#0a192f"}} id="Skills">
            
            <Title>Skills</Title>
            <TitleBrake/>
            
            
            <div className='flex justify-between mt-10'>
                <div >
                    <SubTitle1>DVELOPMENT</SubTitle1>
                    <div  className='grid grid-cols-3 gap-2 mt-5'>
                        {developmentSkills?.map((item)=>{
                            return(
                                <div key={item} className='rounded-full w-[120px] h-[120px] border-1 border-indigo-500 flex items-center justify-center'>
                                    <span>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                 <div>
                    <SubTitle1>TOOLS</SubTitle1>
                    <div className='mt-5 flex flex-col gap-5'>
                        {tools?.map((item)=>{
                            return(
                                <div  key={item} className='border-1 border-indigo-200 border-x-indigo-500 p-5 rounded-md'>
                                    <span>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                 <div>
                    <SubTitle1>KNOWLEDGE</SubTitle1>
                    <div className='mt-5 flex flex-col gap-5'>
                        {knowledges?.map((item)=>{
                            return(
                                <div  key={item} className="border-1 border-indigo-200 border-l-indigo-500 p-5 rounded-md">
                                    <span>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
               
            </div>

        </div>
    )
}


export const TitleBrake=()=>{
    return(
         <hr className='w-25 h-0.5 bg-linear-to-bl from-violet-500 to-fuchsia-500 border-none' />
    )
}

export const Title=({children}:{children:ReactNode})=>{
    return(
        <h1 className='text-5xl font-bold'>{children}</h1>
    )
}

export const SubTitle1=({children}:{children:ReactNode})=>{
    return(
        <h2 className='text-2xl font-semibold'>{children}</h2>
    )
}

