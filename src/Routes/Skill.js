import React from 'react'
import SkillData from '../Components/Skills/SkillData';
import Navbar from '../Components/Navbar/Navbar';
import HeroImg2 from '../Components/HeroImg/HeroImg2';
import Footer from "../Components/Footer/Footer";

const Skill = () => {
  return (
    <div>
       <Navbar />
       <HeroImg2 heading="Skills" text="Here is the Skills I Have."/>
       <SkillData />
       <Footer />
    </div>
  )
}

export default Skill;