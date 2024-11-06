import { useNavigate } from 'react-router-dom';
import {AuthContext} from  '../../context/AuthContext'
import { useContext } from 'react';

const Navbar = () => {
    const { user,logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/login'); // Redirect to the login page
    };

    return (
        <nav className="bg-gray-100 p-4 px-8 shadow w-full">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-md font-semibold lg:text-xl">Welcome, {user.name}</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;





 

