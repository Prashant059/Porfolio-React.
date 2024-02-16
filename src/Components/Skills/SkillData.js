import React from 'react'
import '../Skills/SkillData.modules.css';
import html from '../../assets/Skills/icons8-html-logo-240.png';
import css from '../../assets/Skills/icons8-css-logo-400.png';
import JavaScript from '../../assets/Skills/icons8-javascript-480.png';
import react from '../../assets/Skills/icons8-react-400.png';
import github from '../../assets/Skills/icons8-github-500.png';
import firebase from '../../assets/Skills/icons8-firebase-480.png';
import redux from '../../assets/Skills/icons8-redux-480.png';

const SkillData = () => {
  return (
    <div>
      <header>
        <h1>SKILLS</h1>
      </header>
      <div className='imgs'>
        <div className='skills_img'>
          <img src={html} alt='html_logo' />
        </div>
        <div className='skills_img'>
          <img src={css} alt='css_logo' />
        </div>
        <div className='skills_img'>
          <img src={JavaScript} alt='javascript_logo' />
        </div>
        <div className='skills_img'>
          <img src={react} alt='react_logo' />
        </div>
        <div className='skills_img'>
          <img src={github} alt='github_logo' />
        </div>
        <div className='skills_img'>
          <img src={firebase} alt='firebase_logo' />
        </div>
        <div className='skills_img'>
          <img src={redux} alt='firebase_logo' />
        </div>
      </div>
    </div>
  )
}

export default SkillData;