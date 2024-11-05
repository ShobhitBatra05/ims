import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import SupplierPage from './pages/SupplierPage';
import Unauthorized from './pages/Unauthorized';
import { AuthContext } from './context/AuthContext';




function App() {

  const { userRole } = useContext(AuthContext); // Get the user's role from context
  console.log(userRole)

  
  
  return (
    
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Navigate to="/register" />} />


        {/* Public Routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/unauthorized' element={<Unauthorized />} />


        {/* Use ProtectedRoute to protect routes */}
        <Route
                path="/admin"
                element={
                    <ProtectedRoute
                        element={<AdminPage />}
                        allowedRoles={['Admin']}
                        userRole={userRole}
                    />
                }
            />
            <Route
                path="/employee"
                element={
                    <ProtectedRoute
                        element={<EmployeePage />}
                        allowedRoles={['Employee']}
                        userRole={userRole}
                    />
                }
            />
            <Route
                path="/supplier"
                element={
                    <ProtectedRoute
                        element={<SupplierPage />}
                        allowedRoles={['Supplier']}
                        userRole={userRole}
                    />
                }
            />
       

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
