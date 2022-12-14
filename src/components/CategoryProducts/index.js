import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Pagination } from 'antd'
import Loading from '../Loading'
import CartProduct from '../CartProduct'

const CategoryProduct = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const search = useLocation()

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://fakestoreapi.com/products/${search.pathname}`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false)
        setData(res)
      })
  }, [search])

  // const handleChange = ({ target: { limit, defaultCurrent } }) => {
  //   navigate(`${location?.pathname}${uzeReplace(limit, defaultCurrent)}`)
  // }

  return (
    <div className='product-container'>
      <div className='content-title'>{data?.category}</div>
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
          <Breadcrumb.Item href='/'>
            <span></span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className='products-content'>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((items) => {
            return <CartProduct data={items} />
          })
        )}
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}

export default CategoryProduct
