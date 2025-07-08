import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState(null);


  useEffect(() => {
    fetchAllProducts();
  }, [])

  const fetchAllProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const productsList = await response.json();
      console.log("Products fetched successfully:", productsList.products);
      setProducts(productsList.products);
    }
    catch (error) {
      console.log("Error fetching products:", error);
    }
  }

  return (
    <ProductContext.Provider value={{ products, loading, productDetails , setProductDetails , setLoading }}>{children}</ProductContext.Provider>
  )
}



const useProductContext = () => {
  return useContext(ProductContext);
}

export default useProductContext;