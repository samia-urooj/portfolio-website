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
        <div className="aboutDiv">
            
            <div className="education">
            <h1>About</h1>
        <h3><u>My Education:</u></h3>
        <p>I pursued my intermediate education (12th grade) at [Sir Syed Govt. Girls College], specializing in Science. During this period, I honed my analytical and critical thinking skills, preparing me for further academic and professional challenges. Now I am currently studying Information Technology (IT) and Artificial Intelligence (AI) at Governor House of Sindh, delving into the fascinating world of computing and intelligent systems. This journey involves understanding the intricacies of software development, data management, and the innovative algorithms that drive AI. Through my studies, I aim to harness the power of technology to solve complex problems and create intelligent applications that can transform industries and improve lives.</p>
            </div>
            <div data-aos="fade-right" className="aboutImg">
                <img src="https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007419.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid" alt="desc"></img>
            </div>

  <div data-aos="fade-left" className="proImg">
                    <img src="/image/pro2.jpeg"></img>
                </div>
            <div className="project">
              
                <h3><u><b>Projects</b></u></h3>
                <h3><u>NPM Projects:</u></h3><p>
I have developed several npm projects that showcase my skills in JavaScript and web development. Each project demonstrates my ability to leverage npm powerful package management capabilities, write clean and maintainable code, and integrate various dependencies seamlessly. By using npm scripts for automation and testing, I have ensured that my projects are not only functional but also robust and scalable. These experiences have significantly enhanced my understanding of modern JavaScript development and the npm ecosystem.
Here is the link you can view and explore my Projects!
</p>
<button><Link href="https://www.npmjs.com/~samia21"><i><u>My NPM!</u></i></Link></button> </div>


<div className='githubDiv'>
    <h3><u>My Github Repository:</u></h3>
    <p>I create GitHub repositories to manage and share my projects effectively. By initializing a repository, I organize my code, documentation, and resources in one place. I commit changes regularly to track progress and collaborate with others seamlessly.By leveraging GitHub repositories, I enhance my productivity and maintain high-quality project management.

Here is the link you can view my Github repositories!</p>
<button><Link href="https://github.com/samia-urooj"><i><u>My Github repositories!</u></i></Link></button>
        </div> 
        <div data-aos="fade-right" className="githubImg"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosfIfpnBvd3tu1CEQ9jkmfAUPh5jlnYK1uKPn7n4UlZYSs-3ipeCRHzNpITa4d9ztlbI&usqp=CAU" alt="desc"></img></div>
        </div>
    );
}

export default About;