import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Cancel Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-6 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Order Cancelled</h1>
            <p className="text-red-100 mt-2">Your payment has been cancelled</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Cancel