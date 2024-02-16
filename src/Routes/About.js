import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import HeroImg2 from '../Components/HeroImg/HeroImg2'
import AboutContent from '../Components/About/AboutContent'

const About = () => {
  return (
    <div>
     <Navbar />
     <HeroImg2 heading="ABOUT" text="I am a React Developer, Creates JavaScript-based applications."/>
     <AboutContent />
     <Footer />
    </div>
  )
}

export default About