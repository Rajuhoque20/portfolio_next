import React, { ReactNode } from 'react'
import { SubTitle1, Title, TitleBrake } from './mainPage'
import { DevelopmentSkills } from './Experience'

const locoSkills=[
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "React Testing Library",
    "Jest",
    "Webpack",
    "SVG",
    "Zustand"
];
const elastotecSkills=[
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Zustand",
     "Ant Design"
];
const pmtSkills=[
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Redux",
     "Ant Design"
];
const hiringSkills=[
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Redux",
    "Redux ToolKit",
    "Ant Design"
];

const projects=[
    {
        title:"LocoSim – Locomotive Simulation",
        content:"Built a real-time simulation platform to monitor train movement, speed, and location for driver training purposes. Integrated a Driver Display Unit (DDU) to visualize live track details such as signals, signage, curvature, and gradient during motion. Simulated accurate train behavior across varying route conditions. Focused on responsive UI and seamless real-time data rendering for high-fidelity simulations.",
        skills:locoSkills
    },
    {
        title:"Elastotec-LaggingSelect",
        content:"Developed a web portal that allows clients to create and manage projects, conveyors, and pulleys for machine tracking. Enabled analysis of pulley details based on products with graphical representations of simulated outputs. Single-handedly handled UI implementation, code optimization, and feature enhancements. Focused on delivering a seamless and efficient user experience.",
        skills:elastotecSkills,
    },
    {
        title:"NEW PMT",
        content:"Built an online portal to manage associate, department, team, and project profiles, along with tracking attendance, leaves, and overall organizational activities. Led the complete UI implementation with custom global components like tables and modals. Introduced Zustand for efficient state management. Ensured full mobile responsiveness using media queries.",
        skills:pmtSkills,
    },
    {
        title:"Hiring Management",
        content:"Developed a recruitment gateway platform enabling businesses to manage the entire hiring process, including screening, interview scheduling, and shortlisting. Contributed to complete UI implementation using a blend of class and functional components. Utilized Ant Design for UI, along with Redux and Redux Toolkit for state management. Ensured a responsive design optimized for mobile devices.",
        skills:hiringSkills
    },
    {
        title:"Ibelong",
        content:"Developed a web portal for company associates to nominate and participate in events like sports, music, dance, photography, and acting. Collaborated with the team to implement the UI and integrate APIs. Introduced Redux Toolkit for efficient state management. Ensured full mobile responsiveness for an optimized user experience across devices.",
        skills:hiringSkills,
    }
]

export default function Projects() {
  return (
     <div className='project-bg' id="Projects">
            <div className='w-full p-5 sm:p-30 flex flex-col gap-3 sm:gap-8 project-bg-blur h-full w-full'>
            <Title>Projects</Title>
            <TitleBrake/>

            <ProjectWebView/>
            <ProjectMobView/>
            </div>
        </div>
  )
}
const ProjectWebView=()=>{
    return(
        <div className='mt-0 sm:mt-10'>
                
                <svg viewBox='0 0 1120 2450' className='hidden sm:block'>
                    <line
                    x1={560}
                    y1={50}
                    x2={560}
                    y2={2380}
                    stroke='#5eead4'
                    strokeWidth={2}
                    />

                     <polyline
                     points='530,300 490, 270 490,320 530,300'
                     fill='none'
                     stroke='#fff'
                     strokeWidth={1}
                     />

                     <polyline
                     points='530,1220 490, 1200 490,1240 530,1220'
                     fill='none'
                     stroke='#fff'
                     strokeWidth={1}
                     />
                      <polyline
                     points='530,2180 490, 2160 490,2200 530,2180'
                     fill='none'
                     stroke='#fff'
                     strokeWidth={1}
                     />

                     <polyline
                     points='590,780 620, 760 620,800 590,780'
                     fill='none'
                     stroke='#fff'
                     strokeWidth={1}
                     />

                     <polyline
                     points='590,1690 620, 1670 620,1710 590,1690'
                     fill='none'
                     stroke='#fff'
                     strokeWidth={1}
                     />

                    <foreignObject x={0} y={50} width={500} height={600} >                    
                        <ProjectCard>
                                <SubTitle1>LocoSim – Locomotive Simulation</SubTitle1>
                                <span className='color1 leading-7'>Built a real-time simulation platform to monitor train movement, speed, and location for driver training purposes. Integrated a Driver Display Unit (DDU) to visualize live track details such as signals, signage, curvature, and gradient during motion. Simulated accurate train behavior across varying route conditions. Focused on responsive UI and seamless real-time data rendering for high-fidelity simulations.</span>
                                 <DevelopmentSkills skills={locoSkills}/>
                     </ProjectCard>          
                    </foreignObject>

                     <foreignObject x={619} y={600} width={500} height={412} >                    
                        <ProjectCard>
                                <SubTitle1>Elastotec-LaggingSelect</SubTitle1>
                                <span className='color1 leading-7'> Developed a web portal that allows clients to create and manage projects, conveyors, and pulleys for machine tracking. Enabled analysis of pulley details based on products with graphical representations of simulated outputs. Single-handedly handled UI implementation, code optimization, and feature enhancements. Focused on delivering a seamless and efficient user experience.</span>
                                 <DevelopmentSkills skills={elastotecSkills}/>
                     </ProjectCard>          
                    </foreignObject>

                    <foreignObject x={0} y={1050} width={500} height={400} >                    
                        <ProjectCard>
                                <SubTitle1>NEW PMT</SubTitle1>
                                <span className='color1 leading-7'> Built an online portal to manage associate, department, team, and project profiles, along with tracking attendance, leaves, and overall organizational activities. Led the complete UI implementation with custom global components like tables and modals. Introduced Zustand for efficient state management. Ensured full mobile responsiveness using media queries.</span>
                                 <DevelopmentSkills skills={pmtSkills}/>
                     </ProjectCard>          
                    </foreignObject>

                      <foreignObject x={619} y={1500} width={500} height={412} >                    
                        <ProjectCard>
                                <SubTitle1>Hiring Management</SubTitle1>
                                <span className='color1 leading-7'>  Developed a recruitment gateway platform enabling businesses to manage the entire hiring process, including screening, interview scheduling, and shortlisting. Contributed to complete UI implementation using a blend of class and functional components. Utilized Ant Design for UI, along with Redux and Redux Toolkit for state management. Ensured a responsive design optimized for mobile devices.</span>
                                 <DevelopmentSkills skills={hiringSkills}/>
                     </ProjectCard>          
                    </foreignObject>

                    <foreignObject x={0} y={2000} width={500} height={400} >                    
                        <ProjectCard>
                                <SubTitle1>Ibelong</SubTitle1>
                                <span className='color1 leading-7'>Developed a web portal for company associates to nominate and participate in events like sports, music, dance, photography, and acting. Collaborated with the team to implement the UI and integrate APIs. Introduced Redux Toolkit for efficient state management. Ensured full mobile responsiveness for an optimized user experience across devices.</span>
                                <DevelopmentSkills skills={hiringSkills}/>
                     </ProjectCard>        
                    </foreignObject>

                    <circle
                     cx={560}
                     cy={300}
                     r={8}
                     fill='#fff'
                     />  

                    

                     <circle
                     cx={560}
                     cy={780}
                     r={8}
                     fill='#fff'
                     />  

                      <circle
                     cx={560}
                     cy={1220}
                     r={8}
                     fill='#fff'
                     />  

                     <circle
                     cx={560}
                     cy={1690}
                     r={8}
                     fill='#fff'
                     />

                     <circle
                     cx={560}
                     cy={2180}
                     r={8}
                     fill='#fff'
                     />  





                </svg>
                
            </div>
    )
}
export const ProjectMobView=()=>{
    return(
        <div className='flex sm:hidden flex-col gap-5'>
            {projects?.map((item)=>{
                return(
                     <ProjectCard key={item?.title}>
                                <SubTitle1>{item?.title}</SubTitle1>
                                <span className='color1 leading-7'>{item?.content}</span>
                                 <DevelopmentSkills skills={item?.skills}/>
                     </ProjectCard>       

                )
            })}
        </div>
    )
}


export const ProjectCard=({children}:{children:ReactNode})=>{
    return(
        <div className='p-1 w-full'>
        <div className='project-card flex flex-col gap-3 relative px-[16px] py-[26px] rounded-sm' >
            {children}
        </div>
        </div>
    )
}