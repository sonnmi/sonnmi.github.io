import React from 'react'
import Line from './Line'

function Project({ thumbnail, video, title, skills, desc, explore }) {
  return (
    <div className='project'>
      <div className='thumbnail play__icon'>{thumbnail}</div>
      {/* <div className='video'>{video}</div> */}
      <div className='content'>
        <div className='title'>{title}</div>
        <Line></Line>
        <div className='skills'>{skills}</div>
        <div className={`desc ${explore ? 'explore' : ''}`}>{desc}</div>
        {explore && <div className='explore__btn'>Explore</div>}
      </div>
    </div>
  )
}

export default Project