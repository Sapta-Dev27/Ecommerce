import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import ProductList from './pages/productList'
import ProductDetails from './pages/productDetails'
import Cart from './pages/cart'
import Login from './pages/login'
import Register from './pages/register'
import Protected from './components/protected/protected'
import Men from './pages/men'
import Women from './pages/women'
import Laptop from './pages/laptop'
import Smartphones from './pages/smartphones'
import Kitchen from './pages/kitchen'

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
      <Route path='/products/men'
        element={<Protected>
          <Men />
        </Protected>} />
      <Route path='/products/women'
        element={<Protected>
          <Women />
        </Protected>} />
      <Route path='/products/smartphones'
        element={<Protected>
          <Smartphones />
        </Protected>} />
      <Route path='/products/laptops'
        element={<Protected>
          <Laptop />
        </Protected>} />
      <Route path='/products/kitchen'
        element={<Protected>
          <Kitchen />
        </Protected>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App