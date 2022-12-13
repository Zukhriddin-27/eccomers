import {
  ADD_FAVOURITE_CART,
  DELETE_FAVOURITE_CART,
} from '../constants/favouriteConstants'

export const addToFavourite = (product) => async (dispatch) => {
  const favourite = localStorage.getItem('favourite')
    ? JSON.parse(localStorage.getItem('favourite'))
    : []

  const dublicates = favourite.filter((favoItem) => favoItem.id === product.id)

  if (dublicates.length === 0) {
    const productToAdd = {
      ...product,
      favourite: 1,
    }
    favourite.push(productToAdd)

    localStorage.setItem('favourite', JSON.stringify(favourite))

    dispatch({
      type: ADD_FAVOURITE_CART,
      payload: favourite,
    })
  }
}
export const deleteFromFavourite = (product) => async (dispatch) => {
  const favourite = localStorage.getItem('favourite')
    ? JSON.parse(localStorage.getItem('favourite'))
    : []

  const updateFavourite = favourite.filter(
    (favoItem) => favoItem.id !== product.id
  )

  localStorage.setItem('favourite', JSON.stringify(updateFavourite))

  dispatch({
    type: DELETE_FAVOURITE_CART,
    payload: updateFavourite,
  })
}
