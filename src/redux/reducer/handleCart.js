const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload

  switch (action.type) {
    case 'ADD_PRODUCT':
      const add = state.find((x) => x.id === product.id)
      if (add) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        const product = action.payload

        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }
    case 'DELL_PRODUCT':
      return state.filter((x) => x.id !== product.id)

    case 'ICR_PRODUCT':
      const icr = state.find((x) => x.id === product.id)
      if (icr) {
        return state.map((x) =>
          x.id === product.id
            ? {
                ...x,
                qty: x.qty + 1,
              }
            : x
        )
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }
    case 'DECR_PRODUCT':
      const decr = state.find((x) => x.id === product.id)
      if (decr.qty === 1) {
        return state.filter((x) => x.id !== product.id)
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        )
      }
    default:
      return state
  }
}

export default handleCart
