"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
const About=()=>{

    useEffect(()=>{
        AOS.init({
            duration:1000,
            delay:100,
          once :true,

        })
    },[]);

    return(
        
        <div className="aboutDiv flex flex-wrap">
            <div className="w-[100%] text-center">
            <h1 className='sm:text-5xl text-3xl text-center text-white mt-10 font-serif '>About</h1></div>
            
            <div className="education w-[100%] text-center mx-6 lg:mx-0 lg:text-left  lg:w-[50%] text-white">
        <h3 className='sm:text-3xl text-2xl font-serif mt-7  sm:mt-10 lg:mt-[150px] ml-6 mb-4'><u>My Education:</u></h3>
        <p className='sm:text-md text-sm font-sans mx-6 text-gray-200'>I pursued my intermediate education (12th grade) at [Sir Syed Govt. Girls College], specializing in Science. During this period, I honed my analytical and critical thinking skills, preparing me for further academic and professional challenges. Now I am currently studying Information Technology (IT) and Artificial Intelligence (AI) at Governor House of Sindh, delving into the fascinating world of computing and intelligent systems. This journey involves understanding the intricacies of software development, data management, and the innovative algorithms that drive AI. Through my studies, I aim to harness the power of technology to solve complex problems and create intelligent applications that can transform industries and improve lives.</p>
            </div>

            <div data-aos="fade-right" className="aboutImg w-[100%] lg:w-[50%] flex  items-center justify-center ">
                <img className=' h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] mt-10 lg:mt-[150px] xl:mt-24' src="https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007419.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid" alt="desc"></img>
            </div>


 

            <div className="project w-[100%] lg:w-[50%] mt-20 lg:text-left text-center lg:mt-[110px]  text-white">
              
                <h3  className='sm:text-3xl text-2xl font-serif mb-2  ml-6'><u><b>Projects</b></u></h3>
                <h3  className='sm:text-3xl text-2xl font-serif mb-4 ml-6'><u>NPM Projects:</u></h3><p className='sm:text-md text-sm mx-6 font-sans text-gray-200'>
I have developed several npm projects that showcase my skills in JavaScript and web development. Each project demonstrates my ability to leverage npm powerful package management capabilities, write clean and maintainable code, and integrate various dependencies seamlessly. By using npm scripts for automation and testing, I have ensured that my projects are not only functional but also robust and scalable. These experiences have significantly enhanced my understanding of modern JavaScript development and the npm ecosystem.
Here is the link you can view and explore my Projects!
</p>
<button  className="bg-purple-800 text-white ml-6 rounded-3xl hover:bg-purple-500 h-[50px] w-[200px] mt-6"><Link href="https://www.npmjs.com/~samia21"><i><u>My NPM!</u></i></Link></button> </div>

 <div data-aos="fade-right" className="proImg w-[100%] flex  items-center justify-center  lg:w-[50%] ">
                    <img className="mt-10 lg:mt-20 h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]" src="/image/pro2.jpeg"></img>
                </div>


<div className='githubDiv w-[100%]  lg:w-[50%] mt-20 text-center lg:text-left lg:mt-[150px] text-white'>
    <h3  className='sm:text-3xl text-2xl font-serif ml-6 mb-4'><u>My Github Repository:</u></h3>
    <p  className='sm:text-md text-sm font-sans mx-6 text-gray-200'>I create GitHub repositories to manage and share my projects effectively. By initializing a repository, I organize my code, documentation, and resources in one place. I commit changes regularly to track progress and collaborate with others seamlessly.By leveraging GitHub repositories, I enhance my productivity and maintain high-quality project management.

Here is the link you can view my Github repositories!</p>
<button className="bg-purple-800 text-white rounded-3xl hover:bg-purple-500 h-[50px] w-[200px] ml-6 mt-6"><Link href="https://github.com/samia-urooj"><i><u>My Github repositories!</u></i></Link></button>
        </div> 

        <div data-aos="fade-right" className="githubImg w-[100%] lg:w-[50%]  flex items-center justify-center lg:mt-[50px]"> <img className="xl:h-[400px] xl:w-[400px] mt-10 h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] lg:h-[300px] lg:w-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosfIfpnBvd3tu1CEQ9jkmfAUPh5jlnYK1uKPn7n4UlZYSs-3ipeCRHzNpITa4d9ztlbI&usqp=CAU" alt="desc"></img></div>
        </div>
    );
}

export default About;