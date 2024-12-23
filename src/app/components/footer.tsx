import Link from "next/link";
import { IoMailOpenOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footerDiv lg:h-[200px] bg-gray-900 flex items-center justify-center flex-wrap  mt-10 ">

   <div className="section2 text-white font-serif text-md sm:text-2xl flex items-center justify-center text-white mt-8">
    <h1 className=" mx-6 sm:mx-10">Reach out at:</h1>
     
     <a href="https://www.linkedin.com/in/samia-urooj-5264012b5/">
      <img className="h-[40px] w-[40px] my-4 " src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
       ></img>
     </a>
     <a href="https://github.com/samia-urooj">
       <img className="h-[40px] ml-2 sm:ml-10 w-[40px] my-4 " src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
       ></img>
     </a>
     <a href="samiaurooj164@gmail.com">
      <img className="h-[40px] ml-2 sm:ml-10 w-[40px] my-4 " src="https://png.pngtree.com/png-clipart/20200721/original/pngtree-gmail-logo-png-png-image_4868140.jpg"
       ></img>
     </a>
     </div>

    
      <div className="lastText text-white text-center my-4  w-[100%]"><h4><i>“© Samia Urooj. All rights reserved.”</i></h4></div>
    </div>
  );
};

export default Footer;


// "https://www.linkedin.com/in/samia-urooj-5264012b5/"
// "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
// "https://github.com/samia-urooj"
// "https://cdn-icons-png.flaticon.com/512/25/25231.png"
// <div className="section2 w-[30%] text-white mt-10 sm:mt-24">
     
// <a href="https://www.linkedin.com/in/samia-urooj-5264012b5/"><p className="text-md mb-2" ><i><u>Linkedin:</u></i></p>
//   <img className="h-[40px] w-[40px] my-4 " src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
//   ></img>
// </a>
// <a href="https://github.com/samia-urooj"><p  className="text-md mb-2"><i><u>Github:</u></i></p>
//   <img className="h-[40px] w-[40px] my-4 " src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
//   ></img>
// </a>
// </div>