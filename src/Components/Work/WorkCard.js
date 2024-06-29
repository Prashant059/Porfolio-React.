import { NavLink } from "react-router-dom";
import "./WorkCard.modules.css";

import React from 'react'

const WorkCard = (props) => {
  console.log(props);
  return (
    <div className="project-card container-fluid text-center">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="project-title">{props.title}</h2>

      <div className="project-content">
        <div className="pro-details">
          <p>{props.text}</p>
        </div>
        <div className="pro-tech">
          <p>{props.tech["1st"]}</p>
          <p>{props.tech["2nd"]}</p>
          <p>{props.tech["3rd"]}</p>
          <p>{props.tech["4th"]}</p>
          <p>{props.tech["5th"]}</p>
          <p>{props.tech["6th"]}</p>
        </div>
        <div className="pro-btns">
          <NavLink className="btn" to={props.view}>
            View
          </NavLink>
          <NavLink className="btn" to={props.source}>
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;