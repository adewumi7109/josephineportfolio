import React from 'react'
import './footer.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="wrapper">

     
       <div className="footer">
       <ul>
            <a href="#"><li> Home</li></a>
            <a href="#services"><li> Services</li></a>
            <a href="#about"><li> About me</li></a>
            <a href="#portfolio"><li> Portfolio</li></a>
            <a href="#contact"><li> Contact me </li></a>
        </ul>

        <div className='gap24'>
                    <a href="http://linkedin.com/in/josephine-kayode-8732781a4" target='_blank'>

                <img src="/icons/Frame 53.png" alt="" />
                    </a>
                    <a href="https://www.behance.net/josetmeghan" target='_blank'>

                <img src="/icons/Frame 55.png" alt="" />
                    </a>
                </div>

                <div className='cont'>
                  <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                    <MdOutlineEmail size={20}/>
                    <p>josetmeghan@gmail.com</p>
                  </div>
                  <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                    <FaPhoneAlt size={20}/>
                    <p>+2349034829116</p>
                  </div>
                </div>
       </div>
                </div>
    </footer>
  )
}

export default Footer