import "./AboutContent.modules.css";
import { Link } from 'react-router-dom'
import React1 from "../../assets/Img/React1.jpg"
import React2 from "../../assets/Img/React2.jpg"
import Resume from "../../assets/Resume/Prashant_resume.pdf"

const AboutContent = () => {

    const downloadCV = () => {
        // Create a dummy link element
        const link = document.createElement('a');
    
        // Set the download attribute with the desired file name
        link.download = Resume;
    
        // Get the correct path to your CV file in the public folder
        const cvFilePath = process.env.PUBLIC_URL + Resume;
    
        // Replace the href value with the path to your CV file
        link.href = cvFilePath;
    
        // Append the link to the body
        document.body.appendChild(link);
    
        // Trigger a click event to start the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
      };
    

  return (
    <div className="about">
        <div className="left">
            <h1>Who I am ?</h1>
              <div className="owl-carousel text-rotation">
                  <div className="item">
                      <h4>Frontend-developer</h4>
                  </div>

                  <div className="item">
                      <h4>Web Designer</h4>
                  </div>
              </div>
              <p>I am Prashant Randive, a passionate React Developer from Nagpur, Maharashtra India. Bringing you programming and web-development from the future. My expertise is developing next-level website and web applications including full responsiveness.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
                <button className="btn" onClick={downloadCV}>Download CV</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img className="img" src={React1} alt="react-logo"/>
                </div>

                <div className="img-stack bottom">
                    <img className="img" src={React2} alt="react-logo2" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent