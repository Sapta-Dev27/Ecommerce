import React from 'react'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import List from '../components/productsList/men/list'

function men() {
  return (
    <div>
      <Navbar />
      <List />
      <Footer />
    </div>
  )
}

export default men