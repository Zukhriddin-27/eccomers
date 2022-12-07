import { Divider, Dropdown, Empty, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import {
  UnorderedListOutlined,
  HeartOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { decrProduct, dellItem, icrProduct } from '../../redux/action/index'
import menu from '../constanta/headerLinks/homeLink'
import catalog from '../constanta/categoryLink'
import './navbar.css'
// import useSearch from '../../hooks/useSearch'
import { uzeReplace } from '../../hooks/useReplace.js'
const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const [iscard, setIscard] = useState(false)
  const [isCatalog, setIsCatalog] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  // const query = useSearch()

  const handleSearch = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
    console.log(value)
  }

  const handleDellCart = (product) => {
    dispatch(dellItem(product))
  }

  const handleIncrCart = (item) => {
    dispatch(icrProduct(item))
  }

  const handleDecrCart = (item) => {
    dispatch(decrProduct(item))
  }

  let total = 0
  const itemTotal = (item) => {
    total = parseFloat(total) + parseFloat(item.price * item.qty)
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
          <h2 className='brand'>Rolex</h2>
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
            <i class='bx bx-search-alt-2'></i>
            <input
              placeholder='Search'
              className='search'
              name='search'
              onChange={handleSearch}
            />
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
          <div className='navlink'>
            <i class='bx bx-heart'></i>
          </div>
          <div className='card-shop'>
            <i
              class='bx bx-shopping-bag'
              onClick={() => setIscard(!iscard)}
            ></i>
            <div className='product-cart__length'>{state.length}</div>
          </div>
          <div className='user-account'>
            <i class='bx bx-user'></i>
          </div>
        </div>
      </div>
      <div className={iscard ? 'cart' : 'cart show-cart'}>
        <i className='bi bi-x' onClick={() => setIscard(!iscard)}></i>
        <h2 className='cart-title'>My Cart</h2>
        <div className='cart-container'>
          {state.length !== 0 ? (
            state.map((items) => {
              return (
                <div key={items.id}>
                  <div className='cart-content'>
                    <div className='cart-content__items'>
                      <img
                        src={items.image}
                        alt='cart.png'
                        className='cart-image__add'
                      />
                    </div>

                    <div className='cart-content__items'>
                      <p className='cart-content__title'>{items.title}</p>
                      <p className='cart-price'>${items.price}</p>
                      <div className='cart-content__count'>
                        <button
                          className='btn-icr'
                          onClick={() => handleIncrCart(items)}
                        >
                          +
                        </button>
                        <p className='count'>{items.qty}</p>
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

        {state.length !== 0 ? (
          <>
            <div className='all-products__price'>
              <div className='product-length'>{state.length} items </div>
              {state.map(itemTotal)}
              <div className='all-product__price'>${total}</div>
            </div>
            <button className='check' onClick={() => toCart()}>
              Proceed To Checkout
            </button>
          </>
        ) : null}
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
