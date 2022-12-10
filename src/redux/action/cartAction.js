import { ADD_TO_CART, DELETE_FROM_CART } from '../constants/cartConstant'

export const addToCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []

  const dublicates = cart.filter((cartItem) => cartItem.id === product.id)

  if (dublicates.length === 0) {
    const productToAdd = {
      ...product,
      count: 1,
    }
    cart.push(productToAdd)

    localStorage.setItem('cart', JSON.stringify(cart))

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    })
  }
}

export const deleteFromCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []

  const updatedCart = cart.filter((cartItem) => cartItem.id !== product.id)
  localStorage.setItem('cart', JSON.stringify(updatedCart))

  dispatch({
    type: DELETE_FROM_CART,
    payload: updatedCart,
  })
}

export const incerCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem('cart')
    ? JSON.stringify(localStorage.getItem('cart'))
    : []
  console.log(cart)
  if (cart) {
    return cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            count: item.count + 1,
          }
        : item
    )
  } else {
    return [
      ...cart,
      {
        ...product,
        count: 1,
      },
    ]
  }
}
