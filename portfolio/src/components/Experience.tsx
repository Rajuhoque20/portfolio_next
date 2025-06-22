import React from 'react'
import { SubTitle1, Title, TitleBrake } from './mainPage'

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

export default function Experience() {
  return (
    <div className='w-full p-5 sm:p-30 flex flex-col gap-3 sm:gap-8 experience'  id="Experience">
        <Title>Experience</Title>
        <TitleBrake/>
        <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 mt-5 sm:mt-10'>
            <div className='w-full sm:w-1/3 color1'>
                <SubTitle1>JULY, 2022 - PRESENT</SubTitle1>
            </div>
            <div className=' w-full sm:w-2/3 flex flex-col gap-3'>
           
                 <SubTitle1>Software Frontend Engineer, Brigosha</SubTitle1>
          
                 <span className='leading-7 color1'>Effectively utilized version control tools for source code management in various projects. Analyzed user requirements to develop software solutions and created technical specifications. Optimized existing software systems for improved performance and scalability. Participated in continuous learning opportunities to stay current with emerging technologies. Integrated third-party APIs and services to enhance software functionality and interoperability. Developed and maintained scalable software applications for various platforms. Collaborated with UI/UX designers to improve software usability and user experience. Utilized variety of engineering languages to develop web applications.</span>
                 <DevelopmentSkills skills={developmentSkills}/>
            </div>
        </div>
    </div>
  )
}

export const DevelopmentSkills=({skills}:{skills:string[]})=>{
    return(
        <div className='flex gap-5 flex-wrap'>
                    {skills?.map((item)=>{
                        return(
                            <div key={item} className='py-2 px-5 bg-neutral-500 rounded-2xl' style={{color:"#5eead4", background:"#2dd4bf1a"}}>
                                <span >{item}</span>
                            </div>
                        )
                    })}
                 </div>
    )
}
