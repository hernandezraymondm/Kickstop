import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // if (!user.isVerified) {
  //   return <Navigate to="/verify-email" replace />;
  // }

  return children;
};

export default ProtectedRoute;
