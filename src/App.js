import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Skill from "./Routes/Skill";
import LogoLoader from './Components/LogoLoader/LogoLoader';
import { AnimatePresence } from "framer-motion";


const App = () => {
  const [logoLoader, setLogoLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoLoader(!true);
    }, 4600)
      
    return () => clearTimeout(timeout);
  }, [])
  
  return (
     <>
      <AnimatePresence mode="wait">
        {logoLoader ? (<LogoLoader key="logo-loader"/>) : (
          <Routes  key="routes">
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skill" element={<Skill />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        )}
      </AnimatePresence>
     </>
  );
}

export default App;
