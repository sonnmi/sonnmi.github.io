import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Project from '../Project'
import { projects } from '../data/projects'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Moon from '../Moon';

function Projects( { setHover } ) {
  const [embedVideo, setEmbedVideo] = useState('');
  const [explore, setExplore] = useState('')
  const [curProject, setCurProject] = useState('')
  useEffect(() => {
    if (explore) {
        document.querySelector('.body-background').classList.add('body-explore-on');
    } else {
        document.querySelector('.body-background').classList.remove('body-explore-on');
    }
    return () => {
        document.querySelector('.body-background').classList.remove('body-explore-on');
    };
}, [explore]);
  return (
        <div id='projects' className={"projects__container"}>
            <span>PROJECT</span>
            <div className='projects'>
                {
                    explore ?
                    <div className='explore__container'>
                        <div className='close-btn' /*onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(() => true)}*/ onClick={() => {setHover(false); setExplore(() => '')}}></div>
                        <div className='media__container'>
                            {
                                explore.video ?
                                <iframe
                                    src={`${embedVideo}`}
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    title='video'
                                /> :
                                <div className='images__container'>
                                    <div className='image' style={{backgroundImage: `url(${curProject?.images ? curProject?.images[0] : ''})`}}></div>
                                </div>
                            }
                        </div>
                        <div className='descriptions'>
                            <div className='btns'>
                                {curProject?.github && <a href={curProject.github} target="_blank" rel="noopener noreferrer" className='github'>GitHub</a>}
                            </div>
                            <div className='title'>{curProject?.title}</div>
                             <div className='skills'>{curProject?.skills}</div>
                            {/* <div className='content'> */}
                                <ul className='content' dangerouslySetInnerHTML={{ __html: curProject?.fulldesc }}></ul>
                            {/* </div> */}
                        </div>
                    </div>
                    // embedVideo ?
                    // <div className='explore__container'>
                    //     <iframe
                    //         src={`${embedVideo}`}
                    //         frameborder='0'
                    //         allow='autoplay; encrypted-media'
                    //         title='video'
                    //     />
                    // </div>
                    : <Swiper
                    slidesPerView={3}
                    spaceBetween={45}
                    navigation={true}
                    autoplay={{
                        delay: 500000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 45,
                        },
                        950: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 3,
                            spaceBetween: 45,
                        },
                        1640: {
                            slidesPerView: 4,
                            spaceBetween: 45,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    {projects.map((project, key) => {
                    return (
                      <SwiperSlide key={key}>
                                <div className="video__thumb play__icon">
                        <Project thumbnail={project.thumbnail} video={project.video} title={project.title} images={project.images} fulldesc={project.fulldesc} skills={project.skills} desc={project.desc} explore={project.explore} github={project.github} key={key} setExplore={setExplore} setHover={setHover} setCurProject={setCurProject}></Project>
                     </div>
                      </SwiperSlide>)
                  })}
                </Swiper>
                }
            </div>
        </div>
    )
}

export default Projects