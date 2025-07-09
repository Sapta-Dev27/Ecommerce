import React from "react";
import useCart from "../context/cartContext"
import Navbar from "../components/layout/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/footer";
import { loadStripe } from "@stripe/stripe-js";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const handleCheckout = async () => {

    const stripe = await stripePromise;
    try {
      const response = await fetch("http://localhost:8000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cartItems })
      })

      const data = await response.json();
      console.log("Stripe session ID:", data.id); // Optional debugging

      if (!data.id) {
        throw new Error("Session ID not returned");
      }
      await stripe.redirectToCheckout({
        sessionId: data.id
      })
    }
    catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred while processing your payment. Please try again later.");
    }
  }


  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <>

        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Continue Shopping
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Shopping Cart</h1>
            <p className="text-gray-600">Review your items and proceed to checkout</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Cart Items ({cartItems.length})</h2>
                </div>

                <div className="p-6 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 bg-gray-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-sm">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">Brand: {item.brand}</p>
                          <p className="text-lg font-bold text-green-600">${item.price}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="w-12 text-center border border-gray-300 rounded-md py-1 text-sm"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            +
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right min-w-[80px]">
                          <p className="text-lg font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                          <p className="text-sm text-gray-500">Total</p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 font-semibold px-3 py-1 rounded-md hover:bg-red-50 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-8">
                <div className="bg-blue-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Order Summary</h2>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-gray-800">${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-semibold text-gray-800">${(getTotal() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t-2 border-gray-300">
                    <span className="text-xl font-bold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-green-600">${(getTotal() * 1.08).toFixed(2)}</span>
                  </div>

                  <div className="space-y-3 mt-6">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                      Proceed to Checkout
                    </button>
                    <button className="w-full bg-gray-600 hover:bg-gray-300 text-gray-200 font-semibold py-3 px-6 rounded-lg transition-colors duration-200  ">
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
