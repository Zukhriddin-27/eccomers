import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  decrCart,
  deleteFromCart,
  incerCart,
} from '../../redux/action/cartAction'
import './style.css'
const CartItem = (data) => {
  const value = data.data
  const dispatch = useDispatch()
  const [isAdd, setIsAdd] = useState(false)
  const navigate = useNavigate()

  const handledelete = (id) => {
    dispatch(deleteFromCart(id))
  }

  const handleDecrCart = (id) => {
    dispatch(decrCart(id))
  }

  const handleIncrCart = (id) => {
    dispatch(incerCart(id))
  }
  return (
    <>
      <tr>
        <td>
          {/* eslint-disable-next-line */}
          <img
            src={value?.image}
            alt='image.jpeg'
            className='shop-cart__image'
          />
        </td>
        <td
          onClick={() => navigate(`/products/${value.id}`)}
          className='products-cart__title'
        >
          {value?.title}
        </td>
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
            <i className='bx bx-x' onClick={() => handledelete(value)}></i>
            <i className='bx bx-pencil' onClick={() => setIsAdd(!isAdd)}></i>
          </div>
        </td>
      </tr>
    </>
  )
}

export default CartItem
