import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [kitchen, setKitchen] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);


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

  const fetchAllSmartphones = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/smartphones');
      const smartphonesList = await response.json();
      console.log("Smartphones fetched successfully:", smartphonesList.products);
      if (smartphonesList.products.length === 0) {
        console.log("No smartphones found in the response.");
        setLoading(false);
      }
      setSmartphones(smartphonesList.products)
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  const fetchAllLaptops = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/laptops');
      const laptopList = await response.json();
      if (laptopList) {
        console.log("Laptops fetched successfully:", laptopList.products);
        setLaptops(laptopList.products);
        setLoading(false);
      }
    }
    catch (error) {
      console.log("Error fetching laptops:", error);
    }
  }

  const fetchAllKitchen = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/kitchen-accessories');
      const kitchenList = await response.json();
      if (kitchenList) {
        console.log("Kitchen products fetched successfully:", kitchenList.products);
        setKitchen(kitchenList.products);
        setLoading(false);
      }
    }
    catch (error) {
      console.log("Error fetching kitchen products:", error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
    fetchAllSmartphones();
    fetchAllLaptops();
    fetchAllKitchen();
    fetchAllMen();
    fetchAllWomen();
  }, [])

  const fetchAllMen = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/mens-shirts')
      const menList = await response.json();
      if (menList) {
        console.log("Men's products fetched successfully:", menList.products);
        setMen(menList.products);
        setLoading(false);
      }

    }
    catch (error) {
      console.log("Error")
    }
  }

  const fetchAllWomen = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/womens-dresses')
      const womenList = await response.json();
      if (womenList) {
        console.log("Women's products fetched successfully:", womenList.products);
        setWomen(womenList.products)
        setLoading(false);
      }
    }
    catch (error) {
      console.log("Error")
    }
  }

  return (
    <ProductContext.Provider value={{ products, loading, productDetails, setProductDetails, setLoading, laptops, setLaptops, smartphones, setSmartphones, kitchen, setKitchen, men, setMen, women, setWomen }}>{children}</ProductContext.Provider>
  )
}



const useProductContext = () => {
  return useContext(ProductContext);
}

export default useProductContext;