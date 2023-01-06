import { Divider } from 'antd'
import React, { useState } from 'react'
import './style.css'

const Setting = ({ switchTheme }) => {
  //eslint-disable-next-line
  const [isDark, setIsDark] = useState(false)

  return (
    <div>
      <div className='content-home__link'>
        <h2 className='title'>Select language</h2>
        <div className='content-home__language'>
          {/* eslint-disable-next-line */}
          <img src='https://jthemes.net/themes/f-html/logancee/assets/img/common/flags/flag-1.png' />
          {/* eslint-disable-next-line */}
          <img src='https://jthemes.net/themes/f-html/logancee/assets/img/common/flags/flag-2.png' />
          {/* eslint-disable-next-line */}
          <img src='https://jthemes.net/themes/f-html/logancee/assets/img/common/flags/flag-3.png' />
        </div>
        <Divider />
        <h2 className='title'>Select currency</h2>
        <div className='content-home__language'>
          <div className='sub-list'>
            <i className='bx bx-dollar'></i>
            <i className='bx bx-euro'></i>
            <i className='bx bx-ruble'></i>
          </div>
        </div>
        <Divider />
        <h2 className='title'>Dark Mode</h2>
        <div className='navlink' onClick={switchTheme}>
          <i className={isDark ? 'scroll-nav bx bx-moon' : ' bx bx-sun'}></i>
        </div>
      </div>
    </div>
  )
}

export default Setting
