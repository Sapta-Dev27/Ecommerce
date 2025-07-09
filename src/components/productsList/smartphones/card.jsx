import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../../context/cartContext";


const Card = ({ product }) => {

  const navigate = useNavigate();
  const { addToCart , cartItems} = useCart();

  const handleNavigateToProductDetails = (id) => {
    navigate(`/products/${id}`)
  }

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  return (

    <div className="flex flex-col p-6 rounded-xl shadow-lg bg-white m-4 w-80 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <img src={product.thumbnail} alt={product.title}
        className="w-full h-auto object-cover rounded-lg mb-4 hover:scale-110 transition-transform duration-300"
      ></img>
      <h1 className="text-xl font-bold text-gray-800 mb-3 text-center line-clamp-2">{product.title}</h1>
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">Brand: <span className="font-normal text-gray-900">{product.brand}</span></p>
          <p className="text-lg font-bold text-green-600">${product.price}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 text-sm">
        <p className="text-yellow-600 font-medium">⭐ {product.ratings}</p>
        <p className="text-blue-600 font-medium">{product.availabilityStatus}</p>
      </div>
      <button
        onClick={ () => handleNavigateToProductDetails(product.id)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
        View Details
      </button>
      {
        isProductInCart ? (
          <button
            disabled
            className="w-full bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg mt-2 cursor-not-allowed">
            Already in Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg mt-2 transition-colors duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
            Add to Cart
          </button>
        )
      }
    </div>
  )
}

export default Card;