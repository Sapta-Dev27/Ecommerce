import React, { useEffect } from "react";
import useProductContext from "../../context/productContext.jsx";
import Loader from "../layout/loader.jsx";
import { useParams } from "react-router-dom";
import useAuth from "../../context/authContext.jsx";

const ProductDetails = () => {

  const { loading, productDetails, setLoading, setProductDetails } = useProductContext();
  const { id } = useParams();
  console.log("Product ID from URL:", id);

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
    <div>
      <h1>Hello {user.displayName}</h1>
    </div>
  )
}

export default ProductDetails