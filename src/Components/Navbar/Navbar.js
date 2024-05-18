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


    // <nav id="navbar-example2" className={`navbar bg-body-tertiary px-3 mb-3 ${color ? "header header-bg" : "header"}`}>
    //   <Link class="navbar-brand" href="#" to="/"> <h1>Porfolio</h1> </Link>
    //   <ul className={`nav nav-pills ${click ? "nav-menu active" : "nav-menu"}`}>

    //     <li class="nav-item">
    //       <Link className='nav-link' href="#scrollspyHeading1" to="/">Home</Link>
    //     </li>
    //     <li class="nav-item">
    //       <Link class="nav-link" href="#scrollspyHeading2" to="/about">About</Link>
    //     </li>
    //     <li class="nav-item">
    //       <Link class="nav-link" href="#scrollspyHeading3" to="/skill">Skills</Link>
    //     </li>
    //     <li class="nav-item">
    //       <Link class="nav-link" href="#scrollspyHeading4" to="/project">Project</Link>
    //     </li>
    //     <li class="nav-item">
    //       <Link class="nav-link" href="#scrollspyHeading5" to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Navbar;