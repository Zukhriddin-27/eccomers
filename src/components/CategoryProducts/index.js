import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Pagination } from 'antd'
import Loading from '../Loading'
import { useQuery } from 'react-query'
import CartProduct from '../CartProduct'

const CategoryProduct = () => {
  const { id } = useParams()
  console.log(id)
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=0&offset=20
    `).then((res) => res.json())
  )

  // const handleChange = ({ target: { limit, defaultCurrent } }) => {
  //   navigate(`${location?.pathname}${uzeReplace(limit, defaultCurrent)}`)
  // }

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='product-container'>
      <div className='content-title'>{data?.category?.name}</div>
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
            <span></span>
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
                <CartProduct data={items} />
              </div>
            )
          })
        )}
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}

export default CategoryProduct
