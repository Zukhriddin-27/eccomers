import { Divider } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { decrProduct, dellItem, icrProduct } from '../../redux/action/index'
import './navbar.css'
const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const [iscard, setIscard] = useState(false)
  const dispatch = useDispatch()

  const handleDellCart = (product) => {
    dispatch(dellItem(product))
  }
  const handleIncrCart = (item) => {
    dispatch(icrProduct(item))
  }
  const handleDecrCart = (item) => {
    dispatch(decrProduct(item))
  }
  return (
    <div className='container'>
      <div className='content'>
        <div className='content-items'>
          <i class='bx bxs-watch'></i>
          <h2 className='brand'>Rolex</h2>
        </div>
        <div className='content-items'>
          {navbar.map(({ path, title, hidden }, index) => {
            return (
              !hidden && (
                <a href={path} className='navLink' key={index.id}>
                  {title}
                </a>
              )
            )
          })}
        </div>
        <div className='content-items'>
          <div className='user'>
            <i class='bx bxs-user-circle'></i>
          </div>
          <div className='card-shop'>
            <i
              class='bx bx-shopping-bag'
              onClick={() => setIscard(!iscard)}
            ></i>
            <div className='product-cart__length'>{state.length}</div>
          </div>
        </div>
      </div>
      <div className={iscard ? 'cart' : 'cart show-cart'}>
        <i className='bi bi-x' onClick={() => setIscard(!iscard)}></i>
        <h2 className='cart-title'>My Cart</h2>
        <div className='cart-container'>
          {state.map((items) => {
            return (
              <>
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
                        onClick={() => handleIncrCart(items.id)}
                      >
                        +
                      </button>
                      <p className='count'>{items.qty}</p>
                      <button
                        className='btn-decr'
                        onClick={() => handleDecrCart(items.id)}
                      >
                        -
                      </button>
                      <i
                        class='bx bxs-trash'
                        onClick={() => handleDellCart(items.id)}
                      ></i>
                    </div>
                  </div>
                </div>
                <Divider />
              </>
            )
          })}
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
