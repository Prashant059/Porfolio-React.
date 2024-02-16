import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroImg2 from '../Components/HeroImg/HeroImg2';
import Work from "../Components/Work/Work"

const Project = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS" text="HERE IS SOME OF MY RECENTS WORKS."/>
        <Work />
        <Footer />
    </div>
  )
}

export default Project;