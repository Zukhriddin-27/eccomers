import React from 'react'
import ProductProvider from './products'

const RootContext = ({ children }) => {
  return (
    <>
      <ProductProvider>{children}</ProductProvider>
    </>
  )
}

export default RootContext
