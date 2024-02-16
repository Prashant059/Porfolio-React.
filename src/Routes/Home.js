import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import HeroImg from '../Components/HeroImg/HeroImg';
import Footer from '../Components/Footer/Footer';
import Work from '../Components/Work/Work';
import SkillData from '../Components/Skills/SkillData';


const Home = () => {
  return (
    <div>

      <nav>
        <Navbar />
      </nav>

      <main>
        <HeroImg />
        <SkillData />
        <Work />
      </main>
      
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default Home;