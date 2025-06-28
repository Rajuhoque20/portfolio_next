import React from 'react'
import { SubTitle1, Title, TitleBrake } from './mainPage';
import Image from 'next/image';
import { useShow } from './hooks/useShow';

const WorkSamples=[
     {
        title:"Cab Replica Panel",
        image:'/cab_replica.png',
        content:"The Cab Replica Panel displays real-time status of various hardware components within the locomotive.It provides a comprehensive interface to monitor and simulate loco hardware behavior for training or testing purposes.",
    },
    {
        title:"Login of Locomotive Simulation",
        image:'/loco_login.png',
        content:"The Locomotive Simulation login serves as a unified entry point for both instructors and trainees. Through this common login page, users can securely access various simulation modules.",
    },
    {
        title:"Machine Room Layout",
        image:'/machine_room.png',
        content:"The Machine Room Layout acts as the central hub for accessing various machine room components. Users can navigate to elements like SB1, SB2, HB1, HB2, Filter Cubicle, and more through this interface.",
    },
     {
        title:"DDU ARC Home Screen",
        image:'/DDU_ARC.png',
        content:"The Driver Display Unit presents real-time information about the locomotive’s operational status. It enables the driver to monitor key parameters and make informed decisions during operation.",
    },
     {
        title:"Live Simulator Overview",
        image:'/simulator_overview.png',
        content:"The Live Simulator Overview serves as the main dashboard of the simulation module. It allows users to perform various locomotive-related simulations from a centralized interface.",
    },
     {
        title:"Elastotec Project Management",
        image:'/elastotec_project.png',
        content:"Elastotec Project Management is a centralized dashboard for creating and managing projects. Users can add one or more conveyors to a project and assign multiple pulleys to each conveyor.",
    },
    {
        title:"Elastotec Simulation Graph",
        image:'/elastotec_graph.png',
        content:"The Elastotec Simulation Graph provides a graphical representation of a product's properties. It helps users visualize and analyze key performance characteristics through interactive charts.",
    },
];

export default function Work() {
      useShow("el-hidden", "el-show");

  return (
              <div className='w-full p-5 sm:p-30 flex flex-col gap-3 sm:gap-8 skill h-max w-full'>
                <Title>Some of My Works</Title>
                <TitleBrake/>
                <div className='grid gap-10 sm:gap-15'>
                    {WorkSamples?.map((item,index)=>{
                        return(
                            <div key={item.title} className={`flex sm:p-5 flex-col ${index%2===0?"sm:flex-row":"sm:flex-row-reverse"} gap-5 sm:gap-10 items-center`}>
                                <div className='h-[200px] sm:h-[430px] w-full sm:w-2/3 relative el-hidden'>
                                 <Image
                                alt={item.title}
                                src={item.image}
                                 fill={true}
                                 style={{objectFit:"contain"}}                         
                                />
                                <div
                                className='absolute left-0 top-0 right-0 bottom-0 border blur-xs bg-black/70'
                                ></div>
                                </div>
                                <div className="w-full sm:w-1/3 gap-4 flex flex-col">
                                <SubTitle1>{item.title}</SubTitle1>
                               <span className='el-hidden'>{item.content}</span>
                               </div>
                            </div>
                        )
                    })}
                </div>

              </div>
  )
}
