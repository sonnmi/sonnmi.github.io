import React from 'react'
import Button from '../Button'
import resume from '../../assets/file/resume.pdf'

function Header() {
  return (
    <div id='home' className='header__container'>
      <div className='header__contents'>
        <div className='header__title'>Hi, I am Yesom.</div>
        <div className='header__desc'>I am a full-stack developer.</div>
        <div className='header__desc'>Lorem Is dang won wood slivery ubom</div>
      </div>
      <div className='header__btns'>
        <a href={resume} download='yesomSon_resume' className='resume__btn'>
          <Button className='download__cv generate-button'>
              Download CV
          </Button>
        </a>
        <a href='#footer'>
        <Button className='learn__more generate-button'>Learn More</Button>
        </a>
      </div>
    </div>
  )
}

export default Header