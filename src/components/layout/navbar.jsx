import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../context/authContext';
import { signOut } from 'firebase/auth';
import auth from '../../firebase';

const Navbar = () => {

  const navigate = useNavigate();
  const handleLoginNavigate = () => {
    navigate('/login')
  }
  const handleCartNavigate = () => {
    navigate('/cart')
  }

  const handleLogoutNavigate = async () => {
    try {
      await signOut(auth);
      navigate('/');
      console.log("User logged out successfully");
    }
    catch (error) {
      console.log("Error during logout:", error);
      alert(error.message);
    }
  }

  const { user } = useAuth();


  return (
    <nav className="bg-white flex flex-row justify-between items-center shadow-lg p-4">
      <div className="">
        <h1 className="text-xl font-bold text-blue-700 ml-6">ShopOnline</h1>
      </div>
      <div className="flex flex-row gap-2 ml-6">
        <a href='/products/men' className='px-4 text-gray-600 font-medium '>Men</a>
        <a href='/products/women' className='px-4 text-gray-600 font-medium  '>Women</a>
        <a href='/products/smartphones' className='px-4  text-gray-600 font-medium  '>SmartPhones</a>
        <a href='/products/laptops' className='px-4 text-gray-600 font-medium  '>Laptops</a>
        <a href='/products/kitchen' className='px-4 text-gray-600 font-medium  '>Kitchen</a>
        <a href='/products' className='px-4 text-gray-600 font-medium  '>Explore</a>
      </div>
      <div className="flex flex-row gap-2">
        {
          user ? (
            <div className='flex flex-row items-center gap-2'>
              <p className="font-semibold text-blue-800 text-xl px-4">{user.displayName}</p>
              <button className='bg-blue-600 text-white hover:bg-blue-700 px-2 py-2 rounded-md transition-colors duration-200 w-32 font-medium'
                onClick={handleLogoutNavigate}
              >Logout</button>
            </div>
          ) : (
            <button className='bg-blue-600 text-white hover:bg-blue-700 px-2 py-2 rounded-md transition-colors duration-200 w-32 font-medium'
              onClick={handleLoginNavigate}
            >Login</button>
          )
        }

        <button className='bg-gray-300 hover:bg-gray-200 text-black rounded-md px-2 py-2 transition-colors duration-200 w-32 font-medium'
          onClick={handleCartNavigate}
        >My Cart</button>
      </div>
    </nav>
  )
}

export default Navbar;