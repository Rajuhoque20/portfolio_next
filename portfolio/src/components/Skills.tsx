'use client'
import { useShow } from "./hooks/useShow"
import { SubTitle1, Title, TitleBrake } from "./mainPage"
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
    "Bootstrap",
    "ECMAScript 6"
];
export const Skills=()=>{
useShow("el-hidden", "el-show");
    return(
        <div className='w-full p-5 sm:p-30 flex flex-col gap-3 sm:gap-8 skill'  id="Skills">
            
            <Title>Skills</Title>
            <TitleBrake/>
            
            
            <div className='flex flex-col sm:flex-row justify-between mt-10 gap-10 sm:gap-5'>
                <div >
                    <SubTitle1>DVELOPMENT</SubTitle1>
                    <div  className='grid grid-cols-3 gap-2 mt-5'>
                        {developmentSkills?.map((item)=>{
                            return(
                                <div key={item} className='rounded-full w-[120px] h-[120px] border-1 border-indigo-500 flex items-center justify-center el-hidden'>
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
                                <div  key={item} className='border-1 border-indigo-200 border-x-indigo-500 p-3 sm:p-5 rounded-md el-hidden'>
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
                                <div  key={item} className="border-1 border-indigo-200 border-l-indigo-500 p-3 sm:p-5 rounded-md el-hidden">
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