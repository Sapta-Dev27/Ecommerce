import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
     
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin animation-delay-150"></div>
        </div>
        
       <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading...</h2>
          <p className="text-gray-500 text-sm">Please wait while we load your content</p>
        </div>
        
     
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse animation-delay-100"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse animation-delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
