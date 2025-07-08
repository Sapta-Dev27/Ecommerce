import React from "react";
import { useState } from "react";
import auth from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { googleAuth } from "../../firebase";
import { updateProfile } from "firebase/auth";


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleuserNameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleRegister = async () => {
    try {
      if (!email || !password) {
        alert("PLease fill in all fields")
      }

      if (!username) {
        alert("Please enter a username");
        return;
      }


      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log(newUser);
      if (newUser) {
        navigate("/products");
        await updateProfile(newUser.user, {
          displayName: username
        })
      }
      else {
        console.log("Invalid credentials");
        alert("Invalid credentials, please try again");
      }
    }
    catch (error) {
      alert(error.message);
    }
  }

  const handleRegisterWithGoogle = async () => {
    try {
      const googleCredentials = await signInWithPopup(auth, googleAuth);
      if (googleCredentials) {
        navigate("/products");
        console.log(googleCredentials);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center bg-gray-50 rounded-lg shawdow-md p-10">
        <h1 className="text-4xl font-bold p-4 text-blue-600">Hello !</h1>
        <p className="text-lg font-semibold text-gray-500 p-1 m-2">Please give your credentials to register</p>

        <input
          type="name"
          name="username"
          placeholder="Enter your username"
          onChange={handleuserNameChange}
          value={username}
          className="border border-gray-300 rounded w-80 px-4 py-2 mb-2 text-gray-500 m-2">
        </input>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleEmailChange}
          value={email}
          className="border border-gray-300 rounded w-80 px-4 py-2 mb-2 text-gray-500 m-2">
        </input>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          value={password}
          className=" border border-gray-300 rounded px-4 py-2 w-80 mb-2 text-gray-500 mt-2"
        >
        </input>
        <button
          onClick={handleRegister}
          className="bg-blue-600 w-80 px-4 py-2 rounded text-white text-lg font-medium m-2">Register Your Account</button>
        <button
          onClick={handleRegisterWithGoogle}
          className="bg-blue-600 w-80 px-4 py-2 rounded text-white font-medium m-2 text-lg ">Continue With Google</button>

        <p className="text-gray-500 text-md font-semibold m-2">Already have an account?<a href="/login"> <span className="text-blue-600 cursor-pointer">Login</span></a></p>
      </div>
    </div>
  )
}

export default Register;