import { Avatar, Drawer, Dropdown } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import useLocalStroge from 'use-local-storage'
import { UserOutlined } from '@ant-design/icons'

import './navbar.css'
import '../../index.css'

import Filter from '../Filter'
import Footer from '../Footer'
import Catalog from '../constanta/categoryLink'
import Setting from '../Settings'
import Store from '../Stores'
import User from '../User'

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart)
  const [theme, setTheme] = useLocalStroge('theme' ? 'dark' : 'light')
  const [isNavbar, setIsNavbar] = useState(false)
  const [isDark, setIsDark] = useState(false)
  // eslint-disable-next-line
  const [isToken, setIsToken] = useState(false)
  const navigate = useNavigate()

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setIsDark(!isDark)
  }
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setIsNavbar(true)
    } else {
      setIsNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  const menu = (
    <>
      <Setting switchTheme={switchTheme} />
    </>
  )
  const user = (
    <>
      <User />
    </>
  )
  const token = localStorage.getItem('token')
  // eslint-disable-next-line

  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className='nav-container' data-theme={theme}>
      <div className='content bg '>
        <div className='content-items'>
          <div className='content-item'>
            <p>0% Muddatli to'lov</p>
            <p>Chegirmalar</p>
            <p>Sayt xaritasi </p>
          </div>
          <div className='content-item'>
            <h3>+998900000000</h3>
            <p>Bizda soting</p>
          </div>
        </div>
      </div>
      <div className={isNavbar ? ' content active scroll-nav' : 'content'}>
        <div className='content-items__nav'>
          <img src='/assets/logo.png' alt='logo.png' />
          <h2 className='brand' onClick={() => navigate('/home')}>
            Rolex
          </h2>
          <div>
            <Catalog isNavbar={isNavbar} />
          </div>

          <Filter isNavbar={isNavbar} />
        </div>

        <div className='content-item svg'>
          <div className='navLink' onClick={() => navigate('/products')}>
            <h4 className={isNavbar ? 'scroll-nav' : 'nav'}>Shop</h4>
          </div>
          <div className='navlink' onClick={() => navigate('/favourite')}>
            <i
              className={isNavbar ? 'scroll-nav bx bx-heart' : 'bx bx-heart '}
            ></i>
          </div>

          <div className='card-shop'>
            <i
              className={
                isNavbar
                  ? 'scroll-nav bx bx-shopping-bag'
                  : 'bx bx-shopping-bag '
              }
              onClick={showDrawer}
            ></i>
            <div className='product-cart__length'>{cart?.length}</div>
          </div>

          <Dropdown
            overlay={menu}
            placement='bottomRight'
            icon
            arrow={{ pointAtCenter: false }}
            zIndex={9999}
          >
            <div className='navlink'>
              <i className='bx bx-cog'></i>
            </div>
          </Dropdown>
          {token ? (
            <Dropdown
              overlay={user}
              placement='bottomRight'
              icon
              arrow={{ pointAtCenter: false }}
              zIndex={9999}
            >
              <Avatar
                style={{
                  backgroundColor: '#ffb32f',
                }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          ) : (
            <i
              class='bx bxs-user-account bx-flip-horizontal bx-burst'
              onClick={() => navigate('/register')}
            ></i>
          )}
        </div>
      </div>
      <Drawer
        title='close'
        placement='right'
        onClose={onClose}
        open={open}
        width={540}
        zIndex={9999}
      >
        <Store />
      </Drawer>

      <Outlet />
      <Footer />
    </div>
  )
}

export default Navbar
