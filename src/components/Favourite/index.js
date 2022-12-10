import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Loading from '../Loading'
import { deleteFromFavourite } from '../../redux/action/favouriteActions'
import { addToCart } from '../../redux/action/cartAction'

const Header = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { favourite } = useSelector((state) => state.favourite)

  const handleaddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleDeleteFavourite = (product) => {
    dispatch(deleteFromFavourite(product))
  }

  const onSelect = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <div className='product-container'>
      <div className='content-title'>Favourite</div>
      <div className='content-subTitle'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ad
        totam, et alias dolorum harum explicabo, earum saepe est sit commodi
        provident velit!
      </div>
      <div className='location'>
        <Breadcrumb>
          <Breadcrumb.Item href='/home'>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href='/products'>
            <span>Favourite</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='products-content'>
        {isLoading ? (
          <Loading />
        ) : (
          favourite.map((items) => {
            return (
              <div>
                <div className='products-content__items'>
                  <div className='bg-heart'></div>
                  <i
                    class='bx bx-heart pro-heart '
                    onClick={() => handleDeleteFavourite(items)}
                  ></i>
                  <img src={items.images[1]} alt='product.jpg' />
                  <div className='products-content__item'>
                    <p
                      className='product-title'
                      onClick={() => onSelect(items.id)}
                    >
                      {items.title}
                    </p>
                    <p className='product-price'>${items.price}</p>

                    <button
                      className='btn-cart__add'
                      onClick={() => handleaddToCart(items)}
                    >
                      <i class='bx bx-cart-add'></i>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
      {/* <Pagination defaultCurrent={1} total={200} />; */}
    </div>
  )
}

export default Header
