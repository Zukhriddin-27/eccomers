import { Divider, Dropdown, Empty } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import useLocalStroge from 'use-local-storage'

import menu from '../constanta/headerLinks/homeLink'
import './navbar.css'
import '../../index.css'
import {
  decrCart,
  deleteFromCart,
  incerCart,
} from '../../redux/action/cartAction'
import Filter from '../Filter'
import Footer from '../Footer'
import Catalog from '../constanta/categoryLink'

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart)
  const [iscard, setIscard] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [theme, setTheme] = useLocalStroge('theme' ? 'dark' : 'light')
  const [isNavbar, setIsNavbar] = useState(false)

  // const handleSearch = ({ target: { name, value } }) => {
  //   navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  //   console.log(value)
  // }

  const handleDellCart = (product) => {
    dispatch(deleteFromCart(product))
  }

  const handleIncrCart = (item) => {
    dispatch(incerCart(item))
  }

  const handleDecrCart = (item) => {
    dispatch(decrCart(item))
  }

  let total = 0
  const itemTotal = (item) => {
    total = parseFloat(total) + parseFloat(item?.price * item?.count)
  }

  const toCart = () => {
    navigate('/cart')
    setIscard(false)
  }

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setIsNavbar(true)
    } else {
      setIsNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

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
            <i className='bx bx-moon' onClick={switchTheme}></i>
            <Dropdown
              overlay={menu}
              placement='bottomRight'
              icon
              arrow={{ pointAtCenter: false }}
              trigger='click'
            >
              <div className='navlink'>
                <i className='bx bx-cog'></i>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className={isNavbar ? ' content active scroll-nav' : 'content  '}>
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
            <h4 className={isNavbar ? 'scroll-nav' : 'nav'}>All</h4>
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
              onClick={() => setIscard(!iscard)}
            ></i>
            <div className='product-cart__length'>{cart?.length}</div>
          </div>
          <div className='user-account' onClick={() => navigate('/register')}>
            <i
              className={isNavbar ? 'scroll-nav bx bx-user' : 'bx bx-user'}
            ></i>
          </div>
        </div>
      </div>
      <div className={iscard ? 'cart' : 'cart show-cart'}>
        <i className='bi bi-x' onClick={() => setIscard(!iscard)}></i>
        <h2 className='cart-title'>My Cart</h2>
        <div className='cart-container'>
          {cart?.length !== 0 ? (
            cart?.map((items) => {
              return (
                <div key={items?.id || 0}>
                  <div className='cart-content'>
                    <div className='cart-content__items'>
                      <img
                        src={items?.image || 0}
                        alt='cart.png'
                        className='cart-image__add'
                      />
                    </div>

                    <div className='cart-content__items'>
                      <p className='cart-content__title'>{items?.title || 0}</p>
                      <p className='cart-price'>${items?.price}</p>
                      <div className='cart-content__count'>
                        <button
                          className='btn-icr'
                          onClick={() => handleIncrCart(items)}
                        >
                          +
                        </button>
                        <p className='count'>{items?.count || 0}</p>
                        <button
                          className='btn-decr'
                          onClick={() => handleDecrCart(items)}
                        >
                          -
                        </button>
                        <i
                          className='bx bxs-trash'
                          onClick={() => handleDellCart(items)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>
              )
            })
          ) : (
            <Empty />
          )}
        </div>

        {cart.length !== 0 ? (
          <>
            <div className='all-products__price'>
              <div className='product-length'>{cart?.length} items </div>
              {cart.map(itemTotal)}
              <div className='all-product__price'>${total}</div>
            </div>
            <button className='check' onClick={toCart}>
              Proceed To Checkout
            </button>
          </>
        ) : null}
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Navbar
