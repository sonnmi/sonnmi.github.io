import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

function contact() {
  return (
    <div id='contact' className='contact__container'>
      <div className='contact__content__container'>
        <span>Contact me!</span>
        <div className='contact__3d__image'></div>
      </div>
        <div className='get__in__touch__container'>
          <p>Get in touch!<br/>
            I would love to speak with you.<br/> 
            Feel free to send me an email! <br/><br/><br/>
          </p>
            Please select the method you prefer.
          <a href = "mailto: yes.som.son@gmail.com" className='icon__title'>
              <span className='email'><MdOutlineMail /></span>
              <span className='title'>yes.som.son@gmail.com</span>
          </a>
          <a href = "mailto: yes.som.son@gmail.com" className='icon__title'>
              <span className='LinkedIn'><FaLinkedin /></span>
              <span className='title'>www.linkedin.com/in/yesom-son</span>
          </a>
          <div className='desc__container'></div>
        </div>
      </div>
  )
}

export default contact