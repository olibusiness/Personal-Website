import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'

function Contact () {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w5rbxhr', 'template_hl48hpo', form.current, '71DOkay6Wm-EsbU_N')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <div className='contact-container' id='contact'>
        <h2 className='contact-title'>Contact</h2>

      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> 
      <br/>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <br/>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <br/>
      <textarea name="message" />
      <br/>
      <input type="submit" value="Send" className='submit'/>
    </form>
        </div>
    )
}

export default Contact;