import React from 'react'
import './services.css'


const serviceData =[
  {
    icon: '/icons/language.png',
    title: 'UI/UX & Web Design',
    content: 'Designing user-friendly websites and apps that look great and work seamlessly'

  },
  {
    icon: '/icons/branding_watermark.png',
    title: 'Branding & Identity',
    content: 'Crafting unique logos, color palettes, and brand visuals that stand out'

  },
  {
    icon: '/icons/phone_android.png',
    title: 'Mobile App UI/UX',
    content: 'Creating intuitive mobile experiences that keep users engaged'

  },
  {
    icon: '/icons/design_services.png',
    title: 'Print & Marketing Design',
    content: 'Designing flyers, social media graphics, and packaging that make an impact'

  },
  {
    icon: '/icons/edit_note.png',
    title: 'Wireframing & Prototyping',
    content: 'Turning ideas into interactive wireframes and user-friendly flows'

  },
  {
    icon: '/icons/computer.png',
    title: 'Design Systems & UI Kits',
    content: 'Creating reusable components for consistent designs'

  },
]
function Services() {
  return (
    <section id='services'>

        <h1>Services</h1>
        <div className='wrapper service-cont'>
          {serviceData.map((item, index)=>(
            <div className='box' key={index}>
              <img src={item?.icon} alt={item?.icon} />
              <h2>{item?.title}</h2>
              <p>{item?.content}</p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Services