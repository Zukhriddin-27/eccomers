export const addItem = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  }
}

export const dellItem = (product) => {
  return {
    type: 'DELL_PRODUCT',
    payload: product,
  }
}
export const icrProduct = (product) => {
  return {
    type: 'ICR_PRODUCT',
    payload: product,
  }
}
export const decrProduct = (product) => {
  return {
    type: 'DECR_PRODUCT',
    payload: product,
  }
}
