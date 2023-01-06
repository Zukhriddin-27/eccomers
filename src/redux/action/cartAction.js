import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT_TO_CART,
  DECREMENT_FROM_CART,
  CLEAR_FROM_CART,
} from '../constants/cartConstant'

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
  const cartCount =
    localStorage.getItem('cart') !== null
      ? JSON.parse(localStorage.getItem('cart'))
      : []
  const incr = cartCount.find((cartItem) => cartItem.id === product.id)

  if (incr) {
    incr.count = incr.count += 1
  } else {
    return [
      ...cartCount,
      {
        count: 1,
      },
    ]
  }

  localStorage.setItem('cart', JSON.stringify(cartCount.map((item) => item)))
  dispatch({
    type: INCREMENT_TO_CART,
    payload: cartCount,
  })
}

export const decrCart = (product) => async (dispatch) => {
  const cartDecrCount =
    localStorage.getItem('cart') !== null
      ? JSON.parse(localStorage.getItem('cart'))
      : []

  const dcr = cartDecrCount.find((cartItem) => cartItem.id === product.id)
  if (dcr) {
    dcr.count = dcr.count -= 1
    if (dcr.count <= 0) {
      dcr.count = 1
    }
  } else {
    return [
      ...cartDecrCount,
      {
        count: 1,
      },
    ]
  }
  localStorage.setItem('cart', JSON.stringify(cartDecrCount))
  dispatch({
    type: DECREMENT_FROM_CART,
    payload: cartDecrCount,
  })
}
