"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Project=()=>{
   
        useEffect(()=>{
            AOS.init({
                duration:1000,
                delay:100,
              once :true,

            })
        },[]);

    
    return(
 
        <div className="projectDiv flex flex-wrap grid grid-cols-1 place-items-center">
           <div className="myPro w-[100%] text-white text-2xl font-serif mt-10 text-center"><h1>MY PROJECTS:</h1></div>
           
            <div data-aos="flip-left" className="title mx-4 text-white h-[400px] w-[300px] sm:h-[540px] sm:w-[400px] rounded-xl bg-purple-600 mt-10 ">
                <img className='sm:h-[200px] sm:w-[200px] h-[100px] w-[100px] mt-4 sm:mt-10 ml-[100px]' src="https://cdn-icons-png.flaticon.com/512/4264/4264818.png"></img>
                <h1 className='mt-4 text-xl ml-6 sm:ml-10 font-sans '>Food Blog Website</h1>
                <p className='sm:mx-10 mx-6 text-white text-sm'>"I created a dynamic food blog website using Next.js to deliver a seamless, fast-loading experience for users exploring recipes and food stories. The site features a modern design, intuitive navigation, and optimized performance, making it easy for visitors to discover and enjoy content. With a focus on responsive design, it provides an engaging experience across all devices."</p>
            </div>

 <div data-aos="flip-right" className="title mx-4 text-white h-[400px] w-[300px] sm:h-[540px] sm:w-[400px] rounded-xl bg-purple-600 mt-10  ">
                <img className='sm:h-[200px] sm:w-[200px] h-[100px] w-[100px] mt-4 sm:mt-10 ml-[100px]' src="https://play-lh.googleusercontent.com/JbYSifXLD71pQ8NB7tyaSsReFwfU3mVsqDBdpf__-B10RWdCHB_X2U5nfL4_7j9M0WE"></img>
                <h1 className='mt-4 text-xl ml-6 sm:ml-10 font-sans '>Resume Builder</h1>
                <p  className='sm:mx-10 mx-6 text-white text-sm'>"I've developed a responsive resume builder using TypeScript, HTML, and CSS that allows users to create and customize professional resumes effortlessly. This tool includes features for editing, previewing, and downloading resumes in PDF format, ensuring a seamless user experience. Built with clean code and user-centric design, it offers a practical solution for job seekers."</p>
                
            </div>


            
            <div data-aos="flip-left" className="title mx-4 text-white h-[400px] w-[300px] sm:h-[540px] sm:w-[400px] rounded-xl bg-purple-600 mt-10 ">
                <img className='sm:h-[200px] sm:w-[200px] h-[100px] w-[100px] mt-4 sm:mt-10 ml-[100px]' src="https://cdn-icons-png.flaticon.com/512/2438/2438921.png"></img>
                <h1 className='mt-4 text-xl ml-6 sm:ml-10 font-sans '>IPhone store</h1>
                <p className='sm:mx-10 mx-6 text-white text-sm'>"I developed a sleek, dummy homepage for an iPhone e-commerce store using Next.js, inspired by modern Figma templates. This project showcases a clean, high-end design with engaging product displays, intuitive navigation, and responsive layouts. The mockup demonstrates how advanced front-end development can merge with visually appealing design to create a professional shopping experience."</p>
                
            </div>
            
        </div>
    )
}


export default Project;