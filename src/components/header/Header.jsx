import React, {useState, useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import './header.css'


function Header() {
    const [isOpen, setIsOpen] = useState(false);
 const [activeHash, setActiveHash] = useState(window.location.hash);
console.log(activeHash)
useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Run initially
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);



  return (
    <div className='wrapper'>
        <nav className='burgerActive'>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={30} /> :   <GiHamburgerMenu  size={30}/>}
        </button>
            <ul className={isOpen ? "open" : ""}>
               <a href="#"  className={activeHash === "" ? "active" : ""} onClick={() => setIsOpen(false)}>
               <li > Home</li>
               </a>
               <a   href="#services"  className={activeHash === "#services" ? "active" : ""}onClick={() => setIsOpen(false)}>
               <li> Services</li>
               </a>
               <a href="#about" className={activeHash === "#about" ? "active" : ""}onClick={() => setIsOpen(false)}>
               <li> About Me</li>
               </a>
               <a href="#portfolio" className={activeHash === "#portfolio" ? "active" : ""}onClick={() => setIsOpen(false)}>
               <li> Portfolio</li>
               </a>
               <a href="#contact" className={activeHash === "#contact" ? "active" : ""}onClick={() => setIsOpen(false)}>
               <li> Contact Me</li>
               </a>
            </ul>

            <a className='primary-btn' href="#contact">Hire Me</a>
         {/* <div className='burger'>
         <GiHamburgerMenu  size={30}/>
         </div> */}
        </nav>
        <header>
            <div className='left'>
                <p>Hi I am</p>
                <p>Josephine Kayode</p>
                <h1>UI/UX designer</h1>
                <div className='btns gap24 '>
                    <a href="">

                <img src="/icons/linkedin.png" alt="" />
                    </a>
                    <a href="">

                <img src="/icons/binance.png" alt="" />
                    </a>
                </div>
                <div className='gap24 btn-wrapper'>
                    <a className='primary-btn' href='#contact'>Hire me</a>
                    <a href='/JOSEPHINE TAIWO KAYODE CV.pdf' download="Josephine's cv" className='secondary-btn'>Download CV </a>
                </div>
                <div className='proj-cont'>
                    <div>
                        <p>2+</p>
                        Experiences
                    </div>
                    {/* <div className='sep'></div> */}
                    <div>
                        <p>20+</p>
                        Project Done
                    </div>
                    {/* <div className='sep'></div> */}
                    <div>
                        <p>20+</p>
                        Happy Clients
                    </div>
                </div>
            </div>
            <div className='right'>
                <img className='jos' src="josewithframe.png" alt="" />
            </div>
        </header>
    </div>
  )
}

export default Header