import React from 'react'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import List from '../components/productsList/kitchen/list'

function kitchen() {
  return (
    <div>
      <Navbar />
      <List />
      <Footer />
    </div>
  )
}

export default kitchen