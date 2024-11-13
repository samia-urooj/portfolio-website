import Link from "next/link";
import { IoMailOpenOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="section">
        <h4>
          Interested in collaborating?
        </h4><br></br>
        <p>
          Reach out at:</p><br></br><br></br>
          <p><IoMailOpenOutline />    samiaurooj@gmail.com</p>
        
      </div>


      <div className="section2">
        <h3>
          Stay connected with me!
        </h3><br></br>
        <a href="https://www.linkedin.com/in/samia-urooj-5264012b5/"><p><i><u>Linkedin:</u></i></p>
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
          ></img>
        </a>
        <a href="https://github.com/samia-urooj"><p><i><u>Github:</u></i></p>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          ></img>
        </a>
      </div>


      <div
        className="section2"
      >
        <Link href="/about">
          <li><u>About us</u></li>
        </Link><br></br><br></br>
        <Link href="/projects">
          <li><u>Projects</u></li>
        </Link><br></br><br></br>
        <Link href="/contact">
          <li><u>Contact us</u></li>
        </Link>
      </div>
      <div className="lastText"><h4><i>“© Samia Urooj. All rights reserved.”</i></h4></div>
    </div>
  );
};

export default Footer;
