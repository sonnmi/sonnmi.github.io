import React, { useEffect } from 'react'
import { menuNav } from '../data/menu';

function Footer( { activeMenu, setActiveMenu }) {
  // useEffect(()=> {
  //   setActiveMenu(() => activeMenu)
  // }, [activeMenu])
  return (
    <div id='footer' className='footer__container'>
      <div className='highlight__pink'></div>
      <div className='quick__menu'>
        {menuNav.map((nav, key) => {
          return (
            <a key={key} href={nav.url} className='icon__title' onClick={() => setActiveMenu(() => nav.url)}>
              <span className='icon'>{nav.icon}</span>
              <span className='title'>{nav.title}</span>
            </a>
          )
        })}
      </div>
      <p>Yesom Son.<br />
      All rights reserved.</p>
    </div>
  )
}

export default Footer