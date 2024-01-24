import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function Protected({children}) {
    const {user}=useAuth();
  return (
    <div>{user? children:<Navigate to="/login"/>}</div>
  )
}

export default Protected