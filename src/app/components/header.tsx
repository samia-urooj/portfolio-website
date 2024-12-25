"use client"
import Link from "next/link";
const Header=()=>{  
      const toggleMenu = () => {
            const menu = document.getElementById("mobileMenu");
            if (menu) {
              menu.classList.toggle("hidden");
            }
          }; 
    return(

<<<<<<< HEAD
        <header>
        <div className="mainHeader">
            <div className="logo"><img src="/image/logo.webp"></img></div>
       <ul className="">
        <li><Link href="/"><span className="heading "><b>Home</b></span></Link></li>
        <li><Link href="/about"><span className="heading "><b>About </b></span></Link></li> 
        
        <li><Link href="/projects"><span className="heading "><b>Projects</b></span></Link></li>
        <li><Link href="/contact"><span className="heading "><b>Contact</b></span></Link></li>
        <li><span className="logoHeading "><b>|| Pixel and Code ||</b></span></li>
       </ul>
=======
        <header className="bg-purple-600 text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-2xl font-bold">MyPortfolio</div>
          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-6 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-purple-300 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="hover:text-purple-300 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-300 transition-colors"
                >
                  Contact 
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              id="menuButton"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
>>>>>>> e6f61071c037a7cb80ca902e740970cf8b28a1c4
        </div>
        {/* Mobile Navigation */}
        <div id="mobileMenu" className="md:hidden hidden bg-purple-700">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="/"
                className="hover:text-purple-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-purple-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-purple-300 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/skills"
                className="hover:text-purple-300 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-purple-300 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
   
    )
}
export default Header;