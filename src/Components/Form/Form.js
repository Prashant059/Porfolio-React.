import "./Form.modules.css";
import React, {useRef, useState} from 'react'
import tick from "../../assets/tick/404-tick.png";
import emailjs from '@emailjs/browser';

const Form = () => {
  const[data, setData] = useState({name:"", email:"", subject:"", message:""});
  console.log(data.name);
  console.log(data.email);
  console.log(data);

  const popup = document.getElementById("popup");
  
  const openpopup = () => {
        popup.classList.add("open-popup");
  };
  const closepopup = () => {
    popup.classList.remove("open-popup");
  };
    
  
  let form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mf2zg2j', 'template_uagmm59', form.current, 'JviIYNmngO9F0sib8')
      .then((result) => {
          console.log(result.text);
          console.log(result);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
          console.log("message not send");
      });
    
      e.target.reset();  
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail} >
            <label>Your Name</label>
            <input type="text" name="from_name" onChange={ (e) => setData(e.target.value)}/>

            <label>Email</label>
            <input type="email" name="from_email" onChange={ (e) => setData(e.target.value)}/>

            <label>Subject</label>
            <input type="text" name="from_subject" onChange={ (e) => setData(e.target.value)} />

            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message" onChange={ (e) => setData(e.target.value)} />

            <button className="btn" value="send" onClick={openpopup}>Submit</button>               
        </form>

        <div className="popup" id="popup"> 
            <img src={tick} alt="img of success message" />
            <h2>Thank you!</h2>
            <p>Your details has been succesfully send. thanks!</p>
            <button type="button" onClick={closepopup}>OK</button>
        </div>
    </div>
  )
}

export default Form;