import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Breadcrumb, Divider, Empty } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import './style.css'
import Maps from '../Maps/index'

import CartItem from '../CartItem'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart)
  const [isCart, setIsCart] = useState(false)

  let total = 0
  const itemTotal = (value) => {
    total = parseFloat(total) + parseFloat(value?.price * value?.count)
  }

  const handleDeleteCart = () => {
    localStorage.removeItem('cart')
    window.location.reload()
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
        {cart.length ? (
          <>
            <div className='shop-cart__table'>
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
                  return <CartItem data={value} key={value.id} />
                })}
              </table>
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

                  <input placeholder='FirstName' />
                  <input placeholder='Postcode/Zip' />
                </div>
                <div className='shop-input__item'>
                  <h1>cupon discount </h1>
                  <Divider />
                  <p>
                    <i>Enter your coupon code if you have one. </i>
                  </p>
                  <input placeholder='Promo code' />
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
            <div>
              <Maps />
            </div>
          </>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  )
}

export default Cart
