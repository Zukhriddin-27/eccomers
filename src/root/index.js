import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import Navbar from '../components/Navbar'
const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {navbar.map(({ path, element, id }) => (
          <Route element={element} path={path} key={id} />
        ))}
      </Route>
      <Route path='*' element={<h1>404 Page Not found</h1>} />
      <Route path='/' element={<Navigate to={'/home'} />} />
    </Routes>
  )
}

export default Root
