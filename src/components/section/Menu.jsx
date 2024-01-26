import React from 'react'
import { menuNav } from '../data/menu';
import { ReactComponent as SideSvg } from '../../assets/image/svg/menubar.svg';
import { useState } from 'react';
import { useEffect } from 'react';

function Menu( { activeMenu, setActiveMenu } ) {
  useEffect(()=> {
    setActiveMenu(() => activeMenu)
    console.log(activeMenu)
  }, [activeMenu])
  return (
    <div className="menu__container">
        <SideSvg className='menu__svg'>
        </SideSvg>
        {menuNav.map((nav, key) => {
          return (
            <a href={nav.url} className={`icon ${activeMenu === nav.url ? 'active' : ''}`} key={key} onClick={() => setActiveMenu(() => nav.url)}>
              <svg width="0" height="0">
                <linearGradient id="bghover" r="150%" cx="30%" cy="107%" gradientTransform="rotate(90)">
                  <stop stopColor="#E1FFF6" offset="0" />
                  <stop stopColor="#FFB2F7" offset="0.9" />
                </linearGradient>
              </svg>
              <svg width="0" height="0">
                <linearGradient id="bg" r="150%" cx="30%" cy="107%" gradientTransform="rotate(90)">
                  <stop stopColor="rgba(255, 255, 255, 0.60)" offset="0" />
                  <stop stopColor="rgba(255, 255, 255, 0.20)" offset="0.9" />
                </linearGradient>
              </svg>
              <div>{nav.icon}</div>
            </a>
          )
        })}
</div>
  )
}

export default Menu