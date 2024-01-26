import React from 'react'

function About() {
  return (
    <div id='about' className='about__container'>
      <div className='about__desc__container'>
        <span>Education</span>
        <div className='desc__container'>
          <div className='desc__icon education'></div>
          <div className='desc__content'>
            <div className='desc__title'>
              University of Toronto, Scarborough
            </div>
            <div className='desc__period'>
              Computer Science Specialist Program
            </div>
          </div>
        </div>
        <span>Work Experience</span>
        <div className='desc__container'>
          <div className='desc__icon exp'></div>
          <div className='desc__content'>
            <div className='desc__title'>
              taq - Coop Junior Software Developer
            </div>
            <div className='desc__period'>
              2023 May - 2023 December
            </div>
          </div>
        </div>
        <span>Main Skills</span>
        <div className='desc__container'>
          <div className='about__skills'>
            
          </div>
        </div>
      </div>
      <div className='about__profile__container'>
        <div className='introduction'>
          I'm a hands-on developer who thrives on turning imaginative concepts into tangible, efficient code. I am a passionate problem-solver and enjoy the challenge of translating ideas into functional software. 
        </div>
        <div className='image__3d'></div>
      </div>
    </div>
  )
}

export default About