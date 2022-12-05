import { Divider, Dropdown, Empty } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { decrProduct, dellItem, icrProduct } from '../../redux/action/index'
// import menu from '../../headerLinks/homeLink'
import './navbar.css'
const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const [iscard, setIscard] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const navigate = useNavigate()
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
  let total = 0
  const itemTotal = (item) => {
    total = parseFloat(total) + parseFloat(item.price * item.qty)
  }
  const toCart = () => {
    navigate('/cart')
    setIscard(false)
  }
  return (
    <div>
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
          <div className='search-logo'>
            <i
              class='bx bx-search-alt-2'
              onClick={() => setIsSearch(!isSearch)}
            ></i>
            <input
              placeholder='Search'
              className={!isSearch ? 'search' : 'search-active  search'}
            />
          </div>
          <div className='card-shop'>
            <i
              class='bx bx-shopping-bag'
              onClick={() => setIscard(!iscard)}
            ></i>
            <div className='product-cart__length'>{state.length}</div>
          </div>
          <i class='bx bx-cog'></i>
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
