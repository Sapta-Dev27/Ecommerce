import React, { useEffect } from "react";
import { createContext } from "react";
import { useContext, useState } from "react";
import { getAuth } from "firebase/auth";
import auth from "../firebase"
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;