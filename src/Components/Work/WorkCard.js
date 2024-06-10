import { NavLink } from "react-router-dom";
import "./WorkCard.modules.css";

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <NavLink className="btn" to={props.view}>View</NavLink>
        <NavLink className="btn" to={props.source}>Source</NavLink>
      </div>
    </div>
  )
}

export default WorkCard;