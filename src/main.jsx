import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext.jsx'
import { ProductContextProvider } from './context/productContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <ProductContextProvider>

          <App />

        </ProductContextProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>


)
