import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import Project from '../Project'
import { projects } from '../data/projects'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Moon from '../Moon';

function Projects() {
  const [embedVideo, setEmbedVideo] = useState('');
  return (
        <div id='projects' className='projects__container'>
            <Moon/>
            <span>PROJECT</span>
            <div className='projects'>
                {
                    embedVideo ?
                    <div className='video__container'>
                        <iframe
                            src={`${embedVideo}`}
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            title='video'
                        />
                    </div>
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
                        <Project thumbnail={project.thumbnail} video={project.video} title={project.title} skills={project.skills} desc={project.desc} explore={project.explore} github={project.github} key={key} setEmbedVideo={setEmbedVideo}></Project>
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