import React from 'react'
import Navbar from '../components/layout/navbar'
import List from '../components/productsList/list'
import Footer from '../components/layout/footer'

function productList() {
  return (
    <div>
      <Navbar />
      <List />
      <Footer />
    </div>
  )
}

export default productList