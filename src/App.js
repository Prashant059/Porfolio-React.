import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Skill from "./Routes/Skill";


const App = () => {
  
  return (
     <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />}/>
      <Route path="/Skill" element={<Skill />} />
      <Route path="/Project" element={<Project />}/>
      <Route path="/Contact" element={<Contact />}/>
     </Routes>
     </>
  );
}

export default App;
