import React from 'react'
import './footer.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>

        <ul>
            <a href=""><li> Home</li></a>
            <a href=""><li> Services</li></a>
            <a href=""><li> About me</li></a>
            <a href=""><li> Portfolio</li></a>
            <a href=""><li> Contact me</li></a>
        </ul>

        <div className='gap24'>
                    <a href="">

                <img src="/icons/Frame 53.png" alt="" />
                    </a>
                    <a href="">

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

    </footer>
  )
}

export default Footer