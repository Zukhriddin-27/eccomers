import {
  ADD_FAVOURITE_CART,
  DELETE_FAVOURITE_CART,
} from '../constants/favouriteConstants'

let INITIAL_STATE = {
  favourite: [],
}

if (localStorage.getItem('favourite')) {
  INITIAL_STATE.favourite = JSON.parse(localStorage.getItem('favourite'))
} else {
  INITIAL_STATE.favourite = []
}

const favouriteReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_CART:
      return {
        favourite: [...action.payload],
      }
    case DELETE_FAVOURITE_CART:
      return {
        favourite: [...action.payload],
      }
    default:
      return state
  }
}

export default favouriteReducers
