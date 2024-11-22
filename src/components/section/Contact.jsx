import { React, useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import Moon from '../Moon';

function Contact( { exploreVisible } ) {
  const [name, setName] = useState('');
  const sendMessage = (e) => {
    e.preventDefault()
    console.log(name)
  }
  return (
    <div id='contact' className={`contact__container ${exploreVisible ? "explore__visible" : ''}`}>
      <div className='contact__container__contents'>
        <div className='get__in__touch__container'>
          <Moon></Moon>
          <span>Get in touch!</span>
          <h2>Contact Me</h2>
          <p>
            I'd love to connect with you! <br />Feel free to reach out using the links below.
          </p>
        </div>
        <div className='method__container'>
          <div className='method'>
            <a href = "mailto: yes.som.son@gmail.com" className='icon__title'>
                <span className='icon email'><MdOutlineMail size={20}/></span>
            </a>
          </div>
          <div className='method'>
            <a href = "https://www.linkedin.com/in/yesom-son/" className='icon__title'>
                <span className='icon LinkedIn'><FaLinkedinIn size={20}/></span>
            </a>
          </div>
          <div className='method'>
            <a href = "https://github.com/sonnmi" className='icon__title'>
                <span className='icon github'><TbBrandGithubFilled size={24}/></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact