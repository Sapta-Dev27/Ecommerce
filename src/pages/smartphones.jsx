import React from 'react'
import Navbar from '../components/layout/navbar'
import List from '../components/productsList/smartphones/list'  
import Footer from '../components/layout/footer'

function smartphones() {
  return (
    <div>
      <Navbar />
      <List />
      <Footer />
    </div>
  )
}

export default smartphones