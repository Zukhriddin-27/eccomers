import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/action/cartAction'
import {
  addToFavourite,
  deleteFromFavourite,
} from '../../redux/action/favouriteActions'
import './style.css'
import { message } from 'antd'

const CartProduct = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const [isFavourite, setIsFavourite] = useState(false)
  // eslint-disable-next-line
  const [isAdd, setIsAdd] = useState(false)
  const { favourite } = useSelector((items) => items.favourite)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const handleAddCart = (product) => {
    if (token) {
      dispatch(addToCart(product))
      setIsAdd(true)
    } else if (!token) {
      error('Please, Create an account ')
      setTimeout(() => {
        navigate('/register')
      }, 2000)
    } else {
      setIsAdd(false)
    }
  }
  const error = (e) => {
    message.warning(e)
  }

  const handleFavourite = (fav) => {
    const favoLocal = favourite.find((item) => item.id === fav.id)
    if (favoLocal && token) {
      dispatch(deleteFromFavourite(fav))
      setIsFavourite(true)
    } else if (!token) {
      error('Please,Create an account ')
      setTimeout(() => {
        navigate('/register')
      }, 2000)
    } else {
      dispatch(addToFavourite(fav))
      setIsFavourite(true)
    }
  }

  const onSelect = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <div className='products-content__items'>
      <div className='cart_products'>
        <div className='products-image'>
          <img src={data.image} alt='product.jpg' className='products-image' />
        </div>
        <div className='prodcuts-settings'>
          <div>
            <div className='bg-heart'>
              <i class='bx bx-expand-alt'></i>
            </div>
          </div>
          <div>
            <div className='bg-heart '>
              <i
                className={
                  isFavourite
                    ? 'bx bx-heart pro-heart__add'
                    : 'bx bx-heart pro-heart'
                }
                onClick={() => handleFavourite(data)}
              ></i>
            </div>
          </div>
          <div>
            <div className='bg-heart' onClick={() => handleAddCart(data)}>
              <i className='bx bx-cart-add cart-add'></i>
            </div>
          </div>
        </div>
        <div className='products-content__item'>
          <p className='product-title' onClick={() => onSelect(data?.id)}>
            {data?.title.slice(0, 30)}...
          </p>
          <p className='product-price'>${data?.price}</p>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
