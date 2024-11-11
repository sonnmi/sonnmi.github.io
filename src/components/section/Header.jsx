import React from 'react'
import Button from '../Button'
import resume from '../../assets/file/resume.pdf'
import Moon from '../Moon';
import { useEffect } from 'react';


function Header( { activeMenu, setActiveMenu } ) {
  useEffect(()=> {
    setActiveMenu(() => activeMenu)
    console.log(activeMenu)
  }, [activeMenu])
  return (
    <div id='home' className='header__container'>
      <div className='container__content'>
      <div className='header__contents'>
        <div className='header__title'>
          <Moon/>Hi, I am Yesom.
        </div>
        <div className='header__desc'>Aspiring Full-Stack Developer Creating Robust, Scalable Web Applications</div>
        <div className='header__desc'>I build high-performing, user-friendly software that makes a meaningful impact</div>
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
      {/* <div className='tree'></div> */}
      <div className={(activeMenu === "#home" || activeMenu === "#about") ? "star" : "star"}>
            <div className= "star1"></div>
            <div className= "star2"></div>
            <div className= "star3"></div>
            <div className= "star4"></div>
            <div className= "star5"></div>
        </div>
    </div>
  )
}

export default Header