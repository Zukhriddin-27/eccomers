import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])
  console.log(state)
  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
