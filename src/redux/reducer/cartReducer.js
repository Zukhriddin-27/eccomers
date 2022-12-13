import {
  ADD_TO_CART,
  DECREMENT_FROM_CART,
  DELETE_FROM_CART,
  INCREMENT_TO_CART,
} from '../constants/cartConstant'

let INITIAL_STATE = {
  cart: [],
}

if (localStorage.getItem('cart')) {
  INITIAL_STATE.cart = JSON.parse(localStorage.getItem('cart'))
} else {
  INITIAL_STATE.cart = []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...action.payload],
      }
    case DELETE_FROM_CART:
      return {
        cart: [...action.payload],
      }

    case DECREMENT_FROM_CART:
      return {
        cart: [...action.paylaod],
      }
    case INCREMENT_TO_CART:
      return {
        cart: [...action.payload],
      }

    default:
      return state
  }
}

export default cartReducer
