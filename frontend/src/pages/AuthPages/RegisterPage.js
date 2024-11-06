import React ,{useState} from 'react';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  
  const [role, setRole] = useState('Employee');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      // Destructure fields from formData
      const { name, email, password, address, phone } = formData;

      // Basic user data common to all roles
      let userData = { name, email, password, role };
      console.log(address,phone)
  
      // Add address and phone if role is Supplier
      if (role === 'Supplier') {
        userData = { ...userData, address, phone };
      }
      console.log(userData)
      await registerUser(userData);
      alert('Registration successful!');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name='name'
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name='email'
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Role */}
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                name='role'
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={role}
                onChange={handleRoleChange}
              >
                <option value="Employee">Employee</option>
                <option value="Admin">Admin</option>
                <option value="Supplier">Supplier</option>
              </select>
          </div>

            {role === "Supplier" && (
            <>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name='address'
                  id="address"
                  placeholder="Enter Your Address"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  name='phone'
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
         
          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name='password'
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>







          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;





 




