import React from 'react'
import ProductDetails from '../components/productDetails/productDetails'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'

function productDetails() {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <Footer/>
    </div>
  )
}

export default productDetails