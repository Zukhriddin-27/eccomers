import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import RootContext from './context'

import './index.css'
import Root from './root'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RootContext>
            <Root />
          </RootContext>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
