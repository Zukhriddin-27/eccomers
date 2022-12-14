import React from 'react'
import AuthPage from '../page/Auth'
import CartPage from '../page/Cart'
import CategoryProductsPage from '../page/CategoryProduct'
import Favourite from '../page/Favourite'
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
    hidden: true,
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
    hidden: true,
  },
  {
    id: 3,
    element: (
      <React.Suspense>
        <ProductItemPage />,
      </React.Suspense>
    ),
    title: 'Product',
    path: '/products/:id',
    private: true,
    hidden: true,
  },
  {
    id: 4,
    element: <CategoryProductsPage />,
    title: 'Products',
    path: '/category/:category',
    private: false,
    hidden: true,
  },
  {
    id: 5,
    element: <CartPage />,
    title: 'Cart',
    path: '/cart',
    private: false,
    hidden: true,
  },
  {
    id: 6,
    element: <AuthPage />,
    title: 'Create User',
    path: '/register',
    private: false,
    hidden: true,
  },
  {
    id: 7,
    element: <Favourite />,
    title: 'Favourite',
    path: '/favourite',
    private: false,
    hidden: true,
  },
]
