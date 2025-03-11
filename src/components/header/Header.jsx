import React, {useState, useEffect} from 'react'
import './header.css'


function Header() {
 const [active, setActive] = useState(null)
 const [activeHash, setActiveHash] = useState(window.location.hash);
console.log(activeHash)
 useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);



  return (
    <div className='wrapper'>
        <nav>
            <ul>
               <a href="#"  className={activeHash === "" ? "active" : ""}>
               <li > Home</li>
               </a>
               <a   href="#services"  className={activeHash === "#services" ? "active" : ""}>
               <li> Services</li>
               </a>
               <a href="#about" className={activeHash === "#about" ? "active" : ""}>
               <li> About Me</li>
               </a>
               <a href="#portfolio" className={activeHash === "#portfolio" ? "active" : ""}>
               <li> Portfolio</li>
               </a>
               <a href="#contact" className={activeHash === "#contact" ? "active" : ""}>
               <li> Contact Me</li>
               </a>
            </ul>

            <a className='primary-btn' href="#contact">Hire Me</a>
        </nav>
        <header>
            <div className='left'>
                <p>Hi I am</p>
                <p>Josephine Kayode</p>
                <h1>UI/UX designer</h1>
                <div className='gap24'>
                    <a href="">

                <img src="/icons/linkedin.png" alt="" />
                    </a>
                    <a href="">

                <img src="/icons/binance.png" alt="" />
                    </a>
                </div>
                <div className='gap24 btn-wrapper'>
                    <a className='primary-btn' href=''>Hire me</a>
                    <a href='' className='secondary-btn'>Download CV </a>
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