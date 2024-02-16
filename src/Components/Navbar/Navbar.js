import './Navbar.modules.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
 

  const handleClick = () => {
        setClick(!click);
  };
  
  const colorHandler = () => {
    if(window.scrollY >= 100) {
      setColor(true);
    }else {
      setColor(false);
    }
};

  window.addEventListener("scroll", colorHandler)


  return (
    <div className={ color ? "header header-bg" : "header"}>

      <Link to="/">
        <h1>Porfolio</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        
        <li>
          <Link className='' to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skill">Skills</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>

      <div className='hamburger' onClick={handleClick}>

        {click ? ( <FaTimes  size={20} style={{color: "white"}}/>)
        :
        ( <FaBars  size={20} style={{color: "white"}}/>) } 
        
      </div>
      
    </div>
  )
}

export default Navbar;