import React from 'react'
import { Link } from 'react-router-dom';
import Project from '../Project'
import { projects } from '../data/projects'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

function Projects() {
  return (
        <div id='projects' className='projects__container'>
            <span>PROJECT</span>
            <div className='projects'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={45}
                    navigation={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 45,
                        },
                        1240: {
                            slidesPerView: 3,
                            spaceBetween: 45,
                        },
                        1640: {
                            slidesPerView: 3,
                            spaceBetween: 45,
                        },
                        2000: {
                            slidesPerView: 3,
                            spaceBetween: 45,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    {projects.map((project, key) => {
                    return (
                      <SwiperSlide key={key}>
                                <div className="video__thumb play__icon">
                        <Project thumbnail={project.thumbnail} video={project.video} title={project.title} skills={project.skills} desc={project.desc} explore={project.explore} key={key}></Project>
                     </div>
                      </SwiperSlide>)
                  })}
                </Swiper>
            </div>
        </div>
    )
}

export default Projects