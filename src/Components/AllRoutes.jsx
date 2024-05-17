import LogIn from './LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import Homepage from './Homepage'
import Cart from './Cart'
import Checkout from './Checkout'
import SinglePage from './SinglePage'
import ProductPage from './ProductPage'

import Search from './Search'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/product/:id' element={<SinglePage />}></Route>
      <Route path='/products' element={<ProductPage />}></Route>
      <Route path='/search' element={<Search />}></Route>
    </Routes>
  )
}

export default AllRoutes
