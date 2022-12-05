import React from 'react'
import CartPage from '../page/Cart'

const Home = React.lazy(() => import('../page/Home'))
const Products = React.lazy(() => import('../page/Products'))
const ProductItemPage = React.lazy(() => import('../page/ProductsItems'))

export const navbar = [
  {
    id: 1,
    element: (
      <React.Suspense>
        <Home />,
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: (
      <React.Suspense>
        <Products />,
      </React.Suspense>
    ),
    title: 'Products',
    path: '/products',
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: (
      <React.Suspense>
        <ProductItemPage />,
      </React.Suspense>
    ),
    title: 'Product',
    path: '/products/products/:id',
    private: false,
    hidden: false,
  },
  {
    id: 4,
    element: <Products />,
    title: 'Products',
    path: '/products',
    private: false,
    hidden: false,
  },
  {
    id: 4,
    element: <CartPage />,
    title: 'Cart',
    path: '/cart',
    private: false,
    hidden: true,
  },
]
