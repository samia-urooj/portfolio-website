"use client"
import Link from "next/link";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(()=>{
    AOS.init({
        duration:1000,
        delay:100,
      once :true,

    })
},[]);
  return (
    <div  className="mainDiv flex flex-wrap">
      <div data-aos="zoom-in" className="imgDiv w-[100%] flex  items-center justify-center md:w-[40%]">
      <img src="/image/linkpfp2.png" className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] mt-8" alt="desc"></img></div>
      <div className="content w-[100%] md:text-left text-center md:w-[60%]">
        <h1 className="md:text-5xl text-3xl md:mt-[120px] mt-10 font-serif text-white">Hi Everyone!<br></br>
           </h1>
           <h1 className="md:text-4xl text-2xl mt-2 font-serif text-white">I'm Samia Urooj,<br></br>
           </h1>
        <p className="text-md md:text-xl text-gray-300 my-2 md:my-4 mx-6 md:mx-0 md:mr-16">A passionate designer,developer with a knack for creating impactful digital experiences. With expertise in  web design, front-end development, UX/UI, I bring a blend of creativity and technical know-how to each project. My work reflects a commitment to  user-centered design, innovation and clean code, aiming to deliver results that both look great and function seamlessly. Welcome to my portfolio—explore my projects to see how I turn ideas into reality!</p>
       <button className="h-[50px] w-[150px] text-xl text-center bg-purple-800 hover:bg-purple-500 rounded-3xl"><Link href="/projects"><span className="buttonPro text-white font-sans">My Projects</span></Link></button>
      </div>


      <div className="quote text-center w-[100%] mx-6 mt-20 text-purple-600 text-xl md:text-3xl"><p>"Continuous improvement is better than delayed perfection." <br></br> – Mark Twain</p></div>


      <div className="resume mt-20 md:mt-[200px] mx-4 text-md md:text-xl text-center text-gray-400">
        <div className="resumeH">
        <h1 className="text-3xl md:text-5xl text-white text-center font-serif mb-4"><u>📝Resume Builder</u></h1>
        <p>One of my latest and favorite projects is a user-friendly Resume Builder web application that i created by using HTML, CSS, and TypeScript, and deployed it on Vercel for fast and reliable access. This tool is designed to simplify the process of creating professional resumes with ease.
<br></br><br></br>
<b>Key Features:</b>
<br></br>
Intuitive Interface: Users can easily fill out sections like personal details, education, work experience, and skills.<br></br>
Customization: Tailor the design to match personal preferences and industry standards.<br></br>
PDF Export: Seamlessly generate and download a polished PDF version of the resume for job applications.<br></br>
Accessibility: The app is optimized for both desktop and mobile users, ensuring flexibility in use.
<br></br><br></br>
<b>How to Use:</b>
<br></br>
Access the Link: Visit the deployed application link on Vercel.<br></br>
Input Details: Fill out the provided form sections with your personal and professional information.<br></br>
Customize Layout: Choose from various templates and design options to make your resume stand out.<br></br>
Preview & Download: Instantly preview your completed resume and download it as a PDF for immediate use.<br></br><br></br>
<i>Start creating your custom, professional resume with ease and efficiency!</i></p><br></br>

<button className="bg-purple-800 text-white rounded-3xl hover:bg-purple-500 h-[50px] w-[200px] mb-20"><Link href="https://resume-builder-woad-seven.vercel.app/"><u>Click here!</u></Link></button></div>
     
      {/* <div data-aos="flip-left" className="resumeImg">
        <img src="/image/resume3.png"></img>
      </div> */}
       </div>
    </div>
     
  );
}
