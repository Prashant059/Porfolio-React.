import "./Footer.modules.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { UpSquareTwoTone } from '@ant-design/icons'

import React from 'react'

const Footer = () => {

  const onTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Nagpur, Maharastra.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
              +91-8295537372
            </h4>
          </div>

          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              prashant.randive059@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Social Media Handles</h4>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/prashant-randive-928921277/"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/Prashant059"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://twitter.com/59prashant"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="below">
        <div className="scrollBtn" onClick={onTop}>
          <UpSquareTwoTone style={{ fontSize: "30px", padding: "10px 20px" }} />
        </div>
      </div>
      <div className="below_desc">
        <div className="mark">
          <h5>© Copyright Prashant Randive. All right reserved</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;