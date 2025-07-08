import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeroImage from '../../../public/images/logo.jpg'

const Hero = () => {
  return (
    <section className="flex flex-row justify-between items-center mt-20">
      <div className="flex flex-col  items-start gap-4 p-4 w-[40%] m-12">
        <h1 className="text-4xl font-bold text-blue-700">Welcome  to ShopOnline</h1>
        <p className="text-lg text-gray-600 font-medium">Your one-stop destination for premium quality products at incredible prices!</p>
        <p className="text-lg text-gray-600 font-mediu">Discover amazing deals on the latest fashion, electronics, and home essentials. From trendy clothing to cutting-edge smartphones and kitchen appliances - we've got everything you need at unbeatable prices. Start shopping now and enjoy fast, free delivery on orders over $50!</p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 text-white w-48 text-xl px-4 py-2 font-semibold mt-2 ">Shop Now</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[60%]">
        <img src={HeroImage} alt="Hero"
          className="w-2xl h-[400px] rounded-lg transition-transform duration-200 hover:scale-105"
        ></img>
      </div>
    </section>
  )
}

export default Hero;