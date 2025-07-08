import React from "react";
import { useState } from "react";
import auth from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { googleAuth } from "../../firebase";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please fill in all fields");
        return;
      }
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      console.log(userLogin);
      if (userLogin) {
        navigate("/products")
      }
      else {
        console.log("Invalid credentials");
        alert("Invalid credentials, please try again");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleLoginWithGoogle = async () => {
    try {
      const googleLogin = await signInWithPopup(auth, googleAuth);
      console.log(googleLogin);
      console.log(googleLogin.user);
      if (googleLogin) {
        navigate("/products");
      }
      else {
        console.log("Invalid credentials");
        alert("Invalid credentials, please try again");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center bg-gray-50 rounded-lg shawdow-md p-10">
        <h1 className="text-4xl font-bold p-4 text-blue-600">Welcome Back !</h1>
        <p className="text-lg font-semibold text-gray-500 p-1 m-2">Please enter your credentials to login </p>


        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="border border-gray-300 rounded w-80 px-4 py-2 mb-2 text-gray-500 m-2">
        </input>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          className=" border border-gray-300 rounded px-4 py-2 w-80 mb-2 text-gray-500 mt-2"
        >
        </input>
        <button
          onClick={handleLogin}
          className="bg-blue-600 w-80 px-4 py-2 rounded text-white text-lg font-medium m-2">Login To Your Account</button>
        <button
          onClick={handleLoginWithGoogle}
          className="bg-blue-600 w-80 px-4 py-2 rounded text-white font-medium m-2 text-lg ">Login With Google</button>

        <p className="text-gray-500 text-md font-semibold m-2">Don't have an account? <a href="/register"><span className="text-blue-600 cursor-pointer">Register</span></a></p>
      </div>
    </div>
  )
}

export default Login;