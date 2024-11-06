import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRoles, userRole }) => {
    // Check if the userRole is allowed
    if (!allowedRoles.includes(userRole)) {
        // Redirect to unauthorized page if the role is not allowed
        return <Navigate to="/unauthorized" />;
    }

    // If the role is allowed, render the element
    return element;
};

export default ProtectedRoute;

