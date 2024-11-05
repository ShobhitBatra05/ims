import React , {useContext, useState} from 'react';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); 

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
  
    try {
      const userData = { email, password };
      const response = await loginUser(userData); // Wait for login to complete
      console.log('Response:', response); // Debug response
      if(response){
        const { user } = response;
        console.log("user:",user)
        // Set the user in the context and navigate on the base of role
        login(user);

        // Navigate based on user role
        if (user.role === 'Admin') {
            navigate('/admin'); // Redirect to Admin Dashboard
        } else if (user.role === 'Employee') {
            navigate('/employee'); // Redirect to Employee Dashboard
        } else if (user.role === 'Supplier') {
            navigate('/supplier'); // Redirect to Supplier Dashboard
        } else {
            navigate('/'); // Fallback, navigate to home or a default route
        }
        }
        else {
          // Handle login error (optional)
          console.error('Login failed');
      }
   } catch (err) {
      const errorMessage =  err.response?.data?.error || 'Login failed';
      setError(errorMessage); // Set error message to state
  }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          
          
        </form>

        {/* Redirect to Register */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
