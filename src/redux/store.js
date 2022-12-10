import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import favouriteReducers from './reducer/favouriteReducers'
import cartReducers from './reducer/cartReducer'
import handleCart from './reducer/handleCart'
const reducer = combineReducers({
  favourite: favouriteReducers,
  cart: cartReducers,
  // handleCart: handleCart,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
