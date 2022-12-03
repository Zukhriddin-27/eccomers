import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import RootContext from './context'

import './index.css'
import Root from './root'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RootContext>
          <Root />
        </RootContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
