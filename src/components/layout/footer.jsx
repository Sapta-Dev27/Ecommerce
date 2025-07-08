import {
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-center text-sm text-gray-500 py-8 px-4 mt-20">
      <div className="flex flex-col items-center space-y-6">

        <div className="flex flex-wrap justify-center gap-6">
          <a href="/products" className="hover:text-blue-600 font-medium">Browse Products</a>
          <a href="/cart" className="hover:text-blue-600 font-medium">Check Cart</a>
          <a href="/login" className="hover:text-blue-600 font-medium">Login</a>
          <a href="/register" className="hover:text-blue-600 font-medium">Create Account</a>
        </div>


        <div className="flex space-x-4 text-gray-500">
          <a href="#" className="hover:text-blue-600 font-medium"><Twitter size={18} /></a>
          <a href="#" className="hover:text-blue-600 font-medium"><Instagram size={18} /></a>
          <a href="#" className="hover:text-blue-600 font-medium"><Facebook size={18} /></a>
        </div>


        <p className="text-xs text-gray-600 font-medium">
          ©2024 ShopOnline. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
