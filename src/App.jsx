import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Services from './components/Services/Services'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


function App() {
      
  return (
    <>
      <Header/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>

      <Footer/>
    </>
  )
}

export default App
