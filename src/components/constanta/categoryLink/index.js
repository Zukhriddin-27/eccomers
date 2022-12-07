import React, { useState } from 'react'
import { Radio, Space, Tabs } from 'antd'
import './style.css'
const catalog = [
  {
    label: 'Televizor, vedio, audio',
    key: '1',
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
    label: 'Televizor, vedio, audio',
    key: '2',
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
    label: 'Notebook, printer, PC kompyuter ',
    key: '3',
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
    label: 'Smatfon, Telefon',
    key: '4',
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

// const [tabPosition, setTabPosition] = useState('left');
// const changeTabPosition = (e) => {
//   setTabPosition(e.target.value);
// };

const CatalogLink = (
  <div className='catalog-container'>
    <>
      <Tabs tabPosition={'left'} items={catalog} />
    </>
  </div>
)

export default CatalogLink
