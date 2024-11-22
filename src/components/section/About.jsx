import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

function About() {
  
  const [firstDivVisible, setFirstDivVisible] = useState(false);
  const [secondDivVisible, setSecondDivVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      const firstDivOffset = document.getElementById("first-div").offsetTop;
      const secondDivOffset = document.getElementById("second-div").offsetTop;

      if (scrollPosition > firstDivOffset + 100) {
        setFirstDivVisible(true);
      }

      if (scrollPosition > secondDivOffset + 100) {
        setSecondDivVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div id='about' className='about__container row'>
        <div className='about__desc__container col-6 col-md-10'>
          <span>Education</span>
          <motion.div
            id="first-div"
            initial="hidden"
            animate={firstDivVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
            className='desc__container row'>
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
          </motion.div>
          <span>Work Experience</span>
          <motion.div
            id="second-div"
            initial="hidden"
            animate={secondDivVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
            className='desc__container row'>
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
          </motion.div>
        </div>
        <div className='about__profile__container col-4 col-md-10'>
          <div className="content-container">
            <div className="introduction">
              <h2>Introduction</h2>
              <p>
                I am a passionate developer with expertise in full-stack development. 
                I aim to deliver intuitive, scalable, and user-friendly web applications.
              </p>
            </div>
            <div className="skills">
              <h2>Top Skills</h2>
                <div className="skill-item">
                  <span>JavaScript</span>
                  <div className="progress-bar"><div className="progress" style={{width: '94%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Node.js</span>
                  <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>React.js</span>
                  <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Angular</span>
                  <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About