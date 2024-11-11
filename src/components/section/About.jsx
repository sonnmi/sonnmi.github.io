import React from 'react'

function About() {
  return (
    <div id='about' className='about__container row'>
        <div className='about__desc__container col-6 col-md-10'>
          <span>Education</span>
          <div className='desc__container row'>
            <div className='desc__icon__container col-3'>
              <div className='desc__icon education'></div>
            </div>
            <div className='desc__content col-9'>
              <div className='desc__title'>
                University of Toronto
              </div>
              <div className='desc__period'>
                Computer Science Specialist
              </div>
            </div>
          </div>
          <span>Work Experience</span>
          <div className='desc__container row'>
            <div className='desc__icon__container col-3'>
              <div className='desc__icon exp'></div>
            </div>
            <div className='desc__content col-9'>
              <div className='desc__title'>
                taq - Software Developer Coop
              </div>
              <div className='desc__period'>
                2023 May - 2023 December
              </div>
            </div>
          </div>
        </div>
        <div className='about__profile__container col-4 col-md-10'>
          {/* <div className='introduction'>
            I'm a hands-on developer who thrives on turning imaginative concepts into tangible, efficient code. I am a passionate problem-solver and enjoy the challenge of translating ideas into functional software. 
          </div> */}
          <div className='image__3d'></div>
        </div>
    </div>
  )
}

export default About