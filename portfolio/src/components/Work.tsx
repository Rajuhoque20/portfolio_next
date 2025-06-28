import React from 'react'
import { SubTitle1, Title, TitleBrake } from './mainPage';
import Image from 'next/image';

const WorkSamples=[
     {
        title:"Cab Replica Panel",
        image:'/cab_replica.png',
        content:"This is login page of loco",
    },
    {
        title:"Login of Locomotive Simulation",
        image:'/loco_login.png',
        content:"This is login page of loco",
    },
    {
        title:"Machine Room Layout",
        image:'/machine_room.png',
        content:"This is login page of loco",
    },
     {
        title:"DDU ARC Home Screen",
        image:'/DDU_ARC.png',
        content:"This is login page of loco",
    },
     {
        title:"Live Simulator Overview",
        image:'/simulator_overview.png',
        content:"This is login page of loco",
    },
     {
        title:"Elastotec Project Management",
        image:'/elastotec_project.png',
        content:"This is login page of loco",
    },
    {
        title:"Elastotec Simulation Graph",
        image:'/elastotec_graph.png',
        content:"This is login page of loco",
    },
     {
        title:"Newsletter",
        image:'/new_pmt_newsletter.png',
        content:"This is login page of loco",
    },
];

export default function Work() {

  return (
              <div className='w-full p-5 sm:p-30 flex flex-col gap-3 sm:gap-8 skill h-max w-full'>
                <Title>Some of My Work</Title>
                <TitleBrake/>
                <div className='grid gap-15'>
                    {WorkSamples?.map((item,index)=>{
                        return(
                            <div key={item.title} className={`flex p-5 ${index%2===0?"flex-row":"flex-row-reverse"} rounded-md gap-5 items-center`}>
                                <div className='h-[430px] w-2/3 relative'>
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
                                <div className="w-1/3">
                                <SubTitle1>{item.title}</SubTitle1>
                               <span>{item.content}</span>
                               </div>
                            </div>
                        )
                    })}
                </div>

              </div>
  )
}
