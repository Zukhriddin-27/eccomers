import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Pagination, Skeleton } from 'antd'
import Loading from '../Loading'
import uzeReplace from '../../hooks/useReplace'
import { useQuery } from 'react-query'
import { addToFavourite } from '../../redux/action/favouriteActions'
import { addToCart } from '../../redux/action/cartAction'

const Header = () => {
  const { id } = useParams()
  const location = useLocation()
  console.log(id)
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=0&offset=20
    `).then((res) => res.json())
  )
  const dispatch = useDispatch()
  const { category } = useParams()
  const navigate = useNavigate()
  console.log(data)
  // const handleChange = ({ target: { limit, defaultCurrent } }) => {
  //   navigate(`${location?.pathname}${uzeReplace(limit, defaultCurrent)}`)
  // }

  const handleAddCart = (product) => {
    dispatch(addToCart(product))
  }

  const onSelect = (id) => {
    navigate(`/products/${id}`)
  }
  const handleAddFavourite = (favourite) => {
    dispatch(addToFavourite(favourite))
  }
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='product-container'>
      <div className='content-title'>
        {data ? data[1]?.category?.name : 'No title'}
      </div>
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
            <span>{data ? data[1]?.category?.name : 'Home'}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className='products-content'>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((items) => {
            return (
              <div className='products-content__items'>
                <div className='bg-heart'></div>
                <i
                  class='bx bx-heart pro-heart '
                  onClick={() => handleAddFavourite(items)}
                ></i>
                {/* eslint-disable-next-line */}
                <img
                  src={items.images ? items?.images[0] : 'no image'}
                  alt='product.jpg'
                  className='product-image'
                />
                <div className='products-content__item'>
                  <p
                    className='product-title'
                    onClick={() => onSelect(items?.id)}
                  >
                    {items?.title}
                  </p>
                  <p className='product-price'>${items?.price}</p>
                </div>
                <button
                  className='btn-cart__add'
                  onClick={() => handleAddCart(items)}
                >
                  <i class='bx bx-cart-add'></i>
                </button>
              </div>
            )
          })
        )}
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}

export default Header
