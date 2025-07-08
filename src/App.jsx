import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import ProductList from './pages/productList'
import ProductDetails from './pages/productDetails'
import Cart from './pages/cart'
import Login from './pages/login'
import Register from './pages/register'
import Protected from './components/protected/protected'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/products'
        element={<Protected>
          <ProductList />
        </Protected>
        } />
      <Route path='/products/:id'
        element={<Protected>
          <ProductDetails />
        </Protected>} />
      <Route path='/cart'
        element={<Protected>
          <Cart />
        </Protected>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App