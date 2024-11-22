import React from 'react'
import Line from './Line'
import { useState } from 'react'

import playButton from "../assets/image/play_btn_hover.png"

function Project({ thumbnail, images, video, title, skills, desc, fulldesc, explore, github, setExplore, setEmbedVideo, setHover, setCurProject }) {
  const thumbnailCSS = {
    backgroundImage: `url(${thumbnail}`
  }
  return (
    <div className='project'>
      <div className={`thumbnail play__icon ${explore ? "cursor" : ''}`}>
        {(!video && explore) ? <div className='explore__btn' onClick={() => {setCurProject(() => ({video: video, desc: desc, fulldesc: fulldesc, skills: skills, images: images, title: title, github: github})); setHover(true); setExplore(() => {return {video: false, desc: ''}})}}>Explore</div> : ''}
        {video ?
          <div className='video__image'>
            <div className='play__btn' onClick={() => setEmbedVideo(() => video)}></div>
            <video
              muted="muted"
              width="100%"
              className='video__image'
              poster=""
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src={`${video}`} >
            </video>
          </div> : (thumbnail ? <div className='thumnail__image' style={thumbnailCSS}></div>: "No Thumnail Available")}
      </div>
      <div className='content'>
        <div className='title'>{title}</div>
        <Line></Line>
        <div className='skills'>{skills}</div>
        <div className={`desc ${explore ? 'explore' : ''}`}>{desc}</div>
        {/* <div className='project__btns'> */}
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className='project__btn github__btn'>GitHub</a>}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Project