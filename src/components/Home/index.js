import React from 'react'
import Category from '../Category'
import Header from '../Header'
import CategoryItems from '../CategoryItems'
import './style.css'

const Home = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <Category />
      </div>
      <CategoryItems />
      <div className='container'></div>
    </>
  )
}

export default Home
