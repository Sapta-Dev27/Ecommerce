import React from 'react'
import useAuth from '../../context/authContext'
import { Navigate } from 'react-router-dom'
import Loader from '../layout/loader'

const Protected = ({ children }) => {

  const { user, loading } = useAuth();
  
  if (loading) {
    return <Loader />;
  }
  
  if (!user) {
    return (
      <Navigate to="/" />
    )
  }
  else {
    return children;
  }

}
export default Protected