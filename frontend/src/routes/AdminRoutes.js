import React, {useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AdminPage from '../pages/AdminPages/AdminPage';
import ProtectedRoute from '../components/helpers/ProtectedRoute';
import Dashboard from '../pages/AdminPages/Dashboard';
import Products from '../pages/AdminPages/Products';
import Suppliers from '../pages/AdminPages/Suppliers';
import Employees from '../pages/AdminPages/Employees';
import Profile from '../pages/AdminPages/Profile'
import Notifications from '../pages/AdminPages/Notifications';

const AdminRoutes = () => {
    const {userRole}=useContext(AuthContext);
    return (
        <Routes>

            <Route path='/admin' element={<Navigate to="/admin/dashboard" />} />

            {/* Admin Page */}
            <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminPage><Dashboard /></AdminPage>} allowedRoles={['Admin']} userRole={userRole} />} />

            { /* Employee Management */}
            <Route path="/admin/employees" element={<ProtectedRoute element={<AdminPage><Employees /></AdminPage>} allowedRoles={['Admin']} userRole={userRole} />} />
          
            { /* Supplier  Management */}
            <Route path="/admin/suppliers" element={<ProtectedRoute element={<AdminPage><Suppliers /></AdminPage>} allowedRoles={['Admin']} userRole={userRole} />} />
          

            {/* Inventory Management */}
            <Route path="/admin/products" element={<ProtectedRoute element={<AdminPage><Products /></AdminPage>} allowedRoles={['Admin']} userRole={userRole} />} />

            {/* suppliers Management */}
            <Route path="/admin/suppliers" element={<ProtectedRoute element={<AdminPage><Suppliers /></AdminPage>} allowedRoles={['Admin']} userRole={userRole} />} />

            {/* profile */}
            <Route path="/admin/profile" element={<ProtectedRoute element={<AdminPage><Profile /></AdminPage>} allowedRoles={['Admin']} userRole={userRole} />} />

            {/* Notifications*/}
            <Route path="/admin/notifications" element={<ProtectedRoute element={<AdminPage><Notifications /></AdminPage>} allowedRoles={['Admin']} userRole={userRole} />} />

           

        </Routes>
    );
};

export default AdminRoutes;



