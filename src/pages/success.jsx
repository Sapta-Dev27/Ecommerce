import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-blue-600 px-8 py-6 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Order Successful!</h1>
            <p className="text-green-100 mt-2">Thank you for your purchase</p>
          </div>

          {/* Content Section */}
          <div className="px-8 py-6 space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Your order has been placed successfully
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We've received your order and will begin processing it right away.
                You'll receive an email confirmation shortly with your order details.
              </p>
            </div>




          </div>
        </div>
      </div>
    </div>
  )
}

export default Success