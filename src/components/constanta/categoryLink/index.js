import React, { useState } from 'react'
import { Dropdown, Tabs } from 'antd'
import './style.css'
import { UnorderedListOutlined, CloseOutlined } from '@ant-design/icons'
import { useQuery } from 'react-query'

const catalog = [
  {
    label: 'Electronics',
    key: '1',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <a href='/category/electronics' className='catalog-title'>
            Electronics
          </a>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: 'Jewelery',
    key: '2',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <a href='/category/jewelery' className='catalog-title'>
            Jewelery
          </a>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: `Men's clothing `,
    key: '3',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <a href={`/category/men's clothing`} className='catalog-title'>
            Men's clothing
          </a>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: `Women's clothing`,
    key: '4',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <a href={`/category/women's clothing`} className='catalog-title'>
            Women's clothing
          </a>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: 'Maishiy texnika',
    key: '5',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <p className='catalog-title'>Televizor</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: 'Uy jihozlari',
    key: '6',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <p className='catalog-title'>Televizor</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: 'Kitoblar',
    key: '7',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <p className='catalog-title'>Televizor</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: 'Kiyimlar',
    key: '8',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <p className='catalog-title'>Televizor</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
  {
    label: 'Oshxona jihozlari',
    key: '9',
    children: (
      <div className='catalog'>
        <div className='catalog-items'>
          <p className='catalog-title'>Televizor</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Audio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio pleyer</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Vedio texnika</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
        <div className='catalog-items'>
          <p className='catalog-title'>Foto, Vedio</p>
          <p>Sony</p>
          <p>Samsung</p>
          <p>Apple</p>
        </div>
      </div>
    ),
  },
]

const Catalog = () => {
  const [isCatalog, setIsCatalog] = useState(false)

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://fakestoreapi.com/products/categories').then((res) =>
      res.json()
    )
  )
  const CatalogLink = (
    <div className='catalog-container'>
      <>
        <Tabs tabPosition={'left'} items={catalog} />
      </>
    </div>
  )

  return (
    <Dropdown
      overlay={CatalogLink}
      placement='bottomRight'
      icon
      arrow={{ pointAtCenter: false }}
      trigger='click'
    >
      <div onClick={() => setIsCatalog(!isCatalog)} className='brand-name'>
        {!isCatalog ? <UnorderedListOutlined /> : <CloseOutlined />}
        <h4>Katalog</h4>
      </div>
    </Dropdown>
  )
}

export default Catalog
