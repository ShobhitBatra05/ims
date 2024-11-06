import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './components/helpers/ProtectedRoute';
import RegisterPage from './pages/AuthPages/RegisterPage'
import LoginPage from './pages/AuthPages/LoginPage'
import EmployeePage from './pages/EmployeePages/EmployeePage';
import SupplierPage from './pages/SupplierPages/SupplierPage';
import Unauthorized from './pages/AuthPages/Unauthorized';
import { AuthContext } from './context/AuthContext';
import AdminRoutes from './routes/AdminRoutes';




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

        {/* Admin routes */}
        <Route path="/*" element={<AdminRoutes />} />


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
