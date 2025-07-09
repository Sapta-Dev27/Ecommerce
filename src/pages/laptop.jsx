import React from 'react'
import Navbar from '../components/layout/navbar'
import List from '../components/productsList/laptops/list'
import Footer from '../components/layout/footer'

function laptop() {
  return (
    <div>
      <Navbar />
      <List />
      <Footer />
    </div>
  )
}

export default laptop