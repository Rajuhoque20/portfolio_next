'use client'
import { SubTitle1, Title, TitleBrake } from "./mainPage"
import { useShow } from "./hooks/useShow";

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
useShow("el-hidden", "el-show")
   
    
    return(
      
            <div className='my-passon-bg-blur' >
                <div className='flex flex-col p-5 sm:p-30 gap-8 el-hidden'>
                 <Title>What I Do</Title>
                 <TitleBrake/>

                 <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 passion-wrapper'>
                    {myPassionData?.map((item)=>{
                        return(
                            <div key={item.title} className='p-5 sm:p-10 gap-3 sm:gap-5 flex flex-col passion-card el-hidden'>

                                <SubTitle1>{item.title}</SubTitle1>
                                <span className='leading-[2] el-hidden'>{item.content}</span>
                            </div>
                        )
                    })}
                 </div>
                 </div>

            </div>
    )
}