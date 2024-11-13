import Link from "next/link";
const Header=()=>{
    return(

        <header>
        <div className="mainHeader">
            <div className="logo"><img src="/image/logo.webp"></img></div>
       <ul>
        <li><Link href="/"><span className="heading"><b>Home</b></span></Link></li>
        <li><Link href="/about"><span className="heading"><b>About </b></span></Link></li> 
        
        <li><Link href="/projects"><span className="heading"><b>Projects</b></span></Link></li>
        <li><Link href="/contact"><span className="heading"><b>Contact</b></span></Link></li>
        <li><span className="logoHeading"><b>|| Pixel and Code ||</b></span></li>
       </ul>
        </div>
        </header>
    )
}
export default Header;