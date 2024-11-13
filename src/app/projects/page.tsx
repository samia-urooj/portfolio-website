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
 
        <div className="projectDiv">
           <div className="myPro"><h1>MY PROJECTS:</h1></div>
           
            <div data-aos="flip-left" className="title">
                <img src="https://cdn-icons-png.flaticon.com/512/4264/4264818.png"></img>
                <h1>Food Blog Website</h1>
                <p>"I created a dynamic food blog website using Next.js to deliver a seamless, fast-loading experience for users exploring recipes and food stories. The site features a modern design, intuitive navigation, and optimized performance, making it easy for visitors to discover and enjoy content. With a focus on responsive design, it provides an engaging experience across all devices."</p>
            </div>

 <div data-aos="flip-right" className="title">
                <img src="https://play-lh.googleusercontent.com/JbYSifXLD71pQ8NB7tyaSsReFwfU3mVsqDBdpf__-B10RWdCHB_X2U5nfL4_7j9M0WE"></img>
                <h1>Resume Builder</h1>
                <p>"I've developed a responsive resume builder using TypeScript, HTML, and CSS that allows users to create and customize professional resumes effortlessly. This tool includes features for editing, previewing, and downloading resumes in PDF format, ensuring a seamless user experience. Built with clean code and user-centric design, it offers a practical solution for job seekers."</p>
                
            </div>


            
            <div data-aos="flip-left" className="title">
                <img src="https://cdn-icons-png.flaticon.com/512/2438/2438921.png"></img>
                <h1>IPhone store</h1>
                <p>"I developed a sleek, dummy homepage for an iPhone e-commerce store using Next.js, inspired by modern Figma templates. This project showcases a clean, high-end design with engaging product displays, intuitive navigation, and responsive layouts. The mockup demonstrates how advanced front-end development can merge with visually appealing design to create a professional shopping experience."</p>
                
            </div>
            
        </div>
    )
}


export default Project;