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
  // eslint-disable-next-line
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
    <div className='products-content__items'>
      <div className='cart_products'>
        <div className='bg-heart '></div>
        <i
          className={
            isFavourite ? 'bx bx-heart pro-heart__add' : 'bx bx-heart pro-heart'
          }
          onClick={() => handleFavourite(data)}
        ></i>
        <div className='products-image'>
          <img src={data.image} alt='product.jpg' className='products-image' />
        </div>
        <div className='products-content__item'>
          <p className='product-title' onClick={() => onSelect(data?.id)}>
            {data?.title}
          </p>
          <p className='product-price'>${data?.price}</p>

          <button
            className='  btn-cart__add'
            onClick={() => handleAddCart(data)}
          >
            <i className='bx bx-cart-add cart-add'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
