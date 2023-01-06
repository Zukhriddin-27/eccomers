import { Divider, Empty } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  decrCart,
  deleteFromCart,
  incerCart,
} from '../../redux/action/cartAction'
import './style.css'

const Store = () => {
  const { cart } = useSelector((state) => state.cart)
  // eslint-disable-next-line
  const [iscard, setIscard] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const toCart = ({ isNavbar }) => {
    navigate('/cart')
    setIscard(false)
  }
  return (
    <>
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
    </>
  )
}

export default Store
