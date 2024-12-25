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
    <div  className="mainDiv">
      <div data-aos="zoom-in" className="imgDiv">
      <img src="/image/linkpfp2.png" alt="desc"></img></div>
      <div className="content">
        <h1>Hi Everyone!<br></br>
           </h1>
        <p>A passionate designer,developer with a knack for creating impactful digital experiences. With expertise in  web design, front-end development, UX/UI, I bring a blend of creativity and technical know-how to each project. My work reflects a commitment to  user-centered design, innovation and clean code, aiming to deliver results that both look great and function seamlessly. Welcome to my portfolio—explore my projects to see how I turn ideas into reality!</p>
       <button><Link href="/projects"><span className="buttonPro">My Projects</span></Link></button>
      </div>
      <div className="quote"><p>"Continuous improvement is better than delayed perfection." <br></br> – Mark Twain</p></div>
      <div className="resume">
        <div className="resumeH">
        <h1>Resume Builder</h1>
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

<button><Link href="https://resume-builder-woad-seven.vercel.app/"><u>Click here!</u></Link></button></div>
     
      <div data-aos="flip-left" className="resumeImg">
        <img src="/image/resume3.png"></img>
      </div> </div>
    </div>
     
  );
}
