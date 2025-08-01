
'use client'
import React, { useRef, useState } from 'react'
import { Title } from './mainPage'
import { useShow } from './hooks/useShow';
interface FormData{
    name:string,
    email:string,
    subject:string,
    message:string,
}

export default function Contact() {
      useShow("el-hidden", "el-show");
    const [response, setResponse]=useState({
        message:"",
        status:""
    });
    const formRef=useRef<HTMLFormElement>(null);
    const [buttonText, setButtonText]=useState("SEND MESSAGE")

    const sendEmail=async (formData:FormData) => {
        if(buttonText==="SENDING...")
        {
            return;
        }
        setButtonText("SENDING...")
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if(res.ok)
    {
        setResponse({
            status:"success",
            message:"Email sent"
        })
        if(formRef.current)
        {
            formRef.current.reset();
        }
    }
   else{
         setResponse({
            status:"error",
            message:"Failed to send"
        })
   }
    setButtonText("SEND MESSAGE");
    setTimeout(()=>{
     setResponse({
        message:"",
        status:""
    })
},2000);
};



  return (
    <div className='contact-bg' id="Contact">
            <div className='w-full p-5 sm:p-30 flex contact-bg-blur flex-col gap-8  h-full w-full items-center'>
                <Title>Get In Touch</Title>
                <form 
                ref={formRef}
                className=' w-full sm:w-4/9 flex flex-col gap-10' onSubmit={(e)=>{
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
                        const message = (form.elements.namedItem("message") as HTMLInputElement).value;
                 
                    sendEmail({name, email, subject,message});
                }}>
                    <div className='flex flex-col gap-3 el-hidden'>
                        <label htmlFor='name'>NAME</label>
                        <input required type='text' name='name' className='h-[60px] rounded-sm px-5 border-2 border-indigo-200 border-y-indigo-500 outline-0' placeholder='Enter name'/>
                    </div>
                     <div className='flex flex-col gap-3 el-hidden'>
                        <label htmlFor='name'>EMAIL</label>
                        <input required type='text' name='email' placeholder='Enter email' className='h-[60px] rounded-sm px-5 border-2 border-indigo-200 border-y-indigo-500 outline-0'/>
                    </div>
                     <div className='flex flex-col gap-3 el-hidden'>
                        <label htmlFor='name'>SUBJECT</label>
                        <input required type='text' name='subject' placeholder='Enter subject' className='h-[60px] rounded-sm px-5 border-2 border-indigo-200 border-y-indigo-500 outline-0'/>
                    </div>
                    <div className='flex flex-col gap-3 el-hidden'>
                        <label htmlFor='name'>MESSAGE</label>
                        <input required type='text'  name='message' placeholder='Enter message' className='h-[60px] rounded-sm px-5 border-2 border-indigo-200 border-y-indigo-500 outline-0'/>
                    </div>

                    {response?.status==="success"&&
                    <span className='text-green-400 mx-auto'>{response?.message}</span>
                    }
                     {response?.status==="error"&&
                    <span className='text-red-500 mx-auto'> {response?.message}</span>
                    }

                    <button type='submit' className=' transition-transform hover:scale-110 border-2 border-purple-500 text-purple-500 px-12 py-4 rounded-sm w-max mx-auto cursor-pointer el-hidden'>{buttonText}</button>
                </form>

            </div>
    </div>
  )
}
