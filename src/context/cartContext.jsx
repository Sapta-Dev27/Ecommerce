import { createContext, useState, useEffect, useContext } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);


  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);

    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };



  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);



  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
const useCart = () => useContext(CartContext);
export default useCart;
