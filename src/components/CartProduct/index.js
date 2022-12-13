import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/action/cartAction'
import {
  addToFavourite,
  deleteFromFavourite,
} from '../../redux/action/favouriteActions'
import './style.css'
const CartProduct = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const [isFavourite, setIsFavourite] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const { cart } = useSelector((items) => items.cart)
  // const { favourite } = useSelector((items) => items.favourite)

  const navigate = useNavigate()

  const handleAddCart = (product) => {
    if (cart) {
      dispatch(addToCart(product))
      setIsAdd(true)
    } else {
      setIsAdd(false)
    }
  }

  const handleFavourite = (fav) => {
    const favourite = JSON.parse(localStorage.getItem('favourite'))
    const favoLocal = favourite.find((item) => item.id === fav.id)
    if (favoLocal) {
      dispatch(deleteFromFavourite(fav))
      setIsFavourite(true)
    } else {
      dispatch(addToFavourite(fav))
      setIsFavourite(true)
    }
  }

  const onSelect = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <div className='cart_products'>
      <div className='bg-heart '></div>
      <i
        class={
          isFavourite ? 'bx bx-heart pro-heart__add' : 'bx bx-heart pro-heart'
        }
        onClick={() => handleFavourite(data)}
      ></i>
      <div className='products-image'>
        <img
          src={data.images[1]}
          alt='product.jpg'
          className='products-image'
        />
      </div>
      <div className='products-content__item'>
        <p className='product-title' onClick={() => onSelect(data?.id)}>
          {data?.title}
        </p>
        <p className='product-price'>${data?.price}</p>

        <button className='  btn-cart__add' onClick={() => handleAddCart(data)}>
          <i class={isAdd ? 'bx bx-cart-add cart-add' : 'bx bx-cart-add '}></i>
        </button>
        {/* <div className={isAdd ? 'product-add__remove' : 'add_none'}>
          <button
            className='product-remove'
            onClick={() => handleDecrCart(data)}
          >
            -
          </button>
          <div className='product-count'>{isAdd ? cartCount?.count : 0}</div>
          <button className='product-add' onClick={() => handleIncrCart(data)}>
            +
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default CartProduct
