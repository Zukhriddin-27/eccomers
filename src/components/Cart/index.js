import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Breadcrumb, Divider, Empty } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import './style.css'
import Maps from '../Maps'
import {
  decrCart,
  deleteFromCart,
  incerCart,
} from '../../redux/action/cartAction'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [isAdd, setIsAdd] = useState(false)
  const [isCart, setIsCart] = useState(false)

  let total = 0
  const itemTotal = (value) => {
    console.log(total)
    total = parseFloat(total) + parseFloat(value?.price * value?.count)
  }

  const handledelete = (id) => {
    dispatch(deleteFromCart(id))
  }
  const handleDeleteCart = (e) => {
    e.preventDefault()
    localStorage.removeItem('cart')
    window.location.reload()
  }
  const handleDecrCart = (id) => {
    dispatch(decrCart(id))
  }

  const handleIncrCart = (id) => {
    dispatch(incerCart(id))
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsCart(true)
    } else {
      setIsCart(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <div className='cart-container'>
      <div className='shop-cart__container'>
        <h1>Shopping cart</h1>
        <div className='breadcrumb'>
          <Breadcrumb>
            <Breadcrumb.Item href='/home'>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href='/products'>
              <span>Shopping Cart</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className='container'>
        <h2 className='shop-cart__title'>Your cart items</h2>
        <div className='shop-cart__table'>
          {cart.length ? (
            <table>
              <tr>
                <th></th>
                <th>product name</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
                <th></th>
              </tr>

              {cart.map((value) => {
                return (
                  <tr>
                    <td>
                      {/* eslint-disable-next-line */}
                      <img
                        src={value?.image}
                        alt='image.jpeg'
                        className='shop-cart__image'
                      />
                    </td>
                    <td>{value?.title}</td>
                    <td>${value?.price}</td>
                    <td>
                      {!isAdd ? (
                        value.count
                      ) : (
                        <div className='edit-cart__products'>
                          <button
                            className='product-remove'
                            onClick={() => handleDecrCart(value)}
                          >
                            -
                          </button>
                          <div className='product-count'>{value?.count}</div>
                          <button
                            className='product-add'
                            onClick={() => handleIncrCart(value)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </td>
                    <td>${value?.price * value.count}</td>
                    <td>
                      <div className='shop-edit'>
                        <i
                          className='bx bx-x'
                          onClick={() => handledelete(value)}
                        ></i>
                        <i
                          className='bx bx-pencil'
                          onClick={() => setIsAdd(!isAdd)}
                        ></i>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </table>
          ) : (
            <Empty />
          )}
        </div>
        <div className='shop-cart__buttons'>
          <div>
            <button className='shop-clear' onClick={handleDeleteCart}>
              clear shopping cart
            </button>
            <button className='shop-cart'>update shopping cart</button>
          </div>
          <button>continue shopping</button>
        </div>
        <div className='cart-form'>
          <div className='shop-cart__input'>
            <div className='shop-input__item'>
              <h1>Calculate shipping </h1>
              <Divider />

              <input placeholder='State/Country' />
              <input placeholder='Postcode/Zip' />
              <button placeholder='Basic usage'>get a quote</button>
            </div>
            <div className='shop-input__item'>
              <h1>cupon discount </h1>
              <Divider />
              <p>
                <i>Enter your coupon code if you have one. </i>
              </p>
              <input placeholder='Basic usage' />

              <button placeholder='Basic usage'>get a quote</button>
            </div>
          </div>
          <div className={isCart ? 'shop-total' : 'shop-total'}>
            {cart.map(itemTotal)}
            <h4>sub total: $ {total}</h4>
            <h2>
              Grand total: <span>${total} </span>{' '}
            </h2>
            <Divider />
            <button className='check-btn'>Proceed to checkout </button>
            <p>Checkout with Mutilple Adresses</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <Maps />
      </div>
    </div>
  )
}

export default Cart
