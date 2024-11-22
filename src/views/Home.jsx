import React, { useRef, useState } from 'react';
import Header from '../components/section/Header';
import About from '../components/section/About';
import Menu from '../components/section/Menu';
import Projects from '../components/section/Projects';
import Contact from '../components/section/Contact';
import Footer from '../components/section/Footer';
import { menuNav } from '../components/data/menu'
import { useEffect } from 'react';
import { Cursor } from "../components/cursor/Cursor";

function Home() {
  const [hover, setHover] = useState(false);
  const moonRef = useRef()
  const [activeMenu, setActiveMenu] = useState(window.location.href.split('/').slice(-1)[0].length > 0 ? window.location.href.split('/').slice(-1)[0] : '#home');
  const [y, setY] = useState(window.scrollY)
  useEffect(()=> {
    setActiveMenu((() => activeMenu))
  }, [])
  setInterval(() => {
    const height = document.documentElement.clientHeight || window.innerHeight;
    if (y < window.scrollY) {
      if (window.scrollY < height) {
        setActiveMenu((() => menuNav[0].url))
      } else if (window.scrollY < 2 * height) {
        setActiveMenu((() => menuNav[1].url))
      } else if (window.scrollY < 3 * height) {
        setActiveMenu((() => menuNav[2].url))
      } else {
        setActiveMenu((() => menuNav[3].url))
      }
    }
  }, 100)
  return (
    <>
      <Cursor hover={hover}></Cursor>
      <div className='body-background'></div>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <About />
      <Projects setHover={setHover}/>
      <Contact exploreVisible={hover}/>
      <Footer activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
    </>
  )
}

export default Home