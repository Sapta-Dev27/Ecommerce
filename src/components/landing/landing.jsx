import React from "react";
import Navbar from "../layout/navbar"
import Hero from './hero'
import Footer from "../layout/footer";


const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Landing;