
'use client'
import React, { ReactNode } from 'react'
import Header from './Header'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { MyPassion } from './MyPassion'
import {About} from './About'
import { useShow } from './hooks/useShow'
import { Skills } from './Skills'
import Work from './Work'

export default function MainPage() {
  return (
    <div  className="w-full h-max flex flex-col h-max overflow-y-auto overflow-x-hidden">
        <Header/>
        <About/>
        <MyPassion/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export const TitleBrake=()=>{
      useShow("el-hidden", "el-show")
    return(
         <hr className='w-25 h-0.5 bg-linear-to-bl from-violet-500 to-fuchsia-500 border-none el-hidden' />
    )
}

export const Title=({children}:{children:ReactNode})=>{
      useShow("el-hidden", "el-show")
    return(
        <h1 className='text-2xl sm:text-5xl font-bold el-hidden'>{children}</h1>
    )
}

export const SubTitle1=({children}:{children:ReactNode})=>{
      useShow("el-hidden", "el-show")
    return(
        <h2 className='text-xl sm:text-2xl font-semibold el-hidden'>{children}</h2>
    )
}

