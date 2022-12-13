import { Divider, Dropdown, Empty } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { UnorderedListOutlined, CloseOutlined } from '@ant-design/icons'
import menu from '../constanta/headerLinks/homeLink'
import catalog from '../constanta/categoryLink'
import './navbar.css'
import useSearch from '../../hooks/useSearch'
import { uzeReplace } from '../../hooks/useReplace.js'
import {
  decrCart,
  deleteFromCart,
  incerCart,
} from '../../redux/action/cartAction'
import Filter from '../Filter'
import Footer from '../Footer'

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart)
  console.log(cart, 'cart')
  const [iscard, setIscard] = useState(false)
  const [isCatalog, setIsCatalog] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const handleSearch = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
    console.log(value)
  }

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
    navigate('/products')
    setIscard(false)
  }
  return (
    <div>
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
            <Dropdown
              overlay={menu}
              placement='bottomRight'
              icon
              arrow={{ pointAtCenter: false }}
              trigger='click'
            >
              <div className='navlink'>
                <i class='bx bx-cog'></i>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className='content '>
        <div className='content-items__nav'>
          <i class='bx bxs-watch'></i>
          <h2 className='brand' onClick={() => navigate('/home')}>
            Rolex
          </h2>
          <div>
            <Dropdown
              overlay={catalog}
              placement='bottomRight'
              icon
              arrow={{ pointAtCenter: false }}
              trigger='click'
            >
              <div
                onClick={() => setIsCatalog(!isCatalog)}
                className='brand-name'
              >
                {!isCatalog ? <UnorderedListOutlined /> : <CloseOutlined />}
                <h4>Katalog</h4>
              </div>
            </Dropdown>
          </div>

          <div className='search-logo'>
            <Filter />
          </div>
        </div>
        {/* <div className='content-item__nav'>
         {navbar.map(({ path, title, hidden }, index) => {
            return (
              !hidden && (
                <a href={path} className='navLink' key={index.id}>
                  {title}
                </a>
              )
            )
          })} 
        </div> */}
        <div className='content-item'>
          <div className='navLink' onClick={() => toCart()}>
            <h4>All</h4>
          </div>
          <div className='navlink' onClick={() => navigate('/favourite')}>
            <i class='bx bx-heart'></i>
          </div>
          <div className='card-shop'>
            <i
              class='bx bx-shopping-bag'
              onClick={() => setIscard(!iscard)}
            ></i>
            <div className='product-cart__length'>{cart?.length}</div>
          </div>
          <div className='user-account' onClick={() => navigate('/register')}>
            <i class='bx bx-user'></i>
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
                        src={items?.images[1] || 0}
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
                          class='bx bxs-trash'
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
              <div className='product-length'>{cart.length} items </div>
              {cart.map(itemTotal)}
              <div className='all-product__price'>${total}</div>
            </div>
            <button className='check' onClick={() => toCart()}>
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
