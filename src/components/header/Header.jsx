import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='wrapper'>
        <nav>
            <ul>
               <a href="">
               <li> Home</li>
               </a>
               <a href="">
               <li> Services</li>
               </a>
               <a href="">
               <li> About Me</li>
               </a>
               <a href="">
               <li> Portfolio</li>
               </a>
               <a href="">
               <li> Contact Me</li>
               </a>
            </ul>

            <a className='primary-btn' href="">Hire Me</a>
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