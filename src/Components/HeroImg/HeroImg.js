import React from 'react'
import './Hero.modules.css';
import IntroImg from '../../assets/Img/IntroImg-whitebg.jpg';
import { Link } from 'react-router-dom'



const HeroImg = () => {

  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content title'>
             <p>HI, I'M FRONTEND DEVELOPER FROM INDIA</p>
             <h1>React JS Developer.</h1>
               <div>
                   <Link to='/project' className='btn'>Projects</Link>  
                   <Link to='/contact' className='btn btn-light'>Contact</Link>  
               </div>
         </div> 
    </div>
  );
};

export default HeroImg

