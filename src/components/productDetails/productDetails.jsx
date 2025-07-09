import React, { useEffect } from "react";
import useProductContext from "../../context/productContext.jsx";
import Loader from "../layout/loader.jsx";
import { useParams } from "react-router-dom";
import useAuth from "../../context/authContext.jsx";
import useCart from "../../context/cartContext.jsx";

const ProductDetails = () => {

  const { loading, productDetails, setLoading, setProductDetails } = useProductContext();
  const { id } = useParams();
  console.log("Product ID from URL:", id);

  const { addToCart, cartItems } = useCart();
  const isProductInCart = cartItems.some((item) => item.id === productDetails.id)

  const { user } = useAuth();
  console.log("User in ProductDetails component:", user);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const product = await response.json();
      if (product) {
        console.log("Product details fetched successfully:", product);
        setProductDetails(product)
        setLoading(false)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id])

  if (loading)
    return (
      <Loader />
    )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center mt-4">
          Hello <span className="text-blue-600">{user.displayName}</span>
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={productDetails?.thumbnail}
                  alt={productDetails?.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {
                  productDetails.images?.map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-md overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors cursor-pointer">
                      <img
                        src={image}
                        alt={productDetails?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{productDetails?.title}</h1>
                <p className="text-gray-600 leading-relaxed">{productDetails?.description}</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-green-600">${productDetails?.price}</p>
                    <p className="text-sm text-gray-500">Best Price</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-red-600">{productDetails?.discountPercentage}% OFF</p>
                    <p className="text-sm text-gray-500">Limited Time</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Brand:</span>
                  <span className="text-gray-900 font-semibold">{productDetails?.brand}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Category:</span>
                  <span className="text-gray-900 font-semibold">{productDetails?.category}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-gray-900 font-semibold">{productDetails?.rating}</span>
                    <span className="text-gray-500 ml-1">/5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Availability:</span>
                  <div className="flex items-center">
                    {
                      productDetails.availabilityStatus === "In Stock" ? (
                        <span className="text-green-600 font-semibold">{productDetails?.availabilityStatus}</span>
                      ) : (
                        <span className="text-red-600 font-semibold">{productDetails?.availabilityStatus}</span>
                      )
                    }


                  </div>
                </div>
              </div>

              <div className="pt-6">
                {
                  isProductInCart ? (
                    <button className="w-full bg-gray-400 text-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 shadow-lg cursor-not-allowed">Added To Cart</button>
                  ) :
                    (
                      <button
                        onClick={() => addToCart(productDetails)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-2 transition-colors duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                        Add to Cart
                      </button>
                    )
                }
              </div>
            </div>
          </div>
        </div>


        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 px-8 py-4">
            <h2 className="text-2xl font-bold text-white">Product Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Dimensions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 font-medium">Depth:</span>
                    <span className="text-gray-900 font-semibold">{productDetails.dimensions?.depth} cm</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 font-medium">Height:</span>
                    <span className="text-gray-900 font-semibold">{productDetails.dimensions?.height} cm</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 font-medium">Width:</span>
                    <span className="text-gray-900 font-semibold">{productDetails.dimensions?.width} cm</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-blue-600 font-medium">Weight:</span>
                    <span className="text-blue-900 font-semibold">{productDetails.weight} kg</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Data</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 font-medium">Barcode:</span>
                    <span className="text-gray-900 font-mono text-sm">{productDetails.meta?.barcode}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 font-medium">QR Code:</span>
                    <img src={productDetails.meta?.qrCode} alt="QR Code" className="w-16 h-16 object-cover rounded-md" />
                  </div>
                  <div className="flex items-center justify-between py-2 px-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-green-600 font-medium">Stock Quantity:</span>
                    <span className="text-green-900 font-semibold">{productDetails?.stock} units</span>
                  </div>
                  <div className="space-y-2">
                    <div className="py-2 px-4 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-blue-600 font-medium block mb-1">Delivery:</span>
                      <span className="text-blue-900 text-sm">{productDetails?.shippingInformation}</span>
                    </div>
                    <div className="py-2 px-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-yellow-600 font-medium block mb-1">Warranty:</span>
                      <span className="text-yellow-900 text-sm">{productDetails?.warrantyInformation}</span>
                    </div>
                    <div className="py-2 px-4 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-red-600 font-medium block mb-1">Return Policy:</span>
                      <span className="text-red-900 text-sm">{productDetails?.returnPolicy}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 px-8 py-4">
            <h2 className="text-2xl font-bold text-white">Product Reviews</h2>
          </div>

          <div className="p-8">
            <div className="space-y-6">
              {
                productDetails.reviews?.map((review, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-800 mr-3">{review?.reviewerName}</h3>
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">⭐</span>
                            <span className="text-gray-900 font-semibold">{review?.rating}</span>
                            <span className="text-gray-500 ml-1">/5</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">{review?.reviewerEmail}</p>
                        <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-gray-700 leading-relaxed italic">"{review?.comment}"</p>
                    </div>

                  </div>
                ))
              }
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails