import React from 'react'
import './about.css'
import ProgressCircle from '../ProgressCircle';


function About() {
    const skills = [
        { label: "Figma", percentage: 100, icon: "/icons/Figma.png" },
        { label: "Adobe Photoshop", percentage: 100, icon: "/icons/photoshop.png" },
        { label: "Canva", percentage: 100, icon: "/icons/canva.png" },
        { label: "Adobe Premiere", percentage: 70, icon: "/icons/adobe_premier.png" },
      ];
    
    
  return (
    <section id='about'>
        <h1>About Me</h1>
        <div className='wrapper about-cont'>
            <div>
                <img src="josephine.png" alt="" />
            </div>
            <div>
                <p>I’m a UI/UX & Graphic Designer passionate about crafting intuitive experiences and visually compelling designs. My work bridges the gap between creativity and functionality, ensuring that every design is not just aesthetically pleasing but also user-friendly and effective.
With expertise in UI/UX design, branding, and digital illustration, I help businesses and individuals bring their ideas to life—whether it’s a sleek mobile app, a high-converting website, or a bold brand identity. I believe design is more than just how something looks; it’s about how it works and how it makes people feel.
My approach is rooted in understanding user needs, problem-solving, and delivering designs that engage, inspire, and drive results. Every project I take on is an opportunity to create something meaningful, blending strategy with creativity to ensure the best possible experience.
Let’s bring your vision to life with thoughtful and impactful design!</p>
<div className='gap24 btn-wrapper'>
                    <a className='primary-btn' href=''>Hire me</a>
                    <a href='' className='secondary-btn'>Download CV </a>
                </div>
            </div>
        </div>

        <div className='skills wrapper' style={{ display: "flex",  gap: "100px", marginTop: 60, paddingBottom: '35px'}}>
        {skills.map((skill, index) => (
        <ProgressCircle
          key={index}
          percentage={skill.percentage}
          label={skill.label}
          icon={skill.icon}
        />
      ))}
    </div>
    </section>
  )
}

export default About